import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Truck, Zap, ChevronLeft, ChevronRight, Clock, Star } from 'lucide-react';

const generateParticles = () => [...Array(15)].map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 3}s`,
  animationDuration: `${2 + Math.random() * 3}s`
}));

const ContactSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [particles] = useState(generateParticles());
  const autoPlayRef = useRef(null);

  const slides = [
    {
      id: 1,
      titre: 'Contact 24/7',
      badge: 'Toujours Disponible',
      icone: Phone,
      degrade: 'from-blue-600 to-cyan-600',
      description: 'Notre équipe est disponible 24h/24 et 7j/7 pour répondre à tous vos besoins en eau pure.',
      image: '/eau.png',
      altImage: 'Contact 24/7',
      contacts: [
        { type: 'phone', titre: '+228 22 22 22 22', sousTitre: 'Ligne principale' },
        { type: 'phone', titre: '+228 33 33 33 33', sousTitre: 'Urgences' },
        { type: 'mail', titre: 'contact@votre-email.tg', sousTitre: 'Email principal' },
        { type: 'location', titre: 'Votre adresse, Lomé', sousTitre: 'Notre siège' }
      ]
    },
    {
      id: 2,
      titre: 'Livraison Express',
      badge: 'Rapide & Fiable',
      icone: Truck,
      degrade: 'from-green-600 to-emerald-600',
      description: 'Livraison gratuite dans tout Lomé en moins de 2 heures.',
      image: '/eau.png',
      altImage: 'Livraison Express',
      contacts: [
        { type: 'phone', titre: '+228 44 44 44 44', sousTitre: 'Commandes express' },
        { type: 'mail', titre: 'livraison@votre-email.tg', sousTitre: 'Suivi livraison' },
        { type: 'clock', titre: '2h maximum', sousTitre: 'Délai de livraison' },
        { type: 'location', titre: 'Tout Lomé', sousTitre: 'Zone de livraison' }
      ]
    },
    {
      id: 3,
      titre: 'Témoignages Clients',
      badge: 'Ils Nous Font Confiance',
      icone: MessageCircle,
      degrade: 'from-violet-600 to-pink-600',
      description: 'Plus de 10,000 familles nous font confiance au quotidien.',
      image: '/eau.png',
      altImage: 'Témoignages Clients',
      temoignages: [
        { etoiles: 5, texte: 'Service excellent, eau toujours fraîche !', auteur: 'Marie K.' },
        { etoiles: 5, texte: 'Livraison rapide et équipe très professionnelle.', auteur: 'Jean-Paul M.' },
        { etoiles: 5, texte: 'Meilleure eau de Lomé !', auteur: 'Fatou S.' }
      ]
    },
    {
      id: 4,
      titre: "Service d'Urgence",
      badge: 'Intervention Rapide',
      icone: Zap,
      degrade: 'from-red-600 to-orange-600',
      description: 'Besoin d\'eau en urgence ? Intervention rapide 24/7.',
      image: '/eau.png',
      altImage: 'Service d\'Urgence',
      contacts: [
        { type: 'phone', titre: '+228 55 55 55 55', sousTitre: 'Urgences 24/7' },
        { type: 'mail', titre: 'urgence@votre-email.tg', sousTitre: 'Email urgence' },
        { type: 'clock', titre: '30 min', sousTitre: 'Temps de réponse' },
        { type: 'location', titre: 'Partout à Lomé', sousTitre: 'Zone d\'intervention' }
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

  const getPhoneNumber = (slide) => {
    if (slide.contacts && slide.contacts[0] && slide.contacts[0].titre) {
      return slide.contacts[0].titre.replace(/\+228\s?/, '').replace(/\s/g, '');
    }
    return '22222222';
  };

  const renderContactCards = (contacts) => {
    const iconMap = { phone: Phone, mail: Mail, location: MapPin, clock: Clock };
    return contacts.map((contact, index) => {
      const IconComponent = iconMap[contact.type];
      return (
        <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${slides[currentSlide].degrade} opacity-20`}>
              <IconComponent className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{contact.titre}</p>
              <p className="text-sm text-gray-500">{contact.sousTitre}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderTestimonials = (temoignages) => {
    return temoignages.map((testimonial, index) => (
      <div key={index} className={`rounded-lg border bg-card text-card-foreground p-6 transition-all duration-500 ${
        index === 0 ? 'opacity-100 scale-100 shadow-lg' : 'opacity-50 scale-95'
      }`}>
        <div className="flex items-center space-x-2 mb-3">
          {[...Array(testimonial.etoiles)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-700 italic mb-3">"{testimonial.texte}"</p>
        <p className="font-semibold text-gray-900">- {testimonial.auteur}</p>
      </div>
    ));
  };

  return (
    <div className="w-full pb-20">
      <div className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-slate-100">
        {/* Particules */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          {particles.map((particle, i) => (
            <div key={i} className="absolute w-1 h-1 bg-blue-300 rounded-full animate-twinkle" style={particle} />
          ))}
        </div>

        {/* Slides */}
        <div className="relative h-screen">
          {slides.map((slide, index) => {
            const IconComponent = slide.icone;
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
                          <div className={`p-4 rounded-2xl bg-gradient-to-r ${slide.degrade}`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className="inline-flex items-center rounded-full border font-semibold px-4 py-2 bg-secondary text-secondary-foreground">
                            {slide.badge}
                          </div>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">{slide.titre}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{slide.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {isTestimonial ? renderTestimonials(slide.temoignages) : renderContactCards(slide.contacts || [])}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <a 
                            href={`tel:+228${slide.contacts[0].title.replace(/\+228\s?/, '').replace(/\s/g, '')}`}
                            className={`inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 rounded-md bg-gradient-to-r ${slide.gradient} hover:opacity-90 text-white text-lg px-8 py-4`}
                          >
                            <Phone className="w-5 h-5 mr-2" />
                            Appeler maintenant
                          </a>
                          <a
                            href="mailto:contact@intercontinentale-eau.tg?subject=Demande%20de%20contact"
                            className="inline-flex items-center font-medium border border-input hover:bg-accent text-lg px-8 py-4 rounded-md bg-transparent hover:text-accent-foreground transition-all"
                          >
                            <Mail className="w-5 h-5 mr-2" />
                            Envoyer un e-mail
                          </a>
                        </div>
                      </div>

                      {/* 🎨 ZONE IMAGE EN GRAND FORMAT ✅ */}
                      <div className="relative hidden lg:block h-[500px] w-full"> {/* ← HAUTEUR AUGMENTÉE */}
                        <div className="w-full h-full rounded-2xl border bg-card overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                          <img 
                            src={slide.image} 
                            alt={slide.altImage}
                            className="w-full h-full object-cover" // ← object-cover + h-full
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/600x500/3b82f6/ffffff?text=Eau.png';
                            }}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${slide.degrade} opacity-20`}></div>
                        </div>
                        
                        {/* Bouton flottant image */}
                        <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-2xl p-6 animate-bounce lg:w-48">
                          <div className="flex items-center space-x-3">
                            <div className={`p-3 rounded-2xl bg-gradient-to-r ${slide.degrade}`}>
                              <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-gray-900">Appelez-nous</p>
                              <p className="text-xs text-gray-500">24h/24 - 7j/7</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 📱 VERSION MOBILE - Image en grand */}
                      <div className="lg:hidden w-full mt-8">
                        <div className="w-full h-64 rounded-2xl border bg-card overflow-hidden shadow-2xl">
                          <img 
                            src={slide.image} 
                            alt={slide.altImage}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${slide.degrade} opacity-20`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4">
          <button onClick={handlePrev} className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all">
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
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
          <button onClick={handleNext} className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bouton flottant global */}
        <div className="fixed bottom-6 right-6 z-30">
          <a href="tel:+22822222222" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90 text-white rounded-full p-4 shadow-2xl animate-pulse">
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Contact() {
  return <ContactSlider />;
}
