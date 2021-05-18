import React from 'react'
import BGT from '../Images/bgtask.jpg'
import NavBar from '../Components/NavBar'
import styled from 'styled-components'
import img2 from '../Images/plaza.jpg'
import P1 from '../Images/P1.png'
import P2 from '../Images/P2.png'
import P3 from '../Images/P3.png'
import P4 from '../Images/P4.png'
import './style.css'
import { Link } from 'react-scroll'
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
const Assign = styled.div`
	z-index: 40;
	position: absolute;
	width: 479px;
	height: 99px;
	left: 150px;
	top: 168px;

	font-family: Stardos Stencil;
	font-style: normal;
	font-weight: normal;
	font-size: 72px;
	line-height: 99px;
	text-align: center;

	color: #ffffff;
`

const AddMore = styled.div`
	z-index: 40;
	position: absolute;
	width: 745px;
	height: 50px;
	left: 150px;
	top: 267px;

	font-family: Stardos Stencil;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 50px;
	/* identical to box height */

	text-align: center;

	color: #ffffff;
`
const ConP1 = styled(Link)`
	z-index: 40;
	position: absolute;
	width: 252.18px;
	height: 288.64px;
	left: 150px;
	top: 375px;

	background: #b18e8a;
	border-radius: 15px;
`
const ConP2 = styled.div`
	z-index: 40;
	position: absolute;
	width: 252.18px;
	height: 288.64px;
	left: 419.28px;
	top: 375px;

	background: #70708b;
	border-radius: 15px;
`
const ConP3 = styled.div`
	z-index: 40;
	position: absolute;
	width: 252.18px;
	height: 288.64px;
	left: 688.56px;
	top: 375px;

	background: #70708b;
	border-radius: 15px;
`
const ConP4 = styled.div`
	z-index: 40;
	position: absolute;
	width: 252.18px;
	height: 288.64px;
	left: 963.82px;
	top: 375px;

	background: #70708b;
	border-radius: 15px;
`
const ImgP1 = styled.img`
	z-index: 40;
	position: absolute;
	width: 78px;
	height: 77px;
	left: 242px;
	top: 393px;
	border-radius: 50%;
`
const ImgP2 = styled.img`
	z-index: 40;
	position: absolute;
	width: 68.39px;
	height: 76.97px;
	left: 511.6px;
	top: 393.28px;
	border-radius: 50%;
`
const ImgP3 = styled.img`
	z-index: 40;
	position: absolute;
	width: 68.39px;
	height: 76.97px;
	left: 780.88px;
	top: 396.17px;
	border-radius: 50%;
`
const ImgP4 = styled.img`
	z-index: 40;
	position: absolute;
	width: 68.39px;
	height: 76.97px;
	left: 1056.14px;
	top: 396.17px;
	border-radius: 50%;
`
const TextP1 = styled.div`
	z-index: 40;
	position: absolute;
	width: 144px;
	height: 157px;
	left: 204px;
	top: 493px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	text-align: center;

	color: #ffffff;
`
const TextP2 = styled.div`
	z-index: 40;
	position: absolute;
	width: 133px;
	height: 44px;
	left: 479px;
	top: 494px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	text-align: center;

	color: #ffffff;
`
const TextP3 = styled.div`
	z-index: 40;
	position: absolute;
	width: 145px;
	height: 89px;
	left: 742px;
	top: 494px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	text-align: center;

	color: #ffffff;
`
const TextP4 = styled.div`
	z-index: 40;
	position: absolute;
	width: 159px;
	height: 89px;
	left: 1010px;
	top: 494px;

	font-family: Sanchez;
	font-style: italic;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;
	text-align: center;

	color: #ffffff;
`
const PersonHis = styled.img`
	z-index: 40;
	position: absolute;
	width: 273px;
	height: 254px;
	left: 551px;
	top: 1821px;
	border-radius: 50%;
`
const AdminPage2 = () => {
	return (
		<>
			<HeroImage className='bg-gradient-to-t' src={BGT} alt='bg'></HeroImage>
			<NavBar />
			<Assign>ASSIGN TASKS</Assign>
			<AddMore>Add the task to your riders to deliver happiness</AddMore>
			<ConP1
				to='TextHis'
				spy={true}
				smooth={true}
				className='cursor-pointer'
			></ConP1>
			<ConP2></ConP2>
			<ConP3></ConP3>
			<ConP4></ConP4>
			<ImgP1 src={P1} alt='555'></ImgP1>
			<ImgP2 src={P2} alt='555'></ImgP2>
			<ImgP3 src={P3} alt='555'></ImgP3>
			<ImgP4 src={P4} alt='555'></ImgP4>
			<TextP1>Four arms 1 task remaining Out for delivery</TextP1>
			<TextP2>Upgrade no tasks remaining</TextP2>
			<TextP3>Echo echo No tasks remaining Out for delivery</TextP3>
			<TextP4>Humangosaur 2 tasks remaining Out for delivery</TextP4>
			<div id='Border1'></div>
			<div id='BorderHis2'></div>
			<div id='TextHis'>History</div>
			<div id='Text1'>Delivered</div>
			<div id='Text2'>
				Type of Ice <br /> QTY{' '}
			</div>
			<div id='Text3'>Arrived Time</div>
			<div id='Text4'>Status</div>
			<div id='Container3'></div>
			<img src={img2} alt='img' id='imgHis' />
			<div id='textImgHis1'>Central World</div>
			<div id='TextImgHis2'>
				CUBE <br /> 2{' '}
			</div>
			<div id='TextImgHis3'>11 : 36 PM</div>
			<div id='TextImgHis4'>On Going</div>
			<PersonHis src={P1}></PersonHis>
			<div id='footer'>ICY</div>
		</>
	)
}

export default AdminPage2
