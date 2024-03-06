let setTime = document.getElementById('settimer')

setTime.addEventListener('click', settimebtn);

function settimebtn(){
    let input = document.getElementById('inputtxt').value
    document.getElementById('display').textContent = input;


   function timernum(timer){
         document.getElementById('display').textContent = timer;
        console.log(timer);
        if(timer > 0) {
 
        setTimeout(function(){
          timernum(timer - 1)   
         }, 1000);
 
      } 
   }


   timernum(input);

    document.getElementById('inputtxt').value = ""
}




