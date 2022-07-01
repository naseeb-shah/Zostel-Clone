const input_box = () => {
    return `   <div id="boxOnSlider">
    <div id="type">
        <div id="Destination" class="Destination" onclick="changeType()">Destination</div>
        <div id="Zostel" onclick="changeType()">Zostel</div>
        <div id="ZostelHome" onclick="changeType()">Zostel Home</div>
        <div id="ZostelPlus" onclick="changeType()">Zostel Plus</div>
    </div>
    <hr style="margin-top: -2.3vh;height: 2px; background-color: #cecece;">
    <div id="belowType">
        <div id="DestinationSel">Select Your Destination</div>
        <div >Check in</div>
        <div >Check Out</div>
    </div>
    <div id="inpBox" style="margin-bottom:2vh;padding-bottom:4vh">
        <input type="text" id="fillPlace" placeholder="eg. Manali,Jodhpur,Jaipur,etc.">
       <div id="datebox">
        <input type="date" id="date1" placeholder="Sun 22 May">
        <input type="date" id="date2" placeholder="Sun 29 May">
       </div>
        <p id="bookNowButton" onclick="changeLocation()">Book Now</p>
    </div>
</div>`
}

export default input_box;