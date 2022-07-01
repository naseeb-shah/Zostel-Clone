import footer from "./footer.js";
document.getElementById("footer").innerHTML = footer();

let roomDetails = JSON.parse(localStorage.getItem("roomDetails"));
console.log(roomDetails);

const displayRoomDetails = (roomDetails) => {
  document.getElementById("btn").addEventListener("click", () => {
    location.href = "./confirm_booking.html";
  });

  roomDetails.forEach((city) => {
    let imageCard = document.createElement("img");
    imageCard.src = city.images[0];

    document.getElementById("cityImages").append(imageCard);

    let cityName = document.createElement("p");
    cityName.innerText = city.name;

    let desc = document.createElement("p");
    desc.innerText = city.description;

    document.querySelector(".cityDesc").append(cityName, desc);

    city.rooms.forEach((room) => {
      let roomCard = document.createElement("div");

      let rimageDiv = document.createElement("div");
      rimageDiv.setAttribute("class", "rimageDiv");

      let rimage = document.createElement("img");
      rimage.src = room.roomImage;

      rimageDiv.append(rimage);

      let descCard = document.createElement("div");
      descCard.setAttribute("class", "descCard");

      let leftSide = document.createElement("div");

      let rightSide = document.createElement("div");
      rightSide.setAttribute("class", "rightSide");

      let rname = document.createElement("p");
      rname.innerText = room.name;
      rname.setAttribute("class", "rname");

      let occupancy = document.createElement("p");
      occupancy.innerText = "✕" + room.occupancy;

      let description = document.createElement("p");
      description.innerText = room.description;
      description.setAttribute("class", " description");

      let amenities = document.createElement("img");
      amenities.src = room.amenities;

      let tag = document.createElement("p");
      tag.innerText = "Availability Calendar";
      tag.setAttribute("class", "tag");

      leftSide.append(rname, occupancy, description, amenities, tag);

      let price = document.createElement("p");
      price.innerText = "₹" + room.price + "/night";

      let selectBtn = document.createElement("button");
      selectBtn.innerText = "select unit";

      selectBtn.addEventListener("click", () => {
        document.getElementById("roomName").innerText = room.name;
        document.getElementById("price").innerText = "₹" + room.price;

        let tax = room.price * 0.12;
        let total = room.price + tax;
        let payNow = total * 0.21;

        document.getElementById("tax").innerText = "₹" + tax.toFixed(2);
        document.getElementById("total").innerText = "₹" + total.toFixed(2);
        document.getElementById("pay").innerText = "₹" + payNow.toFixed(2);

        const booking = {
          roomName: room.name,
          roomPrice: room.price,
          taxAmount: tax,
          totalAmount: total,
          payAmount: payNow,
        };

        localStorage.setItem("bookingDetails", JSON.stringify(booking));
      });

      rightSide.append(price, selectBtn);

      descCard.append(leftSide, rightSide);

      roomCard.append(rimageDiv, descCard);

      document.querySelector(".rooms").append(roomCard);
    });

    let ltext = document.createElement("h2");
    ltext.innerText = "Locate Us:";

    let address = document.createElement("p");
    address.innerText = "Address:" + " " + city.address;

    let contact = document.createElement("p");
    contact.innerText = "contact:" + " " + city.contact;

    document.querySelector(".address").append(ltext, address, contact);

    let iframe = document.createElement("iframe");
    iframe.src = `https://maps.google.com/maps?q=${city.city}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    iframe.setAttribute("class", "iframe");
    document.querySelector(".map").append(iframe);
  });
};

displayRoomDetails(roomDetails);
