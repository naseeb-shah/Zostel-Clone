function get_responsive_navbar() {
    return `
    <div id="respnonsive_navbar_main_body" >
        <div id="media_nav_head">
            <div>  <img onclick='changelocation()' src="https://s3.ap-south-1.amazonaws.com/zo-static/website/img/zostel-logo.png" alt="Zostel Logo">  </div>
            <div style="font-size: 3vw;" onclick='hide_responsive_navbar()'>X</div>
        </div>
        <div id="media_nav_body">
            <ol>
                <li class="liFlex" onclick='changedestlocation()' ><span>Destination</span></li>
                <li class="liFlex" id="submenue1" onclick="show1()"><span>Zostel</span><span id="toggle1"> ^ </span></li>
                    <div class="mediasubmenue" id="innersubmenue1" >
                        <ul> 
                            <li>Zostel Aurangabad</li>
                            <li>Zostel Bangalore</li>
                            <li>Zostel Barot (Rajghnda)</li>
                            <li>Zostel Chitkul</li>
                            <li>Zostel Coorg</li>
                            <li>Zostel Dalhousie</li>
                            <li>Zostel Delhi</li>
                            <li>Zostel Dovie</li>
                            <li>Zostel Gangtok</li>
                            <li>Zostel Gokarna</li>
                            <li>Zostel Jaipur</li>
                            <li>Zostel Jaisalmer</li>
                            <li>Zostel jodhpur</li>
                            <li>Zostel Kathmandu</li>
                            <li>Zostel Kochi</li>
                            <li>Zostel Kodaikanal</li>
                            <li>Zostel Kolad</li>
                            <li>Zostel Leh</li>
                            <li>Zostel Manali</li>
                            <li>Zostel Mcleodganj</li>
                            <li>Zostel Mukteshwar</li>
                            <li>Zostel Mumbai</li>
                            <li>Zostel Munnar</li>
                            <li>Zostel Mysore</li>
                            <li>Zostel Ooty</li>
                            <li>Zostel Pokhara</li>
                            <li>Zostel Pushkar</li>
                            <li>Zostel Rushikesh(Tapovan)</li>
                            <li>Zostel Sangala</li>
                            <li>Zostel Shangarh</li>
                            <li>Zostel Sissu</li>
                            <li>Zostel Spiti</li>
                            <li>Zostel Shrinagar</li>
                            <li>Zostel Udaipur</li>
                            <li>Zostel Vagamon</li>
                            <li>Zostel Varkala</li>
                            <li>Zostel Vashisht</li>
                            <li>Zostel Wayanand</li>
                        </ul>
                </div>
                
                <li class="liFlex" id="submenue2" onclick="show2()" ><span>Zostel Homes </span><span id="toggle2"> ^ </span></li>
                <div class="mediasubmenue" id="innersubmenue2" >
                    <ul>
                        <li>Zostel Homes Burwa</li>
                        <li>Zostel Homes Cheog</li>
                        <li>Zostel Homes Coorg</li>
                        <li>Zostel Homes Kibber</li>
                        <li>Zostel Homes Kotgadh</li>
                        <li>Zostel Homes Kotkhai</li>
                        <li>Zostel Homes Laida</li>
                        <li>Zostel Homes Mashobra</li>
                        <li>Zostel Homes Pushkar</li>
                        <li>Zostel Homes Rakhcham</li>
                        <li>Zostel Homes Ramgadh(Nainital)</li>
                        <li>Zostel Homes Rashil</li>
                        <li>Zostel Homes Rumshu</li> 
                    </ul>  
                </div>
                <li class="liFlex" id="submenue3" onclick="show3()" ><span>Zostel Plus</span><span id="toggle3"> ^ </span></li>
                <div class="mediasubmenue" id="innersubmenue3" >
                    <ul>
                        <li>Zostel Plus Bir</li>
                        <li>Zostel Plus Lonavla</li>
                        <li>Zostel Plus Mussoorie</li>
                        <li>Zostel Plus Panchgani</li>
                    </ul>  
                </div>
                <li class="liFlex" onclick='changeLongstayslocation()' ><span>Longstays</span></li>
                <li class="liFlex" ><span>Franchise</span></li>
                <li class="liFlex" id="submenue4" onclick="show4()"><span>Join us</span><span id="toggle4">^</span> </li>
                <div class="mediasubmenue" id="innersubmenue4" >
                    <ul>
                        <li>Career</li>
                        <li>Zostel Internship 2022</li>
                    </ul>  
                </div>
                <li class="liFlex" ><span>Blog</span></li>
                <li class="liFlex" ><span>\z/ Zostel</span></li>
            </ol>
        </div>
    </div>`
}

export default get_responsive_navbar;