import './works.css';
function Works() {
	return (
		<section>
			<h2 className="work-title">Hur fungerar det?</h2>
			<ol className="work-list">
				<li className="work-list-item">
					Hela kortleken delas jämt upp bland alla spelare
				</li>
				<li className="work-list-item">
					Varje spelare visar kortet högst upp för resterande spelare
				</li>
				<li className="work-list-item">
					Den med lägst kort dricker så många klunkar som korten är
					slut
				</li>
			</ol>
		</section>
	);
}

export default Works;
