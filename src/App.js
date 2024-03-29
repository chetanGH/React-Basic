import React from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/HomePageComponent/homepage.component';
import ShopPage from './pages/ShopPage/shopPage.component';
import './App.css';
import Header from './components/header/header.component';




function App(){
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path="/shop" component={ ShopPage }/>
      </Switch>
    </div>
  )
}

export default App;
