function addEvent() {
  var list = document.getElementById("todoList");
  var item = document.getElementById("todoInput").value;
  var text = document.createTextNode(item);
  var checkBox = document.createElement("input");
  var newItem = document.createElement("li");
  var deadlineTitle = document.createElement("p");
  var deadline = document.createElement("input");
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");

  checkBox.type = "checkbox";
  deadline.type = "date";
  newItem.appendChild(checkBox);
  newItem.appendChild(text);
  newItem.appendChild(span);
  span.appendChild(txt);
  span.className = "close";
  checkBox.className = "check";
  list.appendChild(newItem);
  deadlineTitle.textContent = "Deadline:";
  newItem.appendChild(deadlineTitle);
  newItem.appendChild(deadline);


  removeEvent();
  doneEvent();
}

function removeEvent() {
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var elem = this.parentElement;
      elem.style.display = "none";
    }
  }
}

function doneEvent() {
  var done = document.getElementsByClassName("check");
  for (var j = 0; j < done.length; j++) {
    done[j].onclick = function() {
      var element = this.parentElement;
      element.style.backgroundColor = "green";
      element.style.textDecoration = "line-through";
    }
  }
}