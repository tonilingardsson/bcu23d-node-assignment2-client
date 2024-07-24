import logo from '../assets/images/lunachain.jpg';

function Header() {
  return (
    <header className='header'>
      <h1>Lunachain Block Explorer</h1>
      <img src={logo} className='logo' alt='Lunachain logo' />
    </header>
  );
}

export default Header;
