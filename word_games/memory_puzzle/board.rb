require_relative "card"

class Board
  def initialize(size)
    @size ||= 4
    @grid = Array.new(@size) {Array.new(@size)}
    populate
  end

  def reveal(pos)
    card = self[pos]
    card.reveal
    render
    card
  end

  def populate
    size = @size**2/2
    cards = Card.generate_all(size)
    @grid.each_index do |row_idx|
      @grid[row_idx].each_index do |col_idx|
          self[[row_idx,col_idx]] = cards.pop
      end
    end
  end

  def render
    system('clear')
    @grid.each_index do |row_idx|
      @grid[row_idx].each_index do |col_idx|
          print(self[[row_idx,col_idx]].value)
          print(" ")
      end
      puts("")
    end
  end

  def game_over?
    @grid.all? do|rows|
      rows.all? { |card| card.faceup }
    end
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos,val)
    row, col = pos
    @grid[row][col] = val
  end
end
