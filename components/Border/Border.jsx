import React from 'react'
import classNames from 'classnames'

import css from './Border.module.scss'

const Border = ({ className }) => <div className={classNames(css.border, className)} />

export default Border
