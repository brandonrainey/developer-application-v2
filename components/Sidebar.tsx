import React from 'react'
import Image from 'next/image'
import styles from '../styles/Sidebar.module.scss'

interface SidebarProps {
  progress: number
}

const steps = [
  {
    step: 1,
    description: 'YOUR INFO',
  },
  {
    step: 2,
    description: 'UPLOAD RESUME',
  },
  {
    step: 3,
    description: 'SKILLS',
  },
  {
    step: 4,
    description: 'SUMMARY',
  },
]

const isWindowContext = typeof window !== 'undefined'

export default function Sidebar({ progress }: SidebarProps) {
  const available = isWindowContext && window.innerWidth

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Image
          src={`${
            available && window?.innerWidth >= 830
              ? '/bg-sidebar-desktop.svg'
              : '/bg-sidebar-mobile.svg'
          }`}
          alt="desktop sidebar image"
          fill
          className={styles.sidebar}
        />

        <div className={styles.nav}>
          {steps.map((item, index) => (
            <div className={styles.stepsContainer} key={index}>
              <div
                className={
                  index + 1 == progress
                    ? `${styles.circle} ${styles.filledCircle}`
                    : styles.circle
                }
              >
                <span>{item.step}</span>
              </div>
              <div className={styles.stepItem}>
                <p className={styles.stepNumber}>Step {item.step}</p>
                <p className={styles.stepDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
