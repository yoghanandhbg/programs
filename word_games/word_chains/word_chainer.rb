require 'set'

class WordChainer
  ALPHABETS = ('a'..'z').to_a
  def initialize(file)
    @dictionary = Set.new(File.readlines(file).map(&:chomp))
    @current_words = []
    @all_seen_words = {}
  end

  def run(source,target)
    @current_words << source
    @all_seen_words[source] = nil
    until @current_words.empty? || @all_seen_words.include?(target)
      word = @current_words.first
      @current_words.shift
      new_words = adjacent_words(word)
      new_words.each {|wrd| @all_seen_words[wrd] = word}
      @current_words += new_words
    end
    trace(target)
  end

  def trace(target)
    unless @all_seen_words.include?(target)
      puts("sorry! the two words are worlds apart")
      return nil
    end
    path = [target]
    node = @all_seen_words[target]
    until node == nil
      path << node
      node = @all_seen_words[node]
    end
    puts path.reverse.to_s
  end

  def adjacent_words(word)
    ans = []
    word.each_char.with_index do |chr,idx|
      ans += replacements(word,chr,idx)
    end
    ans
  end

  def replacements(word,chr,idx)
    ans = []
    ALPHABETS.each do |alphabet|
      next if alphabet == chr
      if idx == 0
        new = alphabet + word[1..-1]
      else
        new = word[0..idx-1] + alphabet + word[idx+1..-1]
      end
      ans << new if @dictionary.include?(new) && !@all_seen_words.include?(new)
    end
    ans
  end
end

# test
a = WordChainer.new('dictionary.txt')
p a.run(ARGV[0],ARGV[1])
