import React from 'react'
import styles from '../styles/ProgressButton.module.scss'

type ButtonProps = {
  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>
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
