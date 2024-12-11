function curretTime(){
    let date = new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let seconds=date.getSeconds();

    hour = (hour <10)? "0" + hour : hour;
    minute = (minute <10)? "0" + minute : minute;
    seconds = (seconds <10)? "0" + seconds : seconds;


    let time = hour + ":" + minute + ":" + seconds;

    let watch = document.querySelector('.watch');

    watch.innerHTML = time;
}

setInterval(curretTime, 1000);