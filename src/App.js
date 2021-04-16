import React from 'react';
import './App.css';
import ButtonAppBar from './components/navbar';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path='/' render={()=>(<ButtonAppBar />)}/>
                <Redirect to="/" />
            </Switch>

        </Router>

    </div>
  );
}

export default App;
