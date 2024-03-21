def Player2_Jump():
    global Jump
    if controller.player2.is_pressed(ControllerButton.UP):
        pause(10)
        if Player2.is_hitting_tile(CollisionDirection.BOTTOM):
            Player2.vy = -140
            Jump = True
            pause(300)
        elif Jump == True:
            Player2.vy = -120
            Jump = False
            Player2.start_effect(effects.fire, 500)

def on_left_released():
    global Animation, Running
    if Running == True:
        Animation = False
        Running = False
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def Start():
    global Player1, Lives, Lives2, Player1_Atack, Pause, Animation, Player1_Fasing_Left, PlayerWS, PlayerWS2, Player2_Atack, Jump, CanAtack
    scene.set_background_color(6)
    tiles.set_current_tilemap(tilemap("""
        level0
    """))
    Player1 = sprites.create(assets.image("""
        Terry
    """), SpriteKind.player)
    Player1.ay = 350
    Lives = 100
    Lives2 = 100
    Player1_Atack = 1
    Pause = 738
    Animation = False
    Player1_Fasing_Left = False
    PlayerWS = -2
    PlayerWS2 = 2
    Player2_Atack = 0
    Jump = False
    CanAtack = True
    Player1.set_stay_in_screen(True)
def Player1_Idl():
    if Player1.is_hitting_tile(CollisionDirection.BOTTOM):
        if Animation == False and Running == False:
            if controller.any_button.is_pressed() == False:
                if Player1_Fasing_Left == False:
                    animation.run_image_animation(Player1, assets.animation("""
                        Terry Idl
                    """), 300, False)
                    pause(600)
                elif Player1_Fasing_Left == True:
                    animation.run_image_animation(Player1,
                        assets.animation("""
                            Terry Idl Left
                        """),
                        300,
                        False)
                    pause(600)
def Player2_Move():
    if Player1_Hit_B_or_A == False:
        if Player2_move == True:
            if controller.player2.is_pressed(ControllerButton.RIGHT):
                Player2.vx += 5
                Player2.x += 1
            Player2.fx = 140
            if controller.player2.is_pressed(ControllerButton.LEFT):
                Player2.vx += -5
                Player2.x += -1

def on_right_released():
    global Animation, Running
    if Running == True:
        Animation = False
        Running = False
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def Player1_HitB():
    global Animation, CanAtack, Player1_Hit_B_or_A, Atack, Player1_Atack
    if controller.B.is_pressed():
        if CanAtack == True and Animation == False:
            if Player1_Fasing_Left == False and Player1.is_hitting_tile(CollisionDirection.BOTTOM) == False:
                Animation = True
                CanAtack = False
                Player1_Hit_B_or_A = True
                animation.run_image_animation(Player1,
                    assets.animation("""
                        Terry Power Wave
                    """),
                    50,
                    False)
                pause(200)
                Player1.set_velocity(0, -60)
                pause(225)
                Atack = sprites.create_projectile_from_sprite(assets.image("""
                    Slash
                """), Player1, 45, 0)
                Atack.y += 9
                Atack.x += 7
                Atack.start_effect(effects.fire, 1000)
                animation.run_image_animation(Atack,
                    assets.animation("""
                        Power wave Air
                    """),
                    50,
                    False)
                pause(50)
                Atack.set_stay_in_screen(True)
                Player1_Atack = 0
                pause(300)
                sprites.destroy(Atack)
                Player1_Hit_B_or_A = False
                Animation = False
                pause(500)
                Player1_Atack = 1
            elif Player1_Fasing_Left == True and Player1.is_hitting_tile(CollisionDirection.BOTTOM) == False:
                Animation = True
                CanAtack = False
                Player1_Hit_B_or_A = True
                animation.run_image_animation(Player1,
                    assets.animation("""
                        Terry Power Wave L
                    """),
                    100,
                    False)
                pause(200)
                Player1.set_velocity(0, -60)
                pause(225)
                Atack = sprites.create_projectile_from_sprite(assets.image("""
                    SlashR
                """), Player1, -45, 0)
                Atack.y += 9
                Atack.x += -7
                Atack.start_effect(effects.fire, 1000)
                animation.run_image_animation(Atack,
                    assets.animation("""
                        Power wave Air L
                    """),
                    50,
                    False)
                pause(50)
                Atack.set_stay_in_screen(True)
                Player1_Atack = 0
                pause(300)
                sprites.destroy(Atack)
                Player1_Hit_B_or_A = False
                Animation = False
                pause(500)
                Player1_Atack = 1
            elif Player1_Fasing_Left == False and Player1.is_hitting_tile(CollisionDirection.BOTTOM):
                Animation = True
                Player1_Hit_B_or_A = True
                CanAtack = False
                animation.run_image_animation(Player1,
                    assets.animation("""
                        Terry Power Wave
                    """),
                    50,
                    False)
                pause(475)
                Atack = sprites.create_projectile_from_sprite(assets.image("""
                    SlashR
                """), Player1, 85, 0)
                Atack.y += 7
                Atack.start_effect(effects.fire, 1000)
                animation.run_image_animation(Atack, assets.animation("""
                    Power wave
                """), 50, True)
                Atack.set_stay_in_screen(True)
                Player1_Atack = 0
                pause(300)
                Animation = False
                Player1_Hit_B_or_A = False
                pause(400)
                sprites.destroy(Atack)
                Player1_Atack = 1
            elif Player1_Fasing_Left == True and Player1.is_hitting_tile(CollisionDirection.BOTTOM):
                Animation = True
                CanAtack = False
                Player1_Hit_B_or_A = True
                animation.run_image_animation(Player1,
                    assets.animation("""
                        Terry Power Wave L
                    """),
                    50,
                    False)
                pause(475)
                Atack = sprites.create_projectile_from_sprite(assets.image("""
                    Slash
                """), Player1, -85, 0)
                Atack.start_effect(effects.fire, 1000)
                Atack.y += 7
                animation.run_image_animation(Atack,
                    assets.animation("""
                        Power wave Left
                    """),
                    200,
                    True)
                Atack.set_stay_in_screen(True)
                Player1_Atack = 0
                pause(300)
                Animation = False
                Player1_Hit_B_or_A = False
                pause(400)
                Player1_Atack = 1
                sprites.destroy(Atack)
        pause(500)
        CanAtack = True
def Player1_KnockBack():
    global Player1_Hit_B_or_A, Animation, PlayerWS2, PlayerWS
    if Attck2_Left == False and Player2_Atack == 1:
        if Atack2.overlaps_with(Player1):
            Player1_Hit_B_or_A = True
            Animation = True
            PlayerWS2 = 0
            PlayerWS = 0
            for index in range(4):
                Player1.vy += -20
            for index2 in range(6):
                Player1.vx += 10
            pause(500)
            PlayerWS2 = 2
            PlayerWS = -2
            Animation = False
            Player1_Hit_B_or_A = False
    if Attck2_Left == True and Player2_Atack == 1:
        if Atack2.overlaps_with(Player1):
            Player1_Hit_B_or_A = True
            Animation = True
            PlayerWS2 = 0
            PlayerWS = 0
            for index3 in range(4):
                Player1.vy += -20
            for index4 in range(6):
                Player1.vx += -10
            pause(500)
            PlayerWS2 = 2
            PlayerWS = -2
            Animation = False
            Player1_Hit_B_or_A = False
def Player1_Jump():
    global Animation, Doubl_jump
    if Player1_Hit_B_or_A == False:
        if controller.up.is_pressed() and Animation == False:
            pause(10)
            if Player1_Fasing_Left == True:
                if Player1.is_hitting_tile(CollisionDirection.BOTTOM):
                    Animation = True
                    animation.run_image_animation(Player1,
                        assets.animation("""
                            Terry Jump L
                        """),
                        100,
                        False)
                    pause(100)
                    Player1.vy = -140
                    pause(100)
                    Animation = False
                    pause(100)
                    Doubl_jump = True
                elif Doubl_jump == True:
                    Animation = True
                    Player1.vy = -120
                    animation.run_image_animation(Player1,
                        assets.animation("""
                            Terry Air Jump L
                        """),
                        100,
                        False)
                    Doubl_jump = False
                    pause(100)
                    Animation = False
            elif Player1_Fasing_Left == False:
                if Player1.is_hitting_tile(CollisionDirection.BOTTOM):
                    Animation = True
                    animation.run_image_animation(Player1,
                        assets.animation("""
                            Terry Jump
                        """),
                        100,
                        False)
                    pause(100)
                    Player1.vy = -140
                    pause(100)
                    Animation = False
                    pause(100)
                    Doubl_jump = True
                elif Doubl_jump == True:
                    Animation = True
                    Player1.vy = -120
                    animation.run_image_animation(Player1,
                        assets.animation("""
                            Terry Air Jump
                        """),
                        100,
                        False)
                    Doubl_jump = False
                    pause(100)
                    Animation = False
def Player2_HitB():
    global _2CanAtack, Attck2_Left, Atack2, Player2_Atack
    if controller.player2.is_pressed(ControllerButton.B):
        if _2CanAtack == True:
            if controller.player2.is_pressed(ControllerButton.RIGHT):
                _2CanAtack = False
                Attck2_Left = False
                Atack2 = sprites.create_projectile_from_sprite(assets.image("""
                    Slash2
                """), Player2, 100, 0)
                Atack2.set_stay_in_screen(True)
                Player2_Atack = 1
                pause(500)
                sprites.destroy(Atack2)
                Player2_Atack = 0
            elif controller.player2.is_pressed(ControllerButton.LEFT):
                _2CanAtack = False
                Attck2_Left = True
                Atack2 = sprites.create_projectile_from_sprite(assets.image("""
                    Slash2R
                """), Player2, -100, 0)
                Atack2.set_stay_in_screen(True)
                Player2_Atack = 1
                pause(500)
                sprites.destroy(Atack2)
                Player2_Atack = 0
        pause(500)
        _2CanAtack = True
def Player1_Move_Animation():
    if Player1_Hit_B_or_A == False:
        if Animation == False:
            if controller.right.is_pressed() and Player1.is_hitting_tile(CollisionDirection.BOTTOM):
                animation.run_image_animation(Player1,
                    assets.animation("""
                        Terry Run Right
                    """),
                    100,
                    True)
                pause(500)
            if controller.left.is_pressed() and Player1.is_hitting_tile(CollisionDirection.BOTTOM):
                animation.run_image_animation(Player1,
                    assets.animation("""
                        Terry Run Left
                    """),
                    100,
                    True)
                pause(500)
def Life_System():
    if info.life() < 1:
        game.set_game_over_message(False, "CLOUD WINS")
        game.set_game_over_effect(False, effects.clouds)
        game.game_over(False)
    if info.player2.life() < 1:
        game.set_game_over_message(False, "TERRY WINS")
        game.set_game_over_effect(False, effects.bubbles)
        game.game_over(False)

def on_player2_connected():
    On_Player2_Join()
controller.player2.on_event(ControllerEvent.CONNECTED, on_player2_connected)

def Players_damage():
    global Lives2, Lives
    if Player2_joinsss == True:
        if Player1_Atack == 0:
            if Player2.overlaps_with(Atack):
                Lives2 += randint(-15, -5)
                pause(100)
                sprites.destroy(Atack)
                pause(500)
        if Player2_Atack == 1:
            if Player1.overlaps_with(Atack2):
                Lives += randint(-15, -5)
                pause(100)
                sprites.destroy(Atack2)
                pause(500)
def On_Player2_Join():
    global Lives2, Player2, Doubl_jump, _2CanAtack, Player2_move, Test_Dummy, Player2_joinsss
    Lives2 = 100
    Player2 = sprites.create(assets.image("""
        Cloud
    """), SpriteKind.player)
    Player2.ay = 350
    Doubl_jump = False
    _2CanAtack = True
    Player2.set_stay_in_screen(True)
    Player2_move = True
    Test_Dummy = True
    Player2_joinsss = True
def Player1_Move():
    global Player1_Fasing_Left
    if Player1_Hit_B_or_A == False:
        if controller.right.is_pressed():
            Player1_Fasing_Left = False
            Player1.x += PlayerWS2
        Player1.fx = 140
        if controller.left.is_pressed():
            Player1_Fasing_Left = True
            Player1.x += PlayerWS
def Both_Atacks_Hit():
    if Player2_Atack == 1 and Player1_Atack == 0:
        if Atack.overlaps_with(Atack2):
            sprites.destroy(Atack2)
            sprites.destroy(Atack)
Test_Dummy = False
Player2_joinsss = False
_2CanAtack = False
Doubl_jump = False
Atack2: Sprite = None
Attck2_Left = False
Atack: Sprite = None
Player2_move = False
Player1_Hit_B_or_A = False
CanAtack = False
Player2_Atack = 0
PlayerWS2 = 0
PlayerWS = 0
Player1_Fasing_Left = False
Pause = 0
Player1_Atack = 0
Lives2 = 0
Lives = 0
Player1: Sprite = None
Animation = False
Running = False
Jump = False
Player2: Sprite = None
Start()

def on_forever():
    Player1_KnockBack()
forever(on_forever)

def on_forever2():
    Player1_Idl()
forever(on_forever2)

def on_forever3():
    Both_Atacks_Hit()
forever(on_forever3)

def on_forever4():
    Player1_Move_Animation()
forever(on_forever4)

def on_forever5():
    Player2_Move()
forever(on_forever5)

def on_forever6():
    Player2_HitB()
    Player1_HitB()
forever(on_forever6)

def on_forever7():
    info.player2.set_life(Lives2)
    info.set_life(Lives)
forever(on_forever7)

def on_forever8():
    Life_System()
forever(on_forever8)

def on_forever9():
    Players_damage()
forever(on_forever9)

def on_forever10():
    Player1_Jump()
    Player2_Jump()
forever(on_forever10)

def on_forever11():
    Player1_Move()
forever(on_forever11)
