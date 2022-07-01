const normalshow1 = () => {
  console.log(1);
  document.getElementById("normaltoggle2").style.transform = "rotate(0deg)";
  document.getElementById("normaltoggle2").style.transition = ".1s";
  document.getElementById("normaltoggle3").style.transform = "rotate(0deg)";
  document.getElementById("normaltoggle3").style.transition = ".1s";
  document.getElementById("normaltoggle4").style.transform = "rotate(0deg)";
  document.getElementById("normaltoggle4").style.transition = ".1s";
  document.getElementById("normalsubmenue2").style.display = "none";
  document.getElementById("normalsubmenue3").style.display = "none";
  document.getElementById("normalsubmenue4").style.display = "none";
  if (document.getElementById("normalsubmenue1").style.display === "none") {
    document.getElementById("normalsubmenue1").style.display = "flex";
    document.getElementById("normaltoggle1").style.transform = "rotate(180deg)";
    document.getElementById("normaltoggle1").style.transition = ".1s";
  } else if (
    document.getElementById("normalsubmenue1").style.display != "none"
  ) {
    document.getElementById("normalsubmenue1").onclick = (e) => {
      console.log("clicked",e.target.innerHTML)
      console.log("localstorage")
      localStorage.setItem("ZostelData", JSON.stringify(e.target.innerHTML));
    };
    document.getElementById("normalsubmenue1").style.display = "none";
    document.getElementById("normaltoggle1").style.transform = "rotate(0deg)";
    document.getElementById("normaltoggle1").style.transition = ".1s";
  
  }
};
const normalshow2 = () => {
  // console.log(1)
  document.getElementById("normaltoggle1").style.transform = "rotate(0deg)";
  document.getElementById("normaltoggle1").style.transition = ".1s";
  document.getElementById("normaltoggle3").style.transform = "rotate(0deg)";
  document.getElementById("normaltoggle3").style.transition = ".1s";
  document.getElementById("normaltoggle4").style.transform = "rotate(0deg)";
  document.getElementById("normaltoggle4").style.transition = ".1s";
  document.getElementById("normalsubmenue1").style.display = "none";
  document.getElementById("normalsubmenue3").style.display = "none";
  document.getElementById("normalsubmenue4").style.display = "none";
  if (document.getElementById("normalsubmenue2").style.display === "none") {
    document.getElementById("normalsubmenue2").style.display = "flex";
    document.getElementById("normaltoggle2").style.transform = "rotate(180deg)";
    document.getElementById("normaltoggle2").style.transition = ".1s";
  } else if (
    document.getElementById("normalsubmenue2").style.display != "none"
  ) {
    document.getElementById("normalsubmenue2").onclick = (e) => {
      // console.log("clicked",e.target.innerHTML)
      localStorage.setItem("ZostelData", JSON.stringify(e.target.innerHTML));
  
    };
    document.getElementById("normalsubmenue2").style.display = "none";
    document.getElementById("normaltoggle2").style.transform = "rotate(0deg)";
    document.getElementById("normaltoggle2").style.transition = ".1s";
  }
};
const normalshow3 = () => {
  // console.log(1)
  document.getElementById("normaltoggle4").style.transform = "rotate(0deg)";
  document.getElementById("normaltoggle4").style.transition = ".1s";
  document.getElementById("normaltoggle2").style.transform = "rotate(0deg)";
  document.getElementById("normaltoggle2").style.transition = ".1s";
  document.getElementById("normaltoggle1").style.transform = "rotate(0deg)";
  document.getElementById("normaltoggle1").style.transition = ".1s";
  document.getElementById("normalsubmenue1").style.display = "none";
  document.getElementById("normalsubmenue2").style.display = "none";
  document.getElementById("normalsubmenue4").style.display = "none";
  if (document.getElementById("normalsubmenue3").style.display === "none") {
    document.getElementById("normalsubmenue3").style.display = "flex";
    document.getElementById("normaltoggle3").style.transform = "rotate(180deg)";
    document.getElementById("normaltoggle3").style.transition = ".1s";
  } else if (
    document.getElementById("normalsubmenue3").style.display != "none"
  ) {
    document.getElementById("normalsubmenue3").onclick = (e) => {
      // console.log("clicked",e.target.innerHTML)
      localStorage.setItem("ZostelData", JSON.stringify(e.target.innerHTML));
      // location.reload();
    };
    document.getElementById("normalsubmenue3").style.display = "none";
    document.getElementById("normaltoggle3").style.transform = "rotate(0deg)";
    document.getElementById("normaltoggle3").style.transition = ".1s";
  }
};
const normalshow4 = () => {
  // console.log(1)
  document.getElementById("normaltoggle1").style.transform = "rotate(0deg)";
  document.getElementById("normaltoggle1").style.transition = ".1s";
  document.getElementById("normaltoggle2").style.transform = "rotate(0deg)";
  document.getElementById("normaltoggle2").style.transition = ".1s";
  document.getElementById("normaltoggle3").style.transform = "rotate(0deg)";
  document.getElementById("normaltoggle3").style.transition = ".1s";
  document.getElementById("normalsubmenue1").style.display = "none";
  document.getElementById("normalsubmenue2").style.display = "none";
  document.getElementById("normalsubmenue3").style.display = "none";
  if (document.getElementById("normalsubmenue4").style.display === "none") {
    document.getElementById("normalsubmenue4").style.display = "flex";
    document.getElementById("normaltoggle4").style.transform = "rotate(180deg)";
    document.getElementById("normaltoggle4").style.transition = ".1s";
  } else if (
    document.getElementById("normalsubmenue4").style.display != "none"
  ) {
    document.getElementById("normalsubmenue4").onclick = (e) => {
      // console.log("clicked",e.target.innerHTML)
      localStorage.setItem("ZostelData", JSON.stringify(e.target.innerHTML));
      // location.reload();
    };
    document.getElementById("normalsubmenue4").style.display = "none";
    document.getElementById("normaltoggle4").style.transform = "rotate(0deg)";
    document.getElementById("normaltoggle4").style.transition = ".1s";
  }
};
const show1 = () => {
  console.log(1);
  document.getElementById("toggle2").style.transform = "rotate(0deg)";
  document.getElementById("toggle2").style.transition = ".1s";
  document.getElementById("toggle3").style.transform = "rotate(0deg)";
  document.getElementById("toggle3").style.transition = ".1s";
  document.getElementById("toggle4").style.transform = "rotate(0deg)";
  document.getElementById("toggle4").style.transition = ".1s";
  document.getElementById("innersubmenue2").style.display = "none";
  document.getElementById("innersubmenue3").style.display = "none";
  document.getElementById("innersubmenue4").style.display = "none";
  if (document.getElementById("innersubmenue1").style.display === "none") {
    document.getElementById("innersubmenue1").style.display = "flex";
    document.getElementById("toggle1").style.transform = "rotate(180deg)";
    document.getElementById("toggle1").style.transition = ".1s";
  } else if (
    document.getElementById("innersubmenue1").style.display != "none"
  ) {
    document.getElementById("innersubmenue1").onclick = (e) => {
      // console.log("clicked",e.target.innerHTML)
      localStorage.setItem("ZostelData", JSON.stringify(e.target.innerHTML));
      // location.reload();
    };
    document.getElementById("innersubmenue1").style.display = "none";
    document.getElementById("toggle1").style.transform = "rotate(0deg)";
    document.getElementById("toggle1").style.transition = ".1s";
  }
};

const show2 = () => {
  // console.log(1)
  document.getElementById("toggle1").style.transform = "rotate(0deg)";
  document.getElementById("toggle1").style.transition = ".1s";
  document.getElementById("toggle3").style.transform = "rotate(0deg)";
  document.getElementById("toggle3").style.transition = ".1s";
  document.getElementById("toggle4").style.transform = "rotate(0deg)";
  document.getElementById("toggle4").style.transition = ".1s";
  document.getElementById("innersubmenue1").style.display = "none";
  document.getElementById("innersubmenue3").style.display = "none";
  document.getElementById("innersubmenue4").style.display = "none";
  if (document.getElementById("innersubmenue2").style.display === "none") {
    document.getElementById("innersubmenue2").style.display = "flex";
    document.getElementById("toggle2").style.transform = "rotate(180deg)";
    document.getElementById("toggle2").style.transition = ".1s";
  } else if (
    document.getElementById("innersubmenue2").style.display != "none"
  ) {
    document.getElementById("innersubmenue2").onclick = (e) => {
      // console.log("clicked",e.target.innerHTML)
      localStorage.setItem("ZostelData", JSON.stringify(e.target.innerHTML));
      // location.reload();
    };
    document.getElementById("innersubmenue2").style.display = "none";
    document.getElementById("toggle2").style.transform = "rotate(0deg)";
    document.getElementById("toggle2").style.transition = ".1s";
  }
};

const show3 = () => {
  // console.log(1)
  document.getElementById("toggle4").style.transform = "rotate(0deg)";
  document.getElementById("toggle4").style.transition = ".1s";
  document.getElementById("toggle2").style.transform = "rotate(0deg)";
  document.getElementById("toggle2").style.transition = ".1s";
  document.getElementById("toggle1").style.transform = "rotate(0deg)";
  document.getElementById("toggle1").style.transition = ".1s";
  document.getElementById("innersubmenue1").style.display = "none";
  document.getElementById("innersubmenue2").style.display = "none";
  document.getElementById("innersubmenue4").style.display = "none";
  if (document.getElementById("innersubmenue3").style.display === "none") {
    document.getElementById("innersubmenue3").style.display = "flex";
    document.getElementById("toggle3").style.transform = "rotate(180deg)";
    document.getElementById("toggle3").style.transition = ".1s";
  } else if (
    document.getElementById("innersubmenue3").style.display != "none"
  ) {
    document.getElementById("innersubmenue3").onclick = (e) => {
      // console.log("clicked",e.target.innerHTML)
      localStorage.setItem("ZostelData", JSON.stringify(e.target.innerHTML));
      // location.reload();
    };
    document.getElementById("innersubmenue3").style.display = "none";
    document.getElementById("toggle3").style.transform = "rotate(0deg)";
    document.getElementById("toggle3").style.transition = ".1s";
  }
};
const show4 = () => {
  // console.log(1)
  document.getElementById("toggle1").style.transform = "rotate(0deg)";
  document.getElementById("toggle1").style.transition = ".1s";
  document.getElementById("toggle2").style.transform = "rotate(0deg)";
  document.getElementById("toggle2").style.transition = ".1s";
  document.getElementById("toggle3").style.transform = "rotate(0deg)";
  document.getElementById("toggle3").style.transition = ".1s";
  document.getElementById("innersubmenue1").style.display = "none";
  document.getElementById("innersubmenue2").style.display = "none";
  document.getElementById("innersubmenue3").style.display = "none";
  if (document.getElementById("innersubmenue4").style.display === "none") {
    document.getElementById("innersubmenue4").style.display = "flex";
    document.getElementById("toggle4").style.transform = "rotate(180deg)";
    document.getElementById("toggle4").style.transition = ".1s";
  } else if (
    document.getElementById("innersubmenue4").style.display != "none"
  ) {
    document.getElementById("innersubmenue4").onclick = (e) => {
      // console.log("clicked",e.target.innerHTML)
      localStorage.setItem("ZostelData", JSON.stringify(e.target.innerHTML));
    };
    document.getElementById("innersubmenue4").style.display = "none";
    document.getElementById("toggle4").style.transform = "rotate(0deg)";
    document.getElementById("toggle4").style.transition = ".1s";
  }
};

const changelocation =()=>{
  location.href=`./Index.html`
}
const changedestlocation=()=>{
  location.href=`./destination.html`
}
const changeLongstayslocation = ()=>{
  location.href=`./Longstays.html`
}


