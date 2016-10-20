import React from 'react'

var Card = React.createClass({
    
    propTypes:{
        kind: React.PropTypes.string.isRequired
    },
    render: function()
    {
        var CardStyle = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "18",
        textAlign: "center"
      }
        return <div style={CardStyle}>
            {/* It's {this.props.kind} Card */} 
        <Author name="Wojciech Sasiela"/>    
        <DataTime date="19-10-2016 12:24"/>    
        <Image url="http://www.biznes-plus.pl/wp-content/uploads/2016/06/z1-1.png"/> 
        <Describe describe="Lorem ipsum"/> 
        </div>
    }
})

var Author = React.createClass({
    
    propTypes:{
        name: React.PropTypes.string.isRequired
    },
    render: function()
    {        
        return <span> Author: {this.props.name} <br/> </span>
    }
})

var DataTime = React.createClass({
    
    propTypes:{
        date: React.PropTypes.string.isRequired
    },
    render: function()
    {        
        return <span> DataTime: {this.props.date}  <br/> </span>
    }
})

var Image = React.createClass({
    
    propTypes:{
        url: React.PropTypes.string.isRequired
    },
    render: function()
    {
        var ImageStyle = {
            width:100,
            height:100,
            backgroundImage: 'url(' + this.props.url + ')',
            //backgroundColor: "blue"
        }
      
        return <div style={ImageStyle}> 
            
        </div>
    }
})

var Describe = React.createClass({
    propTypes:{
        describe: React.PropTypes.string
    },
    render: function()
    {
            var DescribeStyle = {
                width:50,
                height:50,
                //backgroundColor: "blue"
            }
        return <span style={DescribeStyle}> {this.props.describe}</span>
    }
})

export default React.createClass({
    render: function(){
        return <div> <Card kind="rectangle"/> </div>
            
    }
})
