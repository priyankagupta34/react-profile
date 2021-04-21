import React, { Component } from 'react';
import { Theme, ThemeContext } from '../../ThemeContext';
import MenuButtons from '../menu-buttons/MenuButtons';
import './DescriptionMain.css';

export default class DescriptionMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'experience'
        };
        this.tableData = {
            bosch: [
                { name: 'Compass', techs: 'ReactJs, Python', desc: '' },
                { name: 'Edmask', techs: 'ReactJs, Python', desc: '' },
                { name: 'Text-Analytics', techs: 'ReactJs, NodeJs', desc: '' },
                { name: 'Geo-Visualization', techs: 'ReactJs, Java', desc: '' },
                { name: 'EBR-Finder', techs: 'Angular6, Python', desc: '' },
                { name: 'Mantra', techs: 'AngularJs, Java', desc: '' },
                { name: 'Austria', techs: 'AngularJs, Java', desc: '' },
                { name: 'Corset', techs: 'ReactJs, Java', desc: '' }],

            infosys: [
                { name: 'IAP Analytics', techs: 'AngularJs, NodeJs', desc: '' },
                { name: 'Nia Automation', techs: 'AngularJs, Java', desc: '' },
                { name: 'Graph-Analytics', techs: 'ReactJs, NodeJs', desc: '' },
            ]
        }
    }

    selectTab(activeTab, e) {
        this.setState({
            ...this.state,
            activeTab
        })
    }



    static contextType = ThemeContext;
    render() {
        const { activeTab } = this.state;
        const { options, openOptions, changeThemeHandler } = this.props;
        const { backgroundColor, sectionBackground, generalColor, contentBackground, contentColor, btnTheme,
            tableBorderTheme, tabTheme, btnDefaultTheme } = Theme[this.context];
        return (
            <div style={{ backgroundColor }}>
                <nav className="clasNav">
                    <MenuButtons openOptions={openOptions} changeThemeHandler_={changeThemeHandler}
                        options={options} />
                </nav>
                <section className="descSection" style={{ backgroundColor: sectionBackground }}>
                    <div className="educateExper">

                        <div className={`exp ${tabTheme}`} style={activeTab === 'experience' ? { backgroundColor: sectionBackground } : {}}
                            onClick={this.selectTab.bind(this, 'experience')}>
                            <div className={`signCaps ${btnTheme}`}
                                style={{
                                    border: `1px solid ${generalColor}`,
                                    color: contentColor
                                }}
                            ><i className="fas fa-laptop-code"></i></div>
                            <div className="nameverb" style={{ color: contentBackground }}> Experience</div>
                        </div>
                        <div className={`exp ${tabTheme}`} style={activeTab === 'education' ? { backgroundColor: sectionBackground } : {}}
                            onClick={this.selectTab.bind(this, 'education')}>
                            <div className={`signCaps ${btnTheme}`}
                                style={{
                                    border: `1px solid ${generalColor}`,
                                    color: contentColor
                                }}
                            >
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <div className="nameverb" style={{ color: contentBackground }}>Education</div>
                        </div>

                        <div className={`exp ${tabTheme}`} style={activeTab === 'award' ? { backgroundColor: sectionBackground } : {}}
                            onClick={this.selectTab.bind(this, 'award')}>
                            <div className={`signCaps ${btnTheme}`}
                                style={{
                                    border: `1px solid ${generalColor}`,
                                    color: contentColor
                                }}
                            ><i className="fas fa-award"></i></div>
                            <div className="nameverb" style={{ color: contentBackground }}> Award</div>
                        </div>


                    </div>

                    <div className="contBlock">
                        {activeTab === 'experience' && <div>
                            <ul className="ulStufTheme" style={{ color: contentBackground }}>
                                <li className="listAbs" style={{ color: contentBackground }}>
                                    <div className="expCont_1">
                                        <div> Bosch (2018-2021)</div>

                                        <table className="tableA">
                                            <tr className="table_head1">
                                                <th className={`bitTabTd ${tableBorderTheme}`}>Project-Name</th>
                                                <th className={`bitTabTd ${tableBorderTheme}`}>Technologies</th>
                                                <th className={`bitTabTd ${tableBorderTheme}`}>Description</th>
                                            </tr>
                                            {this.tableData.bosch.map((item, index) => (
                                                <tr key={`inf_${index}`} className="table_head1">
                                                    <td className={`bitTabTd ${tableBorderTheme}`}>{item.name}</td>
                                                    <td className={`bitTabTd ${tableBorderTheme}`}>{item.techs}</td>
                                                    <td className={`bitTabTd ${tableBorderTheme}`}><button className={`menuBtn_1 ${btnDefaultTheme}`} style={{ color: contentColor }}>Show </button></td>
                                                </tr>
                                            ))}
                                        </table>

                                    </div>
                                </li>
                                <li className="listAbs" style={{ color: contentBackground }}>
                                    <div className="expCont_1">
                                        <div> Infosys (2015-2018)</div>

                                        <table className="tableA">
                                            <tr className="table_head1">
                                                <th className={`bitTabTd ${tableBorderTheme}`}>Project-Name</th>
                                                <th className={`bitTabTd ${tableBorderTheme}`}>Technologies</th>
                                                <th className={`bitTabTd ${tableBorderTheme}`}>Description</th>
                                            </tr>
                                            {this.tableData.infosys.map((item, index) => (
                                                <tr key={`inf_${index}`} className="table_head1">
                                                    <td className={`bitTabTd ${tableBorderTheme}`}>{item.name}</td>
                                                    <td className={`bitTabTd ${tableBorderTheme}`}>{item.techs}</td>
                                                    <td className={`bitTabTd ${tableBorderTheme}`}><button className={`menuBtn_1 ${btnDefaultTheme}`} style={{ color: contentColor }}>Show </button></td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                                </li>
                            </ul>
                        </div>}
                    </div>
                </section>
            </div>
        )
    }
}
