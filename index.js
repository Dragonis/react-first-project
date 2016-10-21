import React from 'react'
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';

import app from './css/app.css';
import stylemenuExample from './css/menuexample.css';
import LikeCon from './components/LikeCon.js'
import Timer from './components/Timer'
import Contacts from './components/Contacts'
import MenuExample from './components/MenuExample'
import Table from './components/Table'
import Button from './components/Button'
import Faker from 'Faker'
import SearchExample from './components/SearchExample'
import stylemenuExampleSearchExample from './css/SearchExample.css';


// other examples
// http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/



var text= Faker.Name.findName();

var user = {
  name: Faker.Name.findName(),
  email: Faker.Internet.email(),
  address: Faker.Address.streetAddress(),
  bio: Faker.Lorem.sentence(),
  image: Faker.Image.avatar()
};

var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];




class App extends React.Component {
	
	
  render() {
	    {/*
	  Practicise/Exercise skill with react-route
	  // to learn --> https://css-tricks.com/learning-react-router/
	  <Router>
    <Route path="/home" component={App} />
    <Route path="/users" component={Table} />
    <Route component={MenuExample}>
		<Route path="/widgets" component={LikeCon} />
	</Route>
  </Router> 
	  */}
  return (
	<div className="app" >

  
	   <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
  <Contacts kind={user.name}/>
		<Timer />
		<LikeCon />
        <Button />
		<Table />
		<SearchExample items={ libraries } />
      </div>
    );
  }
}


export default App;