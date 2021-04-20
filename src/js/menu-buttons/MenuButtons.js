import React, { Component } from 'react'
import { Theme, ThemeContext } from '../../ThemeContext';
import './MenuButtons.css';

export default class MenuButtons extends Component {
    static contextType = ThemeContext;
    render() {
        const { options } = this.props;
        const { btnTheme, backgroundColor, boxShadow, sectionBackground } = Theme[this.context];
        return (
            <nav className="descNav" style={{ backgroundColor }}>
                <div></div>
                <button className={`menuBtn ${btnTheme}`}>About</button>
                <button className={`menuBtn ${btnTheme}`} onClick={this.props.openOptions}>Theme
                <i className={options ? "fa fa-angle-up doE" : "fa fa-angle-up upE"}></i>
                </button>
                {options && <div className="optionPage" style={{ boxShadow }}>
                    <div className="option" style={{backgroundColor: sectionBackground}} onClick={() => this.props.changeThemeHandler_('blueTheme')}>blue</div>
                    <div className="option" style={{backgroundColor: sectionBackground}} onClick={() => this.props.changeThemeHandler_('magentaTheme')}>magenta</div>
                    <div className="option" style={{backgroundColor: sectionBackground}} onClick={() => this.props.changeThemeHandler_('yellowTheme')}>yellow</div>
                </div>}
            </nav>
        )
    }
}
