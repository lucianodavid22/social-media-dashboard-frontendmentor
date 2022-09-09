import './App.css';
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import instagram from "./images/icon-instagram.svg";
import youtube from "./images/icon-youtube.svg";
import { useState } from 'react';

function App() {

  let [ dark, setDark ] = useState();

  const setDarkMode = (e) => {
    setDark(e.target.checked);
  }

  return (
    <div className={ dark ? "BackgroundDark" :"App"}>
      <header className={ dark ? "BackgroundDark" : null}>
        <div>
          <h2 className={ dark ? "whiteLetters" : null }>Social Media Dashboard</h2>
          <p className={ dark ? "letterOpacityMin" : null }>Total followers: 23,004</p>
        </div>
        <section>
          <p className={ dark ? "whiteLetters" : null }>Dark Mode</p>
        <label class="switch">
          <input id='darkMode' onChange={setDarkMode} type="checkbox"/>
          <span class="slider round"></span>
        </label>
        </section>
      </header>

      <section className='firstcontainer'>
      <div id='fb' className={ dark ? "dataDark" : 'data'}>
          <div className='icon-user'>
              <img src={facebook} alt='facebook'/>
              <div className={dark ? 'nombre' : null}>
              <p>@lucianodavid22</p>
            </div>
          </div>

          <div className='followers'>
            <h1 className={ dark ? "whiteLetters" : null }>1380</h1>
            <div className={ dark ? "letterOpacityMax" : null }>
              <p>FOLLOWERS</p>
            </div>
          </div>
        </div>

        <div id='tw' className={ dark ? "dataDark" : 'data'}>
          <div className='icon-user'>
            <img src={twitter} alt='twitter'/>
            <div className={dark ? 'nombre' : null}>
              <p>@lucianodavid22</p>
            </div>
          </div>

          <div className='followers'>
            <h1 className={ dark ? "whiteLetters" : null }>1122</h1>
            <div className={ dark ? "letterOpacityMax" : null }>
              <p>FOLLOWERS</p>
            </div>
          </div>
        </div>
        <div id='ig' className={ dark ? "dataDark" : 'data'}>
          <div className='icon-user'>

            <img src={instagram} alt='instagram'/>
            <div className={dark ? 'nombre' : null}>
              <p>@lucianodavid22</p>
            </div>

          </div>

          <div className='followers'>
            <h1 className={ dark ? "whiteLetters" : null }>878</h1>
            <div className={ dark ? "letterOpacityMax" : null }>
              <p>FOLLOWERS</p>
            </div>
          </div>
        </div>
        <div id='yt' className={ dark ? "dataDark" : 'data'}>
          <div className='icon-user'>

            <img src={youtube} alt='youtube'/>
            <div className={dark ? 'nombre' : null}>
              <p>@lucianodavid22</p>
            </div>

          </div>

          <div className='followers'>
            <h1 className={ dark ? "whiteLetters" : null }>22</h1>
            <div className={ dark ? "letterOpacityMax" : null }>
              <p>SUBSCRIBERS</p>
            </div>
          </div>
        </div>

      </section>

      <section className='secondcontainer'>
        <div className={ dark ? "overview whiteLetters" : "overview" }><h1>Overview - Today</h1></div>
        <div className='cuadroscontainer'>

        <div className='cuadros'>
        <div className={ dark ? 'recuadroDark' : 'recuadro'}>

            <div className='activity'>
              <p>PageViews</p>
              <img src={facebook} alt="fb"/>
            </div>
            <h1 className={ dark ? "whiteLetters" : null }>87</h1>
          </div>
        </div>
        
        <div className='cuadros'>
        <div className={ dark ? 'recuadroDark' : 'recuadro'}>

            <div className='activity'>
              <p>Likes</p>
              <img src={facebook} alt="fb"/>
            </div>
            <h1 className={ dark ? "whiteLetters" : null }>340</h1>
          </div>
        </div>

        <div className='cuadros'>
        <div className={ dark ? 'recuadroDark' : 'recuadro'}>

            <div className='activity'>
              <p>Likes</p>
              <img src={instagram} alt="ig"/>
            </div>
            <h1 className={ dark ? "whiteLetters" : null }>3022</h1>
          </div>
        </div>

        <div className='cuadros'>
        <div className={ dark ? 'recuadroDark' : 'recuadro'}>

            <div className='activity'>
              <p>ProfileViews</p>
              <img src={instagram} alt="ig"/>
            </div>
            <h1 className={ dark ? "whiteLetters" : null }>52K</h1>
          </div>
        </div>

        <div className='cuadros'>
        <div className={ dark ? 'recuadroDark' : 'recuadro'}>

            <div className='activity'>
              <p>Retweets</p>
              <img src={twitter} alt="tw"/>
            </div>
            <h1 className={ dark ? "whiteLetters" : null }>117</h1>
          </div>
        </div>

        <div className='cuadros'>
        <div className={ dark ? 'recuadroDark' : 'recuadro'}>

            <div className='activity'>
              <p>Likes</p>
              <img src={twitter} alt="tw"/>
            </div>
            <h1 className={ dark ? "whiteLetters" : null }>77</h1>
          </div>
        </div>

        <div className='cuadros'>
        <div className={ dark ? 'recuadroDark' : 'recuadro'}>

            <div className='activity'>
              <p>Likes</p>
              <img src={youtube} alt="yt"/>
            </div>
            <h1 className={ dark ? "whiteLetters" : null }>107</h1>
          </div>
        </div>

        <div className='cuadros'>
          <div className={ dark ? 'recuadroDark' : 'recuadro'}>
            <div className='activity'>
              <p>TotalViews</p>
              <img src={youtube} alt="yt"/>
            </div>
            <h1 className={ dark ? "whiteLetters" : null }>1407</h1>
          </div>
        </div>

        </div>
      </section>
    </div>
  );
}

export default App;
