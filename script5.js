function handleClick(callback) {
    alert('the button has been pressed');
    if(callback){
        callback();
    }
}

function doMore(){
    alert('i can process more logic here');
}

function dateX(){
  document.getElementById('datehere').innerHTML= Date();  
}

