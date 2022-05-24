import type { NextPage } from 'next'
import Head from 'next/head'
import classNames from "classnames";
import s from '../styles/main.module.scss'
import MainContent from "../components/main-content/main-content";
import Surface from "../components/surface/surface";

const Main: NextPage = () => {
  return (
      <>
          <Head>
              <title>Secret Dashboard Project - Main</title>
          </Head>
          <div className={s.container}>
              <header className={s.header}>

              </header>
              <main className={s.main}>
                  <MainContent cols={6}>
                      <Surface className={classNames(s.item)}>
                          This is Div
                      </Surface>
                      <Surface className={classNames(s.item)}>
                          This is Div
                      </Surface>
                      <Surface className={classNames(s.item)}>
                          This is Div
                      </Surface>
                      <Surface className={classNames(s.item)}>
                          This is Div
                      </Surface>
                  </MainContent>
                  <MainContent cols={3}>
                      <Surface className={classNames(s.item)}>
                          This is Div
                      </Surface>
                      <Surface className={classNames(s.item)}>
                          This is Div
                      </Surface>
                      <Surface className={classNames(s.item)}>
                          This is Div
                      </Surface>
                  </MainContent>
                  <MainContent cols={2}>
                      <Surface className={classNames(s.item)}>
                          This is Div
                      </Surface>
                      <Surface className={classNames(s.item)}>
                          This is Div
                      </Surface>
                  </MainContent>
                  <MainContent cols={1}>
                      <Surface className={classNames(s.item)}>
                          This is Div
                      </Surface>
                  </MainContent>
                  <MainContent cols={6}>
                      <Surface className={classNames(s.item)}>
                          This is Div
                      </Surface>
                  </MainContent>
              </main>
              <aside className={s.aside}>
                  <nav>

                  </nav>
              </aside>
              <footer className={s.footer}>

              </footer>
          </div>
      </>
  )
}

export default Main
