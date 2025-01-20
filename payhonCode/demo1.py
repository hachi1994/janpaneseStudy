point = (1,2)
match point:
    case (1,2):
        print(point[0])
    case (1,y):
        print(f'x')
    case (x,2):
        print(f'y')
