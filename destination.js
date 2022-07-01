   // s.addEventListener('click',()=>{ show()})

// body
    async function sai(){

try{
await fetch("https://mdshahbazalam6.github.io/ZostelApi/db.json")
.then((x)=> x.json())
.then((y)=>display(y.sai))




}catch(err){
    console.log(err)
}



    
    }
    sai()

    function display(data){
    data.forEach((e,i) => {
        var div= document.createElement('div')
        div.className='xx'
        div.innerHTML=`
        <img src="${e.posterUrl} "height="280px"/>
<div style="margin-top:-80px;font-size:35px;font-family: CircularStd,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
;">
${e.name}
</div>
             </div>
     `
     
     div.addEventListener("click",()=>{
         localStorage.setItem('index',e.id)
         window.location.href=`zostelcity.html`
     })
        document.getElementById("sai").append(div)
        
    });
}