import React from 'react'
import { Container, Icon, Logo } from '../index'

import css from './Footer.module.scss'
import { ICON_NAMES } from '../Icon/Icon'

const Footer = () => (
	<footer className={css.footer}>
		<Container className={css.wrapper}>
			<div className={css.main}>
				<div className={css.logoContainer}>
					<div className={css.logoWrapper}>
						<Logo />
					</div>
				</div>
				<div className={css.linkWrapper}>
					<a className={css.link} href="#">Кейсы</a>
				</div>
				<div className={css.linkWrapper}>
					<a className={css.link} href="">Работа у нас</a>
				</div>
				<div className={css.sociconWrapper}>
					<Icon className={css.icon} icon={ICON_NAMES.VK} />
					<Icon className={css.icon} icon={ICON_NAMES.TELEGRAM} />
					<Icon className={css.icon} icon={ICON_NAMES.YANDEX} />
				</div>
			</div>
		</Container>
	</footer>
)

export default Footer
