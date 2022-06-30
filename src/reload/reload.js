import './reload.css';
import logo from '../img/logo.svg';


function Reload(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           soon...
        </p>
        <a
          className="App-link"
          href="info@riaaia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email us
        </a>
      </header>
    </div>
  );
}

export default Reload;
