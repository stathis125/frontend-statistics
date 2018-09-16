import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'grommet/grommet.min.css';
import Home from './Home';
import Form from './Form';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/add" component={Form}/>
      <Route path="/edit/:id" component={Form}/>
		</Switch>
	</BrowserRouter>
)

export default App;

