import React, { Component } from 'react';
import { Theme, ThemeContext } from '../../ThemeContext';
import MenuButtons from '../menu-buttons/MenuButtons';
import './DescriptionMain.css';

export default class DescriptionMain extends Component {
    
    static contextType = ThemeContext;
    render() {
        const { options, openOptions, changeThemeHandler } = this.props;
        const { backgroundColor } = Theme[this.context];
        return (
            <div style={{ backgroundColor }}>
                <nav className="clasNav">
                    <MenuButtons openOptions={openOptions} changeThemeHandler_={changeThemeHandler}
                        options={options} />
                </nav>
                <section className="descSection" style={{ backgroundColor: 'white' }}>
                    <ul></ul>
                </section>
            </div>
        )
    }
}
