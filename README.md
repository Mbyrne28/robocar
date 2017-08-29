# Robocar

Translate [Turtle Graphic](https://en.wikipedia.org/wiki/Turtle_graphics) commands so the Arduino Robocar can execute them

## Todo

- Import motor libary
- Initilaize motors
- Read logo commands
- Translate Logo commands (direction, rotation) to motor commands (direction, speed, duration -- for each motor)
- When main loop encounters a command execute it

## Turtle Graphics commands (basics)

**fd**
Moves the turtle forward in the direction it is facing (One input)

**bk**
Moves the turtle backwards opposite the direction it is facing (One input)

**lt**
Turns the turtle counterclockwise by the specified angle (One input)

**rt**
Turns the turtle clockwise by the specified angle (One input)

## Motor control
Select the motor (1-4), the command, 

and the speed (0-255).

The commands are: FORWARD, BACKWARD, BRAKE, RELEASE.

## Example program
1. Draw a square 100 x 100

fd 100

rt 90

fd 100

rt 90

fd 100

rt 90

fd 100
