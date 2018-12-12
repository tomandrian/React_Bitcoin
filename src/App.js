import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Component/home';
import Rb from './Component/Br';
import Br from './Component/Rb';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <center>
           <h2>Soal No.3 Ujian FrontEnd JC7 </h2>
           <h3>Thomas Andrian</h3>
           <Link to='/Home' ><button class="btn btn-info">Info</button></Link>
           <Link to='/Rb'><button class="btn btn-success">Bitcoin - Rupiah</button></Link>
           <Link to='/Br'><button class="btn btn-danger">Rupiah - Bitcoin </button></Link>

           <div>
           <Route path='/Home' component={Home}></Route>
           <Route path='/Rb' component={Rb}></Route>
           <Route path='/Br' component={Br}></Route>
           </div>

           </center>
        </div>
        


      </div>
    );
  }
}

export default App;