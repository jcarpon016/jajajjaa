let fijar_n = 0
input.onGesture(Gesture.Shake, function () {
    let n = 0
    fijar_n = randint(1, 6)
    basic.showNumber(n)
    basic.pause(1000)
    basic.clearScreen()
})
