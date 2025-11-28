import './needs.css';
import cards from '../../assets/icons/cards_icon.svg';
import flak from '../../assets/icons/flak.svg';
import persons from '../../assets/icons/persons.svg';

function Needs() {
	return (
		<section>
			<h2 className="need-title">Vad behöver du?</h2>
			<ul className="need-list">
				<li className="need-list-item">
					<figure className="need-list-item-figure">
						<img src={cards} alt="" />
					</figure>
					<p>En UNO-kortlek</p>
				</li>
				<li className="need-list-item">
					<figure className="need-list-item-figure">
						<img src={persons} alt="persons" />
					</figure>
					<p>4-6 spelare (rekomenderas)</p>
				</li>
				<li className="need-list-item">
					<figure className="need-list-item-figure">
						<img src={flak} alt="" />
					</figure>
					<p>Asmycket alkohol</p>
				</li>
			</ul>
		</section>
	);
}

export default Needs;
