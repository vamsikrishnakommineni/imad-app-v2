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


var button=document.getElementById('counter');
button.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter=request.responsetext;
                var span = document.getElementById('count');
    span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://vamsikrishnakommineni.imad.hasura-app.io/counterplus',true);
    request.send(null);
};
