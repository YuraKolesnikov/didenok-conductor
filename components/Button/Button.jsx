import React from 'react'
import classNames from 'classnames'
import { oneOf, func } from 'prop-types'

import css from './Button.module.scss'

export const BUTTON_SIZES = {
	WHITE: 'white',
	BLACK: 'black',
	ACCENT_1: 'accent_1',
	ACCENT_2: 'accent_2',
}

BUTTON_SIZES.LIST = [
	BUTTON_SIZES.WHITE,
	BUTTON_SIZES.BLACK,
	BUTTON_SIZES.ACCENT_1,
	BUTTON_SIZES.ACCENT_2
]

const Button = ({ color, children, onClick, type,className }) => (
	<button
		className={classNames(css.button, css[color], className)}
		onClick={onClick}
		type={type}>
		{children}
	</button>
)

Button.propTypes = {
	color: oneOf(BUTTON_SIZES.LIST),
	onClick: func,
}

export default Button
