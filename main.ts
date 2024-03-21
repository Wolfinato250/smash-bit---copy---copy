function Player2_Jump () {
    if (controller.player2.isPressed(ControllerButton.Up)) {
        pause(10)
        if (Player2.isHittingTile(CollisionDirection.Bottom)) {
            Player2.vy = -140
            Jump = true
            pause(300)
        } else if (Jump == true) {
            Player2.vy = -120
            Jump = false
            Player2.startEffect(effects.fire, 500)
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (Running == true) {
        Animation = false
        Running = false
    }
})
function Start () {
    scene.setBackgroundColor(6)
    tiles.setCurrentTilemap(tilemap`level0`)
    Player1 = sprites.create(assets.image`Terry`, SpriteKind.Player)
    Player1.ay = 350
    Lives = 100
    Player1_fall = 350
    Lives2 = 100
    Player1_Atack = 1
    Pause = 738
    Animation = false
    Player1_Fasing_Left = false
    PlayerWS = -2
    PlayerWS2 = 2
    Player2_Atack = 0
    Jump = false
    CanAtack = true
    Player1.setStayInScreen(true)
}
function Player1_Idl () {
    if (Player1.isHittingTile(CollisionDirection.Bottom)) {
        if (Animation == false && Running == false) {
            if (controller.anyButton.isPressed() == false) {
                if (Player1_Fasing_Left == false) {
                    animation.runImageAnimation(
                    Player1,
                    assets.animation`Terry Idl`,
                    300,
                    false
                    )
                    pause(600)
                } else if (Player1_Fasing_Left == true) {
                    animation.runImageAnimation(
                    Player1,
                    assets.animation`Terry Idl Left`,
                    300,
                    false
                    )
                    pause(600)
                }
            }
        }
    }
}
function Player2_Move () {
    if (Player1_Hit_B_or_A == false) {
        if (Player2_move == true) {
            if (controller.player2.isPressed(ControllerButton.Right)) {
                Player2.vx += 5
                Player2.x += 1
            }
            Player2.fx = 140
            if (controller.player2.isPressed(ControllerButton.Left)) {
                Player2.vx += -5
                Player2.x += -1
            }
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (Running == true) {
        Animation = false
        Running = false
    }
})
function Player1_HitB () {
    if (controller.B.isPressed() && controller.down.isPressed() == false) {
        if (CanAtack == true && Animation == false) {
            if (Player1_Fasing_Left == false && Player1.isHittingTile(CollisionDirection.Bottom) == false) {
                Animation = true
                CanAtack = false
                Player1_Hit_B_or_A = true
                Player1_fall = 0
                animation.runImageAnimation(
                Player1,
                assets.animation`Terry Power Wave`,
                50,
                false
                )
                pause(200)
                Player1.setVelocity(0, -5)
                pause(225)
                Atack = sprites.createProjectileFromSprite(assets.image`Slash`, Player1, 45, 0)
                Atack.y += 9
                Atack.x += 7
                Atack.startEffect(effects.fire, 1000)
                animation.runImageAnimation(
                Atack,
                assets.animation`Power wave Air`,
                50,
                false
                )
                pause(50)
                Atack.setStayInScreen(true)
                Player1_Atack = 0
                pause(300)
                sprites.destroy(Atack)
                Player1_Hit_B_or_A = false
                Animation = false
                Player1_fall = 350
                pause(500)
                Player1_Atack = 1
            } else if (Player1_Fasing_Left == true && Player1.isHittingTile(CollisionDirection.Bottom) == false) {
                Animation = true
                CanAtack = false
                Player1_Hit_B_or_A = true
                Player1_fall = 0
                animation.runImageAnimation(
                Player1,
                assets.animation`Terry Power Wave L`,
                50,
                false
                )
                pause(200)
                Player1.setVelocity(0, -5)
                pause(225)
                Atack = sprites.createProjectileFromSprite(assets.image`SlashR`, Player1, -45, 0)
                Atack.y += 9
                Atack.x += -7
                Atack.startEffect(effects.fire, 1000)
                animation.runImageAnimation(
                Atack,
                assets.animation`Power wave Air L`,
                50,
                false
                )
                pause(50)
                Atack.setStayInScreen(true)
                Player1_Atack = 0
                pause(300)
                sprites.destroy(Atack)
                Player1_Hit_B_or_A = false
                Animation = false
                Player1_fall = 350
                pause(500)
                Player1_Atack = 1
            } else if (Player1_Fasing_Left == false && Player1.isHittingTile(CollisionDirection.Bottom)) {
                Animation = true
                Player1_Hit_B_or_A = true
                CanAtack = false
                animation.runImageAnimation(
                Player1,
                assets.animation`Terry Power Wave`,
                50,
                false
                )
                pause(475)
                Atack = sprites.createProjectileFromSprite(assets.image`SlashR`, Player1, 85, 0)
                Atack.y += 7
                Atack.startEffect(effects.fire, 1000)
                animation.runImageAnimation(
                Atack,
                assets.animation`Power wave`,
                50,
                true
                )
                Atack.setStayInScreen(true)
                Player1_Atack = 0
                pause(300)
                Animation = false
                Player1_Hit_B_or_A = false
                pause(400)
                sprites.destroy(Atack)
                Player1_Atack = 1
            } else if (Player1_Fasing_Left == true && Player1.isHittingTile(CollisionDirection.Bottom)) {
                Animation = true
                CanAtack = false
                Player1_Hit_B_or_A = true
                animation.runImageAnimation(
                Player1,
                assets.animation`Terry Power Wave L`,
                50,
                false
                )
                pause(475)
                Atack = sprites.createProjectileFromSprite(assets.image`Slash`, Player1, -85, 0)
                Atack.startEffect(effects.fire, 1000)
                Atack.y += 7
                animation.runImageAnimation(
                Atack,
                assets.animation`Power wave Left`,
                200,
                true
                )
                Atack.setStayInScreen(true)
                Player1_Atack = 0
                pause(300)
                Animation = false
                Player1_Hit_B_or_A = false
                pause(400)
                Player1_Atack = 1
                sprites.destroy(Atack)
            }
        }
        pause(500)
        CanAtack = true
    }
    if (controller.B.isPressed() && controller.down.isPressed()) {
        Animation = true
        Player1_Hit_B_or_A = true
        pause(25)
        if (Player1_Fasing_Left == true) {
            animation.stopAnimation(animation.AnimationTypes.All, Player1)
            Player1.setVelocity(-90, -150)
            pause(500)
            Player1.setVelocity(-90, 100)
            pause(500)
            Animation = false
            Player1_Hit_B_or_A = false
        } else if (Player1_Fasing_Left == false) {
            animation.stopAnimation(animation.AnimationTypes.All, Player1)
            Player1.setVelocity(90, -150)
            pause(500)
            Player1.setVelocity(90, 100)
            pause(500)
            Player1_Hit_B_or_A = false
            Animation = false
        }
    }
}
function Player1_KnockBack () {
    if (Attck2_Left == false && Player2_Atack == 1) {
        if (Atack2.overlapsWith(Player1)) {
            Player1_Hit_B_or_A = true
            Animation = true
            PlayerWS2 = 0
            PlayerWS = 0
            for (let index = 0; index < 4; index++) {
                Player1.vy += -20
            }
            for (let index = 0; index < 6; index++) {
                Player1.vx += 10
            }
            pause(500)
            PlayerWS2 = 2
            PlayerWS = -2
            Animation = false
            Player1_Hit_B_or_A = false
        }
    }
    if (Attck2_Left == true && Player2_Atack == 1) {
        if (Atack2.overlapsWith(Player1)) {
            Player1_Hit_B_or_A = true
            Animation = true
            PlayerWS2 = 0
            PlayerWS = 0
            for (let index = 0; index < 4; index++) {
                Player1.vy += -20
            }
            for (let index = 0; index < 6; index++) {
                Player1.vx += -10
            }
            pause(500)
            PlayerWS2 = 2
            PlayerWS = -2
            Animation = false
            Player1_Hit_B_or_A = false
        }
    }
}
function Player1_Jump () {
    if (Player1_Hit_B_or_A == false) {
        if (controller.up.isPressed() && Animation == false) {
            pause(10)
            if (Player1_Fasing_Left == true) {
                if (Player1.isHittingTile(CollisionDirection.Bottom)) {
                    Animation = true
                    animation.runImageAnimation(
                    Player1,
                    assets.animation`Terry Jump L`,
                    100,
                    false
                    )
                    pause(100)
                    Player1.vy = -140
                    pause(100)
                    Animation = false
                    pause(100)
                    Doubl_jump = true
                } else if (Doubl_jump == true) {
                    Animation = true
                    Player1.vy = -120
                    animation.runImageAnimation(
                    Player1,
                    assets.animation`Terry Air Jump L`,
                    100,
                    false
                    )
                    Doubl_jump = false
                    pause(100)
                    Animation = false
                }
            } else if (Player1_Fasing_Left == false) {
                if (Player1.isHittingTile(CollisionDirection.Bottom)) {
                    Animation = true
                    animation.runImageAnimation(
                    Player1,
                    assets.animation`Terry Jump`,
                    100,
                    false
                    )
                    pause(100)
                    Player1.vy = -140
                    pause(100)
                    Animation = false
                    pause(100)
                    Doubl_jump = true
                } else if (Doubl_jump == true) {
                    Animation = true
                    Player1.vy = -120
                    animation.runImageAnimation(
                    Player1,
                    assets.animation`Terry Air Jump`,
                    100,
                    false
                    )
                    Doubl_jump = false
                    pause(100)
                    Animation = false
                }
            }
        }
    }
}
function Player2_HitB () {
    if (controller.player2.isPressed(ControllerButton.B)) {
        if (_2CanAtack == true) {
            if (controller.player2.isPressed(ControllerButton.Right)) {
                _2CanAtack = false
                Attck2_Left = false
                Atack2 = sprites.createProjectileFromSprite(assets.image`Slash2`, Player2, 100, 0)
                Atack2.setStayInScreen(true)
                Player2_Atack = 1
                pause(500)
                sprites.destroy(Atack2)
                Player2_Atack = 0
            } else if (controller.player2.isPressed(ControllerButton.Left)) {
                _2CanAtack = false
                Attck2_Left = true
                Atack2 = sprites.createProjectileFromSprite(assets.image`Slash2R`, Player2, -100, 0)
                Atack2.setStayInScreen(true)
                Player2_Atack = 1
                pause(500)
                sprites.destroy(Atack2)
                Player2_Atack = 0
            }
        }
        pause(500)
        _2CanAtack = true
    }
}
function Player1_Move_Animation () {
    if (Player1_Hit_B_or_A == false) {
        if (Animation == false) {
            if (controller.right.isPressed() && Player1.isHittingTile(CollisionDirection.Bottom)) {
                Player1_AR = 500
                Plaer1_AR1 = 0
                animation.runImageAnimation(
                Player1,
                assets.animation`Terry Run Right`,
                100,
                true
                )
                pause(Player1_AR)
            }
            if (controller.left.isPressed() && Player1.isHittingTile(CollisionDirection.Bottom)) {
                Plaer1_AR1 = 500
                Player1_AR = 0
                animation.runImageAnimation(
                Player1,
                assets.animation`Terry Run Left`,
                100,
                true
                )
                pause(Plaer1_AR1)
            }
        }
    }
}
function Life_System () {
    if (info.life() < 1) {
        game.setGameOverMessage(false, "CLOUD WINS")
        game.setGameOverEffect(false, effects.clouds)
        game.gameOver(false)
    }
    if (info.player2.life() < 1) {
        game.setGameOverMessage(false, "TERRY WINS")
        game.setGameOverEffect(false, effects.bubbles)
        game.gameOver(false)
    }
}
controller.player2.onEvent(ControllerEvent.Connected, function () {
    On_Player2_Join()
})
function Players_damage () {
    if (Player2_joinsss == true) {
        if (Player1_Atack == 0) {
            if (Player2.overlapsWith(Atack)) {
                Lives2 += randint(-15, -5)
                pause(100)
                sprites.destroy(Atack)
                pause(500)
            }
        }
        if (Player2_Atack == 1) {
            if (Player1.overlapsWith(Atack2)) {
                Lives += randint(-15, -5)
                pause(100)
                sprites.destroy(Atack2)
                pause(500)
            }
        }
    }
}
function On_Player2_Join () {
    Lives2 = 100
    Player2 = sprites.create(assets.image`Cloud`, SpriteKind.Player)
    Player2.ay = 350
    Doubl_jump = false
    _2CanAtack = true
    Player2.setStayInScreen(true)
    Player2_move = true
    Test_Dummy = true
    Player2_joinsss = true
}
function Player1_Move () {
    if (Player1_Hit_B_or_A == false) {
        if (controller.right.isPressed()) {
            Player1_Fasing_Left = false
            Player1.x += PlayerWS2
        }
        Player1.fx = 140
        if (controller.left.isPressed()) {
            Player1_Fasing_Left = true
            Player1.x += PlayerWS
        }
    }
}
function Both_Atacks_Hit () {
    if (Player2_Atack == 1 && Player1_Atack == 0) {
        if (Atack.overlapsWith(Atack2)) {
            sprites.destroy(Atack2)
            sprites.destroy(Atack)
        }
    }
}
let Test_Dummy = false
let Player2_joinsss = false
let Plaer1_AR1 = 0
let Player1_AR = 0
let _2CanAtack = false
let Doubl_jump = false
let Atack2: Sprite = null
let Attck2_Left = false
let Atack: Sprite = null
let Player2_move = false
let Player1_Hit_B_or_A = false
let CanAtack = false
let Player2_Atack = 0
let PlayerWS2 = 0
let PlayerWS = 0
let Player1_Fasing_Left = false
let Pause = 0
let Player1_Atack = 0
let Lives2 = 0
let Player1_fall = 0
let Lives = 0
let Player1: Sprite = null
let Animation = false
let Running = false
let Jump = false
let Player2: Sprite = null
Start()
forever(function () {
    Player1_KnockBack()
})
forever(function () {
    Player1_Idl()
})
forever(function () {
    Both_Atacks_Hit()
})
forever(function () {
    Player1_Move_Animation()
})
forever(function () {
    Player2_Move()
})
forever(function () {
    Player2_HitB()
    Player1_HitB()
})
forever(function () {
    Player1.ay = Player1_fall
})
forever(function () {
    info.player2.setLife(Lives2)
    info.setLife(Lives)
})
forever(function () {
    Life_System()
})
forever(function () {
    Players_damage()
})
forever(function () {
    Player1_Jump()
    Player2_Jump()
})
forever(function () {
    Player1_Move()
})
