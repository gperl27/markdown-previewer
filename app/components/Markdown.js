var React = require('react');
var Remarkable = require('remarkable');
require('../styles.scss');


var MarkdownContainer = React.createClass({
    getInitialState: function() {
        return {
            value:
            "# Here's an H1\n"
            + "\n ## Here's an H2"
            + "\n ### Here's an H3"
            + "\n #### Here's an H4"
            + "\n ##### Here's an H5"
            + "\n ###### Here's an H6"
            + "\n Paragraphs are separated by a blank line\n"
            + "\n Leave two spaces to do a  "
            + '\nline break\n\nText attributes: *italic*, **bold**,' 
            + '\n`monospace`, ~~strikethrough~~ .\n'
            + '\nUnordered list:\n'
            + '\n  * HTML\n  * CSS\n  * JavaScript\n'
            + '\nNumbered list:\n'
            + '\n  1. One\n  2. Two\n  3. Three\n'
        }
    },
    handleChange: function() {
        this.setState({
            value: this.refs.textarea.value
        });
    },
    rawMarkup: function() {
        var md = new Remarkable();
        return { __html: md.render(this.state.value)};
    },
    render: function () {
        return (
            <div className='markdown-editor row'>
    
                <div className='col-md-6 box'>
                    <textarea
                        onChange={this.handleChange}
                        ref="textarea"
                        defaultValue={this.state.value} />
                </div>
                <div className='col-md-6 box'>
                    <div
                        className='content'
                        dangerouslySetInnerHTML={this.rawMarkup()} 
                        />
                    
                </div>
            </div>
            
        )
    }
});

module.exports = MarkdownContainer;