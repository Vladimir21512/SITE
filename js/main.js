var eye_red = document.getElementsByClassName('non_red')
var eye_green = document.getElementsByClassName('non_green')
var eye_neit = document.getElementsByClassName('non_neit')

var eye = document.getElementById('spec_but_eye');
var pen =  document.getElementById('spec_but_pen');
var canc = document.getElementById('cancel');

var stat = document.getElementById('opport_stat');

var opport = document.getElementById('opport')

var pos_html = document.getElementById('positive');
var neg_html = document.getElementById('negative');
var neit_html = document.getElementById('neit');

var result = document.getElementById('result')

var opport_stat = document.getElementById('opport_stat')



pre_post = pos_html.innerHTML;
pre_neg = neg_html.innerHTML;
pre_neit = neit_html.innerHTML;


window.onload = ()=>{

    eye.addEventListener('click', function(){     
        
        canc.style.display = 'block';
        eye.style.display = 'none';
        pen.style.display = 'none';

        stat.style.display = 'flex';

        opport.style.display = 'none';

        opport_stat.style.display = 'flex';
       // opport_stat.style.flexDirection = 'column';
        opport_stat.style.height = '150px';



        var count_pos = 0;
        var count_neit = 0;
        var count_neg = 0;

        for (var k in eye_green)
        {     
          
            
            if(isNaN(k)==false){               
                count_pos+=eye_green[k].innerHTML.trim().split(' ').length;
                eye_green[k].classList.add('eye_green');
            }
            
        }
        for (var k in eye_red)
        {       
            if(isNaN(k)==false){
            count_neg+=eye_red[k].innerHTML.trim().split(' ').length;
            eye_red[k].classList.add('eye_red');
            }
        }
        for (var k in eye_neit)
        {       
            if(isNaN(k)==false){
            count_neit+=eye_neit[k].innerHTML.trim().split(' ').length;
            eye_neit[k].classList.add('eye_neit');
            }
        }
        
       
        pos_html.innerHTML = count_pos+" "+pos_html.innerText;

        // pre_neit = neit_html;
        neit_html.innerHTML = count_neit+" "+neit_html.innerText;

        // pre_neg = pos_html;
        neg_html.innerHTML = count_neg+" "+neg_html.innerText;

        if(count_pos>count_neit && count_pos>count_neg)
        {
            //День позитивный
            result.style.color = 'rgb(0, 211, 0)';
            result.innerHTML = 'День позитивный'
        }
        else if (count_neg>count_pos && count_neg>count_neit)
        {
            //День негативный
            result.style.color = 'rgb(211, 0, 0)';
            result.innerHTML = 'День негативный'
        }
        else
        {
            //День нейтральный
            result.style.color = '#666666';
            result.innerHTML = 'День нейтральный'
        }
    })

    canc.addEventListener('click', function () {

        stat.style.display = 'none';
        eye.style.display = 'inline';
        pen.style.display = 'inline';
        opport.style.display = 'flex';

        pos_html.innerHTML = pre_post;
        neg_html.innerHTML = pre_neg;
        neit_html.innerHTML = pre_neit;

        for (var k in eye_green)
        {          
            if(isNaN(k)==false){  
            eye_green[k].classList.remove('eye_green');
            }
        }
        for (var k in eye_neit)
        {       
            if(isNaN(k)==false){
            eye_neit[k].classList.remove('eye_neit');
            }
        }
        for (var k in eye_red)
        {       
            if(isNaN(k)==false){
            eye_red[k].classList.remove('eye_red');
            }
        }
    })
   
}