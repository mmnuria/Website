import github from './gh.png';
import linkedin from './li.png';
import gmail from './gm.png';
import './App.css';

const links = {
  github: 'https://github.com/mmnuria',
  linkedin: 'https://www.linkedin.com/in/nuria-manzano-mata-917882199',
  gmail: 'mailto:cignuria@gmail.com'
}

const summary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum, ipsum at tempus consequat, est dui lobortis urna, vel ultricies metus libero ac diam. Curabitur consequat efficitur mollis. Pellentesque bibendum orci dui, in posuere nulla finibus sit amet. In venenatis tincidunt tortor, sed facilisis mauris efficitur nec.';
//const summary_2 = Hola <br> Adios <br> Buenas <br> Hasta luego;
function App() {
  function onClickImage(type) {
    window.location.href = links[type];
  }

  return (
    <div className='main theme-background'>
      <div className='menu'>
        <img onClick={() => onClickImage('github')} src={github} className="menu-icon item" alt="github" />
        <img onClick={() => onClickImage('linkedin')} src={linkedin} className="menu-icon item" alt="linkedin" />
        <img onClick={() => onClickImage('gmail')} src={gmail} className="menu-icon item" alt="gmail" />
      </div>

      <div className='outer-body'>
        <div className='body'>
          <div className='border'>
            <div className='title theme-headline'>Welcome.</div>
            <div className='summary theme-paragraph'> {summary} </div>
          </div>
          <div className='right-section'>
            <div className='theme-headline subtitle'><center>Lenguajes</center></div>
            <div className='summary theme-paragraph'> <center><p>C++</p>  <p>Java</p> <p>JavaScript</p></center> </div>
          </div>
        </div>
      </div>

      <footer className='footer theme-paragraph item'>
      mmnuria - 2023
      </footer>

    </div>
  );
}

export default App;
