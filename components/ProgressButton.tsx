import React from 'react'
import styles from '../styles/ProgressButton.module.scss'

interface ApplicantInfo {
  name: string
  email: string
  phone: string
  resume: string
  skills: {
    name: string
    icon: string
  }[]
}

interface ButtonProps {
  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>
  applicantInfo: {
    name: string
    email: string
    phone: string
    resume: string
    skills: { name: string; icon: string }[]
  }
  setApplicantInfo: React.Dispatch<React.SetStateAction<ApplicantInfo>>
  isEmpty: boolean
}

export default function ProgressButton({
  progress,
  setProgress,
}: ButtonProps) {
  function handleNextClick() {
    setProgress(progress + 1)
  }

  function handleBackClick() {
    setProgress(progress - 1)
  }

  return (
    <div className={styles.main}>
      <button
        className={progress == 1 ? styles.hidden : styles.back}
        onClick={handleBackClick}
      >
        Go Back
      </button>

      <button className={`${styles.next}`} onClick={handleNextClick}>
        {progress == 4 ? 'Finish' : 'Next Step'}
      </button>
    </div>
  )
}
