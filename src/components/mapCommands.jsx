import Welcome from './Welcome';
import HostName from './HostName';
import Commands from './Commands';
import InvalidCommand from './InvalidCommand';

import About from './Portfolio/About';
import Contact from './Portfolio/Contact';
import Skill from './Portfolio/Skill';

const commands = {
	welcome: Welcome,
	enter: HostName,
	help: Commands,
	invalid: InvalidCommand,
	about: About,
	contact: Contact,
	skill: Skill,
	hello: () => <p className='para'>World</p>,
	hi: () => <p className='para'>Hello Programmers</p>,
	fuck: () => <p className='para'>Really You Want?</p>,
};

export default commands;
