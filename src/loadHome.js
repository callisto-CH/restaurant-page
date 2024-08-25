export default loadHome;
import coffeeIconSrc from './images/coffee.png';
import addressIconSrc from './images/location.png';
import hoursIconSrc from './images/time-left.png';
import phoneIconSrc from './images/phone-call.png';
import emailIconSrc from './images/mail.png';
import { Element, buildPage } from './pageHandler.js';

function loadHome() {

    const homeContainer = new Element({
        name: 'container',
        type: 'div',
        attributes: {
            class: 'home-container'
        },
        children: ['top', 'bottom']
    });
    new Element({
        name: 'top',
        type: 'div',
        attributes: {
            class: 'home top'
        },
        children: ['background']
    });
	new Element({
		name: 'background',
		type: 'div',
		attributes: {
			class: 'home background'
		},
		children: ['logo']
	});
	new Element({
		name: 'logo',
		type: 'div',
		attributes: {
			class: 'home logo'
		},
		children: ['coffeeIconLink', 'logoSpan']
	});
	new Element({
		name: 'coffeeIconLink',
		type: 'a',
		attributes: {
			href: 'https://www.flaticon.com/free-icon/coffee_818217',
			target: '_blank',
		},
		children: ['coffeeIcon']		
	});
	new Element({
		name: 'coffeeIcon',
		type: 'img',
		attributes: {
			class: 'coffee-icon',
			title: 'Coffee icon created by Freepik - Flaticon',			
			alt: 'coffee icon',
			src: coffeeIconSrc
		}
	});
	new Element({
		name: 'logoSpan',
		type: 'span',
		text: "Callisto's",
	});
	new Element({
		name: 'bottom',
		type: 'div',
		attributes: {
			class: 'home bottom'
		},
		children: ['info', 'description']
	});
	new Element({
		name: 'info',
		type: 'ul',
		attributes: {
			class: 'home info'
		},
		children: ['hours', 'address', 'phone', 'email']
	});
	new Element({
		name: 'hours',
		type: 'li',
		attributes: {
			class: 'home info'
		},
		children: ['hoursIconLink', 'hoursSpan']
	});
	new Element({
		name: 'hoursIconLink',
		type: 'a',
		attributes: {
			href: 'https://www.flaticon.com/free-icon/time-left_66163',
			target: '_blank'
		},
		children: ['hoursIcon']
	});
	new Element({
		name: 'hoursIcon',
		type: 'img',
		attributes: {
			title: 'Time left icon created by Freepik - Flaticon',
			alt: 'clock icon',
			src: hoursIconSrc
		}
	});
	new Element({
		name: 'hoursSpan',
		type: 'span',
		text: '7:00AM - 6:30PM, Monday - Saturday'
	});
	new Element({
		name: 'address',
		type: 'li',
		attributes: {
			class: 'home info'
		},
		children: ['addressIconLink', 'addressSpan']
	});
	new Element({
		name: 'addressIconLink',
		type: 'a',
		attributes: {
			href: 'https://www.flaticon.com/free-icon/location_535239',
			target: '_blank'
		},
		children: ['addressIcon']
	});
	new Element({
		name: 'addressIcon',
		type: 'img',
		attributes: {
			title: 'Location icon created by Freepik - Flaticon', 
			alt: 'location pin icon',
			src: addressIconSrc
		},
	});
	new Element({
		name: 'addressSpan',
		type: 'span',
		text: '123 Fake St, New York, NY 12345',
	});
	new Element({
		name: 'phone',
		type: 'li',
		attributes: {
			class: 'home info'
		},
		children: ['phoneIconLink', 'phoneSpan']
	});
	new Element({
		name: 'phoneIconLink',
		type: 'a',
		attributes: {
			href: 'https://www.flaticon.com/free-icon/phone-call_126509',
			target: '_blank'
		},
		children: ['phoneIcon']
	});
	new Element({
		name: 'phoneIcon',
		type: 'img',
		attributes: {
			title: 'Phone icon created by Gregor Cresnar - Flaticon',
			alt: 'phone call icon',
			src: phoneIconSrc
		},
	});
	new Element({
		name: 'phoneSpan',
		type: 'span',
		text: '(123) 456-7890'
	});
	new Element({
		name: 'email',
		type: 'li',
		attributes: {
			class: 'home info'
		},
		children: ['emailIconLink', 'emailSpan']
	});
	new Element({
		name: 'emailIconLink',
		type: 'a',
		attributes: {
			href: 'https://www.flaticon.com/free-icon/mail_646094',
			target: '_blank'
		},
		children: ['emailIcon']
	});
	new Element({
		name: 'emailIcon',
		type: 'img',
		attributes: {
			title: 'Email icon created by Freepik - Flaticon',
			alt: 'email icon',
			src: emailIconSrc
		},
	});
	new Element({
		name: 'emailSpan',
		type: 'span',
		text: 'contact@callistos.com',
	});
	new Element({
		name: 'description',
		type: 'div',
		attributes: {
			class: 'home description'
		},
		children: ['description1', 'description2']
	});
	new Element({
		name: 'description1',
		type: 'p',
		text: "Fresh coffee, great eats, good vibes. Take a break at Callisto's, one of NYC's most beloved cafes. Welcoming all since 2024.",
	});
	new Element({
		name: 'description2',
		type: 'p',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi quisquam perspiciatis sint facere, cum quia architecto ut illo officia alias iusto totam sapiente iste consequatur qui! Possimus, magnam magni.',
	});

    buildPage(homeContainer);

}