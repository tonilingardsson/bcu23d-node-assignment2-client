import { Link, NavLink, useNavigate } from 'react-router-dom';
import style from '../../styles/Header.module.css';
import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
function Header() {
  const navigate = useNavigate();
  const { isValid, setIsValid } = useContext(GlobalContext);
  function handleSignOut() {
    localStorage.removeItem('TOKEN');

    setIsValid(false);
    navigate('/');
  }
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link to='/' className={style.link}>
          <h1>LunaChain</h1>
          <h2>To the Moon!</h2>
        </Link>
        <nav>
          <ul className={style.ul}>
            <li>
              <NavLink to='/'>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/explorer'>
                <span>Explorer</span>
              </NavLink>
            </li>

            <li>
              <NavLink to='/send'>
                <span>New transaction</span>
              </NavLink>
            </li>

            {!localStorage.getItem('TOKEN') ? (
              <>
                <li>
                  <NavLink to='/login'>
                    <button>Sign In</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/register'>
                    <button>Sign Up</button>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to='/me'>
                    <button>Me</button>
                  </NavLink>
                </li>

                <li>
                  <button onClick={handleSignOut}>Sign Out</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
