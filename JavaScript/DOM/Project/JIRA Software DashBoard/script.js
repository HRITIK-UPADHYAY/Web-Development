const createIssueButton = document.getElementById("create-issue");
const box = document.getElementsByClassName("box")[0];

/*
TODO, In_PROGRESS, COMPLETED

Data Management: {
    taskName : "task_name",
    status: "TODO"
    description: "skdjfsf",
    assignee: "Aravind"
}

*/

const statusMapping = {
  COMPLETED: `Completed`,
  IN_PROGRESS: `In Progress`,
  TODO: `To DO`
}

const items = [];

const newModal = document.createElement("div");
newModal.id = "modal";
newModal.className = "modal";
newModal.innerHTML = `<div class="modal" id="modal">
<div class="modal-body">
  <form>
    <span class="material-icons close" onclick="closeModal()"> close </span>
    <p style="color: #182A4D; font-size: 20px;"> Add Task </p>
    <input required type="text" name="taskName" placeholder="Task Name">
    <textarea required type="text" rows="3" style="resize: none;" name="description" placeholder="description"></textarea>
    <input required type="text" name="assignee" placeholder="Asignee Name">
      <select name="status">
          <option value="TODO"> TO DO </option>
          <option value="IN_PROGRESS"> In Progress </option>
          <option value="COMPLETED"> Completed </option>
      </select>
      <button type="submit"> Create </button>
  </form>
</div>
</div>`;

const modal = document.getElementById("modal");

function closeModal() {
  newModal.remove();
}

function addNewTask(task) {
  /*
    <div class="card">
              <p class="taskName"> Task Name </p>
              <p class="description"> Some Random Description </p>
              <div class="status-container">
                <p data-short-name="HR" class="assignee"> HRITIK </p>
                <p class="status"> In Progress </p>
              </div>
            </div>
  */

  const card = document.createElement("div");
  card.className = "card";
  card.addEventListener("dragstart", () => {
    activeDraggedElement = card;
  })

  task.status !== `COMPLETED` && (card.draggable = "true");

  const words = task.assignee.split(" ");
  let nickName = words[0][0].toUpperCase();
  if (words.length > 1) {
    nickName += words[words.length - 1][0].toUpperCase();
  }

  card.innerHTML = ` <p class="taskName"> ${task.taskName} </p>
    <p class="description"> ${task.description} </p>
    <div class="status-container">
      <p data-short-name="${nickName}" class="assignee"> ${task.assignee} </p>
      <p class="status"> ${statusMapping[task.status]} </p>
    </div>`;

  const box = document.getElementById(task.status);
  box.appendChild(card);
}

function onSubmitForm() {
  event.preventDefault();
  const formElement = event.target;
  const userData = {
    taskName: formElement["taskName"].value.trim(),
    assignee: formElement["assignee"].value.trim(),
    status: formElement["status"].value.trim(),
    description: formElement["description"].value.trim(),
  };

  closeModal();
  addNewTask(userData);
}

createIssueButton.addEventListener("click", (e) => {
  document.body.appendChild(newModal);
  const form = document.querySelector(".modal form");

  form.removeEventListener("submit", onSubmitForm);

  form.addEventListener("submit", onSubmitForm);

  /* 
<div class="item">
<textarea cols="30" rows="3" style="resize: none;"> </textarea>
<select>
    <option value=""> ABC </option>
    <option value=""> XYZ </option>
</select>
</div>  

--> create this structure using js.
*/
  // createIssueButton.remove();
  // const itemContainer = document.createElement("div");
  // itemContainer.className = "item";
  // itemContainer.innerHTML = `<textarea cols="30" rows="3" style="resize: none;"> </textarea>
  // <select>
  //     <option value=""> ABC </option>
  //     <option value=""> XYZ </option>
  // </select>`;

  // box.appendChild(itemContainer);
  // itemContainer.children[0].focus;
});
