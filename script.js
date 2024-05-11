"use strict";

const newList = document.querySelector(".add-work");
const addBtn = document.querySelector(".add-btn");
const listContainer = document.querySelector(".list-container");
listContainer.innerHTML = "";

const addList = function () {
  const newWork = newList.value;
  if (newWork !== "") {
    newList.value = "";
    const html = ` <div class="lists list">
        <div class="content"> ${newWork}</div>
        <button class="btn delete-btn">&#x232B;</button>
        </div>`;
    listContainer.insertAdjacentHTML("beforeend", html);
  }
};

addBtn.addEventListener("click", addList);

listContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("delete-btn")) return;
  const currentList = e.target.closest(".lists");
  currentList.remove();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addList();
});
