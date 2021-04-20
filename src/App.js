import { useState } from 'react';
import './App.css';
import DescriptionMain from './js/description-main/DescriptionMain';
import ProfileMain from './js/profile-main/ProfileMain';
import { ThemeContext, Theme } from './ThemeContext'

function App() {
  const [themeColor, setthemeColor] = useState('blueTheme');
  const [options, setoptions] = useState(false);
  function changeThemeHandler(theme) {
    setthemeColor(theme);
    setoptions(false);
  }
  function openOptions() {
    setoptions(options ? false : true)
  }
  return (
    <div>
      <ThemeContext.Provider value={themeColor}>
        <header className="App-header">

        </header>
        <section className="profileSection">
          <div className="leftSection" style={{ backgroundColor: Theme[themeColor].backgroundColor }}>
            <ProfileMain changeThemeHandler={changeThemeHandler} openOptions={openOptions} options={options} />
          </div>
          <div className="rightSection" style={{ backgroundColor: Theme[themeColor].backgroundColor }}>
            <DescriptionMain changeThemeHandler={changeThemeHandler} openOptions={openOptions} options={options} />
          </div>
        </section>
        <footer>

        </footer>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
