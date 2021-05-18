import React from 'react'
import styled from 'styled-components'
import BG1 from '../Images/BG1.jpg'
const HeroImage = styled.img`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
	z-index: 40;
	transform: matrix(-1, 0, 0, 1, 0, 0);
	@media only screen and (max-width: 736px) {
		position: absolute;
		z-index: 40;
		width: 691px;
		height: 798px;
		top: 0;
		left: 0;
		border-radius: 0px;
	}
`
const Hero = () => {
	return (
		<>
			<HeroImage className='bg-gradient-to-t' src={BG1} alt='bg'></HeroImage>
		</>
	)
}

export default Hero
