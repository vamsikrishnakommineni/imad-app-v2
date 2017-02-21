console.log('Loaded!');

var element = document.getElementById('gain');
element.innerHTML='newvalue';
var img = document.getElementById('madi');

 function moveRight(){
var marginLeft=0;
marginLeft=marginLeft+5;
     img.style.marginLeft = marginLeft+ 'px'; 
}

img.onclick = function(){
  var interval = setInterval(moveRight, 50);
 
};

