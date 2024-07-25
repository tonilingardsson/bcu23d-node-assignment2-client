import Header from '../components/Header';
import Wallet from '../components/Wallet';
import Blockchain from '../components/Blockchain';
import Footer from '../components/Footer';
import AddTransaction from '../components/AddTransaction.jsx';

function HomePage() {
  return (
    <section className='page'>
      <Header />
      <Wallet />
      <AddTransaction />
      <Blockchain />
      <Footer />
    </section>
  );
}

export default HomePage;
