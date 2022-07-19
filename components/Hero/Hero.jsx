import React from 'react'

import { Button, Icon } from '../index'

import bg from '../../public/assets/hero.png'
import css from './Hero.module.scss'
import { ICON_COLORS, ICON_NAMES, ICON_SIZES } from '../Icon/Icon'

const Hero = () => {
	return (
		<section className={css.hero} style={{ backgroundImage: `url(${bg.src})` }}>
			<div className={css.content}>
				<div className={css.left}>
					<h1 className={css.title}>Комплексное продвижение в социальных медиа</h1>
				</div>
				<div className={css.right}>
					<h2 className={css.title}>
						Ваш счастливый билет в Digital
						<Icon icon={ICON_NAMES.ARROW} color={ICON_COLORS.ACCENT_2} size={ICON_SIZES.LARGE} className={css.arrow} />
					</h2>
					<div className={css.generatedNumbers}>
						<span className={css.number}>1</span>
						<span className={css.number}>6</span>
						<span className={css.number}>4</span>
						<span className={css.number}>3</span>
						<span className={css.number}>3</span>
						<span className={css.number}>5</span>
					</div>
					<Icon icon="barcode" className={css.barcode} />
				</div>
			</div>
			<Button className={css.button}>Обсудить проект</Button>
		</section>
	)
}

export default Hero
