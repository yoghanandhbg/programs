require_relative "board"

class Game
  def initialize(file)
    @board = Board.from_file(file)
  end

  def run
    welcome_message
    @board.render

    until @board.solved?
      until make_move
        puts "u aight bro ? hit ur head somethin' ?"
      end
      @board.render
    end

    game_over_message
  end

  def make_move
    pos, val = get_move
    @board.assign(pos,val)
  end

  def get_move
    puts "Enter the tile Eg-[1,0]: "
    pos = gets.chomp
    pos.delete('[')
    pos.delete(']')
    pos = pos.split(",").map(&:strip)
    pos.map!(&:to_i)
    puts "Enter the value: "
    val = gets.chomp.strip.to_i

    [pos,val]
  end

  def welcome_message
    puts "Welcome to the SUDOKU Game"
  end

  def game_over_message
    puts "WOW einstein spotted"
  end
end

if $PROGRAM_NAME == __FILE__
  game = Game.new("puzzles/sudoku1_solved.txt")
  game.run
end
