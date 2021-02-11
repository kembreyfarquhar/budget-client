import { FC, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

const AppRoutes: FC = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		if (window.localStorage.getItem('auth_token') && window.localStorage.getItem('user_id')) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	}, []);

	return (
		<>
			{loggedIn && <Redirect to='/' />}
			{!loggedIn && <Redirect to='/login' />}

			<Switch>
				<Route path='/' exact={true} component={HomePage} />
				<Route path='/login' component={LoginPage} />
			</Switch>
		</>
	);
};

export default AppRoutes;
