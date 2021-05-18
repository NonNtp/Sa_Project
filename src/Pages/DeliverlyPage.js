import React from 'react'
import styled from 'styled-components'
import BG1 from '../Images/bgtask.jpg'
import Plaza from '../Images/plaza.jpg'
import World from '../Images/world.jpg'
import union from '../Images/union.jpg'
import Siam from '../Images/Siamparagon.jpg'
import { useHistory } from 'react-router-dom'
import Map from '../Images/map2.jpg'
const HeroImage = styled.img`
	z-index: 40;
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
`
const Status = styled.div`
	z-index: 40;
	position: absolute;
	width: 135px;
	height: 59px;
	left: 150px;
	top: 73px;

	font-family: Mate SC;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 59px;
	/* identical to box height */

	text-align: center;

	color: #ffffff;
`
const Map2 = styled.img`
	z-index: 40;
	position: absolute;
	width: 704px;
	height: 445px;
	left: 150px;
	top: 159px;
`

const Form1 = styled.div`
	z-index: 40;
	position: absolute;
	width: 329.62px;
	height: 72.84px;
	left: 874.11px;
	top: 159px;
	background: #c4c4c4;
	border-radius: 35px;
`
const Form2 = styled.div`
	z-index: 40;
	position: absolute;
	width: 329.62px;
	height: 72.84px;
	left: 874px;
	top: 244px;

	background: #c4c4c4;
	border-radius: 35px;
`
const Form3 = styled.div`
	z-index: 40;
	position: absolute;
	width: 329.62px;
	height: 72.84px;
	left: 874.38px;
	top: 329.51px;

	background: #c4c4c4;
	border-radius: 35px;
`
const Form4 = styled.div`
	z-index: 40;
	position: absolute;
	width: 329.62px;
	height: 72.84px;
	left: 874px;
	top: 415px;
	background: #c4c4c4;
	border-radius: 35px;
`
const Complete = styled.button`
	z-index: 40;
	position: absolute;
	width: 317px;
	height: 90px;
	left: 887px;
	top: 514px;
	background: #f1f3f3;
	box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 35px;
`
const Text1 = styled.div`
	z-index: 40;
	position: absolute;
	width: 184px;
	height: 22px;
	left: 893px;
	top: 166px;

	font-family: Mate SC;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 29px;

	color: #000000;
`
const Text2 = styled.div`
	z-index: 40;
	position: absolute;
	width: 153px;
	height: 26px;
	left: 898px;
	top: 267px;

	font-family: Mate SC;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 29px;

	color: #000000;
`
const Text3 = styled.div`
	z-index: 40;
	position: absolute;
	width: 133px;
	height: 32px;
	left: 893px;
	top: 350px;

	font-family: Mate SC;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 29px;

	color: #000000;
`
const Text4 = styled.div`
	z-index: 40;
	position: absolute;
	width: 168px;
	height: 48px;
	left: 893px;
	top: 434px;

	font-family: Mate SC;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 29px;

	color: #000000;
`
const TextComplete = styled.div`
	z-index: 40;
	position: absolute;
	width: 199px;
	height: 42px;
	left: 946px;
	top: 538px;

	font-family: Mate SC;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 44px;
	text-align: center;

	color: #000000;
	cursor: pointer;
`
const Img1 = styled.img`
	z-index: 40;
	position: absolute;
	width: 133.42px;
	height: 72.84px;
	left: 1071px;
	top: 159px;
	border-radius: 35px;
`
const Img2 = styled.img`
	z-index: 40;
	position: absolute;
	width: 133.58px;
	height: 72.84px;
	left: 1069.62px;
	top: 244.33px;
	border-radius: 35px;
`
const Img3 = styled.img`
	z-index: 40;
	position: absolute;
	width: 133.58px;
	height: 72.84px;
	left: 1070px;
	top: 329.33px;
	border-radius: 35px;
`
const Img4 = styled.img`
	z-index: 40;
	position: absolute;
	width: 130.2px;
	height: 72.84px;
	left: 1075px;
	top: 415.06px;
	border-radius: 35px;
`
const DeliverlyPage = () => {
	const history = useHistory()
	return (
		<>
			<HeroImage className='bg-gradient-to-t' src={BG1} alt='bg'></HeroImage>
			<Status>Status</Status>
			<Map2 src={Map} alt='555' />
			<Form1></Form1>
			<Text1>
				Central <br /> Lardprao
			</Text1>
			<Img1 src={Plaza} alt='plaza'></Img1>
			<Form2></Form2>
			<Text2>Siam Paragon</Text2>
			<Img2 src={Siam} alt='plaza'></Img2>
			<Form3></Form3>
			<Text3>Union Mall</Text3>
			<Img3 src={union} alt='plaza'></Img3>
			<Form4></Form4>
			<Text4>Central World</Text4>
			<Img4 src={World} alt='plaza'></Img4>
			<Complete onClick={() => history.replace('/today')}></Complete>
			<TextComplete onClick={() => history.replace('/today')}>
				Complete
			</TextComplete>
		</>
	)
}

export default DeliverlyPage
