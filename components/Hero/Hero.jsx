import React, { useState, useEffect } from 'react'

import { Button, Icon } from '../index'
import { ICON_COLORS, ICON_NAMES, ICON_SIZES } from '../Icon/Icon'
import { generateNumbers } from '../../lib/generateNumbers'

import bg from '../../public/assets/hero.png'

import css from './Hero.module.scss'

const Hero = () => {
	const [first, updateFirst] = useState([])
	const [second, updateSecond] = useState([])

	useEffect(() => {
		updateFirst(generateNumbers(11))
		updateSecond(generateNumbers(11))
	}, [])

	const generateNewNumbers = () => {
		console.log('YEET')
		updateFirst(generateNumbers(11))
		updateSecond(generateNumbers(11))
	}

	return (
		<section className={css.hero} style={{ backgroundImage: `url(${bg.src})` }}>
			<div className={css.content}>
				<div className={css.left}>
					<h1 className={css.title}>Комплексное продвижение в социальных медиа</h1>
				</div>
				<div className={css.right}>
					<h2 className={css.title}>
						Ваш счастливый билет в Digital
						<Icon onClick={generateNewNumbers} icon={ICON_NAMES.ARROW} color={ICON_COLORS.ACCENT_2} size={ICON_SIZES.LARGE} className={css.arrow} />
					</h2>
					<div className={css.generatedNumbers}>
						{first.map((num, i) => <span className={css.number} key={`generated_number_${num}_${i}_${num * i}`}>{num}</span>)}
						{second.map((num, i) => <span className={css.number} key={`generated_number_${num}_${i}_${num * i}`}>{num}</span>)}
					</div>
					<Icon icon="barcode" className={css.barcode} />
				</div>
			</div>
			<Button className={css.button}>Обсудить проект</Button>
		</section>
	)
}

export default Hero
