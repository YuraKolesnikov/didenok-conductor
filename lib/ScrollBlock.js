import { useEffect } from 'react'

const ScrollBlock = ({ observedState }) => {
	useEffect(() => {
		if (!!observedState) {
			document.body.classList.add('blockScroll')
		} else {
			document.body.classList.remove('blockScroll')
		}
	}, [observedState])

	return null
}

export default ScrollBlock
