import React from 'react'

import { Footer, Navbar } from '../components'

import css from './Layout.module.scss'

const Layout = ({ children }) => {
	return (
		<div className={css.wrapper}>
			<Navbar />
			<main className={css.main}>
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default Layout
