import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#0b1c2d] to-[#0f172a] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        
        {/* Colonne 1 - Entreprise */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
              IE
            </div>
            <div>
              <h3 className="font-bold text-lg">Intercontinental Eau</h3>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            Votre partenaire de confiance pour une eau pure et de qualité au Togo. 
            Nous nous engageons à vous fournir le meilleur service.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex gap-4 mt-4 text-gray-300">
            <Facebook className="hover:text-blue-400 cursor-pointer" size={18} />
            <Twitter className="hover:text-blue-400 cursor-pointer" size={18} />
            <Instagram className="hover:text-pink-400 cursor-pointer" size={18} />
          </div>
        </div>

        {/* Colonne 2 - Liens rapides */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Liens Rapides</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-blue-400">Accueil</a></li>
            <li><a href="/about" className="hover:text-blue-400">À propos</a></li>
            <li><a href="/products" className="hover:text-blue-400">Produits</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Colonne 3 - Produits */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Nos Produits</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Sachets 500ml</li>
            <li>Bonbonnes 22L</li>
            <li>Pack Entreprise</li>
            <li>Abonnement</li>
          </ul>
        </div>

        {/* Colonne 4 - Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact</h4>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              +228 XX XX XX XX
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              contact@intercontinental.tg
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Lomé, Togo
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Intercontinental Eau. Tous droits réservés | Eau pure du Togo
      </div>
    </footer>
  );
}