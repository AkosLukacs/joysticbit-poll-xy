buttonVal = 0
item = 0
p0 = 0
p1 = 0
def button():
    global buttonVal, item
    buttonVal = pins.analog_read_pin(AnalogPin.P2)
    if buttonVal < 256:
        item = 1
    elif buttonVal < 597:
        item = 2
    elif buttonVal < 725:
        item = 3
    elif buttonVal < 793:
        item = 4
    elif buttonVal < 836:
        item = 5
    elif buttonVal < 938:
        item = 6
    else:
        item = 0

def on_forever():
    global p0, p1
    p0 = pins.analog_read_pin(AnalogPin.P0)
    serial.write_value("x", p0)
    p1 = pins.analog_read_pin(AnalogPin.P1)
    serial.write_value("y", p1)
basic.forever(on_forever)
