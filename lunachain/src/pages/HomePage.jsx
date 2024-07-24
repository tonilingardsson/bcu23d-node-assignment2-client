import Header from '../components/Header';
import Wallet from '../components/Wallet';
import Blockchain from '../components/Blockchain';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <section className='page'>
      <Header />
      <Wallet />
      <Blockchain />
      <Footer />
    </section>
  );
}

export default HomePage;
