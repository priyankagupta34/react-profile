import React, { Component } from 'react'
import { Theme, ThemeContext } from '../../ThemeContext';
import MenuButtons from '../menu-buttons/MenuButtons';
import './ProfileMain.css';

export default class ProfileMain extends Component {

    static contextType = ThemeContext;
    render() {
        const { menuColor, contentColor, btnTheme, contentBackground } = Theme[this.context];
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
                    
                    {/* <div className="iconSpder">
                        <div className="ty56" style={{color: menuColor}}><i className="fab fa-facebook"></i></div>
                        <div className="ty57" style={{color: menuColor}}><i className="fab fa-instagram-square"></i></div>
                    </div> */}

                    <div className="contentData" style={{ color: contentColor, backgroundColor: contentBackground }}>
                        Being an enthusiatic developer, I am looking for a carrier as a React-FrontEnd or React-NodeJs or React-Python Fullstack Developer.
                        I have amazing exposure in various react projects. I have also worked with Redux as well.
                    </div>

                    <a href="/Priyanka-gh.pdf" download className="aHrf">
                        <button className={`${btnTheme} btnY`} style={{ color: contentColor }}>Download Resume <i className="fa fa-download"></i> </button>
                    </a>
                </div>
                <div className="emailPhone">
                    <div className="emDipData" style={{ color: contentColor }}>
                        <span style={{ color: contentColor }}><i className="fa fa-envelope"></i> </span> 34priyankagupta@gmail.com
                    </div>
                    <div className="emDipData" style={{ color: contentColor }}>
                        <span style={{ color: contentColor }}><i className="fa fa-phone"></i> </span> (+91) 7903365508
                    </div>
                </div>
            </div>
        )
    }
}
