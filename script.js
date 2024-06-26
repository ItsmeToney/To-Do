"use strict";

const newList = document.querySelector(".add-work");
const addBtn = document.querySelector(".add-btn");
const listContainer = document.querySelector(".list-container");
listContainer.innerHTML = "";

const addList = function () {
  const newWork = newList.value;
  if (newWork !== "") {
    newList.value = "";
    const html = ` <div class="lists" >
        <button class="circle">&#x2714;</button>
        <div class="content"> ${newWork}</div>
        <button class="btn delete-btn">&#x232B;</button>
        </div>`;
    listContainer.insertAdjacentHTML("afterbegin", html);
  }
};

addBtn.addEventListener("click", addList);

listContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("delete-btn")) return;
  const currentList = e.target.closest(".lists");
  currentList.remove();
});

listContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("circle")) return;
  const selectedList = e.target.closest(".lists");
  e.target.classList.toggle("selected");
  selectedList.classList.toggle("selected_list");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addList();
});
