/*
1. fetch API
2. Storage Elements
    -> Local Storage
    -> Session Storage
    -> Cookie Storage
*/

/*
1. Network Call
*/

/*
website (Student Portal)
need Backend System which manages the student data
website wheree users will interact with the backend apis.

Request:
Endpoint/URL,
requestMethod: "POST", "GET, "DELETE", "PUT"

POST => used to send the huge and secured  Data.
GET => read or get the data from server.
DELETE => delete the existing record from the server.
PUT =>  upadate the existing record in the server.

==> Ways to sending data from client to server.
     -> Three ways to send the data.

     1. Query parameters
         {username: "", age: ""}
         (ex) -> https://google.com/api?username=hritik&age=22
         query parameters should be there at the end of the endpont.

     2. Path Parameters
         https://domain.com/students/info/289
                   or
         https://domain.com/students/${pathValue}/info/

     3. Request Body(send some secured information)
         JSON.stringify({
            username: "HRIITK",
            age: 22
         })
         -> Request body only used with POST/PUT/DELETE we cant send request body in GET request.
*/

// const endpoint = "https://leetcode.com/accounts/login";
// const data = {
//     username: "HRITIK",
//     password: "abc@123"
// }

// const requestMethod = "POST"

// function fetch(url, httpConfig) {
//    //make the network call.

//    return new Promise((resolve, reject) => {
//      //code the promise will be resolved when evern data is received from the server(may be after 3s).

//      resolve(serverResponse);
//    })
// }

// let response = fetch(endpoint, {
//     method: requestMethod,
//     body: JSON.stringify(data)
// });

// //if we are not passing any method so default method is GET method.

// console.log(response);  //promise => (pending).
// response.then((data) => {
//     console.log("server response", {data});
// })

// response.catch((error) => {
//     console.log("some error occured", {error});
// })

/* //noramal fetch() call.
const pincode = 201001;
const endpoint =`https://api.postalpincode.in/pincode/${pincode}`;
const response = fetch(endpoint, {method: "GET"})

console.log(response);  //promise{pending}

response.then(serverResponse => {
    console.log(serverResponse instanceof Response);
    // console.log(serverResponse);

    let promise = serverResponse.json();
    promise.then((finalData) => {
        //final data is the actual server response.
        console.log(finalData);
    })
})
*/

//by using async/await.
// async function fetchPincodeDetail() {
//     const pincode = 201001;
//     const endpoint =`https://api.postalpincode.in/pincode/${pincode}`;

//     const response =  await fetch(endpoint, {method: "GET"});
//     const result = await response.json();

//     console.log(result);
// }

// fetchPincodeDetail();

// fetch the data of cryptocurrency.
const endpoint = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

async function fetchCryptoDetails() {
  const response = await fetch(endpoint, {method: "GET"});
  const result = await response.json();
  console.log(result);

  addDataOntoUI(result);
}

fetchCryptoDetails();

function addDataOntoUI(serverResult) {
    for(let i=0; i<serverResult.length; i++){
        let{name, image} = serverResult[i];
        const div = document.createElement("div");
        div.innerHTML = `<span> ${name} </span> <img src=${image} />`;
        document.body.appendChild(div);
    }
}
