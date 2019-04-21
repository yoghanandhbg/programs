class Maze
  def initialize(file)
    lines = File.readlines(file).map(&:chomp)
    @grid = lines.map do |line|
      line.split('')
    end
    @start,@finish = find_start_and_finish
  end

  attr_reader :start,:finish

  def find_start_and_finish
    start = nil
    finish = nil
    @grid.each_with_index do |row,i|
      row.each_with_index do |el,j|
        start = [i,j] if el == 'S'
        finish = [i,j] if el == 'E'
      end
    end
    [start,finish]
  end

  def is_valid?
    return true if start != nil && finish != nil
    false
  end

  def render
    @grid.each do |row|
      row.each do |el|
        print el
      end
      print("\n")
    end
  end

  def is_wall?(pos)
    i,j = pos
    return true if @grid[i][j] == '*'
  end

  def []=(pos,val)
    i,j = pos
    @grid[i][j] = val
  end

end
