import React from 'react'
import classNames from 'classnames'
import InputMask from 'react-input-mask'
import { string, func, bool } from 'prop-types'

import css from './Inputs.module.scss'

const inputProps = {
	id: string.isRequired,
	name: string.isRequired,
	value: string.isRequired,
	onInput: func.isRequired,
	disabled: bool,
	readOnly: bool,
	placeholder: string,
}

const TextInput = ({
	id,
	name,
	value,
	onInput,
	disabled,
	invalid,
	readOnly,
	placeholder,
}) => (
	<input
		id={id}
		name={name}
		value={value}
		onInput={({ currentTarget }) => onInput(currentTarget.value)}
		disabled={disabled}
		readOnly={readOnly}
		placeholder={placeholder}
		type="text"
		className={classNames(css.input, invalid && css.invalid)}
	/>
)

TextInput.propTypes = inputProps

const PhoneInput = ({
	id,
	name,
	value,
	onInput,
	disabled,
	invalid,
	readOnly,
	placeholder,
}) => (
	<InputMask
		id={id}
		name={name}
		value={value}
		onInput={({ currentTarget }) => {
			const value = currentTarget.value.replaceAll('_', '').substr(0, 16)
			onInput(value)
		}}
		mask="+7\ 999 999 99 99"
		disabled={disabled}
		readOnly={readOnly}
		placeholder={placeholder}
		type="text"
		className={classNames(css.input, invalid && css.invalid)}
	/>
)

PhoneInput.propTypes = inputProps

export {
	TextInput,
	PhoneInput
}
