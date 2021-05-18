import React, { useContext } from 'react'
import { UserStoreContext } from '../context/UserContext'
import NavBar from '../Components/NavBar'
import BGT from '../Images/thumb-1920-601563.jpg'
import styled from 'styled-components'
import MapAdmin from '../Images/mapadmin.png'
import { useHistory } from 'react-router-dom'
const HeroImage = styled.img`
	position: fixed;
	height: 100%;
	width: 100%;
	max-width: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
	z-index: 40;

	@media only screen and (max-width: 736px) {
		position: absolute;
		z-index: 40;
		top: 0;
		left: 0;
		border-radius: 0px;
	}
`
const Welcome = styled.p`
	color: #ffffff;
	font-family: 'Rosarivo', serif;
	position: absolute;
	width: 278px;
	height: 186px;
	left: 1150px;
	top: 113px;
	font-style: normal;
	font-weight: normal;
	font-size: 64px;
	line-height: 100px;
	text-align: right;
`
const TextAdd = styled.div`
	z-index: 40;
	position: absolute;
	width: 232px;
	height: 60px;
	left: 150px;
	top: 303px;

	font-family: Rosarivo;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 51px;
	text-align: center;

	color: #ffffff;
`
const MapAd = styled.img`
	z-index: 40;
	position: absolute;
	width: 543px;
	height: 237px;
	left: 150px;
	top: 368px;
`
const Form1 = styled.div`
	z-index: 40;
	position: absolute;
	width: 543px;
	height: 46px;
	left: 150px;
	top: 651px;

	background: #ffffff;
	border-radius: 35px;
`
const Container = styled.div`
	z-index: 40;
	position: absolute;
	width: 429.15px;
	height: 329px;
	left: 1020px;
	top: 368px;

	background: rgba(157, 107, 99, 0.5);
`
const FormC1 = styled.div`
	z-index: 40;
	position: absolute;
	width: 348.09px;
	height: 39.04px;
	left: 1059.53px;
	top: 402.45px;

	background: #ffffff;
	border-radius: 35px;
`
const FormC2 = styled.div`
	z-index: 40;
	position: absolute;
	width: 348.09px;
	height: 39.04px;
	left: 1059.53px;
	top: 465.03px;

	background: #ffffff;
	border-radius: 35px;
`
const FormC3 = styled.div`
	z-index: 40;
	position: absolute;
	width: 167.68px;
	height: 39.04px;
	left: 1060.42px;
	top: 528px;

	background: #ffffff;
	border-radius: 35px;
`
const FormC4 = styled.div`
	z-index: 40;
	position: absolute;
	width: 167.68px;
	height: 39.04px;
	left: 1240.14px;
	top: 527.62px;

	background: #ffffff;
	border-radius: 35px;
`
const FormC5 = styled.div`
	z-index: 40;
	position: absolute;
	width: 174.04px;
	height: 62.01px;
	left: 1055.53px;
	top: 579.87px;

	background: #ffffff;
	border-radius: 35px;
`
const FormC6 = styled.div`
	z-index: 40;
	position: absolute;
	width: 157.35px;
	height: 62.01px;
	left: 1250.47px;
	top: 579.87px;

	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 35px;
`
const Text1 = styled.div`
	z-index: 40;
	position: absolute;
	width: 128.74px;
	height: 17.8px;
	left: 1059.53px;
	top: 412.79px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	text-align: center;

	color: #c4c4c4;
`
const Text2 = styled.div`
	z-index: 40;
	position: absolute;
	width: 30.99px;
	height: 17.8px;
	left: 1059.53px;
	top: 475.37px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	text-align: center;

	color: #c4c4c4;
`
const Text3 = styled.div`
	z-index: 40;
	position: absolute;
	width: 73.91px;
	height: 17.8px;
	left: 1060.42px;
	top: 537.95px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	text-align: center;

	color: #c4c4c4;
`
const Text4 = styled.div`
	z-index: 40;
	position: absolute;
	width: 42.12px;
	height: 17.8px;
	left: 1240.14px;
	top: 537.95px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	text-align: center;

	color: #c4c4c4;
`
const Text5 = styled.div`
	z-index: 40;
	position: absolute;
	width: 46.89px;
	height: 17.8px;
	left: 1055.53px;
	top: 601.11px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	text-align: center;

	color: #c4c4c4;
`
const Text6 = styled.div`
	z-index: 40;
	position: absolute;
	width: 83.45px;
	height: 17.8px;
	left: 1250.47px;
	top: 600.54px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	text-align: center;

	color: #000000;
`
const TextAddForm = styled.div`
	z-index: 40;
	position: absolute;
	width: 164px;
	height: 26px;
	left: 166px;
	top: 660px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 24px;
	line-height: 31px;
	text-align: center;

	color: #c4c4c4;
`
const AdminPage = () => {
	const userStore = useContext(UserStoreContext)
	const history = useHistory()
	return (
		<>
			<HeroImage className='bg-gradient-to-t' src={BGT} alt='bg'></HeroImage>
			<NavBar />
			{userStore.profile ? (
				<Welcome className='text-right mr-5 mt-2 z-40 relative'>
					Welcome <br />
					{userStore.profile.name}
				</Welcome>
			) : null}
			<TextAdd>Add location</TextAdd>
			<MapAd src={MapAdmin} />
			<Form1></Form1>
			<TextAddForm>Add Location</TextAddForm>
			<Container></Container>
			<FormC1></FormC1>
			<FormC2></FormC2>
			<FormC3></FormC3>
			<FormC4></FormC4>
			<FormC5></FormC5>
			<FormC6
				onClick={() => history.replace('/admin2')}
				className='cursor-pointer'
			></FormC6>
			<Text1>Order Number</Text1>
			<Text2>Tel.</Text2>
			<Text3>Ice type</Text3>
			<Text4>QTY</Text4>
			<Text5>Price</Text5>
			<Text6
				onClick={() => history.replace('/admin2')}
				className='cursor-pointer'
			>
				Add task
			</Text6>
		</>
	)
}

export default AdminPage
