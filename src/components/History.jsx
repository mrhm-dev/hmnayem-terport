import shortid from 'shortid';
import Welcome from './Welcome';
import mapCommand from './mapCommands';

const History = ({ startup, history }) => {
	return (
		<div id='history' className='history'>
			{startup && <Welcome />}
			<div>
				{history.map((command) => {
					let Result = null;
					if (typeof command === 'object') {
						Result = mapCommand.enter;
						return (
							<Result
								key={shortid.generate()}
								value={command.command}
							/>
						);
					}

					Result = mapCommand[command] || mapCommand.invalid;
					return <Result key={shortid.generate()} />;
				})}
			</div>
		</div>
	);
};

export default History;
