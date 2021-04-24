import './App.css';
import Homepage from './Pages/Homepage/Homepage.js'
import {Switch,Route} from 'react-router-dom';

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
      <Route exact path='/' component={Homepage}/>
      <Route path='/dosa' component={DosaVarietyPage}/>
    </div>
  );
}

export default App;
