param(
  [string]$ReferenceUrl = "https://kirkfolio-9hbhvssa.manus.space/",
  [string]$OutputDir = "public/images"
)

Write-Host "Downloading images from $ReferenceUrl" -ForegroundColor Cyan

if (!(Test-Path $OutputDir)) {
  New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
}

$page = Invoke-WebRequest -Uri $ReferenceUrl -UseBasicParsing
$html = $page.Content

# Collect image sources
$imgSrcs = New-Object System.Collections.Generic.List[string]

$imgPatternDq = '<img[^>]+src="([^"]+)"'
$imgPatternSq = "<img[^>]+src='([^']+)" + "'"
$srcsetPatternDq = 'srcset="([^"]+)"'
$srcsetPatternSq = "srcset='([^']+)" + "'"

$m1 = Select-String -InputObject $html -Pattern $imgPatternDq -AllMatches
if ($m1) { $m1.Matches | ForEach-Object { $imgSrcs.Add($_.Groups[1].Value) } }
$m2 = Select-String -InputObject $html -Pattern $imgPatternSq -AllMatches
if ($m2) { $m2.Matches | ForEach-Object { $imgSrcs.Add($_.Groups[1].Value) } }

$srcsets = @()
$m3 = Select-String -InputObject $html -Pattern $srcsetPatternDq -AllMatches
if ($m3) { $srcsets += ($m3.Matches | ForEach-Object { $_.Groups[1].Value }) }
$m4 = Select-String -InputObject $html -Pattern $srcsetPatternSq -AllMatches
if ($m4) { $srcsets += ($m4.Matches | ForEach-Object { $_.Groups[1].Value }) }

foreach ($s in $srcsets) {
  $parts = $s -split ','
  foreach ($p in $parts) {
    $u = ($p.Trim() -split '\s+')[0]
    if ($u) { $imgSrcs.Add($u) }
  }
}

# Normalize to absolute URLs and filter by common image extensions
$urls = $imgSrcs |
  Where-Object { $_ -match '\.(png|jpe?g|gif|webp|svg)$' } |
  ForEach-Object {
    if ($_ -match '^https?://') { $_ } else { (New-Object System.Uri((New-Object System.Uri($ReferenceUrl)), $_)).AbsoluteUri }
  } |
  Sort-Object -Unique

Write-Host ("Found {0} image URL(s)" -f $urls.Count) -ForegroundColor Yellow

foreach ($u in $urls) {
  try {
    $uri = [System.Uri]$u
    $name = [System.IO.Path]::GetFileName($uri.AbsolutePath)
    if (-not $name) { continue }
    $dest = Join-Path $OutputDir $name
    Invoke-WebRequest -Uri $u -OutFile $dest -UseBasicParsing -ErrorAction Stop
    Write-Host "Saved $name" -ForegroundColor Green
  } catch {
    Write-Warning "Failed $u"
  }
}

Write-Host "Done." -ForegroundColor Cyan
