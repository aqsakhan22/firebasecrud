
import Home from './pages/Home'
import View from './pages/View';
import AddEdit from './pages/AddEdit';
import About from './pages/About';
import Header from './components/Header';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
function App() {
  return (
    <Router>

<div className="App">
   <Header/>
  <ToastContainer position="top-center"/>
    <Switch>
       <Route path="/" exact component={Home}/> 
       <Route path="/add" exact component={AddEdit}/>
       <Route path="/update/:id" exact component={AddEdit}/>
       <Route path="/view/:id" exact component={View}/>
       <Route path="/about" component={About}/>
    </Switch>
    </div>
    </Router>
   
  );
}

export default App;
