var React = require('react');
require('../styles.scss');

var Footer = React.createClass({
    render: function(){
        return (
            <h3 className='footer'><a href='http://gregperlman.net'>By Greg Perlman</a></h3>    
        )
    }
})

module.exports = Footer;