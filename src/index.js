import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './calculator.css';

class Calculator extends React.Component {
	render() {
		return (
			<div className="calculator">
				<div className="calculator__inner">
					<div className="calculator__result">24</div>
					<div className="calculator__buttons">
						<button className="calculator__button">C</button>
						<button className="calculator__button">%</button>
						<button className="calculator__button">√</button>
						<button className="calculator__button">÷</button>
						<button className="calculator__button">7</button>
						<button className="calculator__button">8</button>
						<button className="calculator__button">9</button>
						<button className="calculator__button">✕</button>
						<button className="calculator__button">4</button>
						<button className="calculator__button">5</button>
						<button className="calculator__button">6</button>
						<button className="calculator__button">-</button>
						<button className="calculator__button">1</button>
						<button className="calculator__button">2</button>
						<button className="calculator__button">3</button>
						<button className="calculator__button">+</button>
						<button className="calculator__button">0</button>
						<button className="calculator__button">.</button>
						<button className="calculator__button">±</button>
						<button className="calculator__button">=</button>
					</div>
				</div>
			</div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
	<React.StrictMode>
		<Calculator />
	</React.StrictMode>
);
reportWebVitals();
