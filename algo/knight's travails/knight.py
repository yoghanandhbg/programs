class Knight:
    def __init__(self):
        pass

    @classmethod
    def next_possible_moves(cls, pos):
        row, col = pos
        neighbours = []

        for i in range(-2, 3):
            for j in range(-2, 3):
                if abs(i) + abs(j) == 3:
                    neighbours.append((row + i), (col + j))
        return neighbours
