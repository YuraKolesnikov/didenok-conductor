import React, { useState } from 'react'
import classNames from 'classnames'
import { Link as ScrollLink } from 'react-scroll'

import { Container, Icon } from '../index'
import { ICON_NAMES } from '../Icon/Icon'
import ScrollBlock from '../../lib/ScrollBlock'

import css from './Navbar.module.scss'

const Navbar = () => {
	const [isNavbarOpen, toggleNavbarOpen] = useState(false)

	const goToServices = () => {
		if (typeof window !== 'undefined') {
			const servicesSection = document.getElementById('services')
			servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}

		toggleNavbarOpen(false)
	}

	return (
		<header>
			<ScrollBlock observedState={isNavbarOpen} />
			<Container className={css.wrapper}>
				<nav className={classNames(css.nav, isNavbarOpen && css.open)}>
					<ScrollLink to="services" duration={500} className={css.navLink} spy smooth>Услуги</ScrollLink>
					<a onClick={() => toggleNavbarOpen(false)} className={css.navLink} href="#">Кейсы</a>
					<a onClick={() => toggleNavbarOpen(false)} className={css.navLink} href="#">Новости</a>
					<a onClick={() => toggleNavbarOpen(false)} className={css.navLink} href="#">Работа у нас</a>
					<button onClick={() => toggleNavbarOpen(false)} className={css.closeButton}>
						<Icon icon={ICON_NAMES.CLOSE} />
					</button>
				</nav>
				<div className={css.mobileNav}>
					<div className={css.logoWrapper}>
						<Icon icon={ICON_NAMES.SMALL_LOGO} />
					</div>
					<div className={css.hamburgerWrapper}>
						<button onClick={() => toggleNavbarOpen(true)} className={css.hamburger}>
							<Icon icon={ICON_NAMES.HAMBURGER} />
						</button>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Navbar
