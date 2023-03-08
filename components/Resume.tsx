import React, { useState } from 'react'
import styles from '../styles/Resume.module.scss'
import Image from 'next/image'

export default function Resume() {

  const [resumeName, setResumeName] = useState('')

  function handleChange(e: any) {
    console.log(e)
    setResumeName(e.target.files[0].name)
  }

  return (
    <div className={styles.main}>
        <form action="" className={styles.uploadContainer}>
          <input
            type="file"
            id="file"
            name="file"
            className={styles.input}
            onChange={handleChange}
            accept=".pdf"
            data-testid='resume input'
          />
          <label htmlFor="file" className={styles.label}>
            Upload Resume
          </label>
          <p data-testid='resume name'>{resumeName != '' ? <Image src='/checkmark.webp' width={30} height={30} alt='green checkmark'/> : ''}{resumeName}</p>
        </form>
    </div>
  )
}
