import logo from '../assets/images/lunachain.jpg';
import Login from './Login';

function Header() {
  return (
    <header className='header'>
      <h1>Lunachain Block Explorer</h1>
      <img src={logo} className='logo' alt='Lunachain logo' />
      <div className='login'>
        <Login />
      </div>
    </header>
  );
}

export default Header;
