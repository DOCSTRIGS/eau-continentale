import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'
import useReveal from '../hooks/useReveal'

export default function Home() {
  const preview = products.slice(0, 2)

  const heroRef = useRef(null)
  const productsRef = useRef(null)
  const statsRef = useRef(null)
  useReveal(heroRef)
  useReveal(productsRef)
  useReveal(statsRef)

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section ref={heroRef} className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 animated-bg"></div>
        <div className="relative container-wide py-28 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <span className="inline-block badge mb-4">Qualité Premium</span>
            <h1 className="hero-title text-5xl md:text-6xl leading-tight">EAU CONTINENTALE — <span className="text-yellow-300">ESI KOKOE</span></h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl">Eau minérale naturelle, pure et cristalline. Embouteillée à la source selon des standards rigoureux pour garantir fraîcheur et sécurité.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-3 btn-primary">🛒 Commander Maintenant</Link>
              <a href="tel:+22800000000" className="inline-flex items-center gap-3 btn-ghost text-white backdrop-blur-sm">📞 +228 XX XX XX XX</a>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div className="text-6xl md:text-7xl font-extrabold tracking-tight">100%</div>
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1 text-yellow-300 text-2xl">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <div className="text-sm text-white/90 mt-2">Pure</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-lg bg-white rounded-lg h-80 overflow-hidden shadow-lg floaty">
              <img
                src="/src/assets/hero-water.jpg"
                alt="Goutte d'eau - EAU CONTINENTALE"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section ref={productsRef} className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Nos Produits <span className="text-blue-600">Premium</span></h2>
        <p className="text-center text-gray-600 mt-2">Découvrez notre gamme complète d'eau pure, disponible en sachets et bonbonnes.</p>

          <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((p) => (
            <article key={p.id} className="rounded-lg overflow-hidden shadow">
              <div className="h-40 bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
                <div className="h-20 w-20 bg-white/80 rounded" />
              </div>
              <div className="bg-white p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.description}</p>
                </div>
                <div className="text-blue-600 font-bold">{p.price}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
            <Link to="/products" className="btn-neon inline-block">Voir tous nos produits →</Link>
        </div>
      </section>

      {/* About / stats */}
      <section ref={statsRef} className="bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center">Qui Sommes-<span className="text-blue-600">Nous</span> ?</h2>
          <p className="text-center text-gray-600 mt-3 max-w-3xl mx-auto">EAU CONTINENTALE s'engage à fournir une eau d'une pureté exceptionnelle, suivant des contrôles stricts et un service fiable pour nos clients.</p>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded shadow text-center">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm text-gray-500">Années d'expérience</div>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm text-gray-500">Clients satisfaits</div>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-gray-500">Service disponible</div>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-gray-500">Qualité garantie</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold text-center mb-6">Prêt à Commander Votre Eau Pure ?</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-xl font-semibold">Téléphone</div>
            <div className="text-sm text-gray-500 mt-2">+228 XX XX XX XX</div>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-xl font-semibold">Email</div>
            <div className="text-sm text-gray-500 mt-2">contact@eau-continentale.tg</div>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-xl font-semibold">Adresse</div>
            <div className="text-sm text-gray-500 mt-2">Lomé, Togo</div>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-xl font-semibold">Horaires</div>
            <div className="text-sm text-gray-500 mt-2">Lun-Sam: 8h-18h</div>
          </div>
        </div>
      </section>
        {/* Large CTA band */}
        <section className="mt-12">
          <div className="container-wide">
            <div className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Prêt à Commander Votre Eau Pure ?</h3>
                <p className="text-sm md:text-base text-white/90 mt-2">Contactez-nous dès maintenant pour passer votre commande. Livraison rapide et service client disponible 24/7.</p>
              </div>
              <div className="flex gap-4">
                <a href="tel:+22800000000" className="btn-primary inline-flex items-center gap-2">📞 Appeler maintenant</a>
                <a href="/contact" className="btn-ghost inline-flex items-center gap-2">Formulaire de contact →</a>
              </div>
            </div>
          </div>
        </section>
      {/* Large CTA band */}
      <section className="mt-12">
        <div className="container-wide">
          <div className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Prêt à Commander Votre Eau Pure ?</h3>
              <p className="text-sm md:text-base text-white/90 mt-2">Contactez-nous dès maintenant pour passer votre commande. Livraison rapide et service client disponible 24/7.</p>
            </div>
            <div className="flex gap-4">
              <a href="tel:+22800000000" className="btn-primary inline-flex items-center gap-2">📞 Appeler maintenant</a>
              <a href="/contact" className="btn-ghost inline-flex items-center gap-2">Formulaire de contact →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
