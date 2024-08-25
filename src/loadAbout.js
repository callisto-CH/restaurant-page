export default loadAbout;
import { Element, buildPage } from './pageHandler.js';


function loadAbout() {

	const aboutContainer = new Element({
		name: 'container',
		type: 'div',
        	attributes: {
			class: 'about-container'
		},
		children: ['header', 'description']
	});
	new Element({
		name: 'header',
		type: 'div',
        	attributes: {
			class: 'about header'
		},
		children: ['headerText']
	});
	new Element({
		name: 'headerText',
		type: 'div',
		attributes: {
			class: 'about header-text'
		},
		text: 'About'
	});
	new Element({
		name: 'description',
		type: 'div',
		attributes: {
			class: 'about description'
		},
		children: ['description1', 'description2']
	});
	new Element({
		name: 'description1',
		type: 'div',
		attributes: {
			class: 'about description-text'
		},
		text: "Callisto's is a cafe. You can go there to get food and drinks. Also, lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus tellus, euismod et porttitor at, consequat in magna. Cras gravida, urna condimentum eleifend sodales, enim sem fringilla eros, at porttitor ipsum nibh non arcu. Fusce tristique ex at neque imperdiet, vel blandit tellus convallis. Sed luctus tristique vulputate. Nulla ac sapien nisi."
	});
	new Element({
		name: 'description2',
		type: 'div',
		attributes: {
			class: 'about description-text'
		},
		text: 'Nunc at efficitur purus. Integer aliquam nunc non lacinia accumsan. Quisque et tincidunt orci. Fusce porta convallis auctor. Fusce eu facilisis libero, sodales porta mauris. Sed commodo sapien eu efficitur elementum. Aenean dictum sem id tellus scelerisque, sit amet egestas magna varius. Vivamus molestie pretium nisl, quis ultricies neque.'
	});


	buildPage(aboutContainer);
}