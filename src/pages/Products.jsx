import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Droplets, Package, Building, Calendar, Star, Heart, ShoppingCart, ArrowRight, CircleCheckBig, Truck, Shield } from 'lucide-react'
import useReveal from '../hooks/useReveal'

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const autoPlayRef = useRef(null)
  const [likedProducts, setLikedProducts] = useState({})
  const revealRef = useRef(null)

  useReveal(revealRef)

  const slides = [
    {
      id: 1,
      title: 'Sachets d\'Eau Pure',
      badge: 'Promo -17%',
      price: '25 FCFA',
      originalPrice: '30 FCFA',
      format: 'Format Pratique',
      description: 'Nos sachets d\'eau pure de 500ml sont parfaits pour tous vos déplacements. Conditionnés dans un emballage hygiénique et pratique.',
      volume: '500ml',
      features: ['500ml', 'Hygiénique', 'Portable', 'Économique'],
      likes: '1,250',
      rating: '4.9',
      reviews: '2,340',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-600 to-cyan-600',
      icon: Droplets,
      image: '/eau.png'
    },
    {
      id: 2,
      title: 'Bonbonnes 22L',
      badge: 'Économisez 500 FCFA',
      price: '2,500 FCFA',
      originalPrice: '3,000 FCFA',
      format: 'Format Familial',
      description: 'Nos bonbonnes de 22 litres sont idéales pour les familles et les bureaux. Eau pure et fraîche pour toute la semaine.',
      volume: '22 Litres',
      features: ['22 Litres', 'Réutilisable', 'Économique', 'Livraison gratuite'],
      likes: '890',
      rating: '4.9',
      reviews: '2,340',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-600 to-emerald-600',
      icon: Package,
      image: '/eau.png'
    },
    {
      id: 3,
      title: 'Pack Entreprise',
      badge: 'Nouveau',
      price: 'Sur devis',
      originalPrice: '',
      format: 'Solution Professionnelle',
      description: 'Pack spécialement conçu pour les entreprises. Livraison régulière et tarifs préférentiels pour vos équipes.',
      volume: 'Sur devis',
      features: ['Livraison régulière', 'Tarifs préférentiels', 'Service dédié', 'Facturation mensuelle'],
      likes: '456',
      rating: '4.9',
      reviews: '2,340',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-600 to-pink-600',
      icon: Building,
      image: '/eau.png'
    },
    {
      id: 4,
      title: 'Abonnement Mensuel',
      badge: '2 mois gratuits',
      price: '8,000 FCFA/mois',
      originalPrice: '10,000 FCFA/mois',
      format: 'Service Premium',
      description: 'Abonnez-vous et recevez votre eau pure chaque semaine. Service premium avec livraison garantie et prix avantageux.',
      volume: 'Mensuel',
      features: ['Livraison hebdomadaire', 'Prix fixe', 'Sans engagement', 'Service prioritaire'],
      likes: '2,100',
      rating: '4.9',
      reviews: '2,340',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-600 to-red-600',
      icon: Calendar,
      image: '/eau.png'
    }
  ]

  useEffect(() => {
    if (!autoPlay) return

    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(autoPlayRef.current)
  }, [autoPlay, slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 10000)
  }

  const toggleLike = (productId) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }))
  }

  return (
    <div className="w-full pb-20">
      {/* Carousel Section */}
      <div className="h-screen">
        <div className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%22 fill=%22%23000%22 fillOpacity=%220.1%22 fillRule=%22evenodd%22/%3E%3C/svg%3E')]"></div>
          </div>

          <div className="relative h-screen">
            {/* Slides */}
            {slides.map((slide, index) => {
              const IconComponent = slide.icon
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 scale-100 pointer-events-auto'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <div className="relative z-10 h-screen flex items-center justify-center py-8">
                    <div className="container mx-auto px-4 max-w-7xl">
                      <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                        {/* Left Product Card */}
                        <div className="relative hidden lg:block">
                          <div className="rounded-lg bg-card text-card-foreground overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 border-0">
                            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} opacity-10`}></div>

                            {/* Badge */}
                            <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary hover:bg-primary/80 absolute top-4 right-4 z-10 bg-gradient-to-r ${slide.gradient} text-white animate-pulse`}>
                              {slide.badge}
                            </div>

                            {/* Wishlist Button */}
                            <button onClick={() => toggleLike(slide.id)} className={`absolute top-4 left-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 ${likedProducts[slide.id] ? 'bg-red-50' : ''}`}>
                              <Heart className={`w-5 h-5 transition-all duration-300 ${likedProducts[slide.id] ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                            </button>

                            <div className="p-0">
                              <div className="relative">
                                <img
                                  src={slide.image}
                                  alt={slide.title}
                                  className="w-full h-80 object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${slide.gradient} opacity-20`}></div>
                              </div>

                              <div className="p-6 space-y-4">
                                {/* Product Header */}
                                <div className="flex items-center space-x-4">
                                  <div className={`p-3 rounded-xl bg-gradient-to-r ${slide.gradient}`}>
                                    <IconComponent className="w-6 h-6 text-white" />
                                  </div>
                                  <div>
                                    <h3 className="text-xl font-bold text-gray-900">{slide.title}</h3>
                                    <p className="text-gray-600">{slide.format}</p>
                                  </div>
                                </div>

                                {/* Price */}
                                <div className="flex items-center space-x-4">
                                  <span className={`text-3xl font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                                    {slide.price}
                                  </span>
                                  {slide.originalPrice && (
                                    <span className="text-lg text-gray-400 line-through">{slide.originalPrice}</span>
                                  )}
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-3">
                                  {slide.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-2">
                                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${slide.gradient}`}></div>
                                      <span className="text-gray-600">{feature}</span>
                                    </div>
                                  ))}
                                </div>

                                {/* Likes */}
                                <div className="flex items-center space-x-2 text-gray-500">
                                  <Heart className="w-4 h-4" />
                                  <span>{slide.likes} personnes aiment ce produit</span>
                                </div>

                                {/* CTA Button */}
                                <button className={`inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 rounded-md px-8 w-full bg-gradient-to-r ${slide.gradient} hover:opacity-90 text-white text-lg py-4`}>
                                  <ShoppingCart className="w-5 h-5 mr-2" />
                                  Commander Maintenant
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Content */}
                        <div className="space-y-6">
                          <div>
                            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-lg px-4 py-2 mb-4">
                              {slide.format}
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                              {slide.title}
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                              {slide.description}
                            </p>
                          </div>

                          {/* Ratings */}
                          <div className="flex items-center space-x-4">
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-gray-600 text-lg">{slide.rating}/5 ({slide.reviews} avis)</span>
                          </div>

                          {/* Contact Info Box */}
                          <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                            <h4 className="font-semibold text-gray-900">Commandez par téléphone</h4>
                            <div className="space-y-2">
                              <p className="text-gray-600">📞 +228 XX XX XX XX</p>
                              <p className="text-gray-600">📧 commandes@votre-email.tg</p>
                              <p className="text-gray-600">🕒 Disponible 24h/24, 7j/7</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Navigation Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4">
              <button
                onClick={prevSlide}
                className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-blue-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Range Section */}
      <section className="py-20 water-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Notre Gamme Complète
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez parmi notre sélection de produits d'eau pure, conçus pour répondre à tous vos besoins d'hydratation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Sachets Product Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden card-hover">
              <div className="relative h-[500px] bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10"></div>
                <img
                  src="/eau.png"
                  alt="Sachets d'eau Intercontinental Eau"
                  className="w-80 h-80 object-contain animate-float relative z-10"
                />
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500 text-white hover:bg-blue-600 animate-pulse">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Bestseller
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-800">Sachets d'Eau</h3>
                  <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">
                    500ml
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Nos sachets d'eau de 500ml sont parfaits pour une hydratation quotidienne. Pratiques, économiques et d'une pureté exceptionnelle, ils sont idéaux pour toute la famille, l'école ou le bureau.
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Droplets, label: 'Eau purifiée par osmose inverse', color: 'blue' },
                    { icon: Package, label: 'Emballage hygiénique et résistant', color: 'green' },
                    { icon: Shield, label: 'Contrôle qualité rigoureux', color: 'cyan' }
                  ].map((item, idx) => {
                    const ItemIcon = item.icon
                    const bgMap = { blue: 'bg-blue-100', green: 'bg-green-100', cyan: 'bg-cyan-100' }
                    const textMap = { blue: 'text-blue-500', green: 'text-green-500', cyan: 'text-cyan-500' }
                    return (
                      <div key={idx} className="flex items-center text-gray-600 group">
                        <div className={`w-8 h-8 ${bgMap[item.color]} rounded-full flex items-center justify-center mr-3`}>
                          <ItemIcon className={`w-4 h-4 ${textMap[item.color]} group-hover:animate-bounce`} />
                        </div>
                        <span>{item.label}</span>
                        <CircleCheckBig className="w-4 h-4 text-green-500 ml-auto" />
                      </div>
                    )
                  })}
                </div>

                {/* Price Info */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500">Prix unitaire</span>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-gray-800">25</span>
                      <span className="text-lg text-gray-600 ml-1">FCFA</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    • Remise dégressive à partir de 50 sachets<br/>
                    • Livraison gratuite dès 100 sachets
                  </div>
                </div>

                <a href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 w-full bg-blue-600 hover:bg-blue-700 text-lg py-4 button-ripple group">
                  Commander maintenant
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Bonbonnes Product Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden card-hover">
              <div className="relative h-[500px] bg-gradient-to-br from-green-100 via-emerald-50 to-green-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10"></div>
                <img
                  src="/eau.png"
                  alt="Bonbonnes 22L Intercontinental Eau"
                  className="w-60 h-96 object-contain animate-float relative z-10"
                  style={{ animationDelay: '2s' }}
                />
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500 text-white hover:bg-green-600 animate-pulse">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Économique
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-800">Bonbonnes 22L</h3>
                  <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">
                    22 Litres
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Nos bonbonnes de 22 litres sont parfaites pour les bureaux, les familles nombreuses et tous ceux qui consomment beaucoup d'eau. Économiques et pratiques avec notre service de livraison à domicile.
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Droplets, label: '22 litres d\'eau pure et fraîche', color: 'blue' },
                    { icon: Truck, label: 'Livraison à domicile disponible', color: 'green' },
                    { icon: Shield, label: 'Bonbonne réutilisable et écologique', color: 'cyan' }
                  ].map((item, idx) => {
                    const ItemIcon = item.icon
                    const bgMap = { blue: 'bg-blue-100', green: 'bg-green-100', cyan: 'bg-cyan-100' }
                    const textMap = { blue: 'text-blue-500', green: 'text-green-500', cyan: 'text-cyan-500' }
                    return (
                      <div key={idx} className="flex items-center text-gray-600 group">
                        <div className={`w-8 h-8 ${bgMap[item.color]} rounded-full flex items-center justify-center mr-3`}>
                          <ItemIcon className={`w-4 h-4 ${textMap[item.color]} group-hover:animate-bounce`} />
                        </div>
                        <span>{item.label}</span>
                        <CircleCheckBig className="w-4 h-4 text-green-500 ml-auto" />
                      </div>
                    )
                  })}
                </div>

                {/* Price Info */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500">Prix unitaire</span>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-gray-800">1,500</span>
                      <span className="text-lg text-gray-600 ml-1">FCFA</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    • Consigne bonbonne: 2,000 FCFA (remboursable)<br/>
                    • Livraison gratuite dès 5 bonbonnes
                  </div>
                </div>

                <a href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 w-full bg-green-600 hover:bg-green-700 text-lg py-4 button-ripple group">
                  Commander maintenant
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Pourquoi Choisir <span className="text-blue-600">Intercontinental Eau</span> ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Droplets,
                title: 'Pureté Garantie',
                description: 'Eau filtrée par osmose inverse pour une pureté exceptionnelle',
                color: 'blue'
              },
              {
                icon: Truck,
                title: 'Livraison Rapide',
                description: 'Service de livraison dans tout le Togo en moins de 24h',
                color: 'green'
              },
              {
                icon: Shield,
                title: 'Qualité Certifiée',
                description: 'Contrôles qualité rigoureux selon les normes internationales',
                color: 'cyan'
              },
              {
                icon: Heart,
                title: 'Service Client',
                description: 'Équipe dédiée disponible 24/7 pour votre satisfaction',
                color: 'purple'
              }
            ].map((item, idx) => {
              const ItemIcon = item.icon
              const bgMap = { blue: 'bg-blue-100', green: 'bg-green-100', cyan: 'bg-cyan-100', purple: 'bg-purple-100' }
              const textMap = { blue: 'text-blue-600', green: 'text-green-600', cyan: 'text-cyan-600', purple: 'text-purple-600' }
              return (
                <div key={idx} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow card-hover">
                  <div className={`w-16 h-16 ${bgMap[item.color]} rounded-full flex items-center justify-center mx-auto mb-4 pulse-ring`}>
                    <ItemIcon className={`w-8 h-8 ${textMap[item.color]}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Commander Votre Eau Pure ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour passer votre commande et profiter de notre service de livraison rapide.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 button-ripple">
            Passer ma commande
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
