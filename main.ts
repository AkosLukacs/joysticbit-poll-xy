input.onButtonPressed(Button.A, function () {
    radio.setGroup(42)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(43)
})
let xy = 0
let y = 0
let x = 0
let buttons = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
radio.setGroup(42)
serial.writeLine("start")
basic.forever(function () {
    buttons = 0
    if (0 == pins.digitalReadPin(DigitalPin.P2)) {
        buttons += 1
        led.plot(3, 0)
    } else {
        led.unplot(3, 0)
    }
    if (0 == pins.digitalReadPin(DigitalPin.P8)) {
        buttons += 2
        led.plot(4, 1)
    } else {
        led.unplot(4, 1)
    }
    if (0 == pins.digitalReadPin(DigitalPin.P13)) {
        buttons += 4
        led.plot(2, 1)
    } else {
        led.unplot(2, 1)
    }
    if (0 == pins.digitalReadPin(DigitalPin.P14)) {
        buttons += 8
        led.plot(3, 2)
    } else {
        led.unplot(3, 2)
    }
    if (0 == pins.digitalReadPin(DigitalPin.P15)) {
        buttons += 16
        led.plot(1, 4)
    } else {
        led.unplot(1, 4)
    }
    if (0 == pins.digitalReadPin(DigitalPin.P16)) {
        buttons += 32
        led.plot(0, 4)
    } else {
        led.unplot(0, 4)
    }
    serial.writeValue("buttons", buttons)
    x = pins.analogReadPin(AnalogPin.P0)
    y = pins.analogReadPin(AnalogPin.P1)
    xy = x + y * 1024
    radio.sendValue("buttons", buttons)
    radio.sendValue("xy", xy)
    basic.pause(10)
})
