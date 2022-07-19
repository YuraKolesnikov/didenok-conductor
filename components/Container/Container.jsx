import React from 'react'
import classNames from 'classnames'

import css from './Container.module.scss'

const Container = ({ className, children }) => (
	<section className={css.wrapper}>
		<div className={classNames(css.container, className)}>
			{children}
		</div>
	</section>
)

export default Container
