import React from 'react';

export const Theme = {
    blueTheme: {
        sectionTheme: 'blueSectionTheme',
        btnTheme: 'blueBtnTheme',
        tabTheme: 'blueTabTheme',
        btnDefaultTheme: 'blueBtnDefaultTheme',
        backgroundColor: '#161661',
        boxShadow: '0 0 9px #3c3c9c',
        menuColor: 'white',
        generalColor: '#161661',
        hoverBacks: '#4242e3',
        contentColor: '#c0c0dc',
        sectionBackground: '#dbdbe4',
        contentBackground: '#090954',
        tableBorderTheme: 'blueTableBorderTheme',
        descriptionColor: '#161661',
        aboutTheme: 'aboutDetailsBlue',
        tabBtn: 'blueTabBtn',
        pilltheme: 'bluePillTheme'
    },
    magentaTheme: {
        sectionTheme: 'magentaSectionTheme',
        btnTheme: 'magentaBtnTheme',
        tabTheme: 'magentaTabTheme',
        btnDefaultTheme: 'magentaBtnDefaultTheme',
        backgroundColor: '#aa0000',
        boxShadow: '0 0 9px #aa0000',
        menuColor: 'white',
        generalColor: '#aa0000',
        hoverBacks: '#dc1313',
        contentColor: '#f7d2d2',
        sectionBackground: '#fde4e4',
        contentBackground: '#980303',
        tableBorderTheme: 'magentaTableBorderTheme',
        descriptionColor: '#aa0000',
        aboutTheme: 'aboutDetailsRed',
        tabBtn: 'magentaTabBtn',
        pilltheme: 'magentaPillTheme'

    },
    yellowTheme: {
        sectionTheme: 'yellowSectionTheme',
        btnTheme: 'yellowBtnTheme',
        tabTheme: 'yellowTabTheme',
        btnDefaultTheme: 'yellowBtnDefaultTheme',
        backgroundColor: '#b5b50a',
        boxShadow: '0 0 9px #b9b90b',
        menuColor: 'black',
        generalColor: '#b9b90b',
        hoverBacks: '#dede10',
        contentColor: 'rgb(29 29 0)',
        sectionBackground: '#ffffcf',
        contentBackground: '#abab08',
        tableBorderTheme:'yellowTableBorderTheme',
        descriptionColor:'#1d1d00',
        aboutTheme: 'aboutDetailsYellow',
        tabBtn: 'yellowTabBtn',
        pilltheme: 'yellowPillTheme'
    }
}

export const ThemeContext = React.createContext(
    Theme.blueTheme
)