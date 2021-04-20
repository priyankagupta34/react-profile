import React from 'react';

export const Theme = {
    blueTheme: {
        sectionTheme: 'blueSectionTheme',
        btnTheme: 'blueBtnTheme',
        backgroundColor: '#00002f',
        boxShadow: '0 0 9px #3c3c9c',
        menuColor: 'white',
        generalColor: '#00002f',
        hoverBacks: '#4242e3',
        contentColor: '#a0a0d6'
    },
    magentaTheme: {
        sectionTheme: 'magentaSectionTheme',
        btnTheme: 'magentaBtnTheme',
        backgroundColor: '#aa0000',
        boxShadow: '0 0 9px #aa0000',
        menuColor: 'white',
        generalColor: '#aa0000',
        hoverBacks: '#dc1313',
        contentColor: '#f39797'
    },
    yellowTheme: {
        sectionTheme: 'yellowSectionTheme',
        btnTheme: 'yellowBtnTheme',
        backgroundColor: '#b5b50a',
        boxShadow: '0 0 9px #b9b90b',
        menuColor: 'black',
        generalColor: '#b9b90b',
        hoverBacks: '#dede10',
        contentColor: '#3c3c01'
    }
}

export const ThemeContext = React.createContext(
    Theme.blueTheme
)