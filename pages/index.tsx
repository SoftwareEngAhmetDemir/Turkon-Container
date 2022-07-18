import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="./container-tracking">
            <a>Container Tracking</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
