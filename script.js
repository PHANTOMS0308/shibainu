// Simply change CSS checkbox dropdown into JS event driven dropdown

function openNavMenu(event) {
  this.nextElementSibling.classList.toggle('nav__menu--on');
}

document.querySelector('#nav__menu__toggler').addEventListener('click', openNavMenu);
