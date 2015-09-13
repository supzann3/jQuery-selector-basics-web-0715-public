'use-strict';
$(document).ready(function(){
  h1Selector();
  liInOlSelector();
  linkSelector();
  imageSelector();
  checkboxInputSelector();
});

function h1Selector() {
  return $("#content h1");
}

function liInOlSelector() {
  return $("ol li");
}

function linkSelector() {
  return $('#box4.box5 a[href$="#"]');
}

function imageSelector() {
  return $("img[alt='cat sleeping']");
}

function checkboxInputSelector() {
  return $("form input:checkbox").wrap("<span class='pinky'></span>");
}
// declare your functions here...
