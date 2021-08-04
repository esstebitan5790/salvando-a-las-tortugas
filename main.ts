basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() >= 26 && input.temperature() <= 34) {
        basic.showString("T. normal")
        basic.showIcon(IconNames.Happy)
    }
    while (input.temperature() < 26) {
        basic.showString("T. baja")
        basic.showIcon(IconNames.Sad)
    }
    while (input.temperature() > 34) {
        basic.showString("T. alta")
        basic.showIcon(IconNames.Sad)
    }
})
