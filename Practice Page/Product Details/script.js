let arr = [
    {"name": "Maggi", "price":25, offers: ["Citi Credit Cards", "ICICI Card"]},
    {"name": "Perk","price" :10, offers: ["Axis Credit Cards","PavTM"]},
    {"name": "Gems", "price":15, offers: ["SBI Card", "PhonePe","РауТМ"]},
    {"name": "Lindt", "price":90, offers:[]},
    {"name": "Nutties", "price":12, offers: ["Citi Credit Cards "]},
    {"name": "Pepsi", "price":15, offers: ["PhonePe", "PaTM" ]},
    {"name": "Coca Cola", "price":15, offers: ["SBI Card"]},
    {"name": "Dairy Milk", "price": 10, offers: []}
];

const div = document.getElementById("container");

arr.map((item) => {
    const content = document.createElement("div");
    content.className = "content";
    content.innerHTML = `
        <span> Name : ${item.name} </span>
        <span> Price : ${item.price} </span> <br>
        <span id="offer"> No Offers </span>
        <button class="showOffers" onclick="showOffers(item)"> Show Offers </button>
    `

    div.appendChild(content);

})


function showOffers(item) {
    if(item.offers.length === 0) {
        
    }
}