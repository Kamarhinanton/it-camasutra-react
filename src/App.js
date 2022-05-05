import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png" alt="logo"/>
      </header>
      <nav className='nav'>
          <ul>
              <li>
                  <a href="#">
                    messages
                </a>
              </li>
              <li>
                  <a href="#">
                      profile
                  </a>
              </li>
              <li>
                  <a href="#">
                    music
                  </a>
              </li>
              <li>
                  <a href="#">
                      settings
                  </a>
              </li>
          </ul>
      </nav>
      <div className='content'>
        Main content
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
      </div>
    </div>
  );
}

export default App;
