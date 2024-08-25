export default loadMenu;
import menuIconSrc from './images/restaurant.png';
import coffeeIconSrc from './images/coffee.png';
import eatsIconSrc from './images/bread.png';
import sweetsIconSrc from './images/cake.png';
import { Element, buildPage } from './pageHandler.js';


function loadMenu() {

	const menuContainer = new Element({
		name: 'container',
		type: 'div',
        	attributes: {
			class: 'menu-container'
		},
		children: ['header', 'menuContent']
	});
	new Element({
		name: 'header',
		type: 'div',
        	attributes: {
			class: 'menu header'
		},
		children: ['menuIconLink', 'headerText']
	});
	new Element({
		name: 'menuIconLink',
		type: 'a',
		attributes: {
			href: 'https://www.flaticon.com/free-icon/restaurant_562678',
			target: '_blank'
		},
		children: ['menuIcon']
	});
	new Element({
		name: 'menuIcon',
		type: 'img',
		attributes: {
			title: 'Restaurant icon created by Freepik - Flaticon',
			alt: 'plate, fork, and knife icon',
			src: menuIconSrc
		}
	});
	new Element({
		name: 'headerText',
		type: 'div',
		text: 'Menu'
	});

	new Element({
		name: 'menuContent',
		type: 'div',
		attributes: {
			class: 'menu menu-content'
		},
		children: ['coffee', 'eats', 'sweets']
	});
	new Element({
		name: 'coffee',
		type: 'div',
		attributes: {
			class: 'menu section'
		},
		children: ['coffeeHeader', 'coffeeBlack', 'coffeeLatte']
	});
	new Element({
		name: 'coffeeHeader',
		type: 'div',
		attributes: {
			class: 'menu section-header'
		},
		children: ['coffeeIconLink', 'coffeeHeaderText']
	});
	new Element({
		name: 'coffeeIconLink',
		type: 'a',
		attributes: {
			class: 'coffee-icon',
			href: 'https://www.flaticon.com/free-icon/coffee_818217',
			target: '_blank'
		},
		children: ['coffeeIcon']
	});
	new Element({
		name: 'coffeeIcon',
		type: 'img',
		attributes: {
			class: 'coffee-icon',
			title: 'Coffee icon created by Freepik - Flaticon',
			alt: 'coffee cup icon',
			src: coffeeIconSrc
		}
	});
	new Element({
		name: 'coffeeHeaderText',
		type: 'span',
		attributes: {
			class: 'menu section-header-text'
		},
		text: 'Coffee'
	});
	new Element({
		name: 'coffeeBlack',
		type: 'div',
		attributes: {
			class: 'menu item-section'
		},
		children: ['coffeeBlackHeader', 'coffeeBlackDesc']
	});
	new Element({
		name: 'coffeeBlackHeader',
		type: 'div',
		attributes: {
			class: 'menu item-header'
		},
		text: 'Black - $2.00',
	});
	new Element({
		name: 'coffeeBlackDesc',
		type: 'div',
		attributes: {
			class: 'menu item-description'
		},
		text: "My parents like black coffee but I've never been able to stand it! Your choice of delicious uppercase Black coffee or chill lowercase black coffee."
	});
	new Element({
		name: 'coffeeLatte',
		type: 'div',
		attributes: {
			class: 'menu item-section'
		},
		children: ['coffeeLatteHeader', 'coffeeLatteDesc']
	});
	new Element({
		name: 'coffeeLatteHeader',
		type: 'div',
		attributes: {
			class: 'menu item-header'
		},
		text: 'Latte - $3.00'
	});
	new Element({
		name: 'coffeeLatteDesc',
		type: 'div',
		attributes: {
			class: 'menu item-description'
		},
		text: "A latte. It's a latte. It's got a lotta te. It's got some espresso and steamed milk. Some even say it's a type of coffee."
	});

	new Element({
		name: 'eats',
		type: 'div',
		attributes: {
			class: 'menu section'
		},
		children: ['eatsHeader', 'eatsSandwich', 'eatsSalad']
	});
	new Element({
		name: 'eatsHeader',
		type: 'div',
		attributes: {
			class: 'menu section-header'
		},
		children: ['eatsIconLink', 'eatsHeaderText']
	});
	new Element({
		name: 'eatsIconLink',
		type: 'a',
		attributes: {
			href: 'https://www.flaticon.com/free-icon/bread_3348044',
			target: '_blank'
		},
		children: ['eatsIcon']
	});
	new Element({
		name: 'eatsIcon',
		type: 'img',
		attributes: {
			title: 'Bread icon created by Freepik - Flaticon',
			alt: 'bread icon',
			src: eatsIconSrc
		}
	});
	new Element({
		name: 'eatsHeaderText',
		type: 'span',
		attributes: {
			class: 'menu section-header-text'
		},
		text: 'Eats'
	});
	new Element({
		name: 'eatsSandwich',
		type: 'div',
		attributes: {
			class: 'menu item-section'
		},
		children: ['eatsSandwichHeader', 'eatsSandwichDesc']
	});
	new Element({
		name: 'eatsSandwichHeader',
		type: 'div',
		attributes: {
			class: 'menu item-header'
		},
		text: 'Sandwich - $8.96',
	});
	new Element({
		name: 'eatsSandwichDesc',
		type: 'div',
		attributes: {
			class: 'menu item-description'
		},
		text: 'Ah, the sandwich. One of the greatest culinary inventions ever conceived. Comes with your choice of deliciousness or awesomeness.'
	});
	new Element({
		name: 'eatsSalad',
		type: 'div',
		attributes: {
			class: 'menu item-section'
		},
		children: ['eatsSaladHeader', 'eatsSaladDesc']
	});
	new Element({
		name: 'eatsSaladHeader',
		type: 'div',
		attributes: {
			class: 'menu item-header'
		},
		text: 'Salad - $1,000'
	});
	new Element({
		name: 'eatsSaladDesc',
		type: 'div',
		attributes: {
			class: 'menu item-description'
		},
		text: 'Lorem ipsum salad sit amet, consectetur adipiscing salad.',
	});

	new Element({
		name: 'sweets',
		type: 'div',
		attributes: {
			class: 'menu section'
		},
		children: ['sweetsHeader', 'sweetsCupcake', 'sweetsDanish']
	});
	new Element({
		name: 'sweetsHeader',
		type: 'div',
		attributes: {
			class: 'menu section-header'
		},
		children: ['sweetsIconLink', 'sweetsHeaderText']
	});
	new Element({
		name: 'sweetsIconLink',
		type: 'a',
		attributes: {
			href: 'https://www.flaticon.com/free-icon/cake_792815',
			target: '_blank'
		},
		children: ['sweetsIcon']
	});
	new Element({
		name: 'sweetsIcon',
		type: 'img',
		attributes: {
			title: 'Cake icon created by Freepik - Flaticon',
			alt: 'cake icon',
			src: sweetsIconSrc
		}
	});
	new Element({
		name: 'sweetsHeaderText',
		type: 'span',
		attributes: {
			class: 'menu section-header-text'
		},
		text: 'Sweets'
	});
	new Element({
		name: 'sweetsCupcake',
		type: 'div',
		attributes: {
			class: 'menu item-section'
		},
		children: ['sweetsCupcakeHeader', 'sweetsCupcakeDesc']
	});
	new Element({
		name: 'sweetsCupcakeHeader',
		type: 'div',
		attributes: {
			class: 'menu item-header'
		},
		text: 'Cupcake - $0',
	});
	new Element({
		name: 'sweetsCupcakeDesc',
		type: 'div',
		attributes: {
			class: 'menu item-description'
		},
		text: "A savory angus patty between two toasted buns with melted swiss and mushrooms. Oops, I meant it's a cupcake."
	});
	new Element({
		name: 'sweetsDanish',
		type: 'div',
		attributes: {
			class: 'menu item-section'
		},
		children: ['sweetsDanishHeader', 'sweetsDanishDesc']
	});
	new Element({
		name: 'sweetsDanishHeader',
		type: 'div',
		attributes: {
			class: 'menu item-header'
		},
		text: 'Danish - 50-kr.'
	});
	new Element({
		name: 'sweetsDanishDesc',
		type: 'div',
		attributes: {
			class: 'menu item-description'
		},
		text: "It's from Europe."
	});

	buildPage(menuContainer);
}