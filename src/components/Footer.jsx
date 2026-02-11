import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer mt-16 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">EC</div>
            <div>
              <div className="font-bold">EAU CONTINENTALE</div>
              <div className="text-sm">Votre partenaire de confiance</div>
            </div>
          </div>
          <p className="text-sm text-gray-200">EAU CONTINENTALE fournit une eau pure et saine, embouteillée à la source avec des standards de qualité élevés.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Liens rapides</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/products">Produits</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <div className="text-sm space-y-2">
            <div>📞 +228 XX XX XX XX</div>
            <div>✉️ contact@eau-continentale.tg</div>
            <div>📍 Lomé, Togo</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 text-sm text-gray-300 text-center">© {new Date().getFullYear()} EAU CONTINENTALE. Tous droits réservés.</div>
    </footer>
  )
}
