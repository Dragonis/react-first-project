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
	  // Constructor is responsible for setting up props and setting initial stte
    constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            // State needed
            cars: []
        };
    }

    componentDidMount(){
        // Static data
          const data = [
            {
                id: 1,
                name: 'Honda Accord Crosstour',
                year: '2010',
                model: 'Accord Crosstour',
                make: 'Honda',
                media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
                price: '$16,811'

            },
            {
                id: 2,
                name: 'Mercedes-Benz AMG GT Coupe',
                year: '2016',
                model: 'AMG',
                make: 'Mercedes Benz',
                media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
                price: '$138,157'

            },
            {
                id: 3,
                name: 'BMW X6 SUV',
                year: '2016',
                model: 'X6',
                make: 'BMW',
                media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
                price: '$68,999'
            },
            {
                id: 4,
                name: 'Ford Edge SUV',
                year: '2016',
                model: 'Edge',
                make: 'Ford',
                media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
                price: '$36,275'
            },
            {
                id: 5,
                name: 'Dodge Viper Coupe',
                year: '2017',
                model: 'Viper',
                make: 'Dodge',
                media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
                price: '$123,890'
            }
			];
        // Update state
        this.setState({cars: data});
    }
    render(){
		   const carNode = this.state.cars.map((car) => {
            return (
                <a
                    href="#"
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </a>
            )
        });
        return (
				<div>
					<h1>Cars page</h1> <br/>
					ccc <br/>
					ddd<br/><br/>
					 <div className="list-group">
						{carNode}
					</div>
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
/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" > */
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