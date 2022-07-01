const nav=()=>{
    return `
    <nav>
    <div id="navFirstChild">
         <img onclick='changelocation()' src='https://tse4.mm.bing.net/th?id=OIP.MJHKIyQFtgiaKLLHXtzbPwHaCA&pid=Api&P=0&w=252&h=68' alt="Zostel Logo">
    </div>
    <div id="navSecondChild">
      <ul>
          <li onclick='changedestlocation()' >Destination</li>
          <li onclick="normalshow1()">Zostel <p style="display: inline-block;" id="normaltoggle1">^</p>
          <div class="submenue" id="normalsubmenue1" >
              <div>
                  <ul>
                      <li  class = "city" ><a href='./zostelcity.html' >Zostel Aurangabad</a></li>
                      <li  class = "city" ><a href='./zostelcity.html'>Zostel Bangalore</a></li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Barot (Rajghnda) </a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Chitkul</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Coorg</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Dalhousie</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Delhi</a></li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Dovie</a></li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Gangtok</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Gokarna</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Jaipur</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Jaisalmer</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel jodhpur</a> </li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Kathmandu</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Kochi</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Kodaikanal</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Kolad</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Leh</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Manali</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Mcleodganj</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Mukteshwar</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Mumbai</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Munnar</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Mysore</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Ooty</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Pokhara</a> </li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <li  class = "city" > <a href='./zostelcity.html' > Zostel Pushkar</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Rushikesh(Tapovan) </a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Sangala</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Shangarh</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Sissu</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Spiti</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Shrinagar</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Udaipur</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Vagamon</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Varkala</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Vashisht</a> </li>
                      <li  class = "city" > <a href='./zostelcity.html' >Zostel Wayanand</a> </li>
                  </ul>
              </div>
          </div>
          
          </li>
          <li onclick="normalshow2()">Zostel Homes <p style="display: inline-block;" id="normaltoggle2">^</p>
              <div class="submenue" id="normalsubmenue2">
                  <div>
                      <ul>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Burwa </a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Cheog</a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Coorg </a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Kibber</a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Kotgadh </a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Kotkhai </a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Laida</a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Mashobra </a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Pushkar </a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Rakhcham</a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Ramgadh(Nainital) </a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Rashil</a></li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Rumshu </a> </li>
                      </ul>
                  </div>
                  <div>
                      <ul>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Tabo</a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Theog</a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Wayanand(Karpujha) </a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Wayanand(Thirunelli)</a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Homes Wayanand(Vythri)</a> </li>
                      </ul>
                  </div>
              </div>
          </li>
          <li onclick="normalshow3()">Zostel Plus <p style="display: inline-block;" id="normaltoggle3">^</p>
              <div class="submenue" id="normalsubmenue3">
                  <div>
                      <ul>
                          <li  class = "city" > <a href='./zostelcity.html' > Zostel Plus Bir</a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' > Zostel Plus Lonavla</a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Plus Mussoorie </a> </li>
                          <li  class = "city" > <a href='./zostelcity.html' >Zostel Plus Panchgani </a> </li>
                      </ul>
                  </div>
              </div>
          </li>
          <li onclick='changeLongstayslocation()'>Longstays</li>
          <li>Franchise</li>
          <li onclick="normalshow4()">Join us <p style="display: inline-block;" id="normaltoggle4">^</p>
              <div class="submenue" id="normalsubmenue4">
                  <div>
                      <ul>
                          <li>Career</li>
                          <li>Zostel Internship 2022</li>
                      </ul>
                  </div>
              </div></li>
          <li>Blog</li>
          <li style="border:1px solid red; padding:1.5vh 2vh;border-radius:10px;font-size: 1.2vw;background-color: white;"><p style="color:rgb(230,90,39);display:inline-block;font-size: 1vw;"> \z/</p><pre style="display:inline-block ;">  Zo World</pre></li>
      </ul>
    </div>
 </nav>`
}



export default nav


// style='text-decoration:none;
// <a href='./Main.html' >