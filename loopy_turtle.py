## Turtle setup
import turtle

window = turtle.Screen()
window.title("Loopy Turtle")
WINDOW_WIDTH = 600
WINDOW_HEIGHT = 300
window.setup(WINDOW_WIDTH, WINDOW_HEIGHT)
window.setworldcoordinates(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT)

## Create the turtle
my_turtle = turtle.Turtle()
my_turtle.shape("turtle")
my_turtle.pensize(2)
my_turtle.speed("normal")

## Drawing
my_turtle.penup()
my_turtle.goto(20,20)
my_turtle.pendown()

polygon_sizes = [(6, "green"), (8, "blue"), 3, 3, 3, 4]
rainbow = ["red", "orange", "yellow", "green", "blue", "darkblue", "purple"]

def draw_ngon(num_sides, color):
    my_turtle.color(color)
    for side_num in range(num_sides):
        my_turtle.forward(50)
        my_turtle.left(360/num_sides)

# draw_ngon(4, "red")
# draw_ngon(5, "orange")
# draw_ngon(6, "yellow")


count = 0
for num_sides in polygon_sizes:

    draw_ngon(num_sides, rainbow[count])

    my_turtle.penup()
    my_turtle.forward(100)
    #my_turtle.goto((count * 100) + 50, 20)
    my_turtle.pendown()

    count = count + 1


# num_sides = 4
# for side_num in range(num_sides):
#     my_turtle.forward(50)
#     my_turtle.left(360/num_sides)




## Run the window
window.mainloop()