import burk from '../../assets/icons/burk.svg';

import './Header.css'; // 👉 import your new CSS

function Header() {
	return (
		<header className="header">
			<div className="header-corner"></div>

			<div className="header-title-row">
				<figure>
					<img src={burk} alt="burk ikon" />
				</figure>
				<h1 className="header-title">Brunow von Magnusson</h1>
			</div>

			<p className="header-subtitle">Ett drickspel med UNO-kort</p>
		</header>
	);
}

export default Header;
