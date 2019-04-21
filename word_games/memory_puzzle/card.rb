class Card
  VALUES = ('a'..'z').to_a+('A'..'Z').to_a+('0'..'9').to_a

  def self.generate_all(num_of_pairs)
    val = VALUES
    while val.length < num_of_pairs
      val *= 2
    end
    val = val.shuffle.take(num_of_pairs)*2
    val.shuffle!
    val.map { |val| self.new(val)  }
  end

  def initialize(val)
    @val = val
    @faceup = false
  end

  attr_reader :faceup

  def value
    if @faceup
      return @val
    else return '-'
    end
  end

  def reveal
    @faceup = true
  end

  def hide
    @faceup = false
  end

  def ==(obj)
    return false unless obj.class == Card
    self.value == obj.value
  end
end
