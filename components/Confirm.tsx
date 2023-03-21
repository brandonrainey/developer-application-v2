import React from 'react'
import styles from '../styles/Confirm.module.scss'
import Image from 'next/image'

export default function Confirm() {
  return (
    <div className={styles.main}>
      <Image
        src="/icon-thank-you.svg"
        width={100}
        height={100}
        alt="thank you"
        className={styles.thankYou}
      />
      <div className={styles.wrapper}>
        <h1>Thank You!</h1>
        <p>
          Thanks for submitting your application! We will review your
          application to see if there is a potential fit in the upcoming days.
          If you have any questions, feel free to contact us at
          support@coolcompany.com
        </p>
      </div>
    </div>
  )
}
