import Header from '../components/Header';
import Wallet from '../components/Wallet';
import Blockchain from '../components/Blockchain';
import Footer from '../components/Footer';
import AddTransaction from '../components/AddTransaction.jsx';
import MineTransaction from '../components/MineTransaction.jsx';

function HomePage() {
  return (
    <section className='page'>
      <Header />
      <Wallet />
      <AddTransaction />
      <MineTransaction />
      <Blockchain />
      <Footer />
    </section>
  );
}

export default HomePage;
