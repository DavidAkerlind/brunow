import Header from './components/Header/Header';
import Needs from './components/Needs/Needs';
import Works from './components/Works/Works';
import BoxInfo from './components/BoxInfo/BoxInfo';
import CardsSection from './components/CardsSection/CardsSection';
import Footer from './components/Footer/Footer';
function App() {
	return (
		<div className="app">
			<Header />
			<section className="main-content">
				<Needs />
				<Works />
				<BoxInfo
					color={'yellow'}
					title={'Fick ni Par?'}
					text={
						'För två eller fler spelare visar kort med samma siffra: Högra kortets dickar både spelarna antal klunkar som står på kortet. Vid par av 0:or dricka 10 klunkar per spelare.'
					}
				/>
				<BoxInfo
					color={'blue'}
					title={'Extra'}
					text={'Spelaren med lägst kort en klunk, sker varje omgång'}
				/>
				<CardsSection />
				<Footer />
			</section>
		</div>
	);
}

export default App;
