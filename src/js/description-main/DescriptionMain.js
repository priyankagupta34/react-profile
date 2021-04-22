import React, { Component } from 'react';
import { Theme, ThemeContext } from '../../ThemeContext';
import MenuButtons from '../menu-buttons/MenuButtons';
import './DescriptionMain.css';

export default class DescriptionMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'experience',
            activeShowDesc: ''
        };
        this.tableData = {
            bosch: [
                { name: 'Compass', techs: 'ReactJs, Python', desc: 'This project is created from scratch and is inspired from EDMASK tool described below. It is createdwith ReactJs front-end and Python back-end. It is mainly a search tool, which is using javascript searchalong with mysql search, searching all data mappings.' },
                { name: 'Edmask', techs: 'ReactJs, Python', desc: 'This application was created to findproblems and solutions of automobiles from outside Bosch automobiles mapped with internal errors,issues and solution' },
                { name: 'Text-Analytics', techs: 'ReactJs, NodeJs', desc: 'This was a complete internal project for only Bosch employees. Over multiple range of data andcategories is shown here in favor of employees' },
                { name: 'Geo-Viz', techs: 'ReactJs, Java', desc: 'created this with open-street map-plugin. I receivedthe above mentioned accolade for this project for doing this in less than a month. For automatingcars, many videos are taken all over the world in various vegetation and climates. All these videos andphotos are mapped over the plugin to see properly that where these videos are taken and how arethese images interpreted by vehicle' },
                { name: 'EBR-Finder', techs: 'Angular6, Python', desc: 'This was a corpus graph project whichincluded data manipulation and selection storage.' },
                { name: 'Mantra', techs: 'AngularJs, Java', desc: 'We created this project from scratch. I was given the responsibility to create POC of this project in 15days in a Front-end team of 5 developers. Developed this in Angular JS.' },
                { name: 'Austria', techs: 'AngularJs, Java', desc: 'This actually contains all the imagestaken for machine learning to automate the AI of cars. How image will be interpreted by an A.I camera mounted over a car' },
                { name: 'Corset', techs: 'ReactJs, Java', desc: 'This actually contains all the imagestaken for machine learning to automate the AI of cars. How image will be interpreted by an A.I camera mounted over a car' }],

            infosys: [
                { name: 'IAP Analytics', techs: 'AngularJs, NodeJs', desc: 'This project was created from scratch as and I was given the responsibility of developing Frontend inAngular JS and a bit of JAVA work as back end. However we created POC in Node.js. I worked in a teamof 15 members.' },
                { name: 'Nia Automation', techs: 'AngularJs, Java', desc: 'I was given the responsibility of developing Front-end in Angular JS and back end in JAVA. As per clientrequirement we later migrated this in newest and fastest technology of React.js for Frontend andPython for Backend from scratch.' },
                { name: 'Graph-Analytics', techs: 'ReactJs, NodeJs', desc: 'This was a maintenance project handled by a team of 15 people. It was created using Python forBackend and React.js as Frontend. I was given the opportunity to handle few features in Frontendalong with d3.js graphs, along with Backend.' },
            ]
        }
    }

    selectTab(activeTab, e) {
        this.setState({
            ...this.state,
            activeTab
        })
    }

    showDescription(activeShowDesc) {
        this.setState({
            ...this.state,
            activeShowDesc: this.state.activeShowDesc === activeShowDesc ? '' : activeShowDesc
        })
    }



    static contextType = ThemeContext;
    render() {
        const { activeTab, activeShowDesc } = this.state;
        const { options, openOptions, changeThemeHandler } = this.props;
        const { backgroundColor, sectionBackground, generalColor, contentBackground,
            descriptionColor,
            tableBorderTheme, tabTheme, btnDefaultTheme, tabBtn } = Theme[this.context];
        return (
            <div style={{ backgroundColor }}>
                <nav className="clasNav">
                    <MenuButtons openOptions={openOptions} changeThemeHandler_={changeThemeHandler}
                        options={options} />
                </nav>
                <section className="descSection" style={{ backgroundColor: sectionBackground }}>
                    <div className="educateExper">

                        <div className={`exp ${tabTheme}  io_1`} style={activeTab === 'experience' ? { backgroundColor: sectionBackground } : {}}
                            onClick={this.selectTab.bind(this, 'experience')}>
                            <div className={`signCaps ${tabBtn}`}
                            // style={{
                            //     border: `1px solid ${generalColor}`,
                            //     color: backgroundColor,
                            //     backgroundColor: contentColor
                            // }}
                            ><i className="fas fa-laptop-code"></i></div>
                            <div className="nameverb" style={{ color: contentBackground }}> Experience</div>
                        </div>
                        <div className={`exp ${tabTheme}  io_2`} style={activeTab === 'education' ? { backgroundColor: sectionBackground } : {}}
                            onClick={this.selectTab.bind(this, 'education')}>
                            <div className={`signCaps ${tabBtn}`}
                            // style={{
                            //     border: `1px solid ${generalColor}`,
                            //     color: backgroundColor,
                            //     backgroundColor: contentColor
                            // }}
                            >
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <div className="nameverb" style={{ color: contentBackground }}>Education</div>
                        </div>

                        <div className={`exp ${tabTheme}  io_3`} style={activeTab === 'award' ? { backgroundColor: sectionBackground } : {}}
                            onClick={this.selectTab.bind(this, 'award')}>
                            <div className={`signCaps ${tabBtn}`}
                            // style={{
                            //     border: `1px solid ${generalColor}`,
                            //     color: backgroundColor,
                            //     backgroundColor: contentColor
                            // }}
                            ><i className="fas fa-award"></i></div>
                            <div className="nameverb" style={{ color: contentBackground }}> Award</div>
                        </div>


                    </div>

                    <div className="contBlock">
                        {activeTab === 'experience' && <div>
                            <ul className="ulStufTheme" style={{ color: generalColor }}>
                                <li className="listAbs" style={{ color: generalColor }}>
                                    <div className="expCont_1">
                                        <div className="brt_9"> Bosch (2018-2021)</div>

                                        <table className="tableA" style={{ color: descriptionColor }}>
                                            <tr className="table_head1">
                                                <th className={`bitTabTd ${tableBorderTheme}`}>Project-Name</th>
                                                <th className={`bitTabTd ${tableBorderTheme}`}>Technologies</th>
                                                <th className={`bitTabTd ${tableBorderTheme}`}>About</th>
                                            </tr>
                                            {this.tableData.bosch.map((item, index) => (
                                                <>
                                                    <tr key={`bos_${index}`} className="table_head1" style={{ color: descriptionColor }}>
                                                        <td className={`bitTabTd ${tableBorderTheme}`}>{item.name}</td>
                                                        <td className={`bitTabTd ${tableBorderTheme}`}>{item.techs}</td>
                                                        <td className={`bitTabTd ${tableBorderTheme}`}><button className={`menuBtn_1 ${btnDefaultTheme}`}
                                                            onClick={this.showDescription.bind(this, `bos_${index}`)}>
                                                            {`bos_${index}` === activeShowDesc ? 'Hide' : 'Show'}
                                                        </button></td>
                                                    </tr>
                                                    {activeShowDesc === `bos_${index}` && <tr className="descRT"
                                                        style={{ color: descriptionColor, borderRight: `4px solid ${generalColor}`, borderLeft: `4px solid ${generalColor}` }}
                                                    >
                                                        <tr><b>About {item.name}</b></tr>
                                                        {item.desc}
                                                    </tr>}
                                                </>
                                            ))}
                                        </table>

                                    </div>
                                </li>
                                <li className="listAbs" style={{ color: contentBackground }}>
                                    <div className="expCont_1">
                                        <div className="brt_9"> Infosys (2015-2018)</div>

                                        <table className="tableA" style={{ color: descriptionColor }}>
                                            <tr className="table_head1">
                                                <th className={`bitTabTd ${tableBorderTheme}`}>Project-Name</th>
                                                <th className={`bitTabTd ${tableBorderTheme}`}>Technologies</th>
                                                <th className={`bitTabTd ${tableBorderTheme}`}>About</th>
                                            </tr>
                                            {this.tableData.infosys.map((item, index) => (
                                                <>
                                                    <tr key={`inf_${index}`} className="table_head1" style={{ color: descriptionColor }}>
                                                        <td className={`bitTabTd ${tableBorderTheme}`}>{item.name}</td>
                                                        <td className={`bitTabTd ${tableBorderTheme}`}>{item.techs}</td>
                                                        <td className={`bitTabTd ${tableBorderTheme}`}><button className={`menuBtn_1 ${btnDefaultTheme}`}
                                                            onClick={this.showDescription.bind(this, `inf_${index}`)}>
                                                            {`inf_${index}` === activeShowDesc ? 'Hide' : 'Show'}
                                                        </button></td>
                                                    </tr>

                                                    {activeShowDesc === `inf_${index}` && <tr className="descRT"
                                                        style={{ color: descriptionColor, borderRight: `4px solid ${generalColor}`, borderLeft: `4px solid ${generalColor}` }}>
                                                        {item.desc}
                                                    </tr>}
                                                </>
                                            ))}
                                        </table>
                                    </div>
                                </li>
                            </ul>
                        </div>}

                        {activeTab === 'education' && <div>
                            <ul className="ulStufTheme" style={{ color: generalColor }}>
                                <li className="listAbs" style={{ color: generalColor }}>
                                    <div className="expCont_2">
                                        <div className="brt_9"> Bachelors of Tech (2011-2015)</div>
                                        <div className="tableC tabC_3">
                                            <b>Details</b>
                                            <div>KIIT University, Bhubaneshwar</div>
                                            <div >   Electronics and Electrical Engineering</div>
                                            <div >   CGPA: 76.6</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="listAbs" style={{ color: generalColor }}>
                                    <div className="expCont_2">
                                        <div className="brt_9"> 12<sup>th</sup> (2009-2010)</div>
                                        <div className="tableC tabC_2">
                                            <b>Details</b>
                                            <div >   St. Karens Senior Secondary School, Patna</div>
                                            <div >  PCM (Physics, Chemistry, Maths)</div>
                                            <div >   Percentage: 76.8%</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="listAbs" style={{ color: generalColor }}>
                                    <div className="expCont_2">
                                        <div className="brt_9"> 10<sup>th</sup> (2007-2008)</div>
                                        <div className="tableC tabC_1">
                                            <b>Details</b>
                                            <div > Patna Central School, Patna</div>
                                            <div > Percentage: 78.8%</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        }


                    </div>
                </section>
            </div>
        )
    }
}
