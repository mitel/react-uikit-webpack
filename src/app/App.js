var React = require('react');

// if CSS is used - three options
//require('uikit.css');
//require('datepicker.css');

require('uikit.gradient.css');
require('datepicker.gradient.css');

//require('uikit.almost-flat.css');
//require('datepicker.almost-flat.css');

// if LESS is used (copy uikit/fonts in uikit/less)
//require('uikit.less');
//require('datepicker.less');

// if SASS is used
// custom scss file may be written, with a subset of uikit.scss imports
//require('uikit.scss'); //add [@import "uikit-mixins.scss";] to the scss file
//require('datepicker.scss'); //add [@import "../uikit-mixins.scss";] to the scss file


// UIkit js modules:
// require('uikit'); //include the whole kit
require('imports?define=>false!core');
require('imports?define=>false!touch');
require('imports?define=>false!utility');

require('imports?define=>false!button');
require('imports?define=>false!offcanvas');
require('imports?define=>false!modal');
require('imports?define=>false!dropdown');
require('imports?define=>false!datepicker');


var DropdownTest = React.createClass({
    render() {
        return (
            <div>
                <div className="uk-button-dropdown" data-uk-dropdown="{justify:'#justify1'}">
                    <button className="uk-button">Justify <i className="uk-icon-caret-down"></i></button>
                    <div className="uk-dropdown uk-dropdown-small">
                        <ul className="uk-nav uk-nav-dropdown">
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-divider"></li>
                            <li><a href="#">Separated item</a></li>
                        </ul>
                    </div>
                </div>

                <div className="uk-button-dropdown" data-uk-dropdown="{mode:'click'}">
                    <button className="uk-button">Click <i className="uk-icon-caret-down"></i></button>
                    <div className="uk-dropdown uk-dropdown-small">
                        <ul className="uk-nav uk-nav-dropdown">
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-divider"></li>
                            <li><a href="#">Separated item</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});

var FlexBoxTest = React.createClass({
    render() {
        return (
            <div className="uk-flex">
                <div className="uk-width-1-4 uk-panel uk-panel-box">Box</div>
                <div className="uk-width-1-4 uk-panel uk-panel-box uk-margin-left">Box</div>
                <div className="uk-width-1-4 uk-panel uk-panel-box uk-margin-left" style={{height: 100 + 'px'}}>Box</div>
            </div>
        )
    }
});

var CommentTest = React.createClass({
    render() {
        return (
            <ul className="uk-comment-list">
                <li>
                    <article className="uk-comment uk-comment-primary">comment1</article>
                    <ul>
                        <li><article className="uk-comment uk-comment-primary">comment2</article></li>
                    </ul>
                </li>
                <li><article className="uk-comment uk-comment-primary">comment3</article></li>
            </ul>
        )
    }
});

var ContainerTest = React.createClass({
    render() {
        return (
            <div className="uk-container uk-container-center">
                <div className="uk-panel uk-panel-box uk-overflow-container prevent-ie11-navigation">
                    <ul id="output" className="uk-list">
                        <li className="touch-detected uk-text-success">UIkit detected touch support on your device! :)</li>
                        <li className="notouch-detected uk-text-danger">UIkit did not detect touch support on your device! :(</li>
                    </ul>
                </div>
            </div>
        )
    }
});

var ModalTest = React.createClass({
    render() {
        return (
            <div>
                <div id="my-id" className="uk-modal">
                    <div className="uk-modal-dialog">
                        <div className="uk-modal-spinner"/>
                        <a className="uk-modal-close uk-close"/>
                    </div>
                </div>

                <button className="uk-button-success
                                    uk-button-large
                                    uk-width-1-1
                                    uk-margin-small-bottom"
                        type="button"
                        data-uk-modal="{target:'#my-id'}">modal</button>
            </div>
        )
    }
});

var DatePickerTest = React.createClass({
    render() {
        return (
            <form className="uk-form">
                <input type="" data-uk-datepicker="{format:'DD.MM.YYYY'}"/>
            </form>
        )
    }
});

var OffcanvasTest = React.createClass({
    render() {
        return (
            <div>
                <button className="uk-button-success" data-uk-offcanvas="{target:'#offcanvas-1'}">Open offcanvas</button>
                <div id="offcanvas-1" className="uk-offcanvas">
                    <div className="uk-offcanvas-bar">
                        <div className="uk-panel">Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <div className="uk-panel">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                </div>
            </div>
        )
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div>
                <DropdownTest/>
                <FlexBoxTest/>
                <CommentTest/>
                <ContainerTest/>
                <DatePickerTest/>
                <ModalTest/>
                <OffcanvasTest/>
                <button className="uk-button-primary" type="button">nothing</button>
                <button className="uk-button-primary" type="button">nothing</button>
            </div>
        )
    }
});

React.render(
    <App />,
    document.getElementById('app')
);