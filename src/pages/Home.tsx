import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ExternalLink, Award, BookOpen, Mail, Linkedin } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { useLanguage } from "@/contexts/LanguageContext";
import { getStrings } from "@/content/strings";
import { getHomeContent } from "@/content/homeContent";

export default function Home() {
  const { language } = useLanguage();
  const strings = getStrings(language);
  const content = getHomeContent(language);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="gradient-text">{strings.siteTitle}</span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-slate-100">
                {content.hero.subtitle}
              </p>
              <p className="text-xl text-gray-600 dark:text-slate-300 leading-relaxed">
                {content.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <a
                    href="https://www.linkedin.com/in/kirkjaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    {strings.cta.connectLinkedIn}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-slate-800"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {strings.cta.getInTouch}
                </Button>
                <Link href="/profile">
                  <a className="inline-flex items-center justify-center gap-2 rounded-md border border-blue-600 bg-transparent px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-slate-800">
                    {strings.cta.exploreProfile}
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <ImageWithFallback
                  src="/images/pasted_file_m3bgxM_image.png" 
                  alt={strings.siteTitle}
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">{content.aboutHeading}</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
            {content.aboutParagraphs.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="py-20 gradient-bg dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">{content.ventures.heading}</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-slate-300 mb-12 text-lg">
            {content.ventures.subheading}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.ventures.items.map((venture, index) => (
              <Card
                key={`${venture.name}-${index}`}
                className="card-hover bg-white border-0 shadow-lg dark:bg-slate-900 dark:text-slate-200"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-24 mb-4">
                    <ImageWithFallback
                      src={venture.logo} 
                      alt={venture.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{venture.name}</h3>
                  <p className="text-sm text-purple-600 font-semibold mb-1 text-center">
                    {venture.role}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-slate-400 mb-3 text-center">
                    {venture.year}
                  </p>
                  <p className="text-gray-600 dark:text-slate-300 text-sm mb-4 text-center">
                    {venture.description}
                  </p>
                  {venture.link && venture.link !== "#" && (
                    <a 
                      href={venture.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                    >
                      {strings.cta.visitWebsite} <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">{content.awards.heading}</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-slate-300 mb-12 text-lg">
            {content.awards.subheading}
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {content.awards.items.map((award, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {award.year}
                    </div>
                    {index !== content.awards.items.length - 1 && (
                      <div className="w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 opacity-20"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-900/80 p-6 rounded-lg shadow-md group-hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-3">
                        <Award className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-slate-200 mb-2">{award.title}</h3>
                          <p className="text-gray-600 dark:text-slate-300">{award.description}</p>
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
      <section className="py-20 gradient-bg dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">{content.gallery.heading}</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-slate-300 mb-12 text-lg">
            {content.gallery.subheading}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.gallery.items.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="group relative overflow-hidden rounded-lg shadow-lg card-hover bg-white dark:bg-slate-900"
              >
                <ImageWithFallback 
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
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">{content.thoughtLeadership.heading}</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-slate-300 mb-12 text-lg">
            {content.thoughtLeadership.subheading}
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {content.thoughtLeadership.items.map((pub, index) => (
              <Card
                key={`${pub.title}-${index}`}
                className="card-hover border-0 shadow-lg bg-white dark:bg-slate-900 dark:text-slate-200"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-slate-400 mb-3">
                        {pub.outlet} • {pub.date}
                      </p>
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        {strings.cta.readArticle} <ExternalLink className="w-4 h-4" />
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
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">{content.mentorship.heading}</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            {content.mentorship.subheading}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.mentorship.items.map((startup, index) => (
              <Card
                key={`${startup.name}-${index}`}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white dark:bg-slate-900 dark:text-slate-200"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-900/80">
                    <ImageWithFallback 
                      src={startup.photo} 
                      alt={startup.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-slate-900 rounded-full p-3 shadow-lg">
                      <ImageWithFallback 
                        src={startup.logo} 
                        alt={`${startup.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{startup.name}</h3>
                      {startup.link && (
                        <a 
                          href={startup.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm font-medium text-purple-600 mb-3">{startup.program}</p>
                    <p className="text-gray-600 dark:text-slate-300">{startup.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Success Stories Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">{content.mentorshipSuccess.heading}</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            {content.mentorshipSuccess.subheading}
          </p>
          <div className="max-w-4xl mx-auto">
            {content.mentorshipSuccess.items.map((story, index) => (
              <Card
                key={`${story.name}-${index}`}
                className="hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 dark:text-slate-200"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <ImageWithFallback 
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
                      <p className="text-gray-600 dark:text-slate-300 leading-relaxed">{story.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-bg dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{content.contact.heading}</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-slate-300 mb-8">
              {content.contact.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <a href="https://www.linkedin.com/in/kirkjaa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  {strings.cta.contactLinkedIn}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-slate-800">
                <a href="mailto:quest@edknovate.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  {strings.cta.contactEmail}
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
            <h3 className="text-2xl font-bold mb-4">{strings.footer.title}</h3>
            <p className="text-gray-400 mb-6">{strings.footer.subtitle}</p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://www.linkedin.com/in/kirkjaa/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:quest@edknovate.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="text-sm text-gray-500 space-y-2">
              <p>{strings.footer.copyright}</p>
              <p className="text-xs space-x-1">
                <span>{strings.footer.sourcesLabel}</span>
                <a href="https://www.linkedin.com/in/kirkjaa/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  {strings.footer.sources.linkedin}
                </a>
                <span>•</span>
                <a href="https://e27.co/user/kirk.pathumanun/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  {strings.footer.sources.e27}
                </a>
                <span>•</span>
                <a href="https://www.digitalbridgethailand.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  {strings.footer.sources.digitalBridge}
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
