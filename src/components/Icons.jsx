import React from 'react'

export function PhoneIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5.5C3 5.5 6 4.5 9 7.5C12 10.5 11 13 13.5 15.5C16 18 18.5 17 21.5 20C21.5 20 22 20.5 21 21.5C20 22.5 18 22 14 19C10 16 7.5 14 4.5 10C1.5 6 3 5.5 3 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MailIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8.5L12 13.5L21 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function LocationIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21C12 21 5 14.761 5 9.5C5 6.462 7.462 4 10.5 4C13.538 4 16 6.462 16 9.5C16 14.761 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
