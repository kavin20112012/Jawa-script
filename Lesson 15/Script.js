var myForms=document.getElementById("myForms")
var myInput = document.getElementById("myInput")
var myItem = document.getElementById("myItem")

myForms.addEventListener("submit",
                                function(event){
                                    event.preventDefault()
                                    createItem(myInput.value)
                                }
)
function createItem(inputItems){
    var items=`<li> ${inputItems}button onclick="deleteElement(this)></button></li>`
    myItems.insertAdjucentHtml("beforeend",items )
    myInput.value =""
    myInput.focus()

}
function deleteElement(elementToDelete){
    elementToDelete.parentElement.remove()

}