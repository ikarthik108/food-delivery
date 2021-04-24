import './App.css';
import Homepage from './Pages/Homepage/Homepage.js'
import {Switch,Route} from 'react-router-dom';
import MenuPage from './Pages/MenuPage/MenuPage.js'

const DosaVarietyPage=()=> {
	return (
		<div>
			<h1>You are on the Dosa Varieties Page</h1>
		</div>
		)
}

function App() {
  return (
    <div className="">
    	<Switch>
		    <Route exact path='/' component={Homepage}/>
		    <Route path='/dosa' component={DosaVarietyPage}/>
		    <Route path='/menu' component={MenuPage}/>
	    </Switch>
    </div>
  );
}

export default App;
