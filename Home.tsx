import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award, Briefcase, BookOpen, Mail, Linkedin } from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ventures = [
    {
      name: "QUEST EDTECH",
      logo: "/images/Questlogo.png",
      role: "CEO & Co-Founder",
      year: "2018 - Present",
      description: "AI-powered EdTech platform revolutionizing education in Southeast Asia",
      link: "https://quest.ac"
    },
    {
      name: "duPhonics",
      logo: "/images/pasted_file_i889hI_image.png",
      role: "Founder",
      year: "2020 - Present",
      description: "Next-gen telenanny platform with AI for immersive children's learning in the metaverse",
      link: "https://duphonics.com"
    },
    {
      name: "QuestLanguage",
      logo: "/images/pasted_file_PQQ5VN_image.png",
      role: "Co-Founder",
      year: "2013 - Present",
      description: "Innovative language learning platform serving thousands of students",
      link: "https://questlanguage.com"
    },
    {
      name: "Whatnot Startup Studio",
      logo: "/images/pasted_file_LicBBY_image.png",
      role: "Entrepreneur in Residence",
      year: "2024 - Present",
      description: "Building and scaling startups across multiple verticals",
      link: "https://whatnot.co"
    },
    {
      name: "SSL Logistics",
      logo: "/images/pasted_file_tQ9Ums_image.png",
      role: "Chief Strategy Officer",
      year: "2025 - Present",
      description: "Leading international expansion strategy for logistics innovation",
      link: "#"
    },
    {
      name: "CUBIKA",
      logo: "/images/pasted_file_JdvN30_image.png",
      role: "Chief Strategy Officer",
      year: "2025 - Present",
      description: "AI-driven analytics and intelligence provider for data-driven enterprises",
      link: "#"
    },
    {
      name: "Digital Bridge Thailand",
      logo: "/images/digital_bridge_logo.webp",
      role: "Advisor",
      year: "2024 - Present",
      description: "Empowering youth with digital skills and bridging the digital divide",
      link: "https://www.digitalbridgethailand.com"
    }
  ];

  const awards = [
    { year: "2025", title: "NextRise 2025 Seoul Strategist", description: "Inc and IR Award for expanding CUBIKA to Korea" },
    { year: "2025", title: "E27 Top 100 Program Mentor", description: "Mentoring Top 10 ASAPH and Top 100 Tasted Better" },
    { year: "2025", title: "Chief Strategy Officer Appointment", description: "DDLG, CUBIKA, and SSL Logistics overseas expansion" },
    { year: "2024", title: "NextRise 2024 Seoul Presentation", description: "On-stage presentation for duPhonics sponsored by DPIT Ministry of Commerce" },
    { year: "2024", title: "TECHBITE 5.0 Incubator", description: "Selected member of TECHBITE 5.0 program" },
    { year: "2022", title: "APTG 5G Accelerator", description: "Participant for duPhonics" },
    { year: "2020", title: "TOP100 APAC by e27", description: "Recognized as one of the top 100 startups in Asia-Pacific" },
    { year: "2020", title: "Y Combinator Startup School Graduate", description: "Completed for REACH venture" },
    { year: "2019", title: "Startup Thailand 2019 Showcase", description: "Featured startup at national showcase" },
    { year: "2019", title: "TMA Shark Tank Winner", description: "Winner of Thailand Competitiveness Conference 2019 Shark Tank Pitch" },
    { year: "2019", title: "Digital Ocean Hatch Member", description: "Selected for Digital Ocean startup program" },
    { year: "2019", title: "AWS Edstart Member", description: "Accepted into AWS EdTech accelerator" },
    { year: "2019", title: "Y Combinator Startup School Graduate", description: "First completion of YC Startup School" },
    { year: "2019", title: "TED Fund Program Member", description: "Selected for TED Fund initiative" },
    { year: "2018", title: "Asia Accelerator Venture Winner", description: "Winner of 1 Minute Pitch Competition" },
    { year: "2018", title: "Depa S2 Program Member", description: "Selected for government startup program" },
    { year: "2018", title: "Project Alpha Finalist", description: "Top finalists and only Thai startup by SeedPlus" },
    { year: "2018", title: "Startup Thailand Showcase", description: "Featured at national startup showcase" },
    { year: "2018", title: "Edtech Hackathon Finalist", description: "Top finalist in EdTech innovation competition" }
  ];

  const gallery = [
    { src: "/images/pasted_file_ywHa5p_image.png", title: "NextRise 2024 Seoul - On Stage Presentation", event: "NextRise 2024" },
    { src: "/images/pasted_file_lZXPIM_image.png", title: "NextRise 2025 Seoul - CUBIKA Booth", event: "NextRise 2025" },
    { src: "/images/pasted_file_LQoKUq_image.png", title: "Korean Market Landing Program 2024", event: "NextRise 2024" },
    { src: "/images/pasted_file_bo3fCS_image.png", title: "E27 Echelon Singapore - ASAPH Mentorship", event: "E27 Echelon" },
    { src: "/images/pasted_file_0bg0es_image.png", title: "E27 Echelon Singapore - Tasted Better Mentorship", event: "E27 Echelon" },
    { src: "/images/pasted_file_nbuA7V_image.png", title: "E27 Top 100 Programme", event: "E27 Echelon" },
    { src: "/images/pasted_file_8el0On_image.png", title: "NTU Singapore Speaking Engagement", event: "Speaking" },
    { src: "/images/pasted_file_tYxBur_image.png", title: "NTU Entrepreneurship Academy", event: "Speaking" },
    { src: "/images/pasted_file_pgPWrw_image.png", title: "NTU Workshop Session", event: "Speaking" },
    { src: "/images/pasted_file_9qkVIw_image.png", title: "BASCII Mentorship - Culture Re-creation 2025", event: "BASCII" },
    { src: "/images/pasted_file_wvhWCi_image.png", title: "TECHBITE 5.0 - duPhonics Showcase", event: "TECHBITE" },
    { src: "/images/pasted_file_lzrhcD_image.png", title: "TMA Shark Tank Winner 2019", event: "Awards" },
    { src: "/images/pasted_file_wEYR4d_image.png", title: "Startup Thailand 2019", event: "Startup Thailand" },
    { src: "/images/pasted_file_HozVcE_image.png", title: "Corporate Consulting Workshop", event: "Consulting" }
  ];

  const publications = [
    {
      title: "Navigating Trade Turbulence: Digital Transformation Enhances Global Logistics Amid Rising Tariffs",
      date: "April 6, 2025",
      outlet: "e27",
      link: "https://e27.co/navigating-trade-turbulence-digital-transformation-enhances-global-logistics-amid-rising-tariffs-20250406/"
    },
    {
      title: "How Emotional Economics is Reshaping Alternative Investments in Southeast Asia",
      date: "June 3, 2025",
      outlet: "e27",
      link: "https://e27.co/how-emotional-economics-is-reshaping-alternative-investments-in-southeast-asia-20250603/"
    },
    {
      title: "Bridging the Carbon Data Gap: How Predictive Insights for Data Sustainability Are Revolutionising Emission Accounting",
      date: "November 25, 2024",
      outlet: "e27",
      link: "https://e27.co/bridging-the-carbon-data-gap-how-predictive-insights-for-data-sustainability-are-revolutionising-emission-accounting-20241125/"
    },
    {
      title: "The Future of Gen Alpha in the Workplace: A Primer for Business Leaders",
      date: "July 14, 2024",
      outlet: "e27",
      link: "https://e27.co/the-future-of-gen-alpha-in-the-workplace-a-primer-for-business-leaders-20240714/"
    },
    {
      title: "The Metaverse Opens New Opportunities for Education",
      date: "June 6, 2022",
      outlet: "e27",
      link: "https://e27.co/the-metaverse-opens-new-opportunities-for-education-20220606/"
    }
  ];

  const mentorshipStartups = [
    {
      name: "SoPet",
      logo: "/images/sopet_logo.webp",
      photo: "/images/sopet_photo.png",
      description: "Online veterinary consultation platform connecting pet owners with licensed vets",
      program: "BASCII Mentorship",
      link: "https://sopet.co/en"
    },
    {
      name: "Wooffy",
      logo: "/images/wooffy_logo_slide.png",
      photo: "/images/wooffy_photo.png",
      description: "Dog-loving community hosting social events for pet owners and their pups",
      program: "BASCII Mentorship",
      link: "https://www.instagram.com/wooffy.bkk/"
    },
    {
      name: "ASAPH",
      logo: "/images/asaph_logo.png",
      photo: "/images/asaph_photo.png",
      description: "E27 Top 100 2025 (Top 10) - Innovative startup transforming the industry",
      program: "E27 Top 100 Programme",
      link: "#"
    },
    {
      name: "Tasted Better",
      logo: "/images/tasted_better_logo.png",
      photo: "/images/tasted_better_photo.png",
      description: "Near-zero GI flour revolutionizing global staples for healthier living",
      program: "E27 Top 100 Programme",
      link: "#"
    },
    {
      name: "STL Group / VEV",
      logo: "/images/stl_logo.webp",
      photo: "/images/stl_logo.webp",
      description: "EV and logistics consulting for international market expansion",
      program: "Strategic Consulting",
      link: "https://www.stlgh.com/"
    },
    {
      name: "TREG / SMO",
      logo: "/images/treg_logo.webp",
      photo: "/images/treg_logo.webp",
      description: "Hyperlocal Fanclub application consulting for Chinese market entry",
      program: "Strategic Consulting",
      link: "https://treg.co.th/"
    }
  ];

  const successStories = [
    {
      name: "Thanat (Munich) Limapichat",
      photo: "/images/munich_mit_success.png",
      achievement: "MIT CEE Internship Program 2025",
      description: "MFCs fuel cell bacterial power generation startup mentored and co-developed at Quest Edtech. Accepted to MIT's Center for Excellence in Education Research Science Institute for summer 2025.",
      program: "Quest Edtech Mentorship"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section 
        className="relative min-h-screen flex items-center gradient-bg overflow-hidden"
      >
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Kirk Pathumanun</span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Venture Builder & Technical Founder
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                25 years of experience solving the impossibility of business requirements. 
                From pioneering fintech at StockSmart.com to revolutionizing EdTech across Asia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <a href="https://www.linkedin.com/in/kirkjaa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img 
                  src="/images/pasted_file_m3bgxM_image.png" 
                  alt="Kirk Pathumanun" 
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">About</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Kirk Pathumanun is a tech startup builder with <strong>25 years of experience</strong> spanning from the United States to Thailand. 
              Throughout his career, Kirk has built a reputation as <strong>"the guy who can solve the impossibility of business requirements for the team"</strong>.
            </p>
            <p>
              His journey began in 1999 as part of the founding team of <strong>StockSmart.com</strong>, one of the world's first fintech startups. 
              There, he helped secure groundbreaking business partnerships including the world's first 3G implementation for <strong>British Telecom</strong>, 
              and the world's first real-time fintech app with <strong>NTT DoCoMo FOMA and Credit Suisse</strong>.
            </p>
            <p>
              After 8 years working with tech startups in Dallas, Texas focusing on Mobile Applications and Gaming, Kirk joined 
              <strong> Morning Star Research</strong> as a Quantitative Analyst and Qualitative Reporter for the Australian Stock Exchange in 2007.
            </p>
            <p>
              In 2012, Kirk found his passion for education and has since worked on various successful educational ventures in Thailand. 
              As a <strong>Technical Founder</strong> with expertise in advanced video conferencing infrastructure, full-stack metaverse, 
              and full-stack LLMs, Kirk continues to push the boundaries of what's possible in EdTech and AI.
            </p>
            <p>
              Kirk also engages in business consulting for over <strong>20+ businesses</strong> in various industries across Asia, 
              serving his clients with expertise and insights for the global arena.
            </p>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="py-20 gradient-bg">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Ventures</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Building and scaling innovative companies across multiple industries
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ventures.map((venture, index) => (
              <Card key={index} className="card-hover bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-24 mb-4">
                    <img 
                      src={venture.logo} 
                      alt={venture.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{venture.name}</h3>
                  <p className="text-sm text-purple-600 font-semibold mb-1 text-center">{venture.role}</p>
                  <p className="text-sm text-gray-500 mb-3 text-center">{venture.year}</p>
                  <p className="text-gray-600 text-sm mb-4 text-center">{venture.description}</p>
                  {venture.link !== "#" && (
                    <a 
                      href={venture.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Awards & Recognition</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            19 major awards and recognitions from 2018 to 2025
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {awards.map((award, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {award.year}
                    </div>
                    {index !== awards.length - 1 && (
                      <div className="w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 opacity-20"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-md group-hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-3">
                        <Award className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{award.title}</h3>
                          <p className="text-gray-600">{award.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20 gradient-bg">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Event & Pitching</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Highlights from conferences, mentorship sessions, and speaking engagements
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg card-hover bg-white">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-xs font-semibold text-orange-400 mb-1">{item.event}</p>
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Thought Leadership</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Published articles and insights on technology, education, and innovation
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {pub.outlet} • {pub.date}
                      </p>
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read Article <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Startups Under Mentorship Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Startups Under Mentorship</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Guiding the next generation of entrepreneurs through strategic mentorship and hands-on support
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentorshipStartups.map((startup, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                    <img 
                      src={startup.photo} 
                      alt={startup.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                      <img 
                        src={startup.logo} 
                        alt={`${startup.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{startup.name}</h3>
                      {startup.link !== "#" && (
                        <a 
                          href={startup.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm font-medium text-purple-600 mb-3">{startup.program}</p>
                    <p className="text-gray-600">{startup.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Mentorship Success Stories</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Celebrating the achievements of entrepreneurs who've grown through our mentorship programs
          </p>
          <div className="max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img 
                        src={story.photo} 
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 self-start">
                        {story.program}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                      <p className="text-lg font-semibold text-purple-600 mb-4">{story.achievement}</p>
                      <p className="text-gray-600 leading-relaxed">{story.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-bg">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Interested in venture building, consulting, or collaboration opportunities? 
              Let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <a href="https://www.linkedin.com/in/kirkjaa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <a href="mailto:quest@edknovate.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Kirk Pathumanun</h3>
            <p className="text-gray-400 mb-6">
              Venture Builder • Technical Founder • Strategic Advisor
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://www.linkedin.com/in/kirkjaa/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:quest@edknovate.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="text-sm text-gray-500 space-y-2">
              <p>© 2025 Kirk Pathumanun. All rights reserved.</p>
              <p className="text-xs">
                Sources: <a href="https://www.linkedin.com/in/kirkjaa/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a> • 
                <a href="https://e27.co/user/kirk.pathumanun/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 ml-1">e27</a> • 
                <a href="https://www.digitalbridgethailand.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 ml-1">Digital Bridge Thailand</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
