console.log('Loaded!');

var element = document.getElementById('gain');
element.innerHTML='newvalue';
 var marginLeft=0;
var img = document.getElementById('madi');
img.onclick = function(){
  var interval = setInterval(moveRight, 50);
 
};

function moveRight(){
    marginLeft=marginLeft+5;
     img.style.marginLeft = marginLeft+ 'px'; 
}