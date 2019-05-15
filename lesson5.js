// var $block = document.getElementById('block');
// var $table = document.createElement('table');
// var count = 0;

// for(var i = 0; i < 8; i++) {
//   var $row = document.createElement('tr');

//   for(var j = 0; j < 8; j++) {
//     var $cell = document.createElement('td');
//     $cell.textContent = 'cell-' + i + '-' + j;
//     $row.appendChild($cell);
//   }

//   $table.appendChild($row);
// }

// $block.appendChild($table);

var $board = document.getElementById('board');

for(var i = 0; i < 49; i++){
    $block = document.createElement('div');
    $block.classList.add('block');
    $board.appendChild($block);
    if(i % 2 == 0){
        $block.classList.add('block_black');
    }
}






