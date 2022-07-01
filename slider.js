async function fech(){
    try {
        let res=await fetch("https://mdshahbazalam6.github.io/ZostelApi/db.json")
        let data=await res.json()
        console.log(data)
        display(data.sai)
    } catch (error) {
        console.log(error)
    }
}
fech()
function display(data){
data.forEach((e,i) => {
    var div= document.createElement('div')
    div.innerHTML=`
           <a>
            <div class='innest_slider_below_main_slider'>
                <img src="${e.posterUrl}" />
             <h2>${e.name}</h2>
         </div>
            </a>
           
 `
    document.getElementById("inner_slider_below_main_slider").append(div)
    
});
}

let slide1_count=1
const slide1_right =()=>{

if(slide1_count === 1){
    document.getElementById("inner_slider_below_main_slider").style.transform='translateX(-90vw)'
    document.getElementById("inner_slider_below_main_slider").style.transition='1s'
    slide1_count++
}else  if(slide1_count === 2){
    document.getElementById("inner_slider_below_main_slider").style.transform='translateX(-180vw)'
    document.getElementById("inner_slider_below_main_slider").style.transition='1s'
    slide1_count++
}else  if(slide1_count === 3){
    document.getElementById("inner_slider_below_main_slider").style.transform='translateX(-270vw)'
    document.getElementById("inner_slider_below_main_slider").style.transition='1s'
    slide1_count++
}else  if(slide1_count === 4){
    document.getElementById("inner_slider_below_main_slider").style.transform='translateX(0vw)'
    document.getElementById("inner_slider_below_main_slider").style.transition='1s'
    console.log(slide1_count)
    slide1_count=1
}
}

const slide1_left =()=>{

if(slide1_count === 1){
document.getElementById("inner_slider_below_main_slider").style.transform='translateX(-270vw)'
document.getElementById("inner_slider_below_main_slider").style.transition='1s'
slide1_count=4
}else  if(slide1_count === 4){
document.getElementById("inner_slider_below_main_slider").style.transform='translateX(-180vw)'
document.getElementById("inner_slider_below_main_slider").style.transition='1s'
slide1_count--
}else  if(slide1_count === 3){
document.getElementById("inner_slider_below_main_slider").style.transform='translateX(-90vw)'
document.getElementById("inner_slider_below_main_slider").style.transition='1s'
slide1_count--
}else  if(slide1_count === 2){
document.getElementById("inner_slider_below_main_slider").style.transform='translateX(0vw)'
document.getElementById("inner_slider_below_main_slider").style.transition='1s'
slide1_count=4
}
}