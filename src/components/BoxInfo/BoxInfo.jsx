import './boxInfo.css';
function BoxInfo({ color, title, text }) {
	let boxColor = 'var(--yellow-faded)';
	let borderColor = 'var(--yellow';
	if (color === 'blue') {
		boxColor = 'var(--blue-faded)';
		borderColor = 'var(--blue)';
	}

	return (
		<article
			className="box"
			style={{
				backgroundColor: boxColor,
				borderColor: borderColor,
			}}>
			<h2 className="box-title">{title}</h2>
			<p className="box-text">{text}</p>
		</article>
	);
}

export default BoxInfo;
