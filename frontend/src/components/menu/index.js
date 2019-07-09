import React from 'react';

import { Switch,Redirect } from 'react-router-dom';

import bulletinCreate from '../bulletinCreate'


import bulletinList from '../bulletinList'

import bulletinDetails from '../bulletinDetail'

import pages from '../../pages'

import { createBrowserHistory } from 'history';

import './style.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Menu extends React.Component {

  componentWillMount()
  {
    <Redirect  to="/list" />
  }
  render() {  
    return (
      <Router ref='router' >


        <div>
          <nav className='navbar navbar-inverse'>
            <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
                <a class="navbar-brand" href="#"><img src='https://i2.wp.com/blog.socar.my/wp-content/uploads/2017/11/cropped-Logo_symbol-Copy.png?ssl=1'></img></a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul className='nav navbar-nav'>
              <li >
                <Link to={pages.AddBulletin} >Create</Link>
              </li>
              <li>
                <Link to={pages.ListBulletin}>Bulletins</Link>
              </li>
            </ul>
            </div>
          </nav>

          <Switch>
            <Route path={pages.AddBulletin} component={bulletinCreate} />
            <Route path={pages.ListBulletin} component={bulletinList} />
            <Route path={pages.BulletinDetails} component={bulletinDetails} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default Menu;