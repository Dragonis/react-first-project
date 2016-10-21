import React, { Component } from 'react';
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


class Home extends Component {
    render(){
        return (
				<div>
					<h1>Home Page</h1> <br/>
					aaaa <br/>
					bbb<br/><br/>
				</div>);
    }
}

// More components
class Car extends Component {
    render(){
        return (
				<div>
					<h1>Cars page</h1> <br/>
					ccc <br/>
					ddd<br/><br/>
				</div>
				);
    }
}

class About extends Component {

  render(){
	  var style = {
      color: "red"
    };
        return (
				<div style={style}>
					<h1>About Page</h1><br/>
					eee <br/>
					fff<br/><br/>
				</div>
				);
    }

}


class App extends React.Component {
	
	
  render() {
	
  return (

	<div className="app" >
  	 <MenuExample items={ ['Home', 'Cars', 'About'] } />,

      <a href="#/home">Home</a>
      <a href="#/cars">Cars</a>
      <a href="#/about">About</a>
	  
    <Router>
        <Route path="/home" component={Home}/>
        <Route path="/cars" component={Car}/>
        <Route path="/about" component={About}/>
    </Router>
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