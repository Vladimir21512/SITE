var body, num, array, width, context, logo, myElements, analyser, src, height;

//body = document.querySelector('body');

body = document.getElementById('');

var rec = document.querySelector('#wind')
var stop_rec = document.getElementById('stop')

num = 32;

array = new Uint8Array(num*2);

width = 10;

var recorder = null;

// TIMER
var time = document.getElementById('timer');
var time_txt = document.getElementById('time_txt');
var audio_block = document.getElementById('audio')


sec = 0
min = 0;
hour = 0;
var intr = null;
let webAudioRecorder = null;

function init() {  
    sec = 0;   
    intr = setInterval(tick, 1000);
}

function tick() {
    sec++;
    if (sec >= 60) { //задаем числовые параметры, меняющиеся по ходу работы программы
        min++;
        sec = sec - 60;
    }
    if (min >= 60) {
        hour++;
        min = min - 60;
    }
    if (sec < 10) { //Визуальное оформление
        if (min < 10) {
            if (hour < 10) {
                // document.getElementById('timer').innerHTML ='0' + hour + ':0' + min + ':0' + sec;
                if(sec<10 && min<10){
                    time_txt.innerHTML ='0' + min + ':0' + sec;
                }
                else if (sec>10 && min<10)
                {
                    time_txt.innerHTML ='0' + min + ':' + sec;
                }
                else if(sec<10 && min>10)
                {
                    time_txt.innerHTML =min + ':0' + sec;
                }
                else
                {
                    time_txt.innerHTML =min + ':' + sec;
                }
            } else {
                //document.getElementById('timer').innerHTML = hour + ':0' + min + ':0' + sec;
                if(sec<10 && min<10){
                    time_txt.innerHTML ='0' + min + ':0' + sec;
                }
                else if (sec>10 && min<10)
                {
                    time_txt.innerHTML ='0' + min + ':' + sec;
                }
                else if(sec<10 && min>10)
                {
                    time_txt.innerHTML =min + ':0' + sec;
                }
                else
                {
                    time_txt.innerHTML =min + ':' + sec;
                }
            }
        } else {
            if (hour < 10) {
               // document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':0' + sec;
               if(sec<10 && min<10){
                time_txt.innerHTML ='0' + min + ':0' + sec;
                }
                else if (sec>10 && min<10)
                {
                    time_txt.innerHTML ='0' + min + ':' + sec;
                }
                else if(sec<10 && min>10)
                {
                    time_txt.innerHTML =min + ':0' + sec;
                }
                else
                {
                    time_txt.innerHTML =min + ':' + sec;
                }
            } else {
                //document.getElementById('timer').innerHTML = hour + ':' + min + ':0' + sec;
                if(sec<10 && min<10){
                    time_txt.innerHTML ='0' + min + ':0' + sec;
                }
                else if (sec>10 && min<10)
                {
                    time_txt.innerHTML ='0' + min + ':' + sec;
                }
                else if(sec<10 && min>10)
                {
                    time_txt.innerHTML =min + ':0' + sec;
                }
                else
                {
                    time_txt.innerHTML =min + ':' + sec;
                }
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10) {
                //document.getElementById('timer').innerHTML = '0' + hour + ':0' + min + ':' + sec;
                if(sec<10 && min<10){
                    time_txt.innerHTML ='0' + min + ':0' + sec;
                }
                else if (sec>10 && min<10)
                {
                    time_txt.innerHTML ='0' + min + ':' + sec;
                }
                else if(sec<10 && min>10)
                {
                    time_txt.innerHTML =min + ':0' + sec;
                }
                else
                {
                    time_txt.innerHTML =min + ':' + sec;
                }
            } else {
               // document.getElementById('timer').innerHTML = hour + ':0' + min + ':' + sec;
               if(sec<10 && min<10){
                time_txt.innerHTML ='0' + min + ':0' + sec;
            }
            else if (sec>10 && min<10)
            {
                time_txt.innerHTML ='0' + min + ':' + sec;
            }
            else if(sec<10 && min>10)
            {
                time_txt.innerHTML =min + ':0' + sec;
            }
            else
            {
                time_txt.innerHTML =min + ':' + sec;
            }
            }
        } else {
            if (hour < 10) {
               // document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':' + sec;
               if(sec<10 && min<10){
                time_txt.innerHTML ='0' + min + ':0' + sec;
            }
            else if (sec>10 && min<10)
            {
                time_txt.innerHTML ='0' + min + ':' + sec;
            }
            else if(sec<10 && min>10)
            {
                time_txt.innerHTML =min + ':0' + sec;
            }
            else
            {
                time_txt.innerHTML =min + ':' + sec;
            }
            } else {
                //document.getElementById('timer').innerHTML = hour + ':' + min + ':' + sec;
                if(sec<10 && min<10){
                    time_txt.innerHTML ='0' + min + ':0' + sec;
                }
                else if (sec>10 && min<10)
                {
                    time_txt.innerHTML ='0' + min + ':' + sec;
                }
                else if(sec<10 && min>10)
                {
                    time_txt.innerHTML =min + ':0' + sec;
                }
                else
                {
                    time_txt.innerHTML =min + ':' + sec;
                }
            }
        }
    }
}

//ФУНКЦИЯ init запускает таймер


// RECORDING VISUALIZING
rec.addEventListener('click', function(){

    
    if(context) return;
    document.getElementById('prev').style.display = 'none'
    

    for(var i = 0 ; i < num ; i++){
        logo = document.createElement('div');
        logo.className = 'logo';
        logo.style.background = '#666666';
        logo.style.minWidth = width+'px';
        rec.appendChild(logo);
    }

    myElements = document.getElementsByClassName('logo');

    let AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
    // context = new AudioContext();
    analyser = context.createAnalyser();


    var items = [];
    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => {

        


        console.log(navigator.mediaDevices)

        src = context.createMediaStreamSource(stream);
        console.log(1)

        webAudioRecorder = new WebAudioRecorder(src, {
            workerDir: './js/web-audio-recorder-js-master/lib/',
            encoding: 'mp3',
            options: {
                encodeAfterRecord: true,
                mp3: { bitRate: '320' }    
            } 
        });
        webAudioRecorder.onComplete = (webAudioRecorder, blob) => {
            let audioElementSource = window.URL.createObjectURL(blob);

            let audioElement = document.createElement('audio')

            audioElement.src = audioElementSource;
            audioElement.controls = true;

            audio_block.appendChild(audioElement);

        }
        webAudioRecorder.onError = (webAudioRecorder, err) => {
            console.error(err);
        }

        webAudioRecorder.startRecording();
        //ДЛЯ ВИЗУАЛИЗАЦИИ
        src.connect(analyser);

        //УБИРАЕМ ЗНАЧОК И ПОКАЗЫВАЕМ СЕКУНДОМЕР
        time.style.display = 'flex';
        rec.querySelector('#rec').remove();

        //ЗАПУСКАЕМ ТАЙМЕР       
        init()

        //АНИМАЦИЯ
        loop();
    }).catch(error => {
        alert(error + '\r\n\ Отклонено. Страница будет обновлена!');
        location.reload();
    });
})

stop_rec.addEventListener('click', ()=>{
    clearInterval(intr)
    audio_block.style.display = 'flex'
    webAudioRecorder.finishRecording();
    rec.style.display = 'none'
    time.style.display = 'none'
})

function loop() {
    window.requestAnimationFrame(loop);
    analyser.getByteFrequencyData(array);
    for(var i = 0 ; i < num ; i++){
        height = array[i+num];
        myElements[i].style.minHeight = height+'px';
        myElements[i].style.opacity = 0.008*height;
    }
}

////////////////



