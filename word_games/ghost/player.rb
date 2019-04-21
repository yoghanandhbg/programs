class Player
  def initialize(name)
    @name = name
  end

  attr_reader :name 

  def make_move
    print ("Enter your letter: ")
    gets.chomp
  end

  def alert_invalid_move
    puts ("Dude enter a legit move wtf...")
  end
end
