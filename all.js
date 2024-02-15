const ticketArea = document.querySelector(".ticketCard-area");
const btnUpdate = document.querySelector(".addTicket-btn");
const regionSelector = document.querySelector(".regionSearch");
const searchResult = document.querySelector("#searchResult-text");

const addTicketName = document.querySelector("#ticketName");
const addTicketImg = document.querySelector("#ticketImgUrl");
const addTicketRegion = document.querySelector("#ticketRegion");
const addTicketPrice = document.querySelector("#ticketPrice");
const addTicketNum = document.querySelector("#ticketNum");
const addTicketRate = document.querySelector("#ticketRate");
const addTicketDescription = document.querySelector("#ticketDescription");

let dataUrl =
  "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json";

axios.get(dataUrl).then((res) => {
  ticketArea.innerHTML = "";
  res.data.forEach((el) => {
    update(el);
  });
});

function update(obj) {
  ticketArea.innerHTML += `<li class="ticketCard">
  <div class="ticketCard-img">
    <a href="#">
      <img
        src="${obj.imgUrl}"
        alt=""
      />
    </a>
    <div class="ticketCard-region">${obj.area}</div>
    <div class="ticketCard-rank">${obj.rate}</div>
  </div>
  <div class="ticketCard-content">
    <div>
      <h3>
        <a href="#" class="ticketCard-name">${obj.name}</a>
      </h3>
      <p class="ticketCard-description">
        ${obj.description}
      </p>
    </div>
    <div class="ticketCard-info">
      <p class="ticketCard-num">
        <span><i class="fas fa-exclamation-circle"></i></span>
        剩下最後 <span id="ticketCard-num"> ${obj.group} </span> 組
      </p>
      <p class="ticketCard-price">
        TWD <span id="ticketCard-price">$${obj.price}</span>
      </p>
    </div>
  </div>
</li>`;
}
function resetForm() {
  addTicketName.value = "";
  addTicketImg.value = "";
  addTicketRegion.value = "";
  addTicketPrice.value = "";
  addTicketNum.value = "";
  addTicketRate.value = "";
  addTicketDescription.value = "";
}

btnUpdate.addEventListener("click", () => {
  let obj = {
    name: addTicketName.value,
    imgUrl: addTicketImg.value,
    area: addTicketRegion.value,
    description: addTicketDescription.value,
    group: addTicketNum.value,
    price: addTicketPrice.value,
    rate: addTicketRate.value,
  };
  if (!addTicketName.value) {
    alert("請填入套票名稱");
  } else if (!addTicketRegion.value) {
    alert("請選擇套票地區");
  } else {
    update(obj);
    const cards = document.querySelectorAll(".ticketCard");
    searchResult.innerHTML = `本次搜尋共 ${cards.length} 筆資料`;
    resetForm();
  }
});

regionSelector.addEventListener("change", () => {
  const cards = document.querySelectorAll(".ticketCard");
  const ticketRegion = document.querySelectorAll(".ticketCard-region");
  cards.forEach((el) => el.classList.remove("card-hidden"));
  let sum = 0;
  if (regionSelector.value != "") {
    ticketRegion.forEach((el, i) => {
      if (el.textContent !== regionSelector.value) {
        cards[i].classList.add("card-hidden");
        sum++;
      }
    });
    searchResult.innerHTML = `本次搜尋共 ${cards.length - sum} 筆資料`;
  } else {
    searchResult.innerHTML = `本次搜尋共 ${cards.length} 筆資料`;
  }
});
