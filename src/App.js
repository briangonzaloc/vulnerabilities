import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import Home from './pages/Home';
import { store, history } from './redux/store/index'
import 'antd/dist/antd.css'

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" render={() => (<Redirect to="/home"/>) } />
				<Route exact path="/home" component={Home} />
			</Switch>
		</ConnectedRouter>
	</Provider>
);

export default App