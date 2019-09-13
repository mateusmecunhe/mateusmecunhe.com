const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const menu = document.querySelector('.menu');

const tl = new TimelineMax();


console.log(hero);

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: '100%'}, {width: "80%", ease: Power2.easeInOut})
.fromTo(menu, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2");