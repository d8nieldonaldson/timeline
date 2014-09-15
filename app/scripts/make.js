'use strict';

var main = document.getElementsByTagName('main')[0];


var makeElement = function(tag, css, parent, quantity){

  parent = document.querySelector(parent);
  for(var i = 1; i <= quantity; i++){
    var el = document.createElement(tag);
    el.classList.add(css);
    parent.appendChild(el);
  }

  return;

};

makeElement('div', 'module-container', '.main', 1);
makeElement('ul', 'timeline', '.module-container', 1);
makeElement('li', 'show-container', '.timeline', 1);
makeElement('header', 'show-header', '.show-container', 1);
makeElement('ul', 'segment-list', '.show-container', 1);
makeElement('li', 'segment', '.segment-list', 5);
makeElement('header', 'show-header', '.show-container', 1);
