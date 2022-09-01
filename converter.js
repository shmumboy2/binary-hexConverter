let num = prompt("What number do you want to be converted")
let bin = 0 
let rem, i = 1, step = 1
while (num !=0){
    rem = num % 2
    num = parseInt(num / 2)
        bin = bin + rem * i
        i = i * 10
} /*Divides number by 2 until = to 0*/
console.log(bin)