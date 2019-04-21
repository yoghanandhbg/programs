require_relative "board"
require_relative "human"

class Game
  def initialize(player,n = nil)
    @player = player
    @board = Board.new(n)
    @board.populate
    @last_card = nil
  end

  def run
    @board.render
    until @board.game_over?
      make_play
    end
    puts("Gj boyz")
  end

  def make_play
    pos = @player.guess_pos
    while @board[pos].faceup
      @player.alert("Dont be an idiot and guess unkown spot smiley face :)")
      pos = @player.guess_pos
    end
    card = @board.reveal(pos)
    if @last_card == nil
      @last_card = card
    elsif @last_card != card
      @last_card.hide
      card.hide
      sleep(2)
      @board.render
      @last_card = nil
    else
      @last_card = nil
    end
  end

end

if $PROGRAM_NAME == __FILE__
  game = Game.new(Human.new('bleb'))
  game.run
end
