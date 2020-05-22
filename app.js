// module pattern

const entireList = (function () {
  const ul = document.querySelector("ul");
  const add = document.getElementById("add");
  const input = document.querySelector("input");

  // const list = [];

  function inputLength() {
    return input.value.length;
  }

  // adding the input to the list
  function addToList() {
    let item = document.createTextNode(input.value);
    // list.push(item);
    return item;
  }

  // creating the delete button
  function deleteBtn() {
    let delBtn = document.createElement("i");
    delBtn.classList.add("fas", "fa-trash-alt");
    delBtn.style.float = "right";
    delBtn.addEventListener("click", removeList);
    return delBtn;
  }

  // create an 'li' tag with the list item
  function createList() {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.appendChild(addToList());
    li.appendChild(deleteBtn());
    ul.appendChild(li);
    input.value = "";
  }

  // keyPress event
  function addOnKeyPress(e) {
    if (inputLength() > 0 && e.keyCode === 13) {
      createList();
    }
  }

  // remove list on clicking trash icon
  function removeList(evt) {
    evt.target.parentNode.remove();
  }

  // list item to the list
  add.addEventListener("click", () => {
    input.classList.toggle("hidden");
  });
  input.addEventListener("keydown", addOnKeyPress);

  // remove all list items
  $(document).ready(function () {
    $("#delLists").click(function () {
      $("ul").remove();
    });
  });

  // revealing module pattern
  // return {
  //   list: list,
  // };
})();
