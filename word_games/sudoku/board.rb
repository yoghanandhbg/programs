require_relative 'tile'
require "colorize"

class Board
  def self.from_file(filename)
    rows = File.readlines(filename).map(&:chomp)
    tiles = rows.map do |row|
      nums = row.split("").map {|el| el.to_i}
      nums.map { |el| Tile.new(el) }
    end
    self.new(tiles)
  end

  def self.complete_set?(tile_arr)
    tile_arr.map{|tile| tile.value}.sort == (1..9).to_a
  end

  def initialize(grid)
    @grid = grid
  end

  def render
    system 'clear'
    @grid.each do |row|
      row.each do |tile|
        if tile.given
          print tile.value
        else
          print tile.value.to_s.colorize(:green)
        end
        print "\t"
      end
      print "\n"
    end
  end

  def solved?
    rows_complete? && cols_complete? && sub_matrix_complete?
  end

  def rows_complete?
    @grid.all? do |row|
      Board.complete_set?(row)
    end
  end

  def cols_complete?
    i = 0
    while i < 9
      j = 0
      col = []
      while j < 9
        col << self[[j,i]]
        j+=1
      end
      return false unless Board.complete_set?(col)
      i+=1
    end
    true
  end

  def sub_matrix_complete?
    3.times do |i|
      3.times do |j|
        sub = []
        3.times do |k|
          3.times do |l|
            sub << self[[i*3+k,j*3+l]]
          end
        end
        return false unless Board.complete_set?(sub)
      end
    end
    true
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def assign(pos,val)
    row, col = pos
    @grid[row][col].set_value(val)
  end
end
