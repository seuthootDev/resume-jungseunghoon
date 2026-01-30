'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contacts = [
    {
      type: 'Email',
      value: 'seuthootdev@gmail.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      link: 'mailto:seuthootdev@gmail.com'
    },
    {
      type: 'GitHub',
      value: 'github.com/seuthootDev',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      link: 'https://github.com/seuthootDev'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/seunghoon-jung-38b270335',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      link: 'https://linkedin.com/in/seunghoon-jung-38b270335'
    },
    {
      type: '블로그',
      value: 'seuthootdev.tistory.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="16" y2="10" />
        </svg>
      ),
      link: 'https://seuthootdev.tistory.com/'
    }
  ]

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <span className={styles.label}>Get In Touch</span>
            <h2 className={styles.title}>연락처</h2>
            <p className={styles.subtitle}>
              새로운 프로젝트나 협업 기회에 대해 언제든 연락 주세요
            </p>
          </div>

          <div className={styles.contactGrid}>
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.type}
                href={contact.link}
                className={styles.contactCard}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                target={contact.type === 'Email' ? '_self' : '_blank'}
                rel={contact.type === 'Email' ? '' : 'noopener noreferrer'}
              >
                <div className={styles.contactIcon}>
                  {contact.icon}
                </div>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactType}>{contact.type}</h3>
                  <p className={styles.contactValue}>{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2025 JUNG SEUNGHOON. All rights reserved.</p>
      </footer>
    </section>
  )
}
