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
                var counter=request.responseText;
                var span = document.getElementById('count');
    span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://vamsikrishnakommineni.imad.hasura-app.io/counterplus',true);
    request.send(null);
};


var button=document.getElementById('counter');
button.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var nameinput = document.getElementById('name');
var names=nameinput.value;
var submit = document.getElementById('submit');
submit.onclick = function(){
    names=['name1','name2','name3','name4'];
    list='';
    for(i=0;i<names.length;i++){
        list += '<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML = list;
};
                var counter=request.responseText;
                var span = document.getElementById('count');
    span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://vamsikrishnakommineni.imad.hasura-app.io/counterplus',true);
    request.send(null);
};


