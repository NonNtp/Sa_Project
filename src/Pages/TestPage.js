import React, { useEffect, useState } from 'react'
import axios from 'axios'
const TestPage = () => {
	const [status, setStatus] = useState(false)
	const getData = async () => {
		const resp = await axios.get(`http://127.0.0.1:8000/task/2`)
		setStatus(resp.data.status)
	}
	useEffect(() => {
		getData()
	})
	return (
		<>
			<button className='btn btn-primary'>Click !</button>
			<p>Status is : {String(status)}</p>
		</>
	)
}

export default TestPage
