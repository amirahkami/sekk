import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = { date: new Date()};
	}

	componentDidMount() {
		this.ticker = setInterval(() => this.tick(), 1000);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				
				<ul class="flip minutePlay">
					<li>
						<a href="#">
							<div class="up">
								<div class="shadow"></div>
								<div class="inn">{Math.floor(this.state.date.getHours()/10)}</div>
							</div>
							<div class="down">
								<div class="shadow"></div>
								<div class="inn">{Math.floor(this.state.date.getHours()/10)}</div>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="up">
								<div class="shadow"></div>
								<div class="inn">{Math.floor(this.state.date.getHours()/10)+1}</div>
							</div>
							<div class="down">
								<div class="shadow"></div>
								<div class="inn">{Math.floor(this.state.date.getHours()/10)+1}</div>
							</div>
						</a>
					</li>
				</ul>

				<ul class="flip secondPlay">
					<li>
						<a href="#">
							<div class="up">
								<div class="shadow"></div>
								<div class="inn">{this.state.date.getHours()%10}</div>
							</div>
							<div class="down">
								<div class="shadow"></div>
								<div class="inn">{this.state.date.getHours()%10}</div>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="up">
								<div class="shadow"></div>
								<div class="inn">{this.state.date.getHours()%10+1}</div>
							</div>
							<div class="down">
								<div class="shadow"></div>
								<div class="inn">{this.state.date.getHours()%10+1}</div>
							</div>
						</a>
					</li>
				</ul>
				





				<ul class="flip minutePlay">
					<li>
						<a href="#">
							<div class="up">
								<div class="shadow"></div>
								<div class="inn">{Math.floor(this.state.date.getMinutes()/10)}</div>
							</div>
							<div class="down">
								<div class="shadow"></div>
								<div class="inn">{Math.floor(this.state.date.getMinutes()/10)}</div>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="up">
								<div class="shadow"></div>
								<div class="inn">{Math.floor(this.state.date.getMinutes()/10)+1}</div>
							</div>
							<div class="down">
								<div class="shadow"></div>
								<div class="inn">{Math.floor(this.state.date.getMinutes()/10)+1}</div>
							</div>
						</a>
					</li>
				</ul>

				<ul class="flip secondPlay">
					<li>
						<a href="#">
							<div class="up">
								<div class="shadow"></div>
								<div class="inn">{this.state.date.getMinutes()%10}</div>
							</div>
							<div class="down">
								<div class="shadow"></div>
								<div class="inn">{this.state.date.getMinutes()%10}</div>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="up">
								<div class="shadow"></div>
								<div class="inn">{this.state.date.getSeconds()%10+1}</div>
							</div>
							<div class="down">
								<div class="shadow"></div>
								<div class="inn">{this.state.date.getSeconds()%10+1}</div>
							</div>
						</a>
					</li>
				</ul>





				<ul class="flip minutePlay">
					<li>
						<a href="#">
							<div class="up">
								<div class="shadow"></div>
								<div class="inn">{Math.floor(this.state.date.getSeconds()/10)}</div>
							</div>
							<div class="down">
								<div class="shadow"></div>
								<div class="inn">{Math.floor(this.state.date.getSeconds()/10)}</div>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="up">
								<div class="shadow"></div>
								<div class="inn">{Math.floor(this.state.date.getSeconds()/10)+1}</div>
							</div>
							<div class="down">
								<div class="shadow"></div>
								<div class="inn">{Math.floor(this.state.date.getSeconds()/10)+1}</div>
							</div>
						</a>
					</li>
				</ul>

				<ul class="flip secondPlay">
					<li>
						<a href="#">
							<div class="up">
								<div class="shadow"></div>
								<div class="inn">{this.state.date.getSeconds()%10}</div>
							</div>
							<div class="down">
								<div class="shadow"></div>
								<div class="inn">{this.state.date.getSeconds()%10}</div>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="up">
								<div class="shadow"></div>
								<div class="inn">{this.state.date.getSeconds()%10+1}</div>
							</div>
							<div class="down">
								<div class="shadow"></div>
								<div class="inn">{this.state.date.getSeconds()%10+1}</div>
							</div>
						</a>
					</li>
				</ul>



			</div>
		);
	}
}

ReactDOM.render(
	<Clock />,
	document.getElementById('root')
	);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
