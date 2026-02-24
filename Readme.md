1.the most differences  in their selection flexibility return type single elements vs collection 

single vs multiple elements : getElementById and querySelector return at most one element. getElementsByClassName (html collection) and  (nodeList) return a collection in matching elements.

speciality in html collection is change dynamically when change dom and nodeList is statice it's not change automatically



2. we want to create new element (document.createElement) and insert this element in html we (appendChild(document.createElement))

// create 
example : const div =  document.createElement("div")

// set some set text show in ui
div.innerText = "hello js"

// insert 
const parent = document.getElementById("parent")
parent.appendChild(div)

3.Event bubbling is when we set an event on a button, and when we click that button, the DOM starts from the HTML document and looks for where the target of that event is. When it finds the target, it then moves upward to check if there are more events on the parent elements. If there are, it keeps moving upward step by step until it reaches the HTML document. This is how event bubbling works.

4. Event delegation is when we do not add an event listener to every button individually. Instead, we add the event listener to their parent element. When we click on a button, that event works in this way through the parent element. Handling events becomes much easier this way, and that is why it is very useful.

5. preventDefault(): when use submit from it's reload full page automatically stop reloading we use can use preventDefault() method  

stopPropagation(): The default behavior in JavaScript is event bubbling. If an event is given on a button, when we click that button, to prevent the event from going upward, we can use stopPropagation().
