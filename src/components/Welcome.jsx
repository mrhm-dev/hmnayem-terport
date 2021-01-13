import Commands from './Commands';

function Welcome() {
	return (
		<div className='welcome-container'>
			<h1 className='welcome'>WELCOME</h1>
			<h3 className='intro'>
				Myself, <span>HM Nayem</span>
			</h3>
			<h4 className='bio'>
				Programming Enthusiast, Self Taught Programmer,
				<br />
				Instructor, Author & Entrepreneur
			</h4>
			<br />
			<p className='para'>To Learn More About Me, Type A Command Below</p>
			<Commands />
		</div>
	);
}

export default Welcome;
