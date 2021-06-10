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
                { name: 'Compass', techs: 'ReactJs, Python', desc: 'This project is created from scratch and is inspired from EDMASK tool described below. It is created ReactJs front-end and Python back-end. It is mainly a search tool, which is using javascript searchalong with mysql search, searching all data mappings.' },
                { name: 'Edmask', techs: 'ReactJs, Python', desc: 'This application was created to find problems and solutions of automobiles outside and map it within our organization' },
                { name: 'Text-Analytics', techs: 'ReactJs, NodeJs', desc: 'This is a complete internal project for only Bosch employees. Over multiple range of data and categories is shown here in favor of employees' },
                { name: 'Geo-Viz', techs: 'ReactJs, Java', desc: 'It is created with open-street map-plugin. I received an accolade for this project for completling this in less than a month. For automatingcars, many videos are taken all over the world in various vegetation and climates. All these videos and photos are mapped over the plugin to see properly that where these videos are taken and how arethese images interpreted by vehicle' },
                { name: 'EBR-Finder', techs: 'Angular6, Python', desc: 'This was a corpus graph project which included data manipulation and selection storage.' },
                { name: 'Mantra', techs: 'AngularJs, Java', desc: 'We created this project from scratch. I was given the responsibility to create POC of this project in 15days in a developers team of 5. Developed this in Angular JS.' },
                { name: 'Austria', techs: 'AngularJs, Java', desc: 'This contains all the images taken for machine learning to automate the cars. How image will be interpreted by an A.I camera mounted over a car' },
                { name: 'Corset', techs: 'ReactJs, Java', desc: 'This contains all the imagestaken for machine learning to automate the AI of cars. How image will be interpreted by an A.I camera mounted over a car. Its followup of Austria.' }],

            infosys: [
                { name: 'IAP Analytics', techs: 'AngularJs, NodeJs', desc: 'This project was created from scratch as and I was given the responsibility of developing Frontend in Angular JS and JAVA as back end. However we created POC in Node.js. I worked in a teamof 15 members.' },
                { name: 'Nia Automation', techs: 'AngularJs, Java', desc: 'I was given the responsibility of developing Front-end in Angular JS and back end in JAVA.' },
                { name: 'Graph-Analytics', techs: 'ReactJs, NodeJs', desc: 'This was a maintenance project handled by a team of 3-4 developers. It was created using Dotnet forBackend and React.js as Frontend. I was given the opportunity to handle few features in Frontend along with d3.js graphs.' },
            ]
        };
        this.certificates = [
            { name: 'React', url: 'https://www.hackerrank.com/certificates/344845fb60a9', path: 'certs/react.jpg' },
            { name: 'Problem Solving', url: 'https://www.hackerrank.com/certificates/7b7d5737d089', path: 'certs/problemsol.jpg' },
            { name: 'JavaScript', url: 'https://www.hackerrank.com/certificates/bbf64a1fe7e0', path: 'certs/javascript.jpg' },
            { name: 'Rest API ', url: 'https://www.hackerrank.com/certificates/a3d2371d05ab', path: 'certs/Rest.jpg' },
            { name: 'Python ', url: 'https://www.hackerrank.com/certificates/ec9d549a161f', path: 'certs/python.jpg' },
        ];
        this.skills = [{ skill: 'ReactJs', years: 5.5},
        { skill: 'JavaScript', years: 5.6 },
        { skill: 'Html5', years: new Date().getFullYear() - 2016 },
        { skill: 'Css', years: 5.6 },
        { skill: 'Python', years: 2 },
        { skill: 'NodeJs', years: 2 }]
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

    showEdmask() {
        this.setState({
            ...this.state,
            activeTab: 'experience',
            activeShowDesc: `bos_1`
        });
    }



    static contextType = ThemeContext;
    render() {
        const { activeTab, activeShowDesc } = this.state;
        const { options, openOptions, changeThemeHandler } = this.props;
        const { backgroundColor, sectionBackground, generalColor, contentBackground,
            descriptionColor,
            tableBorderTheme, tabTheme, btnDefaultTheme, tabBtn, pilltheme } = Theme[this.context];
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
                            <div className="nameverb" style={{ color: contentBackground }}> Achievments</div>
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
                                        <div className="brt_9"> B.Tech (2011-2015)</div>
                                        <div className="tableC tabC_3" style={{ color: descriptionColor, borderRight: `4px solid ${generalColor}`, borderLeft: `4px solid ${generalColor}` }}>
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
                                        <div className="tableC tabC_2" style={{ color: descriptionColor, borderRight: `4px solid ${generalColor}`, borderLeft: `4px solid ${generalColor}` }}>
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
                                        <div className="tableC tabC_1" style={{ color: descriptionColor, borderRight: `4px solid ${generalColor}`, borderLeft: `4px solid ${generalColor}` }}>
                                            <b>Details</b>
                                            <div > Patna Central School, Patna</div>
                                            <div > Percentage: 78.8%</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        }


                        {activeTab === 'award' && <div>
                            <ul className="ulStufTheme" style={{ color: generalColor }}>
                                <li className="listAbs" style={{ color: generalColor }}>
                                    <div className="expCont_2">
                                        <div className="brt_9"> Skills <sub></sub></div>
                                        <div className="tableC tabC_1" style={{ color: descriptionColor, borderRight: `4px solid ${generalColor}`, borderLeft: `4px solid ${generalColor}` }}>
                                            <b>Skill with year(s) of experience)</b>
                                            <div className="tablesD">
                                            {this.skills.map(item => (
                                                <div className="skillsets">
                                                    <span className={`jk_32 ${pilltheme}`}>{item.skill}</span>
                                                    <span className="jk_33" style={{ color: descriptionColor}}><b>{item.years}</b></span>
                                                </div>
                                            ))}
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                <li className="listAbs" style={{ color: generalColor }}>
                                    <div className="expCont_2">
                                        <div className="brt_9"> Patent</div>
                                        <div className="tableC tabC_1" style={{ color: descriptionColor, borderRight: `4px solid ${generalColor}`, borderLeft: `4px solid ${generalColor}` }}>
                                            <b>URL</b> comming soon....
                                            <div>Patent for <b>Edmask</b> Project</div>
                                            Click <button className={`menuBtn_1 ${btnDefaultTheme}`} onClick={this.showEdmask.bind(this)}>here</button> to view details about project..
                                        </div>

                                    </div>
                                </li>
                                <li className="listAbs" style={{ color: generalColor }}>
                                    <div className="expCont_2">
                                        <div className="brt_9"> Certificates</div>
                                        <div className="imgrid tableC tabC_3" style={{ color: descriptionColor, borderRight: `4px solid ${generalColor}`, borderLeft: `4px solid ${generalColor}` }}>
                                            {this.certificates.map((item, index) => (
                                                <div className="imgPdf" key={index}>
                                                    <div className="kly_e3">
                                                        <img class="valueImg" src={item.path} alt={item.name}></img>
                                                        <img src="pg.gif" alt={item.name}></img>
                                                    </div>
                                                    <div className="icons_8">
                                                        <a href={item.url} target="_blank" rel="noreferrer"><i class="fab fa-hackerrank" style={{ color: generalColor }}
                                                            title="Open certificate in Hackerrank tab"></i></a>
                                                        <div className="name_76" style={{ color: descriptionColor }}>{item.name}</div>
                                                        <a href={item.path} title="Download certificate" download><i class="fas fa-download" style={{ color: generalColor }}></i></a>
                                                    </div>
                                                </div>
                                            ))}
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
