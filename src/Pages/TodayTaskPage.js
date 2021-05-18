import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import BgTask from '../Images/bgtask.jpg'
import NavBar from '../Components/NavBar'
import img2 from '../Images/plaza.jpg'
import MapB from '../Images/MapB.jpg'
import { useHistory, useParams } from 'react-router-dom'
import './style.css'
import axios from 'axios'
const HeroImage = styled.img`
	position: fixed;
	width: 100%;
	height: 100%;
	left: auto;
	top: auto;
	z-index: 40;
`
const Text = styled.p`
	z-index: 40;
	position: absolute;
	width: 523px;
	height: 105px;
	left: 151px;
	top: 160px;
	font-family: 'Rosarivo', serif;
	font-style: normal;
	font-weight: normal;
	font-size: 72px;
	line-height: 99px;

	color: #ffffff;
`

const ImgLocation = styled.img`
	z-index: 40;
	position: absolute;
	width: 479.22px;
	height: 219.74px;
	left: 151px;
	top: 310.35px;
`
const Map = styled.img`
	z-index: 40;
	position: absolute;
	width: 563.3px;
	height: 583.07px;
	left: 653.7px;
	top: 315.17px;
`
const GoDe = styled.button`
	z-index: 40;
	position: absolute;
	width: 562.41px;
	height: 83.85px;
	left: 653.7px;
	top: 927.15px;
	background: #b18e8a;
	box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 35px;
`
const TextGo = styled.div`
	font-size: 48px;
	font-family: 'Rosarivo', serif;
	color: #ffffff;
	padding-top: 7px;
`
const TextForm1 = styled.div`
	z-index: 40;
	position: absolute;
	width: 244.89px;
	height: 36.62px;
	left: 199.02px;
	top: 650.55px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 24px;
	line-height: 31px;
	text-align: center;

	color: #000000;
`
const TextForm2 = styled.div`
	z-index: 40;
	position: absolute;
	width: 165.02px;
	height: 23.09px;
	left: 198.43px;
	top: 714.06px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 24px;
	line-height: 31px;
	text-align: center;

	color: #000000;
`
const TextForm3 = styled.div`
	z-index: 40;
	position: absolute;
	width: 69.75px;
	height: 35.79px;
	left: 212.55px;
	top: 782.49px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 24px;
	line-height: 31px;
	text-align: center;

	color: #000000;
`
const TextForm4 = styled.div`
	z-index: 40;
	position: absolute;
	width: 82.11px;
	height: 23.13px;
	left: 424px;
	top: 783px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 24px;
	line-height: 31px;
	text-align: center;

	color: #031d44;
`
const TextForm5 = styled.div`
	z-index: 40;
	position: absolute;
	width: 294.01px;
	height: 60.72px;
	left: 219.67px;
	top: 859.69px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 48px;
	line-height: 61px;
	text-align: center;

	color: #000000;
`
const TodayTaskPage = () => {
	const history = useHistory()
	const [task, setTask] = useState('')
	const [tel, setTel] = useState('')
	const [type, setType] = useState('')
	const [quantity, setQuantity] = useState('')
	const [price, setPrice] = useState('')
	const [status, setStatusId] = useState(false)
	const [Time, setTime] = useState('')
	const { id } = useParams()
	const getStatus = async () => {
		const respStatus = await axios.get(`http://127.0.0.1:8000/task/${id}/`)
		setStatusId(respStatus.data.status)
		console.log(respStatus.data.status)
	}
	const onSubmit = async () => {
		const apiUrl = `http://127.0.0.1:8000/task/${id}/`
		const resp = await axios.put(apiUrl, {
			username: 'darknon123',
			task_name: 'TheOne',
			task_tel: '02132313131',
			ice_type: 'cube',
			quantity: 4,
			price: 200,
			status: false,
		})
	}
	const getDataTask = async () => {
		const respTask = await axios.get('http://127.0.0.1:8000/task/2/')
		setTask(respTask.data.task_name)
	}
	const getDataTel = async () => {
		const respTask = await axios.get('http://127.0.0.1:8000/task/2/')
		setTel(respTask.data.task_tel)
	}
	const getDataType = async () => {
		const respTask = await axios.get('http://127.0.0.1:8000/task/2/')
		setType(respTask.data.ice_type)
	}
	const getDataQuantity = async () => {
		const respTask = await axios.get('http://127.0.0.1:8000/task/2/')
		setQuantity(respTask.data.quantity)
	}
	const geTime = async () => {
		const respTask = await axios.get('http://127.0.0.1:8000/task/2/')
		setTime(respTask.data.time)
	}
	const getDataPrice = async () => {
		const respTask = await axios.get('http://127.0.0.1:8000/task/2/')
		setPrice(respTask.data.price)
	}
	useEffect(() => {
		getDataTel()
		getDataTask()
		getDataType()
		getDataQuantity()
		getDataPrice()
		getStatus()
		geTime()
	})
	const GotoDelivery = () => {
		history.replace('/delivery')
	}

	return (
		<>
			<HeroImage className='bg-gradient-to-t' src={BgTask} alt='bg'></HeroImage>
			<NavBar />
			<Text>Central LadPrao</Text>
			<ImgLocation src={img2} alt='555'></ImgLocation>
			<Map src={MapB} alt='666'></Map>
			<GoDe
				onClick={() => {
					GotoDelivery()
					onSubmit()
				}}
			>
				<TextGo>GO DELIVERY</TextGo>
			</GoDe>
			<div id='container1'></div>
			<div id='form1'></div>
			<TextForm1>{task}</TextForm1>
			<div id='form2'></div>
			<TextForm2>{tel}</TextForm2>
			<div id='form3'></div>
			<TextForm3>{type}</TextForm3>
			<div id='form4'></div>
			<TextForm4>{quantity}</TextForm4>
			<div id='form5'></div>
			<TextForm5>{price} BATH</TextForm5>
			<div id='Border1'></div>
			<div id='BorderHis'></div>
			<div id='TextHis'>History</div>
			<div id='Text1'>Delivered</div>
			<div id='Text2'>
				Type of Ice <br /> QTY{' '}
			</div>
			<div id='Text3'>Arrived Time</div>
			<div id='Text4'>Status</div>
			<div id='Container2'></div>
			<img src={img2} alt='img' id='imgHis' />
			<div id='textImgHis1'>Central Ladprao</div>
			<div id='TextImgHis2'>
				CUBE <br /> 4{' '}
			</div>
			<div id='TextImgHis3'>{Time}</div>
			<div id='TextImgHis4'>{String(status)}</div>
		</>
	)
}

export default TodayTaskPage
