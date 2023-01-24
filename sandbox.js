window.addEventListener('load', () => {
    const form = document.querySelector("#new-task");
    const title_input = document.querySelector("#title_add");
    const input = document.querySelector("#new-task-add");
    const list_element = document.querySelector("#tasks");
    const titles_element = document.querySelector('#titles');


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = title_input.value;
        const task = input.value;
        if (!title) {
            alert("Please fill out the task");
            return;
        }
        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const title_element = document.createElement("div");
        title_element.classList.add("title");
        
        const title_element_con = document.createElement("div");
        title_element_con.classList.add("title_content");
        
        title_element.appendChild(title_element_con);
        
        const title_input_element = document.createElement("input");
        title_input_element.classList.add("title_text");
        title_input_element.type = "text";
        title_input_element.value = title;
        title_input_element.setAttribute("readonly", "readonly");
        
        title_element_con.appendChild(title_input_element);

        
        titles_element.appendChild(title_element);
        title_input.value = "";
        
        const task_element = document.createElement("div");
        task_element.classList.add("task");
        const task_element_con = document.createElement("div");
        task_element_con.classList.add("content");
        

        task_element.appendChild(task_element_con);

        const task_input_element = document.createElement("input");
        task_input_element.classList.add("text");
        task_input_element.type = "text";
        task_input_element.value = task;
        task_input_element.setAttribute("readonly", "readonly");

        task_element_con.appendChild(task_input_element);

        const task_actions_element = document.createElement("div");
        task_actions_element.classList.add("actions");

        const task_edit_element = document.createElement("button");
        task_edit_element.classList.add("Edit");
        task_edit_element.innerHTML = "Edit";

        const task_delete_element = document.createElement("button");
        task_delete_element.classList.add("Delete");
        task_delete_element.innerHTML = "Delete";

        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);

        task_element.appendChild(task_actions_element);


        list_element.appendChild(task_element);

        input.value = "";

        task_edit_element.addEventListener('click', () => {

            if (task_edit_element.innerText.toLowerCase() == "edit") {
                task_input_element.removeAttribute("readonly");
                title_input_element.removeAttribute("readonly");
                task_input_element.focus();
                title_input_element.focus();
                task_edit_element.innerHTML = "Save";
            }
            else
            {
                task_input_element.setAttribute("readonly","readonly");
                title_input_element.setAttribute("readonly","readonly");
                task_edit_element.innerText = "Edit";
            }

        })

        task_delete_element.addEventListener('click', () => {
            list_element.removeChild(task_element);
            titles_element.removeChild(title_element);
        })
    })
})