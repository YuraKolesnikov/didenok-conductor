import React from 'react'
import classNames from 'classnames'

import {
  Border,
  Container,
  ContentBox,
  Logo,
  Hero,
  LargeBox,
  SectionContactUs,
  ClientsSlider,
} from '../components'

import css from './index.module.scss'

const LARGE_BOXES = [
  {
    position: 1,
    backgroundImg: '/assets/large_boxes/box_1.svg',
    mobileBackgroundImg: '/assets/large_boxes/box_1_mobile.svg',
    title: 'Большой опыт работы',
    text: 'С разными сферами бизнеса и личными брендами'
  },
  {
    position: 2,
    backgroundImg: '/assets/large_boxes/box_2.svg',
    mobileBackgroundImg: '/assets/large_boxes/box_2_mobile.svg',
    title: 'Детально и погруженно',
    text: 'Подходим к продвижению и настройке рекламы'
  },
  {
    position: 3,
    backgroundImg: '/assets/large_boxes/box_3.svg',
    mobileBackgroundImg: '/assets/large_boxes/box_3_mobile.svg',
    title: 'Собственная команда специалистов',
    text: 'В штате, закроем все задачи по проекту без привлечения фрилансеров.'
  },
  {
    position: 4,
    backgroundImg: '/assets/large_boxes/box_4.png',
    mobileBackgroundImg: '/assets/large_boxes/box_4.png',
    title: 'Глубокая аналитика',
    text: 'В сферах креатива и стратегии'
  },
]

export default function Home() {

  return (
    <>
      <Border className={css.underNav} />
      <Container className={css.container}>
        <div className={css.logoWrapper}>
          <Logo />
        </div>
        <Hero />
      </Container>
      <Border />
      <Container className={css.container}>
        <div className={css.grid}>
          <ContentBox
            title="Strategy"
            text="Разрабатываем коммуникационные и SMM-стратегии для брендов в DIGITAL."
            underscoreColor="white"
            backgroundColor="accent_2"
          />
          <ContentBox
            title="Creative"
            text="Креативим, пишем сценарии, разрабатываем спецпроекты."
            underscoreColor="accent_2"
            backgroundColor="black"
          />
          <ContentBox
            className={css.tall}
            title="SMM"
            text="Комплексное ведение соцсетей бренда: от контент-плана до продвижения."
            underscoreColor="accent_2"
            backgroundColor="black"
          />
          <ContentBox
            title="Production"
            text="Продюсируем съёмки любой сложности.Фотографируем, снимаем, монтируем."
            underscoreColor="accent_2"
            backgroundColor="white"
          />
          <ContentBox
            title="Promo"
            text="Протестируем и запустим только эффективные инструменты продвижения: таргетинг, посевы, инфлюенсеры, контекстная и SEO-реклама."
            underscoreColor="accent_2"
            backgroundColor="black"
          />
          <ContentBox
            title="Design"
            text="Дизайн у нас в крови: от простой графики для соцсетей до сложных 3D-роликов."
            underscoreColor="accent_2"
            backgroundColor="white"
          />
          <ContentBox
            title="Digital Pr"
            text="Занимаемся корпоративным PR во всех его проявлениях: абонентский, антикризисный, репутационный маркетинг и спецпроекты."
            underscoreColor="accent_2"
            backgroundColor="black"
          />
          <ContentBox
            title="App / Web Production"
            text="Cоздаем лендинги и сайты, разрабатываем приложения и ботов."
            underscoreColor="accent_2"
            backgroundColor="white"
          />
        </div>
      </Container>
      <Border />
      <Container className={css.largeBoxGrid}>
        {LARGE_BOXES.map(box => (
          <LargeBox {...box} />
        ))}
        <Border className={css.border_1} />
        <Border className={css.border_2} />
        <Border className={css.border_3} />
        <Border className={css.border_4} />
      </Container>
      <Border />
      <Container
        className={classNames(css.container, css.clientsSlider)}>
        <ClientsSlider />
      </Container>
      <Border />
      <SectionContactUs />
      <Border />
    </>
  )
}
