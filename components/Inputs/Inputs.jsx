import React from 'react'
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
		className={css.input}
	/>
)

TextInput.propTypes = inputProps

const PhoneInput = ({
	id,
	name,
	value,
	onInput,
	disabled,
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
		className={css.input}
	/>
)

PhoneInput.propTypes = inputProps

export {
	TextInput,
	PhoneInput
}
