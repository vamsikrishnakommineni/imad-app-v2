console.log('Loaded!');

var element = document.getElementById('gain');
element.innerHTML='newvalue';
var img = document.getElementById('madi');

var marginLeft=0;
 function moveRight(){

marginLeft=marginLeft+2;
     img.style.marginLeft = marginLeft+ 'px'; 
}

img.onclick = function(){
  var interval = setInterval(moveRight,10 );
 
};
var counter= document.getElementById('counter');
button.onclick = function(){
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
