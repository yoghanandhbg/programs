require "set"
require_relative "player"

class Game
  # move/turn < round < game
  def initialize(players)
    @frag = nil
    @players = players
    @scores = initialize_scores
    words = File.readlines("dictionary.txt").map(&:chomp)
    @dix = Set.new(words)
  end

  def play_round
    @frag = ''
    pre_round
    until round_over?
      play
    end
    post_round
  end

  def play
    display_turn_details
    guess = current_player.make_move
    until valid_move?(guess)
      current_player.alert_invalid_move
      guess = current_player.make_move
    end
    @frag += guess
    next_player
  end

  def run
    puts("WELCOME ....BOO...GHOST")
    until @players.length == 1
      play_round
    end

    print_game_over
  end

  def print_game_over
    puts("GAME OVER PEOPLE")
    puts("#{@players.first.name} wins !")
  end

  def initialize_scores
    scores = {}
    @players.each { |player| scores[player] = '' }
    scores
  end

  def display_turn_details
    puts("Player #{current_player.name}'s turn; Current Wordling: #{@frag}")
  end

  def pre_round
    display_current_standings
    puts("NEW ROUND BEGINS")
  end

  def post_round
    puts("ROUND COMPLETE")
    puts("#{previous_player.name} loses the round")
    update_standings
  end

  def update_standings
    score = @scores[previous_player]
    if score == ''
      @scores[previous_player] << 'G'
    elsif score == 'GHOST'
      puts("Bye bye #{previous_player.name} good luck next game")
      @players.delete(previous_player)
      @scores.delete(previous_player)
    else
      @scores[previous_player] << 'GHOST'['GHOST'.index(score[-1])+1]
    end
  end

  def display_current_standings
    system("clear")
    puts("Current Standings -")
    @scores.each { |player,score| puts("#{player.name}: #{score}") }
  end

  def valid_move?(move)
    return false unless move.class == String && move.length == 1
    return false unless move >= 'A' && move <= 'z'
    @dix.any? { |word| word.start_with?(@frag+move)  }
  end

  def round_over?
    return true if @dix.include?(@frag)
    false
  end

  def current_player
    @players.first
  end

  def previous_player
    @players.last
  end

  def next_player
    @players.rotate!
  end

end
