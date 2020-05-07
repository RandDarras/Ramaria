var done = []; // We wanted to create a done list, maybe next time :P 

// to devide all the elements on the right side together
var div1 = $("<div></div>")
$("#right").append(div1)
div1.attr("id","addDiv")

// Welcoming header
var welcome = $("<h2>What are you planning to do ?</h2>")
$("#addDiv").append(welcome)

// input text
var addText = $("<input></input>")
$("#addDiv").append(addText) 
addText.attr("type","text")
addText.attr("id",'input-task')

//add button
var add = $("<button>Add todo</button>")
$("#addDiv").append(add)
add.attr("id","add-task")

//todo list 
var list = $("<ul></ul>")
$("#addDiv").append(list)
list.attr("id","todo-list")

// generator to generate an Id to each li
var idNum=1
function id(){
	var str = "li"+idNum
		idNum++
			return str
} //we'll invoke it in li.attr


//adds an li user writes in the input text to the ul as a li
$( "#add-task" ).click(function addTask() {  
	var inputVal = $("#input-task").val();

	if(inputVal === ""){
	  alert("You must write something!")
		} else {

			var li = $("<li></li>");
			li.text(inputVal);
			li.click(function remove(){ //to remove the li whenever you click on it
				li.remove()
				done.push(li)
			})
			li.attr("id", id()); //the invocation for the id generator is here.
			$("#todo-list").append(li);
		}

      
});

//a button that clear the ul list
var clear =$("<button>Clear</button>")
$("#addDiv").append(clear)
clear.attr("id","clearbtn")
clear.click(function clearing(){
$("#todo-list").empty()
})



//Not finishes

// var done =$("<button>Show done</button>")
// $("#addDiv").append(done)
// done.attr("id","donelist")


// done.click(function show(){

// })

// <p> </p>
// .text(done1)