function drawTree(rows) {
  for (var i = 0; i < rows; i++) {
    var stars = '';
    for (var j = 0; j <= i; j++) {
      stars += '*';
    }
    console.log(stars);
  }
}

var cycles = prompt('Ile rzędów choinki mam zmalować?');
drawTree(cycles);
