let data = JSON.parse(localStorage.getItem("toDoList")) || [];
const input = document.getElementById("item");
const toDoBox = document.getElementById("to-do-box");


//load and render the Data into UI which is present in localStorage.
data.forEach((item) => {
    addTo(item.value, item.completed);
});

input.addEventListener('keyup', (event) => {
    if(event.key == "Enter") {
        const value = input.value;

        addTo(value, false);

        data.push({value, completed: false});
        localStorage.setItem("toDoList", JSON.stringify(data));

        input.value = "";
    } 
})

function addTo(value, completed) {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.innerText = "Completed";
    legend.style.visibility = completed ? "visible" : "hidden";
    fieldset.appendChild(legend);

    const div = document.createElement("content");
    div.innerHTML = `
        ${value}
        <span class="close material-icons"> close </span>
    `

    fieldset.addEventListener('click', () => {
        const newCompleted = !completed;
        legend.style.visibility = newCompleted ? "visible" : "hidden";
        completed = newCompleted;

        //update its status in array and localStorage.
        const index = data.findIndex(item => item.value === value);
        if(index !== -1) {
            data[index].completed = newCompleted;
            localStorage.setItem("toDoList", JSON.stringify(data));
        }
    });

    div.querySelector(".close").addEventListener('click', () => {
        fieldset.remove();

        // Remove the item from the data array and update localStorage
        data = data.filter(item => item.value !== value);
        localStorage.setItem("toDoList", JSON.stringify(data));
    });

    fieldset.appendChild(div);
    toDoBox.appendChild(fieldset);
    
}