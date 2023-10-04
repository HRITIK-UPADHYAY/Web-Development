const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input").value;
    
    const url = 'https://airbnb13.p.rapidapi.com/search-location?location=${searchInput}&checkin=2023-10-16&checkout=2023-10-17&adults=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '868f360457msh60a67f1003b010ep1ebfefjsn80535d7c38e8',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};

///// api.example has to be replaced with rapid api
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            // Your code to display the listings goes here
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
});
