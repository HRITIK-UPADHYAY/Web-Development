const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("destination");
const checkIn = document.getElementById("check-in");
const checkOut = document.getElementById("check-out");
const total = document.getElementById("adults");
const map = document.getElementById("map");

searchButton.addEventListener("click", () => { 
    console.log(checkIn.value, "hii", checkOut.value);
    fetchData();
});

async function fetchData() {
    console.log("object");
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${searchInput.value}&checkin=${checkIn.value}&checkout=${checkOut.value}&adults=${total.value}&children=0&infants=0&pets=0&page=1&currency=USD`;
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'aae80078b1msh9f15f15427671e6p13f36ejsn703434b1ae81',
		    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	    }
    };


    try {
	    const response = await fetch(url, options);
	    const result = await response.json();
	    console.log(result);
        const hotelsContainer = document.getElementById("hotels");

        // Clear previous listings
        hotelsContainer.innerHTML = "";

        // Append new listings
        result.results.forEach(listing => {
            const listingCard = createListingCard(listing);
            hotelsContainer.appendChild(listingCard);
            map.src = `https://maps.google.com/maps?q=${listing.lat}, ${listing.lng}&z=15&output=embed`;
        });
    } catch (error) {
	    console.error(error);
    }
}

function createListingCard(listing) {
    const listingCard = document.createElement("div");
    listingCard.id = "listings-container";
    listingCard.innerHTML = `
        <img src="${listing.images[0]}" alt="${listing.city}">
        <div class="listing-info">
            <div class="name">
                <p> Entire Home in ${listing.city} </p>
                <h2>${listing.city}</h2>
            </div>

            <div class="room-info">
                <p> ${listing.persons} guests · ${listing.beds} beds ·  ${listing.bathrooms} bath </p>
                <p> ${createAmenitiesPreview(listing.previewAmenities)} </p>
            </div>
    
            <div class="priceNdRatings">
                <p>${listing.rating}</p>
                <p>(${listing.reviewsCount} Reviews)</p>
                <p class="price"> ${listing.price.total}/night </p>
            </div>
        </div>
    `;

    const costButton = document.createElement("button");
    costButton.innerText = "Show Booking Cost Breakdown";
    costButton.addEventListener("click", () => showBookingCostBreakdown(listing));
    listingCard.appendChild(costButton);

    // Add a superhost indicator if the host is a superhost
    if (listing.isSuperhost) {
        const superhostIndicator = document.createElement("p");
        superhostIndicator.innerText = "Superhost";
        superhostIndicator.style.color = "red";
        listingCard.appendChild(superhostIndicator);
    }

    // Add a 'rare find' indicator if the listing is a 'rare find'
    if (listing.rareFind) {
        const rareFindIndicator = document.createElement("p");
        rareFindIndicator.innerText = "Rare Find";
        rareFindIndicator.style.color = "green";
        listingCard.appendChild(rareFindIndicator);
    }

    // Add a directions button
    const directionsButton = document.createElement("button");
    directionsButton.innerText = "Get Directions";
    directionsButton.addEventListener("click", function() {
        openDirections(listing.lat, listing.lng);
    });
    listingCard.appendChild(directionsButton);

    return listingCard;
}

function showBookingCostBreakdown(listing) {
    // Calculate additional fees and total cost
    const additionalFees = listing.price.rate * 0.10; // Assuming additional fees are 10% of base price
    const totalCost = listing.price.rate + additionalFees;

    // Create a modal dialog box
    const modal = document.createElement("div");
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "flex-start";
    modal.style.alignItems = "center";
    modal.style.gap = "0.5rem";
    modal.style.width = "20rem";
    modal.style.height = "10rem";
    modal.style.backgroundColor = "#fff";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.padding = "20px";
    modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";

    // Add booking cost breakdown to the modal
    modal.innerHTML = `
        <h2>Booking Cost Breakdown</h2>
        <p>Base Rate: ${listing.price.rate}</p>
        <p>Additional Fees: ${additionalFees}</p>
        <p>Total Cost: ${totalCost} </p>
    `;

    // Add a close button to the modal
    const closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.addEventListener("click", () => modal.style.display = "none");
    modal.appendChild(closeButton);

    // Add the modal to the body
    document.body.appendChild(modal);
}

function createAmenitiesPreview(amenities) {
    // Show the first 3 amenities and the total count
    const previewAmenities = amenities.slice(0, 3);
    let previewText = previewAmenities.join(", ");

    if (amenities.length > 3) {
        const extraCount = amenities.length - 3;
        previewText += `, and ${extraCount} more`;
    }

    return previewText;
}

function openDirections(lat, lng) {
    // Open Google Maps directions in a new tab
    const url = `https://www.google.com/maps/dir//${lat},${lng}`;
    window.open(url, "_blank");
}




