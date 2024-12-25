
const rollButtonSoup = document.querySelector('.soup-btn');
const rollBlockSoup = document.querySelector('.soup-cards');
const rollButtonGarnire = document.querySelector('.garnire-btn');
const rollBlockGarnire = document.querySelector('.garnire-cards');
const rollButtonSweet = document.querySelector('.sweet-btn');
const rollBlockSweet = document.querySelector('.sweet-cards');


function rollSoup() {
	let random = Math.floor(Math.random() * 1000);
	rollBlockSoup.style.transform = `rotate(${random}deg)`;
	random += Math.floor(Math.random() * 10000);
}

function rollGarnire() {
	let random = Math.floor(Math.random() * 1000);
	rollBlockGarnire.style.transform = `rotate(${random}deg)`;
	random += Math.floor(Math.random() * 10000);
}

function rollSweet() {
	let random = Math.floor(Math.random() * 1000);
	rollBlockSweet.style.transform = `rotate(${random}deg)`;
	random += Math.floor(Math.random() * 10000);
}

rollButtonSoup.addEventListener('click', rollSoup);
rollButtonGarnire.addEventListener('click', rollGarnire);
rollButtonSweet.addEventListener('click', rollSweet);



/*   Рулетка

const cardBlockOne = document.querySelector('.soup__cards');
const cardButtonOne = document.querySelector('.soup__btn');

cardBlockOne.style.left = -0.0001 + 'px';

function roll() {
	const random = Math.floor(Math.random() * 21);
	cardBlockOne.style.left = -random * 200 + 'px';
}


cardButtonOne.addEventListener('click', roll)
*/