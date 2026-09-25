let grid = document.querySelector('div.grid');
for (let i = 0; i < 30; i++) {
  let square = document.createElement('div');
  square.classList.add('square');
  grid.append(square);
}

