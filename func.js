
let timer = null
let timeRef = document.querySelector("display")
let dat
let hrs = 0
let mn = 0
let sc = 0
function handleStop(){
    if(timer != null)clearInterval(timer)
    setTimeout(() => {
        hrd=hrs.toString().padStart(2,'0')
        mnd = mn.toString().padStart(2,'0')
        scd = sc.toString().padStart(2,'0')
        document.getElementById('display').innerText = (hrd+":"+ mnd+":"+scd)
    },0)
    timer=null
}

function handleStart(){
    if(!timer){
        timer = setInterval(() =>{
            sc++
            
            if(sc==60){
                mn+=1,
                sc = 0
            }
            if(mn==60){
                hrs+=1,
                mn = 0
            }  
            hrd=hrs.toString().padStart(2,'0')
            mnd = mn.toString().padStart(2,'0')
            scd = sc.toString().padStart(2,'0')
            document.getElementById('display').innerText = (hrd+":"+mnd+":"+scd)    
             
        },1000)
    }
}


function handleReset(){
    if(timer != null)clearInterval(timer)
    document.getElementById('display').innerText = ("00:00:00")
    timer = null
    hrs = 0
    mn = 0
    sc = 0
    
}
const b1 = document.getElementById('start')
b1.addEventListener('click',handleStart)
const b2 = document.getElementById("stop")
b2.addEventListener('click',handleStop)
const b3 = document.getElementById("reset")
b3.addEventListener('click',handleReset)


