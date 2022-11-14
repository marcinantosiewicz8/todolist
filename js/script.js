{
    const tasks = [
        {
            name: "Zrób zadanie domowe",
            done: true,
        },
        {
            name: "Przeczytaj książkę",
            done: false,
        },
    ];

    const remove = () => {
        const buttonRemove = document.querySelectorAll(".js-remove");

        buttonRemove.forEach((buttonRemove, index) => {
            buttonRemove.addEventListener("click" , () =>{
                tasks.splice(index, 1);
                render();
            });
        });
    }

    const done = () =>{
        const buttonDone = document.querySelectorAll(".js-done");

            buttonDone.forEach((buttonDone, index) => {
                buttonDone.addEventListener("click" , () =>{
                    tasks[index].done = !tasks[index].done;
                    render();
                });
            });
    }

    const addtasks = () => {
        const Newtask = document.querySelector(".js-input").value.trim();

        if(Newtask === ""){
            return;
        }

        tasks.push({
            name: Newtask,
        });
    }

    const writelist = () => {
        let Stringhtml = "";
        for(const task of tasks){
            Stringhtml +=
            ` <button class = "js-done , button">${task.done ? "💚" : "❌"}</button>
            <li class="todolist_li ${task.done ? "todolist_li--finished" : ""}">  
                ${task.name}    
            </li>
            <button class = "js-remove , button">🧺</button>`;
        }
        return Stringhtml;
    }


    const render = () =>{
        
        

       document.querySelector(".js-todolist").innerHTML = writelist(); 

       remove();
       done();

            
    } 

    const stopform = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit" , (event) =>{
            event.preventDefault();
            addtasks();
            render();
        });
    }

    const init = () => {
        render();
        stopform();
            
            

        
    }

    init();
    
}