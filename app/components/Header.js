var React = require('react');
require('../styles.scss');

var Header = React.createClass({
    render: function(){
        return (
            <h1 className='header'>React Markdown Previewer</h1>    
        )
    }
})

module.exports = Header;