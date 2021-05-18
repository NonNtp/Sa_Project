import React, { useContext } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { UserStoreContext } from '../context/UserContext'
import * as yup from 'yup'
import axios from 'axios'
const TextLogin = styled.label`
	position: absolute;
	z-index: 40;
	font-family: 'Limelight';
	color: white;
	left: 922px;
	top: 150px;
	width: 325px;
	height: 117px;
	font-size: 96px;
	line-height: 117px;

	@media only screen and (max-width: 736px) {
		position: absolute;
		width: 238px;
		height: 88px;
		left: 85px;
		top: 82px;
		z-index: 40;
		font-family: Limelight;
		font-style: normal;
		font-weight: normal;
		font-size: 72px;
		line-height: 88px;
		text-align: center;
		color: #ffffff;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`
const FormLogin = styled.input`
	position: absolute;
	width: 500px;
	height: 60px;
	left: 832px;
	top: 318px;
	z-index: 40;
	background: #c4c4c4;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
	border-radius: 40px;
	@media only screen and (max-width: 736px) {
		position: absolute;
		width: 338px;
		height: 66px;
		left: 38px;
		top: 233px;
		z-index: 40;
		background: #d5896f;
		box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
		border-radius: 40px;
	}
`
const FormLogin2 = styled.input`
	position: absolute;
	width: 500px;
	height: 60px;
	left: 835px;
	top: 429px;
	z-index: 40;
	background: #c4c4c4;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
	border-radius: 40px;
	@media only screen and (max-width: 736px) {
		position: absolute;
		width: 338px;
		height: 68px;
		left: 38px;
		top: 312px;
		z-index: 40;
		background: #d5896f;
		box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
		border-radius: 40px;
	}
`
const ButtonLogin = styled.button`
	position: absolute;
	z-index: 40;
	width: 505px;
	height: 90px;
	left: 835px;
	top: 550px;
	background: #f97f7b;
	background-blend-mode: screen;
	border-radius: 15px;
	font-size: 72px;
	line-height: 86px;
	text-align: center;
	font-family: 'Zilla Slab', serif;
	@media only screen and (max-width: 736px) {
		position: absolute;
		width: 338px;
		height: 79px;
		left: 38px;
		top: 428px;
		z-index: 40;
		background: #f97f7b;
		border-radius: 15px;
		font-family: 'Sanchez', serif;
		font-size: 36px;
	}
`

const Login = () => {
	const schema = yup.object().shape({
		email: yup
			.string()
			.required('กรุณากรอกอีเมล')
			.email('รูปแบบอีเมล์ไม่ถูกต้อง'),
		password: yup
			.string()
			.required('กรุณากรอกรหัสผ่าน')
			.min(4, 'รหัสผ่านต้อง 4 ตัวขึ้นไป '),
	})
	const history = useHistory()
	const { addToast } = useToasts()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})
	const userStore = useContext(UserStoreContext)
	const onSubmit = async (data) => {
		try {
			const apiUrl = 'https://api.codingthailand.com/api/login'
			const resp = await axios.post(apiUrl, {
				email: data.email,
				password: data.password,
			})

			localStorage.setItem('token', JSON.stringify(resp.data))
			// get profile
			const urlProfile = 'https://api.codingthailand.com/api/profile'
			const respProfile = await axios.get(urlProfile, {
				headers: {
					Authorization: 'Bearer ' + resp.data.access_token,
				},
			})
			// console.log(respProfile.data.data.user)
			localStorage.setItem(
				'profile',
				JSON.stringify(respProfile.data.data.user)
			)
			addToast('เข้าระบบเรียบร้อยแล้ว', {
				appearance: 'success',
			})
			const profileValue = JSON.parse(localStorage.getItem('profile'))
			userStore.updateProfile(profileValue)
			// history.replace('/today')

			profileValue.name === 'RedCats'
				? history.replace('/today')
				: history.replace('/admin')
		} catch (error) {
			addToast(error.response.data.message, {
				appearance: 'error',
			})
		}
	}
	return (
		<>
			<TextLogin>Login</TextLogin>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormLogin
					controlId='email'
					placeholder='username'
					type='email'
					{...register('email')}
					className={`form-control ${errors.email ? 'is-invalid' : ''}`}
				></FormLogin>
				<FormLogin2
					controlId='password'
					placeholder='password'
					type='password'
					{...register('password')}
					className={`form-control ${errors.password ? 'is-invalid' : ''}`}
				></FormLogin2>
				<ButtonLogin type='submit'>Login</ButtonLogin>
			</form>
		</>
	)
}

export default Login
