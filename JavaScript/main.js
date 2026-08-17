let form = document.querySelector("form");
let name = document.querySelector("#name");
let photo = document.querySelector("#photo");
let role = document.querySelector("#role");
let input = document.querySelectorAll("input");
let bio = document.querySelector("#bio");

const todoDataApp = {
  todoList: [],

  addToDo: function () {
    this.submitForm();
  },
  submitForm: function () {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      userData = {
        name: name.value,
        role: role.value,
        photo: photo.value,
        bio: bio.value,
      };

      this.todoList.push(userData)
      console.log(this.todoList)

       this.renderUI();
    });
  },
renderUI: function () {

    let container = document.querySelector(".users-container");

    let user = this.todoList[this.todoList.length - 1];

    // article
    let card = document.createElement("article");
    card.classList.add("user-card");

    // card-top
    let cardTop = document.createElement("div");
    cardTop.classList.add("card-top");

    // user-image
    let userImage = document.createElement("div");
    userImage.classList.add("user-image");

    let image = document.createElement("img");
    image.src = user.photo;
    image.alt = user.name;

    userImage.appendChild(image);

    // menu button
    let menuBtn = document.createElement("button");
    menuBtn.classList.add("menu-btn");
    menuBtn.textContent = "•••";

    cardTop.append(userImage, menuBtn);


    // user-info
    let userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    let userName = document.createElement("h4");
    userName.textContent = user.name;

    let userRole = document.createElement("span");
    userRole.classList.add("user-role");
    userRole.textContent = user.role;

    let userBio = document.createElement("p");
    userBio.textContent = user.bio;

    userInfo.append(userName, userRole, userBio);


    // card-footer
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    let active = document.createElement("span");
    active.classList.add("active");

    let dot = document.createElement("i");

    active.append(dot, document.createTextNode(" Active"));

    let userId = document.createElement("span");
    userId.classList.add("user-id");
    userId.textContent = `#${String(this.todoList.length).padStart(3, "0")}`;

    cardFooter.append(active, userId);


    // complete card
    card.append(cardTop, userInfo, cardFooter);

    // add card to container
    container.appendChild(card);
}
};
todoDataApp.addToDo();
