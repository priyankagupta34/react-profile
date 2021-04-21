import React, { Component } from 'react';
import { Theme, ThemeContext } from '../../ThemeContext';
import MenuButtons from '../menu-buttons/MenuButtons';
import './DescriptionMain.css';

export default class DescriptionMain extends Component {

    static contextType = ThemeContext;
    render() {
        const { options, openOptions, changeThemeHandler } = this.props;
        const { backgroundColor, sectionBackground } = Theme[this.context];
        return (
            <div style={{ backgroundColor }}>
                <nav className="clasNav">
                    <MenuButtons openOptions={openOptions} changeThemeHandler_={changeThemeHandler}
                        options={options} />
                </nav>
                <section className="descSection" style={{ backgroundColor: sectionBackground }}>
                    {/* <ul>
                        <li>Education</li>
                        <li>Work Experience</li>
                        <li>Work Projects</li>
                        <li>Skill Sets</li>
                    </ul> */}
                    <div className="educateExper">
                        <div className="edu">
                            <div>
                                <i className="fas fa-graduation-cap"></i>Education
                            </div>
                        </div>
                        <div className="exp">
                            <div>
                                <i className="fas fa-laptop-code"></i>
                                Experience</div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
