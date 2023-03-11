import React from 'react'
import styles from '../styles/ProgressButton.module.scss'

interface ApplicantInfo {
  name: string;
  resume: string;
  skills: {
    name: string,
    icon: string
  };
}

type ButtonProps = {
  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>
  applicantInfo: {
    name: string,
    resume: string,
    skills: {name: string, icon: string}[]
  }
  setApplicantInfo: React.Dispatch<React.SetStateAction<ApplicantInfo>>
}

export default function ProgressButton({ progress, setProgress }: ButtonProps) {
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

      <button className={styles.next} onClick={handleNextClick}>
        Next Step
      </button>
    </div>
  )
}
