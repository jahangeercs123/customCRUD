const userName = document.getElementById("userName");
const userAge = document.getElementById("userAge");
const userEmail = document.getElementById("userEmail");
const addUser = document.getElementById("addBtn");
const tableBody = document.getElementById("tbody");
const tableName = document.getElementById("userName");
const tableAge = document.getElementById("userAge");
const tableEmail = document.getElementById("userEmail");
const clearBtn = document.getElementById("clear");
const editUserName = document.getElementById("editUserName");
const editUserAge = document.getElementById("editUserAge");
const editUserEmail = document.getElementById("editUserEmail");
const updateBtn = document.getElementById("updateBtn");
var btn = document.getElementById("myBtn");
let users = [];
let userCopy = {};
addUser.addEventListener("click", function () {
  const user = {
    id: Date.now(),
    name: userName.value,
    age: userAge.value,
    email: userEmail.value,
  };
  users.push(user);
  renderHtml(users);
  document.getElementById("userName").value = "";
  document.getElementById("userAge").value = "";
  document.getElementById("userEmail").value = "";
});
/// insertion part
const renderHtml = (arr) => {
  tableBody.innerHTML = "";
  arr.forEach((el, i) => {
    if (el.name && el.age && el.email) {
      let html = `
        <tr>
          <td>${el.name}</td>
          <td>${el.age}</td>
          <td>${el.email}</td>
          <td>
          <button type="button" onclick="deleteFunction(${el.id})" class="edit-btn btn btn-warning" data-mdb-toggle="modal">delete</button> 
          <button type="button" onclick="editFunction(${el.id})" class="edit-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"  >edit</button>
          </td>
        </tr>
        `;
      tableBody.insertAdjacentHTML("beforeend", html);
    }
  });
};

//................delete function

function deleteFunction(id) {
  users = users.filter((el) => el.id !== id);
  renderHtml(users);
}
function editFunction(id) {
  userCopy = users.find((el) => el.id === id);
  editUserName.value = userCopy.name;
  editUserAge.value = userCopy.age;
  editUserEmail.value = userCopy.email;
}
updateBtn.addEventListener("click", function (id) {
  userCopy = {
    ...userCopy,
    name: editUserName.value,
    age: editUserAge.value,
    email: editUserEmail.value,
  };
  users = users.map((el) => (el.id === userCopy.id ? userCopy : el));
  renderHtml(users);
  console.log(userCopy);
});
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
  