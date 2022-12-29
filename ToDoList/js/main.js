
// console.log(constant.buttonDelete);

var utils = {
  renderTask:function (toDoList){
    var content = "";
    for (let i = 0; i < toDoList.length ; i++) {
      content +=  ` 
      <div class="textTask">
      <input type="text" id="input${i}" class="textTask_body" readonly value="${toDoList[i]}">
      <div class="center_btn">
          <button class="" id="edit" onclick="userServices.editTask(${i})" type="button"><i class="fa-solid fa-file-pen" title="Edit"></i></button>
          <button class="" id="delete" onclick="userServices.deleteTask(${i})" type="button"><i class="fa-solid fa-trash" title="Delete"></i></button>
      </div>
      </div>`;
    }
    // console.log(content)
    document.getElementById("center_item").innerHTML = content;
  },
  clearInput:function (){
    document.getElementById('input').value = '';
  }
}

var userServices = {
  addTask: function (){
    let  toDoList = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];
    const inputTask = document.getElementById("input").value;

    toDoList.push(inputTask);
    localStorage.setItem('task', JSON.stringify(toDoList));
    // console.log(toDoList);
    utils.clearInput();
    utils.renderTask(toDoList);
  },
  deleteTask : function (index){
    let  toDoList = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];
    toDoList.splice(index,1);
    localStorage.setItem('task', JSON.stringify(toDoList));
    utils.renderTask(toDoList);
  },
  editTask: function (index){
    let  toDoList = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];

    const input = document.querySelector("#input"+index);
    input.removeAttribute("readonly");
    input.focus();
    input.addEventListener('blur',function (){
      input.setAttribute("readonly", true);
      toDoList[index] = input.value;
      localStorage.setItem("task",JSON.stringify(toDoList));
      utils.renderTask(toDoList);
    })

  }
}
window.onload = ()=>{
  let  toDoList = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];
  if (toDoList.length > 0){
    utils.renderTask(toDoList);
  }
}
// var listData = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];
// localStorage.setItem('item', JSON.stringify(listData));