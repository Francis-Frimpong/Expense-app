 const amountValue = document.querySelector("#amount-value");
 const submiBtn = document.querySelector(".submit-btn");
 const listView = document.querySelector(".list-view");
 const formField = document.querySelector(".form_field");


 //This function will calculate 10% of the input amount
function divide(){
  let percentOfValue = amountValue.value / 10;
  return percentOfValue
}


// Appending or pushing the calculated percentage into the array(list) variable
let displayedList = [];
displayedList.push(divide());


//adding the event listener so that when clicked it display the calculated percentage on the webpage
submiBtn.addEventListener('click', function(e){
     e.preventDefault();
  
  displayedList.forEach(function(){
    
    let li = document.createElement("li");
        li.textContent = "Gh" + divide();
        listView.appendChild(li )

        if (amountValue.value == 0){
          li.style.display = "none"
        }
      })
      
        resetFormField()
        
      })
      
      //function that reset the form field after button has been clicked.
      function resetFormField() {
        formField.reset();
      }






