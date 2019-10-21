import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from './components/navbar'
import ExerciseEdit from './components/ExerciseEdit'
import ExerciseCreate from './components/ExerciseCreate'
import ExerciseList from './components/ExerciseList'
import UserCreate from './components/UserCreate'

function App() {
  return (
    
    <Router>
      <NavBar/>
      <br/>

      <Route path="/" exact component={ExerciseList}/>
      <Route path="/edit/:id" component={ExerciseEdit}/>
      <Route path="/create" component={ExerciseCreate}/>
      <Route path="/user/create" component={UserCreate}/>
    </Router>

  );
}

export default App;
