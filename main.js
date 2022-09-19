let title = document.querySelector('.title');
let turn = 'x';
let ar = [];
/*function end(num1,num2,num3){

    
}*/
function winner(){
for( let i =1 ; i<10 ; i++) {

 ar[i] = document.getElementById('item' + i);
}
if(ar[1] == ar[2] && ar[2] == ar[3] && ar[2] !=''){
   // end(1,2,3)
   title.innerHTML = `${ar[1]} winner`;
   document.getElementById('item'+1).style.background ='#000';
   document.getElementById('item'+2).style.background ='#000';
   document.getElementById('item'+3).style.background ='#000';
   etInterval(function(){ title.innerHTML += '.'},1500);
   setTimeout(function(){location.reload()},4000);


}
else if(ar[4] == ar[5] && ar[5] == ar[6] && ar[5] !=''){
  //  end(4,5,6)
}
else if(ar[7] == ar[8] && ar[8] == ar[9] && ar[8] !=''){
  //  end(7,8,9)
}
else if(ar[1] == ar[4] && ar[4] == ar[7] && ar[4] !=''){
  //  end(1,4,7)
}
else if(ar[2] == ar[5] && ar[5] == ar[8] && ar[5] !=''){
   // end(2,5,8)
}
else if(ar[3] == ar[6] && ar[6] == ar[9] && ar[6] !=''){
   // end(3,6,9)
}
  }


function gm (id){
    let element = document.getElementById(id);
    if( turn == 'x' && element.innerHTML == ''){
        element.innerHTML = 'x';
        turn = 'o';
        title.innerHTML= 'o';
}
else if (turn == 'o' && element.innerHTML == '' ){
    element.innerHTML = 'o';
    turn = 'x';
    title.innerHTML= 'x';
}
winner();
  }
