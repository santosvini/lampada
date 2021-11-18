const lamp = document.getElementById('lamp');

function turnOn() {
  lamp.src = './images/ligada.jpg'
  const lampOn = document.getElementByClassName('on')
  lampOn.addEventListener('click', turnOn)
}
lamp.addEventListener('mouseover', turnOn)

function turnOff() {
  lamp.src = './images/desligada.jpg'
  const lampOff = document.getElementsByClassName('off')
  lampOff.addEventListener('click', turnOff)
}
lamp.addEventListener('mouseout', turnOff)

function lampBroken() {
  lamp.src = './images/quebrada.jpg'
  const lampBroken = document.querySelector('#lamp')
  lampBroken.addEventListener('click', lampBroken)
}
lamp.addEventListener('dbclick', lampBroken)