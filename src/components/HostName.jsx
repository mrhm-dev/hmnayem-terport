function HostName({ value }) {
	return (
		<div className='commands'>
			<span className='hostname'>root@hmnayem.com:~$</span>
			<input
				className='input-command'
				type='text'
				value={value || ''}
				disabled
			/>
		</div>
	);
}

export default HostName;
