console.log('Loaded!');

var element = document.getElementById('gain');
element.innerHTML='newvalue';

var img = document.getElementById('madi');
img.onClick = function(){
  var interval = setInterval(moveRight, 100);
 
};

function moveRight(){
    var marginLeft=0;
    marginLeft=marginLeft+10;
     img.style.marginLeft = marginLeft+ 'px'; 
}