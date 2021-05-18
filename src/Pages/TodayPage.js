import React, { useContext, useEffect, useState } from 'react'
import { UserStoreContext } from '../context/UserContext'
import NavBar from '../Components/NavBar'
import BGT from '../Images/thumb-1920-601563.jpg'
import styled from 'styled-components'
import './style.css'
import img1 from '../Images/Siamparagon.jpg'
import img2 from '../Images/plaza.jpg'
import img3 from '../Images/union.jpg'
import img4 from '../Images/world.jpg'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
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
	left: 1080px;
	top: 113px;
	font-style: normal;
	font-weight: normal;
	font-size: 64px;
	line-height: 100px;
	text-align: right;
`
const TodayTask = styled.p`
	z-index: 40;
	position: absolute;
	width: 301.02px;
	height: 67.99px;
	left: 150px;
	top: 384px;
	font-family: 'Rosarivo', serif;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 51px;

	color: #ffffff;
`

const TodayPage = () => {
	const userStore = useContext(UserStoreContext)
	const history = useHistory()
	const [id, setId] = useState()
	const GetId = async () => {
		const resp = await axios.get('http://127.0.0.1:8000/task/2/')
		setId(resp.data.id)
	}
	useEffect(() => {
		GetId()
	}, [])
	return (
		<div>
			<HeroImage className='bg-gradient-to-t' src={BGT} alt='bg'></HeroImage>
			<NavBar />

			{userStore.profile ? (
				<Welcome className='text-right mr-5 mt-2 z-40 relative'>
					Welcome <br /> Mr.
					{userStore.profile.name}
				</Welcome>
			) : null}
			<TodayTask>TODAY'S TASK</TodayTask>
			<div className='Cons'>
				<div id='container'>
					<p id='lo1' className='p-1'>
						Central Lardprao
					</p>
					<img
						id='img11'
						src={img2}
						alt='555'
						align='right'
						onClick={() => history.replace(`/task/${id}`)}
						className='cursor-pointer'
					/>
				</div>
				<div className='bet'></div>
				<div id='container'>
					<p id='lo1' className='p-1'>
						Siam Paragon
					</p>
					<img id='img11' src={img3} alt='555' align='right' />
				</div>
				<div className='bet'></div>
				<div id='container'>
					<p id='lo1' className='p-1'>
						Union Mall
					</p>
					<img id='img11' src={img4} alt='555' align='right' />
				</div>
				<div className='bet'></div>
				<div id='container'>
					<p id='lo1' className='p-1'>
						Central World
					</p>
					<img id='img11' src={img1} alt='555' align='right' />
				</div>
			</div>
		</div>
	)
}

export default TodayPage
