import './App.css';
import Homepage from './Pages/Homepage/Homepage.js'
import {Switch,Route} from 'react-router-dom';
import MenuPage from './Pages/MenuPage/MenuPage.js'
import Header from './Components/Header/Header.js'
import SignInAndSignUp from './Pages/Signin&SignUp/Signin&Signup.js'


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
    <Header/>
    	<Switch>
		    <Route exact path='/' component={Homepage}/>
		    <Route path='/dosa' component={DosaVarietyPage}/>
		    <Route path='/menu' component={MenuPage}/>
		    <Route path='/signIn' component={SignInAndSignUp}/>
	    </Switch>
    </div>
  );
}

export default App;
