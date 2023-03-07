import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Sidebar from '@/components/Sidebar'
import Forms from '@/components/Forms'
import ProgressButton from '@/components/ProgressButton'

export default function Home() {
  const [progress, setProgress] = useState(1)

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
        <Forms progress={progress} setProgress={setProgress} />
      </main>
    </div>
  )
}
