import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Sidebar from '@/components/Sidebar'
import Forms from '@/components/Forms'

export default function Home() {
  const [progress, setProgress] = useState(1)

  const [applicantInfo, setApplicantInfo] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    skills: [],
  })

  const [isEmpty, setIsEmpty] = useState(applicantInfo.name == '' || applicantInfo.email == '' || applicantInfo.phone == '') 

  useEffect(() => {
    setIsEmpty(applicantInfo.name == '' || applicantInfo.email == '' || applicantInfo.phone == '')
  },[applicantInfo])

  

  return (
    <div className={styles.main}>
      <Head>
        <title>Developer Application</title>
        <meta name="description" content="developer application form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Sidebar progress={progress} />
        <Forms
          progress={progress}
          setProgress={setProgress}
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
          isEmpty={isEmpty}
        />
      </main>
    </div>
  )
}
