import React from 'react'
import styles from '../styles/PersonalInfo.module.scss'

export default function PersonalInfo() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Personal Info</h1>
        <p>Please enter your name, email address, and phone number</p>
      </div>
      <div className={styles.formContainer}>
        <div>
          <label>Name</label>
          <form>
            <input placeholder="e.g. Stephen King"></input>
          </form>
        </div>

        <div>
          <label>Email</label>
          <form>
            <input placeholder="e.g. stephenking@lorem.com"></input>
          </form>
        </div>

        <div>
          <label>Phone Number</label>
          <form>
            <input placeholder="+1 234 567 890"></input>
          </form>
        </div>
      </div>
    </div>
  )
}
