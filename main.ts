input.onButtonPressed(Button.A, function () {
    choose_number += 1
    basic.showNumber(choose_number)
})
input.onButtonPressed(Button.AB, function () {
    A = choose_number + 9
    B = choose_number - 9
    C = choose_number * 2
    D = choose_number / 3
    E = choose_number % 4
    F = Math.sqrt(choose_number)
    G = Math.round(3 / 4)
    H = Math.ceil(3 / 9)
    I = choose_number ** 3
    J = randint(0, 100)
})
input.onButtonPressed(Button.B, function () {
    choose_number += -1
    basic.showNumber(choose_number)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(A)
    basic.showNumber(B)
    basic.showNumber(C)
    basic.showNumber(D)
    basic.showNumber(E)
    basic.showNumber(F)
    basic.showNumber(G)
    basic.showNumber(H)
    basic.showNumber(I)
    basic.showNumber(J)
})
let J = 0
let I = 0
let H = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
let B = 0
let A = 0
let choose_number = 0
choose_number = 2
