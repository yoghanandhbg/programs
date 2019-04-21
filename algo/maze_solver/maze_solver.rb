require_relative 'maze'
require 'colorize'

class MazeSolver
  def initialize(file)
    @maze = Maze.new(file)
    @g_values = {@maze.start => 0}
    @open_el = [@maze.start]
    @path = {@maze.start => nil}
    @closed_el = []
  end

  def run
    if @maze.is_valid?
      if solve
        backtrack
        puts 'EZ MAZE ./.'
      else
        puts 'Unable to solve the maze - no path exists'
      end
    else
      puts 'Invalid maze - either start or end missing'
    end
  end

  def solve
    render 0
    until @open_el.empty? || @open_el.include?(@maze.finish)
      chosen_node = find_min_f
      @open_el.delete(chosen_node)
      new_open_nodes = find_valid_neighbours(chosen_node)
      new_open_nodes.each do |node|
        new_g = g(chosen_node) + 1
        if @g_values[node] == nil || new_g < @g_values[node]
          @g_values[node] = new_g
          @path[node] = chosen_node
        end
        @open_el << node
        @maze[node] = 'X'.colorize(:green)
        render
      end
      @closed_el << chosen_node
      @maze[chosen_node] = 'X'.colorize(:red)
      render
    end
    return false if @open_el.empty?
    true
  end

  def backtrack
    curr_node = @maze.finish
    until @path[curr_node] == nil
      @maze[curr_node] = 'X'.colorize(:yellow)
      curr_node = @path[curr_node]
      render
    end
  end

  def find_min_f
    min = nil
    @open_el.each do |node|
      if min == nil || f(node) < f(min)
        min = node
      end
    end
    min
  end

  def find_valid_neighbours(chosen_node)
    i,j = chosen_node
    neighbours = [[i+1,j],[i,j+1],[i-1,j],[i,j-1]]
    neighbours.reject {|pos| @maze.is_wall?(pos) || @closed_el.include?(pos)}
  end

  def g(node)
    @g_values[node]
  end

  def h(node)
    finish = @maze.finish
    (node[0]-finish[0]).abs + (node[1]-finish[1]).abs
  end

  def f(node)
    g(node) + h(node)
  end

  def render(s = 0.1)
    system 'clear'
    @maze.render
    sleep s
  end
end

if $PROGRAM_NAME == __FILE__
  solver = MazeSolver.new(ARGV[0])
  solver.run
end
