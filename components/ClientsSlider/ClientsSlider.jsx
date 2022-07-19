import React from 'react'
import classNames from 'classnames'

import css from './ClientsSlider.module.scss'

const ClientsSlider = () => (
	<div className={css.wrapper}>
		<div className={classNames(css.row, css.first)}>
			<img src="/assets/clients.svg" alt=""/>
		</div>
		<div className={classNames(css.row, css.second)}>
			<img src="/assets/clients.svg" alt=""/>
		</div>
		<div className={classNames(css.row, css.third)}>
			<img src="/assets/clients.svg" alt=""/>
		</div>
	</div>
)

export default ClientsSlider
