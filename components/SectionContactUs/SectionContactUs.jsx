import React, { useState } from 'react'

import { Button, TextInput, PhoneInput, Container, Icon } from '..'

import css from './SectionContactUs.module.scss'
import { ICON_COLORS, ICON_NAMES, ICON_SIZES } from '../Icon/Icon'

const SectionContactUs = () => {
	const [formValues, updateFormValues] = useState({
		name: '',
		phone: ''
	})

	const [errors, updateErrors] = useState({
		name: false,
		phone: false,
	})

	const onUpdateField = ({ key, value }) => {
		updateFormValues({
			...formValues,
			[key]: value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		updateErrors({
			name: false,
			phone: false,
		})

		updateErrors({
			name: !formValues.name,
			phone: !formValues.phone
		})

		if (!!formValues.name && !!formValues.phone) {
			/* Тута можно прикрутить запрос на бэк */
			console.log(formValues)
			alert(`Запрос на бэк с именем ${formValues.name} и телефоном ${formValues.phone}`)
		}
	}

	return (
		<Container className={css.sectionWrapper}>
			<div className={css.contacts}>
				<img src="/assets/form.png" alt=""/>
				<h4 className={css.contactsTitle}>
					Контакты
					<Icon icon={ICON_NAMES.ARROW} color={ICON_COLORS.ACCENT_1} size={ICON_SIZES.MEDIUM} className={css.arrow} />
				</h4>
				<h4 className={css.citiesTitle}>Москва - Минск - Алматы<span>_</span></h4>
			</div>
			<form className={css.form} onSubmit={handleSubmit}>
				<legend className={css.legend}>Ты всегда можешь связаться с нами по вопросам сотрудничества, партнерства</legend>
				<div className={css.fields}>
					<fieldset>
						<TextInput
							onInput={value => onUpdateField({ key: 'name', value })}
							value={formValues.name}
							invalid={errors.name}
							id="name"
							name="name"
							placeholder="Имя"
						/>
					</fieldset>
					<fieldset>
						<PhoneInput
							onInput={value => onUpdateField({ key: 'phone', value })}
							value={formValues.phone}
							invalid={errors.phone}
							id="phone"
							name="phone"
							placeholder="Телефон"
						/>
					</fieldset>
					<button className={css.submitButton} type="submit">Отправить</button>
				</div>
			</form>
		</Container>
	)
}

export default SectionContactUs
