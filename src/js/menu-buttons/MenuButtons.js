import React, { Component } from 'react'
import { Theme, ThemeContext } from '../../ThemeContext';
import './MenuButtons.css';

export default class MenuButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.openAboutBox = this.openAboutBox.bind(this);
    }
    openAboutBox() {
        this.setState({
            ...this.state,
            open: this.state.open ? false : true
        })
    }
    static contextType = ThemeContext;
    render() {
        const { options } = this.props;
        const { open } = this.state;
        const { btnTheme, backgroundColor, boxShadow, sectionBackground, contentColor, aboutTheme,hoverBacks } = Theme[this.context];
        return (
            <nav className="descNav" style={{ backgroundColor }}>
                <div></div>
                <button className={`menuBtn ${btnTheme}`} style={{ color: contentColor }} onClick={this.openAboutBox}>About <i className="fas fa-atom"></i></button>
                {open && <div className={aboutTheme}>
                    This is a ReactJs project created with pure HTML and CSS. It's my pet project for displaying my profile. Theming is done using contextApi feature by ReactJs.
                </div>}
                <button className={`menuBtn ${btnTheme}`} style={{ color: contentColor }} onClick={this.props.openOptions}>Theme
                <i className={options ? "fa fa-angle-up doE" : "fa fa-angle-up upE"} ></i>
                </button>
                {options && <div className="optionPage" style={{ boxShadow }}>
                    <div className="option" style={{ backgroundColor: this.context === 'blueTheme' ? hoverBacks : sectionBackground, color: this.context === 'blueTheme' ? contentColor : '#484444;' }} onClick={() => this.props.changeThemeHandler_('blueTheme')}>blue</div>
                    <div className="option" style={{ backgroundColor: this.context === 'magentaTheme' ? hoverBacks : sectionBackground, color: this.context === 'magentaTheme' ? contentColor : '#484444;' }} onClick={() => this.props.changeThemeHandler_('magentaTheme')}>magenta</div>
                    <div className="option" style={{ backgroundColor: this.context === 'yellowTheme' ? hoverBacks : sectionBackground, color: this.context === 'yellowTheme' ? contentColor : '#484444;' }} onClick={() => this.props.changeThemeHandler_('yellowTheme')}>yellow</div>
                </div>}
            </nav>
        )
    }
}
