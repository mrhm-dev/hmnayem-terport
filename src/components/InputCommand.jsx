import { useRef, useEffect } from 'react';

const InputCommand = ({ command, onCommandChange, handleCommand }) => {
	const inputRef = useRef();
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div className='commands'>
			<span className='hostname'>root@hmnayem.com:~$</span>
			<input
				ref={inputRef}
				className='input-command'
				type='text'
				command={command}
				onChange={(e) => onCommandChange(e.target.value)}
				onBlur={() => inputRef.current.focus()}
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						if (command) {
							handleCommand(command.toLowerCase());
							e.target.value = '';
						} else {
							handleCommand('enter');
						}
					}
				}}
			/>
		</div>
	);
};

export default InputCommand;
