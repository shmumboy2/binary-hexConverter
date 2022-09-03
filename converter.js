function convert() {
let num = document.getElementById("decimal").value
let bin = 0 
let rem, i = 1, step = 1
while (num !=0){    
    rem = num % 2
    num = parseInt(num / 2)
        bin = bin + rem * i
        i = i * 10
} /*Divides number by 2 until = to 0 and creates binary number*/
}

hexConvert(10000)

function hexConvert(value) {
    let final = []
    while (value != 0) {
        if (value % 16 < 10) {
            final.push(value % 16)
        }
        else if (value % 16 == 10) {
            final.push('A')
        }
        else if (value % 16 == 11) {
            final.push('B')
        }
        else if (value % 16 == 12) {
            final.push('C')
        }
        else if (value % 16 == 13) {
            final.push('D')
        }
        else if (value % 16 == 14) {
            final.push('E')
        }
        else if (value % 16 == 15) {
            final.push('F')
        }
        value = (value - value % 16) / 16
    }
    final = final.reverse()
    console.log(final.join(''))
}