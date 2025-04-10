var choice = prompt("Welome to Area Calculator!\nPlease enter your choice.\n 1.Area of Rectangle\n 2.Area ofSquare \mn 3.Area of Triangle\n 4.Area of Parlellogram")
if (choice == '1') {
    var l = prompt("enter yor length")
    var b = prompt("enter your bradth")
    var result = Number(l) * Number(b)
    alert("The area is" + result)

}
if (choice == '2') {
    var h = prompt("enter yor hight")
    var b = prompt("enter your base")
    var result = Number(h) * Number(b) / 2
    alert("The area is" + result)
}
if (choice == '3') {
    var r = prompt("enter yor radius")

    var result = 3.14 * Number(r) * Number(r)
    alert("The area is" + result)
}
if (choice == '4') {
    var h = prompt("hight")
    var cb = prompt("enter your corrosponding base")
    var result = Number(h) * Number(cb)
    alert("The area is" + result)
}