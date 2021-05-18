import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import TodayPage from './Pages/TodayPage'
import UserStoreProvider from './context/UserContext'
import { ToastProvider } from 'react-toast-notifications'
import TestPage from './Pages/TestPage'
import TodayTaskPage from './Pages/TodayTaskPage'
import DeliverlyPage from './Pages/DeliverlyPage'
import AdminPage from './Pages/AdminPage'
import AdminPage2 from './Pages/AdminPage2'
const App = () => {
	return (
		<UserStoreProvider>
			<ToastProvider
				autoDismiss
				autoDismissTimeout={3000}
				placement='top-center'
			>
				<Router>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/today' component={TodayPage} />
						<Route exact path='/test' component={TestPage} />
						<Route exact path='/task/:id' component={TodayTaskPage} />
						<Route exact path='/delivery' component={DeliverlyPage} />
						<Route exact path='/admin' component={AdminPage} />
						<Route exact path='/admin2' component={AdminPage2} />
					</Switch>
				</Router>
			</ToastProvider>
		</UserStoreProvider>
	)
}

export default App
