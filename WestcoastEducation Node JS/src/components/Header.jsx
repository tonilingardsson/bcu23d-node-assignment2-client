import logo from '../assets/images/lunachain.jpg';

function Header() {
  return (
    <div className='page-header'>
      <h1 className='page-title'>LunaChain Explorer</h1>
      <h2 className='page-subtitle'>To the moon!</h2>
      <img src={logo} alt='' width={600} />
    </div>
  );
}
export default Header;
