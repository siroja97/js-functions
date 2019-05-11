  let endOfTime = '2019-04-21'
     
    function timeCounter(endOfTime){
        let total = Date.parse(endOfTime) - Date.parse( new Date()),
            seconds = Math.floor((total/(1000))%60),
            minutes = Math.floor((total/(1000*60))%60),
            hours = Math.floor(total/(1000*60*60));

            return {
                'total': total,
                'seconds': seconds,
                'minutes': minutes,
                'hours': hours
            };

    }

  function setClock(id,endOfTime){
   let timer= document.getElementById(id),
         hours= timer.querySelector('.hours'),
         minutes = timer.querySelector('.minutes'),
         seconds = timer.querySelector('.seconds'),
         timerInterval = setInterval(updateClock, 1000);



      function updateClock(){

        let t = timeCounter(endOfTime);
         function addZero(num){
            if(num<= 9){
               return  '0'+ num;
            }
            else  return num;
         } 


         hours.textContent = addZero(t.hours);
         minutes.textContent = addZero(t.minutes);
         seconds.textContent = addZero(t.seconds);

        if (t.total <= 0){

        hours.textContent = '00';         
        minutes.textContent = '00';
        seconds.textContent = '00'; 
    }
   }       
  }


setClock('timer',endOfTime);
