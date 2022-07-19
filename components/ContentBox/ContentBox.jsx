import React from 'react'
import classNames from 'classnames'

import css from './ContentBox.module.scss'

export const UNDERSCORE_COLORS = {
	WHITE: 'white',
	ACCENT_2: 'accent_2'
}

UNDERSCORE_COLORS.LIST = [
	UNDERSCORE_COLORS.WHITE,
	UNDERSCORE_COLORS.ACCENT_2,
]

const ContentBox = ({ title, text, underscoreColor, backgroundColor, backgroundImage, className }) => {
	const boxClassList = classNames({
		[css.box]: true,
		[css[`bg_${backgroundColor}`]]: true,
		[className]: !!className
	})

	return (
		<div className={boxClassList}>
			<div className={css.content}>
				<h4 className={css.title}>{title}<span className={css[underscoreColor]}>_</span></h4>
				<p className={css.text}>{text}</p>
			</div>
		</div>
	)
}

export default ContentBox
