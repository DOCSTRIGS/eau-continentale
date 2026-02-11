import React from 'react'
import products from '../data/products'

export default function Products() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Nos Produits</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <article key={p.id} className="rounded-lg overflow-hidden card-lg hover:shadow-xl transition-all">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <div className="bg-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{p.name}</h2>
                  <p className="text-sm text-gray-500">{p.size}</p>
                </div>
                <div className="text-xl font-bold text-blue-600">{p.price}</div>
              </div>
              <p className="mt-3 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex gap-2">
                <span className="badge">Bestseller</span>
                <span className="badge">Économique</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
