import type { NextPage } from 'next'
import Head from 'next/head'
import classNames from "classnames";
import styles from '../styles/main.module.scss'
import MainContent from "../components/main-content/main-content";

const Main: NextPage = () => {
    console.log(styles)
  return (
      <>
          <Head>
              <title>Secret Dashboard Project - Main</title>
          </Head>
          <div className={styles.container}>
              <header className={styles.header}>

              </header>
              <main className={styles.main}>
                  <MainContent cols={6}>
                      {
                          [1,2,3,4,5,6].map((id, index) => {
                              return (
                                  <div key={index} className={classNames(styles.item, styles['item_' + id])}>
                                      This is Div {id}
                                  </div>
                              )
                          })
                      }
                  </MainContent>
                  <MainContent cols={3}>
                      {
                          [1,2,3].map((id, index) => {
                              return (
                                  <div key={index} className={classNames(styles.item, styles['item_' + id])}>
                                      This is Div {id}
                                  </div>
                              )
                          })
                      }
                  </MainContent>
                  <MainContent cols={2}>
                      {
                          [1,2].map((id, index) => {
                              return (
                                  <div key={index} className={classNames(styles.item, styles['item_' + id])}>
                                      This is Div {id}
                                  </div>
                              )
                          })
                      }
                  </MainContent>
              </main>
              <aside className={styles.aside}>
                  <nav>

                  </nav>
              </aside>
              <footer className={styles.footer}>

              </footer>
          </div>
      </>
  )
}

export default Main
