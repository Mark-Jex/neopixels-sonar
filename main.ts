let Distance_Object = 0
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.forever(function () {
    Distance_Object = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(Distance_Object)
    if (Distance_Object > 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (Distance_Object == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (Distance_Object < 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (Distance_Object < 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
