import './cardsSection.css';
import twoKlunkarImg from '../../assets/images/två-klunkar.png';
import fyraKlunkarImg from '../../assets/images/fyra-klunkar.png';
import reverseImg from '../../assets/images/reverse.png';
import oturskortImg from '../../assets/images/oturskort.png';
import barstoppImg from '../../assets/images/barstopp.png';
import turkortImg from '../../assets/images/turkort.png';
import fargvalImg from '../../assets/images/färgval.png';

const cardRules = [
	{
		type: 'TVÅ KLUNKAR',
		image: twoKlunkarImg,
		color: 'var(--red)',
		description:
			'Spelaren får dela ut två klunkar till valfri spelare med samma färg. Finns inte denna färg går den vidare till nästa färg.',
	},

	{
		type: 'REVERSE',
		image: reverseImg,
		color: 'var(--blue)',
		description:
			'Om någon riktade klunkar mot dig kan du skicka tillbaka dem till spelaren som låg före dig.',
	},
	{
		type: 'BARSTOPP',
		image: barstoppImg,
		color: 'var(--yellow)',
		description:
			'Du slipper dricka nästa omgång. När bunten är slut gäller antal klunkar på kortet igen.',
	},
	{
		type: 'FÄRGVAL',
		image: fargvalImg,
		color: 'var(--black)',
		description:
			'Välj valfri färg för nästa spelare. Klunken följer den nya färgen.',
	},

	{
		type: 'FYRA KLUNKAR',
		image: fyraKlunkarImg,
		color: 'var(--black)',
		description:
			'Dela ut fyra klunkar till en spelare med samma färg. Saknas färgen flyttas den till nästa färg.',
	},
	{
		type: 'OTURSKORT',
		image: oturskortImg,
		color: 'var(--black)',
		description: 'Du dricker två klunkar själv.',
	},

	{
		type: 'TURKORT',
		image: turkortImg,
		color: 'var(--black)',
		description: 'Dela ut fem klunkar till valfri spelare.',
	},
];

function CardsSection() {
	return (
		<section className="cards-section">
			<h2 className="cards-section__title">Kortens betydelse</h2>
			<div className="cards-section__grid">
				{cardRules.map((rule) => (
					<article className="cards-section__card" key={rule.type}>
						<img
							src={rule.image}
							alt={rule.type}
							className="cards-section__card-image"
							style={{ borderColor: rule.color }}
						/>
						<div className="cards-section__card-text">
							<h3 className="cards-section__card-title">
								{rule.type}
							</h3>
							<p className="cards-section__card-text">
								{rule.description}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default CardsSection;
