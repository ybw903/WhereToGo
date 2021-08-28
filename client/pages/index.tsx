import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import TourCard from '../src/components/TourCard'
import { TourData } from '../src/type'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const testData: TourData[] = [
    {"title": "제목1", "content" : "내용1"},
    {"title": "제목2", "content" : "내용2"},
    {"title": "제목3", "content" : "내용3"},
    {"title": "제목4", "content" : "내용4"},
    {"title": "제목5", "content" : "내용5"}
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.card__wrapper}>
        {testData.map((tour,idx) => <TourCard key={idx} {...tour}></TourCard>)}
        </div>
        <div>
          <Link href="/schedules/create">
            <div>일정추가</div>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
