import './style.css';

import { Home } from './home.js';
import { Menu } from './menu.js';
import { About } from './about.js';

Home();

document.querySelector('#home-btn').addEventListener("click", () => {Home()});

document.querySelector('#menu-btn').addEventListener("click", () => {Menu()});

document.querySelector('#about-btn').addEventListener("click", () => {About()});

