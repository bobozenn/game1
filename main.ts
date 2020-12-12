controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -10
    pause(100)
    mySprite2.setPosition(98, 36)
    mySprite.y += 10
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += 1
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += -1
})
let mySprite: Sprite = null
let mySprite2: Sprite = null
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e 3 3 e . . . . . . . . 
    . . . . 3 7 7 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . f 2 2 f . . . . . . . . 
    . . . . f 2 2 f . . . . . . . . 
    . . . . f 2 2 f . . . . . . . . 
    . . . . f 2 2 f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.StatusBar)
mySprite = sprites.create(img`
    . . . . e e e . . . . . . . . . 
    . . . e e e e e . . . . . . . . 
    . . e e e e e e e . . . . . . . 
    . . 5 1 5 5 1 5 5 . . . . . . . 
    . . 5 f 5 5 f 5 5 . . . . . . . 
    . . 5 5 5 5 5 5 5 . . . . . . . 
    . . 5 1 1 1 1 1 5 . . . . . . . 
    . . 5 5 4 4 4 5 5 . . . . . . . 
    . . 9 7 7 7 7 7 9 . . . . . . . 
    . 9 . 7 7 7 7 7 . 9 . . . . . . 
    . 5 . 7 7 7 7 7 . 5 . . . . . . 
    . 5 . 7 7 7 7 7 . 5 . . . . . . 
    . 5 . 7 7 7 7 7 . . . . . . . . 
    . . . 5 . . . 5 . . . . . . . . 
    . . e e . . e e . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
