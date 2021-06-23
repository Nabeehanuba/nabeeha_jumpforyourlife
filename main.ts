controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("Beat the dungeon")
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . f f f f . . . . 
    . . . f f f f f f f f . . 
    . . f f f f f f c f f f . 
    f f f f f f f c c f f f c 
    f f f f c f f f f f f f c 
    . c c c f f f e e f f c c 
    . f f f f f e e f f c c f 
    . f f f b f e e f b f f f 
    . f f 4 1 f 4 4 f 1 4 f f 
    . . f e 4 4 4 4 4 e e f e 
    . f e f b 7 7 7 e 4 4 4 e 
    . e 4 f 7 7 7 7 e 4 4 e . 
    . . . f 6 6 6 6 6 e e . . 
    . . . f f f f f f f . . . 
    . . . f f f . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c 1 b b b 1 b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 5))
mySprite.ay = 500
game.onUpdateInterval(randint(500, 5000), function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 8 5 5 5 5 5 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, randint(-160, -100), 0)
    info.changeScoreBy(1)
})
