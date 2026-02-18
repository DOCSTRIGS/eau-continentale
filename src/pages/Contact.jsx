import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Truck, Zap, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const ContactSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: 'Contact 24/7',
      badge: 'Toujours Disponible',
      icon: Phone,
      gradient: 'from-blue-600 to-cyan-600',
      description: 'Notre équipe est disponible 24h/24 et 7j/7 pour répondre à tous vos besoins en eau pure. Appelez-nous à tout moment !',
      image: '/placeholder.svg?height=500&width=600',
      altImage: 'Contact 24/7',
      contacts: [
        { type: 'phone', title: '+228 XX XX XX XX', subtitle: 'Ligne principale' },
        { type: 'phone', title: '+228 YY YY YY YY', subtitle: 'Urgences' },
        { type: 'mail', title: 'contact@votre-email.tg', subtitle: 'Email principal' },
        { type: 'location', title: 'Votre adresse, Lomé', subtitle: 'Notre siège' }
      ]
    },
    {
      id: 2,
      title: 'Livraison Express',
      badge: 'Rapide & Fiable',
      icon: Truck,
      gradient: 'from-green-600 to-emerald-600',
      description: 'Livraison gratuite dans tout Lomé en moins de 2 heures. Service express disponible pour les commandes urgentes.',
      image: '/placeholder.svg?height=500&width=600',
      altImage: 'Livraison Express',
      contacts: [
        { type: 'phone', title: '+228 XX XX XX XX', subtitle: 'Commandes express' },
        { type: 'mail', title: 'livraison@votre-email.tg', subtitle: 'Suivi livraison' },
        { type: 'clock', title: '2h maximum', subtitle: 'Délai de livraison' },
        { type: 'location', title: 'Tout Lomé', subtitle: 'Zone de livraison' }
      ]
    },
    {
      id: 3,
      title: 'Témoignages Clients',
      badge: 'Ils Nous Font Confiance',
      icon: MessageCircle,
      gradient: 'from-purple-600 to-pink-600',
      description: 'Découvrez ce que nos clients disent de nos services. Plus de 10,000 familles nous font confiance au quotidien.',
      image: '/placeholder.svg?height=500&width=600',
      altImage: 'Témoignages Clients',
      testimonials: [
        { stars: 5, text: 'Service excellent, eau toujours fraîche !', author: 'Marie K.' },
        { stars: 5, text: 'Livraison rapide et équipe très professionnelle.', author: 'Jean-Paul M.' },
        { stars: 5, text: 'Meilleure eau de Lomé, je recommande vivement !', author: 'Fatou S.' }
      ]
    },
    {
      id: 4,
      title: 'Service d\'Urgence',
      badge: 'Intervention Rapide',
      icon: Zap,
      gradient: 'from-red-600 to-orange-600',
      description: 'Besoin d\'eau en urgence ? Notre service d\'intervention rapide est là pour vous, même les weekends et jours fériés.',
      image: '/placeholder.svg?height=500&width=600',
      altImage: 'Service d\'Urgence',
      contacts: [
        { type: 'phone', title: '+228 XX XX XX XX', subtitle: 'Urgences 24/7' },
        { type: 'mail', title: 'urgence@votre-email.tg', subtitle: 'Email urgence' },
        { type: 'clock', title: '30 min', subtitle: 'Temps de réponse' },
        { type: 'location', title: 'Partout à Lomé', subtitle: 'Zone d\'intervention' }
      ]
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(autoPlayRef.current);
  }, [autoPlay, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const renderContactCards = (contacts) => {
    const iconMap = {
      phone: Phone,
      mail: Mail,
      location: MapPin,
      clock: Clock
    };

    return contacts.map((contact, index) => {
      const IconComponent = iconMap[contact.type];
      return (
        <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-lg transition-shadow duration-300">
          <div className="p-0 flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${slides[currentSlide].gradient} opacity-20`}>
              <IconComponent className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{contact.title}</p>
              <p className="text-sm text-gray-500">{contact.subtitle}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderTestimonials = (testimonials) => {
    return testimonials.map((testimonial, index) => (
      <div
        key={index}
        className={`rounded-lg border bg-card text-card-foreground p-6 transition-all duration-500 ${
          index === 0
            ? 'opacity-100 scale-100 shadow-lg'
            : 'opacity-50 scale-95'
        }`}
      >
        <div className="p-0">
          <div className="flex items-center space-x-2 mb-3">
            {[...Array(testimonial.stars)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
          <p className="font-semibold text-gray-900">- {testimonial.author}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full pb-20">
      <div className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-slate-100">
        {/* Particles Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="relative h-screen">
          {slides.map((slide, index) => {
            const IconComponent = slide.icon;
            const isTestimonial = index === 2;

            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="relative z-10 h-screen flex items-center justify-center py-8">
                  <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-4 rounded-2xl bg-gradient-to-r ${slide.gradient}`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-lg px-4 py-2">
                            {slide.badge}
                          </div>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                          {slide.title}
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {isTestimonial ? renderTestimonials(slide.testimonials) : renderContactCards(slide.contacts)}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <a 
                            href="tel:+22890123456"
                            className={`inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 rounded-md bg-gradient-to-r ${slide.gradient} hover:opacity-90 text-white text-lg px-8 py-4`}
                          >
                            <Phone className="w-5 h-5 mr-2" />
                            Appeler Maintenant
                          </a>
                          <a 
                            href="mailto:contact@intercontinentale-eau.tg?subject=Demande%20de%20contact"
                            className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-11 rounded-md text-lg px-8 py-4 bg-transparent"
                          >
                            <Mail className="w-5 h-5 mr-2" />
                            Envoyer un Email
                          </a>
                        </div>
                      </div>

                      <div className="relative hidden lg:block">
                        <div className="rounded-lg border bg-card text-card-foreground overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                          <div className="p-0">
                            <img
                              src={slide.image}
                              alt={slide.altImage}
                              className="w-full h-80 object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${slide.gradient} opacity-20`}></div>
                          </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full bg-gradient-to-r ${slide.gradient}`}>
                              <Phone className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900">Appelez-nous</p>
                              <p className="text-xs text-gray-500">24h/24 - 7j/7</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4">
          <button
            onClick={handlePrev}
            className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-blue-600 scale-125`
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Floating Phone Button */}
        <div className="fixed bottom-6 right-6 z-30">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90 text-white rounded-full p-4 shadow-2xl animate-pulse">
            <Phone className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Contact() {
  return <ContactSlider />;
}
