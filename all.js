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

let data = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];

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
  let addObj = {
    id: data.length,
    name: addTicketName.value,
    imgUrl: addTicketImg.value,
    area: addTicketRegion.value,
    description: addTicketDescription.value,
    group: addTicketNum.value,
    price: addTicketPrice.value,
    rate: addTicketRate.value,
  };
  ticketArea.innerHTML = "";
  data.push(addObj);
  data.forEach((el) => {
    update(el);
  });
  resetForm();
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