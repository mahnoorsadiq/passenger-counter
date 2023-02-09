let saveEl= document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
console.log(saveEl)


function increment() {

    count += 1
    countEl.textContent = count
    
}

// 1. Create a function, save(), which logs out the count when it's called
 
 function save()
 {
       // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let countStr= count + " - "
    saveEl.textContent += countStr
    countEl.textContent= 0
    count = 0
    
 }