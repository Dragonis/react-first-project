import React from 'react'


import app from './css/index.css';
import style from './css/menuexample.css';
import LikeCon from './components/LikeCon.js'
import Timer from './components/Timer'
import Contacts from './components/Contacts'
import MenuExample from './components/MenuExample'
import Example from './components/Example'
import Button from './components/Button'
import SearchExample from './components/SearchExample'
import Faker from 'Faker'
import styleSearchExample from './css/SearchExample.css';


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
    return (
      <div className="app" >
	   <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
  <Contacts kind={user.name}/>
		<Timer />
		<LikeCon />
        <Button />
		<Example />
		<SearchExample items={ libraries } />
      </div>
    );
  }
}


export default App;