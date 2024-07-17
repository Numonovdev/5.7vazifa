
const form = document.querySelector('#form');
const text = document.getElementById('todoText');
const time = document.getElementById('todoTime');
const btn = document.querySelector('#btn');
const filter = document.querySelector('#filter');
const wrapper = document.querySelector('#wrapper');

function validated(text,time){
     if(text.value.length < 3){
          alert('todoga 3ta harfdan kam yozmen')
          text.focus();
          text.style.color = 'red';
          
          return false
     }
     if(!time.value){
          alert('vaqt sanani tanlash shart')
          time.focus();
          time.style.color = 'red';
          return false
     }

     return true;
}

function getdata(){
     let data = [];
     if(localStorage.getItem('todos')){
          data = JSON.parse(localStorage.getItem("todos"))
     }

     return data;
}

function createitem(user){
     let ischecked = user.check == "active"? false : true;
     return `
     <div class="todo-item">
                    <div class="block">
                         <input type="checkbox"  ${ischecked ? 'checked':''} id="checkbox">
                         <div class="text">
                              <h3 style = "text-decoration: ${ ischecked? "line-through" : "none"}";>${user.name}</h3>
                              <p>${user.time}</p>
                         </div>
                    </div>
                    <div class="icon">
                         <i class="fa-solid fa-trash"></i>
                         <i class="fa-solid fa-pen"></i>
                    </div>
               </div>
     `
}

btn.addEventListener('click', function(event){
     event.preventDefault();
     let invalid = validated(text, time);

     if(!invalid){
          return;
     }

     let user = {
          name: text.value,
          time: time.value,
          id: Date.now(),
          check: "active",
     };

     let todos = getdata();
     todos.push(user);
     localStorage.setItem('todos', JSON.stringify(todos));
     form.reset();

     const block = createitem(user);
     wrapper.innerHTML += block;
});

document.addEventListener(DOMException)