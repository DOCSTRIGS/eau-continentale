import { useEffect } from 'react'

export default function useReveal(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in-view')
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    el.classList.add('reveal')
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
}
