import React, { Component } from 'react'
import { Theme, ThemeContext } from '../../ThemeContext';
import MenuButtons from '../menu-buttons/MenuButtons';
import './ProfileMain.css';

export default class ProfileMain extends Component {

    static contextType = ThemeContext;
    render() {
        const { menuColor, contentColor, btnTheme } = Theme[this.context];
        const { options, openOptions, changeThemeHandler } = this.props;
        return (
            <div>

                <nav className="clasNavProf">
                    <MenuButtons openOptions={openOptions} changeThemeHandler_={changeThemeHandler}
                        options={options} />
                </nav>
                <div className="center">
                    <div className="profileimg"></div>

                    <div className="name" style={{ color: menuColor }}>
                        Priyanka Gupta
                    </div>

                    <div className="contentData" style={{ color: contentColor }}>
                        Being an enthusiatic developer, I am looking for a carrier as a React-FrontEnd or React-Python Fullstack Developer.
                        I have an amazing exposure in various react projects.
                    </div>

                    <a href="/Priyanka-Gupta.pdf" download className="aHrf">
                        <button className={`${btnTheme} btnY`}>Download Resume <i class="fa fa-download"></i> </button>
                    </a>
                </div>
                <div className="emailPhone">
                    <div className="emDipData" style={{color: contentColor}}>
                        <span style={{color: contentColor}}><i class="fa fa-download"></i> </span> 34priyankagupta@gmail.com
                    </div>
                    <div className="emDipData" style={{color: contentColor}}>
                        <span  style={{color: contentColor}}><i class="fa fa-phone"></i> </span> (+91) 7903365508
                    </div>
                </div>
            </div>
        )
    }
}
