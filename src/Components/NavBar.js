import React, { useContext, useEffect } from 'react'
import { Navbar } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { UserStoreContext } from '../context/UserContext'
import { Link } from 'react-scroll'
import styled from 'styled-components'
const NavICY = styled(NavLink)`
	z-index: 40;
	font-size: 24px;
	position: absolute;
	width: 67px;
	height: 47px;
	left: 149px;
	top: 50px;

	font-family: 'Rosarivo', serif;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 34px;

	color: #ffffff;
`

const NavToday = styled(NavLink)`
	z-index: 40;
	position: absolute;
	width: 147px;
	height: 32px;
	left: 1030px;
	top: 47px;

	font-family: 'Rosarivo', serif;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 34px;

	color: #ffffff;
`
const NavHis = styled(Link)`
	z-index: 40;
	position: absolute;
	width: 85px;
	height: 34px;
	left: 1210px;
	top: 47px;

	font-family: 'Rosarivo', serif;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 34px;

	color: #ffffff;
`
const Logout1 = styled.button`
	z-index: 40;
	position: absolute;
	width: 80px;
	height: 34px;
	left: 1336px;
	top: 55px;

	font-family: 'Rosarivo', serif;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 34px;

	color: #ffffff;
`
const NavBar = () => {
	const history = useHistory()
	const userStore = useContext(UserStoreContext)

	const getProfile = () => {
		const profileValue = JSON.parse(localStorage.getItem('profile'))
		if (profileValue) {
			userStore.updateProfile(profileValue)
		}
	}
	useEffect(() => {
		getProfile()
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const logout = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('profile')
		history.replace('/')
		userStore.updateProfile(null)
	}
	return (
		<>
			<Navbar bg='muted' expand='lg' variant='dark' className='z-40 relative'>
				<NavICY className='navbar-brand ' to='/today' exact>
					ICY
				</NavICY>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<NavToday className='mr-4 text-white mt-2' to='/task/:1'>
						Today Task
					</NavToday>
					<NavHis
						className='mr-4 text-white mt-2 cursor-pointer'
						to='TextHis'
						spy={true}
						smooth={true}
					>
						History
					</NavHis>
					{userStore.profile && <Logout1 onClick={logout}>Log out</Logout1>}
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default NavBar
