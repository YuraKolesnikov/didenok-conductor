import React from 'react'
import classNames from 'classnames'

import css from './LargeBox.module.scss'

const LargeBox = ({ title, text, backgroundImg, mobileBackgroundImg, position }) => (
	<div className={classNames(css.box, css[`position_${position}`])}>
		<img className={css.backgroundImg} src={backgroundImg} alt=""/>
		<img className={classNames(css.backgroundImg, css.mobile)} src={mobileBackgroundImg} alt=""/>
		<div className={css.content}>
			<h5 className={css.title}>{title}</h5>
			<p className={css.text}>{text}</p>
		</div>
	</div>
)

export default LargeBox
