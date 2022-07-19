import React, { useState } from 'react'

import { Button, TextInput, PhoneInput, Container, Icon } from '..'

import css from './SectionContactUs.module.scss'
import { ICON_COLORS, ICON_NAMES, ICON_SIZES } from '../Icon/Icon'

const SectionContactUs = () => {
	const handleSubmit = e => {
		e.preventDefault()
		console.log(e.currentTarget.name.value, e.currentTarget.phone.value)
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
						<TextInput id="name" name="name" placeholder="Имя" />
					</fieldset>
					<fieldset>
						<PhoneInput id="phone" name="phone" placeholder="Телефон" />
					</fieldset>
					<button className={css.submitButton} type="submit">Отправить</button>
				</div>
			</form>
		</Container>
	)
}

export default SectionContactUs
