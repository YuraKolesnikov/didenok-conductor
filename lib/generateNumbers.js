/* Генерирует массив из 3 чисел, сумма которых равна x */
export const generateNumbers = x => {
	let min, max

	/* Генерируем 1-е число */
	min = 1
	max = x - 1

	const first = Math.floor(Math.random() * (max - min)) + min

	/* Генерируем 2-е число */
	max = max - first

	const second = Math.floor(Math.random() * (max - min)) + min

	/* Получаем остаток */
	const third = x - (first + second)

	return [first, second, third]
}
