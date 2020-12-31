import "./App.css";
import tokiLogo from "./assets/images/sub1.png";
import tokiWallpaper from "./assets/images/wallpaper.png";
import tokiGrid from "./assets/images/grid.png";
import Clock from "./components/clock";
import './assets/fonts/fonts.css';

function App() {
  return (
    <div className="App">
      
  
      <img width='100%' alt='bgimg' className='bg-image' src={tokiWallpaper}></img>
      <img width='100%' alt='gridimg' className='grid-image' src={tokiGrid}></img>
      

      <img
        alt="Apple logo"
        id="logo1"
        className="animate__animated animate__flash"
        src={tokiLogo}
        width="20%"
      />

      <p id="welcomeMessage">Welcome back Toki!</p>

      <Clock></Clock>
      <img
        alt="Apple logo"
        id="secIcon"
        className="animate__animated animate__flash"
        src={tokiLogo}
        width="30%"
      />
    </div>
  );
}

export default App;
