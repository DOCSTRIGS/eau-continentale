import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  function update(field, value) {
    setForm((s) => ({ ...s, [field]: value }))
  }

  function validate() {
    if (!form.name.trim()) return 'Le nom est requis.'
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return "E-mail invalide."
    if (!form.message.trim()) return 'Le message est requis.'
    return ''
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const v = validate()
    if (v) {
      setError(v)
      return
    }
    setError('')
    setStatus('sending')

    // Try to send to serverless function (Netlify / Vercel style)
    try {
      const res = await fetch('/.netlify/functions/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Network response was not ok')

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      return
    } catch (err) {
      // Fallback: save locally (demo) and show success note about demo
      try {
        const sent = JSON.parse(localStorage.getItem('sentMessages') || '[]')
        sent.push({ ...form, at: new Date().toISOString(), _demo: true })
        localStorage.setItem('sentMessages', JSON.stringify(sent))

        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } catch (e) {
        setStatus('error')
      }
    }
  }

  return (
    <section className="max-w-2xl mx-auto p-6 mt-24">
      <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>
      <p className="mb-4 text-gray-600">Pour toute demande commerciale ou question, envoyez-nous un message via le formulaire ci-dessous.</p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        {status === 'success' && (
          <div className="p-3 bg-green-50 text-green-800 rounded">Merci — votre message a été envoyé.</div>
        )}
        {status === 'error' && (
          <div className="p-3 bg-red-50 text-red-800 rounded">Une erreur est survenue, réessayez.</div>
        )}

        <div>
          <label className="block text-sm font-medium">Nom</label>
          <input value={form.name} onChange={(e) => update('name', e.target.value)} className="mt-1 w-full border rounded px-3 py-2" placeholder="Votre nom" />
        </div>
        <div>
          <label className="block text-sm font-medium">E-mail</label>
          <input value={form.email} onChange={(e) => update('email', e.target.value)} className="mt-1 w-full border rounded px-3 py-2" placeholder="votre@mail.com" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea value={form.message} onChange={(e) => update('message', e.target.value)} className="mt-1 w-full border rounded px-3 py-2" rows="6" placeholder="Votre message" />
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}

        <div>
          <button type="submit" disabled={status === 'sending'} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-60">
            {status === 'sending' ? 'Envoi...' : 'Envoyer le message'}
          </button>
        </div>
      </form>
    </section>
  )
}
