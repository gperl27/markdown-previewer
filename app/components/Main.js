var React = require('react');
require('../styles.scss');
var Header = require('./Header');
var Footer = require('./Footer');
var Markdown = require('./Markdown');

var Main = React.createClass({
    render: function(){
        return (
         <div className='container'>
            <Header />
            <Markdown />
            <Footer />
        </div>
        )
    }
})

module.exports = Main;