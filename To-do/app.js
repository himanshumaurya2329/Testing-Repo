let input = document.querySelector('#dv1');
let addBtn = document.querySelector('#dv2');
let taskList = document.querySelector('#task');
let completeList = document.querySelector('#complete');

addBtn.addEventListener('click' , function() {
    console.log("Add");
    let task =  input.value;
    if(task === "" || task === " ")
    {
        alert("Please enter the task");
        return;
    }
    input.value = "";   // clear the input box after taking the value 

    let newpara = document.createElement('p');
    newpara.innerText = task;
    newpara.classList.add('task-added');

    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('remove-Button');        // for apply style on the buttons at the run time 

    let completeBtn = document.createElement('button');
    completeBtn.innerText = 'Completed';
    completeBtn.classList.add('complete-Button');   // for apply style on the buttons at the run time 
    
    let newdiv = document.createElement('div');
    newdiv.classList.add('new-div');

    newdiv.append(newpara , removeBtn , completeBtn);    // add buttons at the end of the paragraph

    taskList.append(newdiv);   // add paragrapg in the div as its last child
});

taskList.addEventListener("click" , function(event) {
    if(event.target.nodeName == 'BUTTON')
    {
        if(event.target.getAttribute('class') == 'remove-Button')
        {
            let parent = event.target.parentElement;
            parent.remove();
        }
        
        else if(event.target.getAttribute('class') == 'complete-Button')
        {
            let parent = event.target.parentElement;
            let removeButton = event.target.previousElementSibling;
            let para = removeButton.previousElementSibling;
            para.style.textDecoration = 'line-through';
            removeButton.remove();

            completeList.append(parent);
        }
        
    }
})