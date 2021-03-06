import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../action';
import Header from './Header';

const Dashboard = () => <h1>Dashboard</h1>
const SurveyNew = () => <h1>SurveyNew</h1>
const Landing = () => <h1>Landing</h1>

class App extends Component {
  componentDidMount() {
    this
      .props
      .fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/surveys' component={Dashboard}/>
            <Route path='/surveys/new' component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
