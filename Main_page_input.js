const changeType=()=>{
    console.log(event.target.innerHTML)
    document.getElementById("Destination").setAttribute("class","clear_border")
    if(event.target.innerHTML === 'Destination'){
        document.getElementById("DestinationSel").innerHTML='Select Your Destination'
        document.getElementById("Destination").setAttribute("class","border_bottom")
        document.getElementById("Zostel").setAttribute("class","clear_border")
        document.getElementById("ZostelHome").setAttribute("class","clear_border")
        document.getElementById("ZostelPlus").setAttribute("class","clear_border")
    }else  if(event.target.innerHTML === 'Zostel'){
        document.getElementById("DestinationSel").innerHTML='Select Your Zostal'
        document.getElementById("Destination").setAttribute("class","clear_border")
        document.getElementById("Zostel").setAttribute("class","border_bottom")
        document.getElementById("ZostelHome").setAttribute("class","clear_border")
        document.getElementById("ZostelPlus").setAttribute("class","clear_border")
    }else  if(event.target.innerHTML === 'Zostel Home'){
        document.getElementById("DestinationSel").innerHTML='Select Your Zostal Home'
        document.getElementById("Destination").setAttribute("class","clear_border")
        document.getElementById("Zostel").setAttribute("class","clear_border")
        document.getElementById("ZostelHome").setAttribute("class","border_bottom")
        document.getElementById("ZostelPlus").setAttribute("class","clear_border")
    }else  if(event.target.innerHTML === 'Zostel Plus'){
        document.getElementById("DestinationSel").innerHTML='Select Your Zostal Plus'
        document.getElementById("Destination").setAttribute("class","clear_border")
        document.getElementById("Zostel").setAttribute("class","clear_border")
        document.getElementById("ZostelHome").setAttribute("class","clear_border")
        document.getElementById("ZostelPlus").setAttribute("class","border_bottom")
    }
  }

  const changeLocation=()=>{
      let place=document.getElementById("fillPlace").value
      let date1=document.getElementById("date1").value
      let date2=document.getElementById("date2").value
      console.log(place,date1,date2)
      if(place.length > 0 && date1.length >0 && date2.length >0){
          location.href=``
      }
  }