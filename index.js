const container = document.querySelector('.container')
const taskDone  = document.querySelector('.tasksDone')
const head      = document.querySelector('.header')
head.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        addItem()
    }
})

function addItem(){
    const taskLis   = document.querySelector('#taskLis')

    if (taskLis.value.length == 0){
        alert("[ERROR]")
    }
    else{
    const newLi     = document.createElement('li')
    const newBox    = document.createElement('div')
    const newUl     = document.createElement('ul')
    const button    = document.createElement('span')

    button.classList.add('done')
    newBox.classList.add('box')
    newBox.classList.add('list')

    newLi.innerHTML = taskLis.value
    button.innerHTML = 'Done'
    newUl.appendChild(newLi)
    newBox.appendChild(newUl)
    
    button.addEventListener('click', () => removeItem(newBox))

    newBox.appendChild(button)
    container.appendChild(newBox)
    taskLis.value = ''
    }
}

function removeItem(c){
    // taskDone.appendChild(c)
    container.removeChild(c)
}