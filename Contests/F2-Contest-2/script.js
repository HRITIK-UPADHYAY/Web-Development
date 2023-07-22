let arr = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

const div = document.getElementsByClassName("container")[1];

function itemsRenderIntoUI (e) {
    const item = document.createElement("div");
        item.innerHTML = `
           <div class="items">
                <div class="image"> <img src="${e.imageSrc}" alt=""> </div>
                <div class="type"> ${e.type} </div>
                <div class="detail">
                    <div class="upper">
                        <div class="name"> ${e.name} </div>
                        <div class="rating">
                            <img src="./Images/Star.png" alt="">
                            <p> ${e.rating} </p>
                        </div> 
                    </div>
                    <div class="lower">
                        <div class="minute"> ${e.time} </div>
                        <div class="btn">
                            <a href="">
                                <img src="./Images/like.png" alt="">
                            </a>
                            <a href="">
                                <img src="./Images/comments.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>`

        div.appendChild(item);
}

arr.forEach((element) => {
    itemsRenderIntoUI(element);
})

function allRecipies() {
    div.innerHTML = ""; 

   arr.forEach((element) => {
        itemsRenderIntoUI(element);
   })
}

function vegRecipiesOnly() {
    div.innerHTML = "";

    arr.forEach((element) => {
        if(element.type === "veg") itemsRenderIntoUI(element)
    })
}

function nonVegRecipiesOnly() {
    div.innerHTML = ""; 

    arr.forEach((element) => {
        if(element.type === "non-veg") itemsRenderIntoUI(element);
    })
}

function above4RatingsItem() {
    div.innerHTML = ""; 

    arr.forEach((element) => {
        if(element.rating >= 4) itemsRenderIntoUI(element);
    }) 
}

function below4RatingItem() {
    div.innerHTML = ""; 

    arr.forEach((element) => {
        if(element.rating < 4) itemsRenderIntoUI(element);
    })
}

const allRecipe = document.getElementById("AllRecipe");
allRecipe.addEventListener("click", allRecipies);

const veg = document.getElementById("Veg");
veg.addEventListener("click", vegRecipiesOnly);

const nonVeg = document.getElementById("NonVeg");
nonVeg.addEventListener("click", nonVegRecipiesOnly);

const radio = document.getElementsByClassName("radio");
radio[0].addEventListener("click", above4RatingsItem);
radio[1].addEventListener("click", below4RatingItem);