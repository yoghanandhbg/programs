require_relative "game"

if $PROGRAM_NAME == __FILE__
  p1 = Player.new("Alex")
  p2 = Player.new("Telex")
  ghost = Game.new([p1,p2])
  ghost.run
end
