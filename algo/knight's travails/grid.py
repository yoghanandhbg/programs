from collections import deque


class Grid:
    def __init__(self, size=8):
        self.size = size
        grid = [deque(['-'] * size) for _ in range(size)]
        self.grid = deque(grid)

    def grow(self, factor=1.5):
        size = round(self.size * 1.5)
        if(size % 2) != 0:
            size += 1
        self.size = size

    def render(self):
        for i in range(self.size):
            for j in range(self.size):
                temp = '|'
                if j == self.size - 1:
                    temp = '\n'
                print(self.grid[i][j], end=temp)


grid = Grid()
# print(grid.grid)
grid.render()
