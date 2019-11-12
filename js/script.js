const playground = document.querySelector('.container');
  let num = 4;

function setPlaygrid(num) {
  const oldPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < oldPixels.length; i++) {
    oldPixels[i].remove();
  }

  playground.style.gridTemplateColumns = `repeat(${num}, auto`;

  for(let i = 0; i < (num**2); i++) {
    const pixel = document.createElement('p');
    pixel.className = 'pixel';
    playground.appendChild(pixel);
  }

  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(function(pixel) {
    pixel.addEventListener('mouseenter', function() {
      var newOpacity = Number(pixel.style.opacity) + 0.1;
      pixel.style.opacity = `${newOpacity}`;
    })
  })
}

setPlaygrid(num);
    
function getNumFromUser() {
  num = window.prompt('Insert number of pixels in a row. (must be smaller than 300)');
  setPlaygrid(num);
}

const button = document.querySelector('#reset');
button.addEventListener('click', getNumFromUser);