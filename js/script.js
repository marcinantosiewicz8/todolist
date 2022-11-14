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

    const render = () =>{
        let Stringhtml = "";
        for(const task of tasks){
            Stringhtml +=
            ` <button class = "js-done , button">${task.done ? "💚" : "❌"}</button>
            <li class="todolist_li ${task.done ? "todolist_li--finished" : ""}">  
                ${task.name}    
            </li>
            <button class = "js-remove , button">🧺</button>`;
        }
        

       document.querySelector(".js-todolist").innerHTML = Stringhtml; 

       const buttonRemove = document.querySelectorAll(".js-remove");

            buttonRemove.forEach((buttonRemove, index) => {
                buttonRemove.addEventListener("click" , () =>{
                    tasks.splice(index, 1);
                    render();
                });
            });

            const buttonDone = document.querySelectorAll(".js-done");

            buttonDone.forEach((buttonDone, index) => {
                buttonDone.addEventListener("click" , () =>{
                    tasks[index].done = !tasks[index].done;
                    render();
                });
            });
    } 

    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit" , (event) =>{
            event.preventDefault();
            const Newtask = document.querySelector(".js-input").value.trim();
            if(Newtask === ""){
                return;
            }

            tasks.push({
                name: Newtask,
            });
            render();
        });
        render();
    }

    init();
    
}