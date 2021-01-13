import './App.css';
import { useState } from 'react';

import History from './components/History';
import InputCommand from './components/InputCommand';

function App() {
	const [startup, setStartup] = useState(true);
	const [command, setCommand] = useState('');
	const [history, setHistory] = useState([]);

	const handleCommand = (command) => {
		if (startup && command !== 'enter') {
			setStartup(false);
		}

		if (command === 'clear') {
			setHistory([]);
		} else {
			let commands = [command];
			if (command !== 'enter') {
				commands.unshift({ command });
			}
			setHistory([].concat(history, commands));
			setCommand('');
		}
	};

	const onCommandChange = (command) => {
		setCommand(command);
	};

	return (
		<div className='container'>
			<div className='terminal'>
				<History startup={startup} history={history} />
				<InputCommand
					command={command}
					onCommandChange={onCommandChange}
					handleCommand={handleCommand}
				/>
			</div>
		</div>
	);
}

export default App;
