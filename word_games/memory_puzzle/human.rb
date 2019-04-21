class Human
  def initialize(name)
    @name = name
  end

  def guess_pos
    print("Point out a position starting from index 0 Eg: [0,2]: ")
    input = gets.chomp
    input.delete('[')
    input.delete(']')
    input = input.split(',')
    input.map! {|el| el.to_i}
  end

  def alert(msg)
    puts(msg)
  end
end
