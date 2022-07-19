import React from 'react'
import classNames from 'classnames'

import { oneOf } from 'prop-types'

import css from './Icon.module.scss'

const ICONS = {
	small_logo: (
		<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13.9242 9.38269H12.5905V11.2499L11.1356 9.91617L10.2141 10.8619L11.4751 12.2441H9.68066V13.6747H11.4751L10.2141 14.9842L11.3053 15.9784L12.5905 14.6932V16.5361H13.9242V14.6932L15.2579 15.9784L16.2279 14.9842L14.9912 13.6747H16.7856V12.2441H14.9912L16.2279 10.8619L15.2579 9.91617L13.9242 11.2499V9.38269Z" fill="#313131"/>
			<path d="M13.9727 12.244H9.68066V13.6747H11.4751L10.2141 14.9841L11.3053 15.9783L12.5905 14.6932V16.5361H13.9242L13.9727 12.244Z" fill="#1F9DA5"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M22.3811 16.2729C21.037 20.0379 17.4395 22.7325 13.2126 22.7325C7.83752 22.7325 3.48014 18.3751 3.48014 13C3.48014 7.62488 7.83752 3.26749 13.2126 3.26749C17.4395 3.26749 21.037 5.96205 22.3811 9.72713H25C23.5689 4.56175 18.8336 0.769775 13.2126 0.769775C6.45807 0.769775 0.982422 6.24543 0.982422 13C0.982422 19.7545 6.45807 25.2302 13.2126 25.2302C18.8336 25.2302 23.5689 21.4382 25 16.2729H22.3811Z" fill="#313131"/>
		</svg>
	),
	arrow: (
		<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M52 0H0V17.3333H21.7401L6.46328 33.1977L19.6836 45.2429L35.2542 29.6723V52H51.4124L52 0Z" />
		</svg>
	),
	vk: (
		<svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M38.1569 18.5726C38.1569 20.5048 37.8209 22.3676 37.2011 24.1127C34.6996 31.1695 27.5312 36.2664 19.0785 36.2664C10.6033 36.2664 3.41994 31.1418 0.933388 24.0574C0.328553 22.333 0 20.484 0 18.5726C0 8.80127 8.54237 0.878906 19.0785 0.878906C29.6145 0.878906 38.1569 8.80127 38.1569 18.5726Z" fill="#313131"/>
			<path d="M20.1423 26.8023C11.9565 26.8023 7.28914 21.4059 7.09766 12.4119H11.2145C11.3461 19.0075 14.3619 21.7979 16.7555 22.3745V12.4119H20.621V18.0966C22.9786 17.8544 25.4678 15.26 26.3055 12.4004H30.1591C29.8449 13.8807 29.2172 15.2826 28.3153 16.5186C27.4134 17.7546 26.2567 18.7982 24.9173 19.584C26.412 20.3008 27.7319 21.3147 28.7902 22.559C29.8484 23.8032 30.6209 25.2494 31.0567 26.8023H26.8082C25.8986 24.0695 23.6248 21.9478 20.621 21.6596V26.8023H20.1542H20.1423Z" fill="white"/>
		</svg>
	),
	telegram: (
		<svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M38.6257 18.5726C38.6257 20.5048 38.2896 22.3676 37.6699 24.1127C35.1684 31.1695 28 36.2664 19.5472 36.2664C11.072 36.2664 3.88869 31.1418 1.40214 24.0574C0.797303 22.333 0.46875 20.484 0.46875 18.5726C0.46875 8.80127 9.01112 0.878906 19.5472 0.878906C30.0833 0.878906 38.6257 8.80127 38.6257 18.5726Z" fill="#313131"/>
			<path d="M26.567 24.1124C26.4176 24.7633 26.2832 25.4143 26.1189 26.0583C25.7456 27.4918 24.9093 27.845 23.5204 27.111C22.1539 26.3907 20.8845 25.5251 19.6002 24.6872C19.1223 24.3755 18.6294 24.0847 18.1441 23.7869C17.8006 23.5584 17.4422 23.3437 17.1286 23.0875C16.5312 22.6027 16.4938 22.1803 17.0165 21.6263C17.6662 20.9407 18.4129 20.3451 19.1297 19.7218C20.4141 18.6 21.7283 17.4989 22.9454 16.3147C23.0425 16.2246 23.1321 16.1277 23.2217 16.0307C23.3412 15.9061 23.386 15.7676 23.2814 15.6222C23.1694 15.4698 22.9828 15.4837 22.8409 15.546C22.5945 15.6568 22.363 15.7884 22.1315 15.9269C19.7943 17.3742 17.4571 18.8216 15.1199 20.2689C14.978 20.359 14.8287 20.4421 14.6868 20.539C13.7609 21.1484 12.7603 21.3285 11.6477 21.0445C10.6322 20.7883 9.61664 20.5113 8.61605 20.1997C8.54884 20.1789 8.47417 20.1512 8.40697 20.1235C8.07842 19.985 7.69759 19.8742 7.68266 19.4656C7.66026 19.064 8.01121 18.8839 8.32483 18.7315C9.34782 18.226 10.4306 17.8521 11.4834 17.4227C15.8218 15.6706 20.1527 13.9047 24.5583 12.2912C25.32 12.0142 26.0816 11.7233 26.8881 11.564C28.0156 11.3493 28.5383 11.7649 28.4263 12.8313C28.3217 13.7939 28.1873 14.7565 28.038 15.7122C27.6124 18.4615 27.1195 21.2038 26.5894 23.9323C26.5595 23.9947 26.567 24.057 26.567 24.1124Z" fill="#FDFEFE"/>
		</svg>
	),
	yandex: (
		<svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19.9609 35.9904C30.4651 35.9904 38.9804 28.1611 38.9804 18.5032C38.9804 8.84536 30.4651 1.01611 19.9609 1.01611C9.45673 1.01611 0.941406 8.84536 0.941406 18.5032C0.941406 28.1611 9.45673 35.9904 19.9609 35.9904Z" fill="white"/>
			<path d="M19.2198 0.878906C21.0029 13.8221 14.9107 19.1922 1.09183 17.6776C0.200295 9.27823 8.66991 1.29199 19.2198 0.878906Z" fill="#313131"/>
			<path d="M21.0015 0.878906C31.1056 1.29199 39.5753 9.14054 38.8323 17.6776C25.4592 19.3299 19.2185 13.5467 21.0015 0.878906Z" fill="#313131"/>
			<path d="M19.0688 35.9915C9.55903 36.2669 0.64364 28.2807 0.94082 19.606C14.1653 19.1929 20.5547 21.2583 19.0688 35.9915Z" fill="#313131"/>
			<path d="M38.9823 19.6055C39.428 28.0049 31.4042 35.578 21.1515 36.2665C19.9628 21.5333 25.7578 19.1925 38.9823 19.6055Z" fill="#313131"/>
		</svg>
	),
	hamburger: (
		<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="26" height="2.58793" rx="1.29396" fill="#313131"/>
			<rect y="7.58789" width="26" height="2.58793" rx="1.29396" fill="#313131"/>
			<rect y="15.1758" width="26" height="2.58793" rx="1.29396" fill="#313131"/>
		</svg>
	),
	close: (
		<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1L21 21M21 1L1 21" stroke="#313131" strokeWidth="2.5"/>
		</svg>
	),
	barcode: (
		<svg width="363" height="151" viewBox="0 0 363 151" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="6.54054" height="151" fill="#313131"/>
			<rect x="19.6211" width="6.54054" height="151" fill="#313131"/>
			<rect x="111.188" width="6.54054" height="151" fill="#313131"/>
			<rect x="143.891" width="6.54054" height="151" fill="#313131"/>
			<rect x="160.242" width="6.54054" height="151" fill="#313131"/>
			<rect x="186.406" width="6.54054" height="151" fill="#313131"/>
			<rect x="206.027" width="6.54054" height="151" fill="#313131"/>
			<rect x="242" width="6.54054" height="151" fill="#313131"/>
			<rect x="346.648" width="6.54054" height="151" fill="#313131"/>
			<rect x="284.514" width="6.54054" height="151" fill="#313131"/>
			<rect x="127.541" width="6.54054" height="151" fill="#313131"/>
			<rect x="94.8379" width="6.54054" height="151" fill="#313131"/>
			<rect x="32.7031" width="3.27027" height="151" fill="#313131"/>
			<rect x="39.2422" width="3.27027" height="151" fill="#313131"/>
			<rect x="68.6758" width="3.27027" height="151" fill="#313131"/>
			<rect x="75.2148" width="3.27027" height="151" fill="#313131"/>
			<rect x="81.7578" width="3.27027" height="151" fill="#313131"/>
			<rect x="137.352" width="3.27027" height="151" fill="#313131"/>
			<rect x="153.703" width="3.27027" height="151" fill="#313131"/>
			<rect x="170.055" width="3.27027" height="151" fill="#313131"/>
			<rect x="176.594" width="3.27027" height="151" fill="#313131"/>
			<rect x="196.215" width="3.27027" height="151" fill="#313131"/>
			<rect x="228.918" width="3.27027" height="151" fill="#313131"/>
			<rect x="235.459" width="3.27027" height="151" fill="#313131"/>
			<rect x="255.082" width="3.27027" height="151" fill="#313131"/>
			<rect x="264.893" width="3.27027" height="151" fill="#313131"/>
			<rect x="271.432" width="3.27027" height="151" fill="#313131"/>
			<rect x="277.973" width="3.27027" height="151" fill="#313131"/>
			<rect x="294.324" width="3.27027" height="151" fill="#313131"/>
			<rect x="313.947" width="3.27027" height="151" fill="#313131"/>
			<rect x="359.73" width="3.27027" height="151" fill="#313131"/>
			<rect x="320.488" width="3.27027" height="151" fill="#313131"/>
			<rect x="327.027" width="3.27027" height="151" fill="#313131"/>
			<rect x="333.566" width="3.27027" height="151" fill="#313131"/>
			<rect x="340.109" width="3.27027" height="151" fill="#313131"/>
			<rect x="104.648" width="3.27027" height="151" fill="#313131"/>
			<rect x="49.0547" width="9.81081" height="151" fill="#313131"/>
			<rect x="215.838" width="9.81081" height="151" fill="#313131"/>
			<rect x="300.865" width="9.81081" height="151" fill="#313131"/>
		</svg>
	)
}

export const ICON_NAMES = {
	SMALL_LOGO: 'small_logo',
	ARROW: 'arrow',
	VK: 'vk',
	TELEGRAM: 'telegram',
	YANDEX: 'yandex',
	HAMBURGER: 'hamburger',
	BARCODE: 'barcode',
	CLOSE: 'close',
}

ICON_NAMES.LIST = [
	ICON_NAMES.SMALL_LOGO,
	ICON_NAMES.ARROW,
	ICON_NAMES.VK,
	ICON_NAMES.TELEGRAM,
	ICON_NAMES.YANDEX,
	ICON_NAMES.HAMBURGER,
	ICON_NAMES.BARCODE,
	ICON_NAMES.CLOSE,
]

export const ICON_COLORS = {
	BLACK: 'black',
	ACCENT_1: 'accent_1',
	ACCENT_2: 'accent_2',
}

ICON_COLORS.LIST = [
	ICON_COLORS.BLACK,
	ICON_COLORS.ACCENT_1,
	ICON_COLORS.ACCENT_2
]

export const ICON_SIZES = {
	MEDIUM: 'medium',
	LARGE: 'large'
}

ICON_SIZES.LIST = [ ICON_SIZES.MEDIUM, ICON_SIZES.LARGE ]

const Icon = ({ icon, color, size, className }) => {
	const classList = classNames({
		[css.icon]: true,
		...(icon !== ICON_NAMES.SMALL_LOGO && { [css[color]]: true, [css[size]]: true }),
		...(icon === ICON_NAMES.SMALL_LOGO && { [css.logo]: true }),
		[className]: true
	})

	return (
		<span className={classList}>{ICONS[icon]}</span>
	)
}

Icon.defaultProps = {
	color: ICON_COLORS.BLACK,
	size: ICON_SIZES.MEDIUM
}

Icon.propTypes = {
	icon: oneOf(ICON_NAMES.LIST),
	color: oneOf(ICON_COLORS.LIST),
	size: oneOf(ICON_SIZES.LIST),
}

export default Icon
