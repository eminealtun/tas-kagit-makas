input.onGesture(Gesture.Shake, function () {
    sayi = randint(0, 2)
})
let sayi = 0
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showString("salla")
basic.forever(function () {
    if (sayi == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (sayi == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            . # . # .
            . . # . .
            . # . # .
            # # . . #
            `)
    }
})
