const config = {
  start: [ 1 ],
  step: 1,
  range: {
    min: [ 1 ],
    max: [ 150 ]
  }
};

let houseSizeSlider = noUiSlider.create(document.getElementById('house-size-slider'), config),
    foundationHeightSlider = noUiSlider.create(document.getElementById('foundation-height-slider'), config),
    foundationWidthSlider = noUiSlider.create(document.getElementById('foundation-width-slider'), config);

houseSizeSlider.on('update', updateValue);
foundationHeightSlider.on('update', updateValue);
foundationWidthSlider.on('update', updateValue);

function updateValue() {
  let value = parseInt(this.get()), 
      id = this.target.id;
  
  switch (id) {
    case 'house-size-slider':
      document.documentElement.style.setProperty('--house--size', (63 + value) + 'px');
      break;
    case 'foundation-height-slider':
      document.documentElement.style.setProperty('--foundation--height', (41 + (value >= 2? (value / 2) : value)) + 'px');
      break;
    case 'foundation-width-slider':
      document.documentElement.style.setProperty('--foundation--width', (174 + value) + 'px');
      break;
    default:
  }
}

function playIntroSequence() {
  // Intro sequence
  setTimeout(() => {
    houseSizeSlider.set(100);
    foundationHeightSlider.set(100);
    foundationWidthSlider.set(100);
  }, 500);
  
  setTimeout(() => {
    houseSizeSlider.set(0);
  }, 1100);
  
  setTimeout(() => {
    houseSizeSlider.set(100);
  }, 1700);
  
  setTimeout(() => {
    foundationWidthSlider.set(150);
  }, 2300);
  
  setTimeout(() => {
    foundationWidthSlider.set(100);
  }, 2900);
  
  setTimeout(() => {
    houseSizeSlider.set(150);
    foundationWidthSlider.set(150);
  }, 3700);
  
  setTimeout(() => {
    houseSizeSlider.set(1);
    foundationWidthSlider.set(1);
  }, 4500);
  
  setTimeout(() => {
    houseSizeSlider.set(100);
    foundationWidthSlider.set(100);
  }, 5100);
  
  setTimeout(() => {
    houseSizeSlider.set(1);
    foundationHeightSlider.set(1);
    foundationWidthSlider.set(1);
  }, 6000);
}

setTimeout(() => {
  document.body.classList.add('ready');
  
  // Play intro sequence
  setTimeout(() => {
    playIntroSequence();
  }, 1000);
}, 0);
