import React from 'react'
import styles from '../styles/Summary.module.scss'

interface SummaryProps {
  applicantInfo: {
    name: string
    email: string
    phone: string
    resume: string
    skills: { name: string; icon: string }[]
  }
}

export default function Summary({ applicantInfo: data }: SummaryProps) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Summary</h1>
        <p>Double-check everything looks OK before confirming</p>
      </div>

      <div className={styles.infoContainer}>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
      </div>

      <div className={styles.skillsContainer}>
        {data.skills.map((item) => (
          <div className={styles.skill}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}
