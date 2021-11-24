let start = 0
let elapsed = 0
let digit = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
function draw_binary (column: number, decimal: number) {
    if (decimal == 1) {
        led.plot(column, 1)
    } else if (decimal == 2) {
        led.plot(column, 2)
    } else if (decimal == 3) {
        led.plot(column, 1)
        led.plot(column, 2)
    } else if (decimal == 4) {
        led.plot(column, 3)
    } else if (decimal == 5) {
        led.plot(column, 3)
        led.plot(column, 1)
    } else if (decimal == 6) {
        led.plot(column, 3)
        led.plot(column, 2)
    } else if (decimal == 7) {
        led.plot(column, 3)
        led.plot(column, 2)
        led.plot(column, 1)
    } else if (decimal == 8) {
        led.plot(column, 4)
    } else if (decimal == 9) {
        led.plot(column, 4)
        led.plot(column, 1)
    }
}
basic.forever(function () {
    basic.clearScreen()
    elapsed = Math.round(input.runningTime()) - start / 1000
    digit = Math.idiv(elapsed, 10000)
    draw_binary(0, digit)
    elapsed = elapsed % 10000
    digit = Math.idiv(elapsed, 1000)
    draw_binary(1, digit)
    elapsed = elapsed % 1000
    digit = Math.idiv(elapsed, 100)
    draw_binary(2, digit)
    elapsed = elapsed % 100
    digit = Math.idiv(elapsed, 10)
    draw_binary(3, digit)
    elapsed = elapsed % 10
    elapsed = elapsed % 1
    draw_binary(4, digit)
})
