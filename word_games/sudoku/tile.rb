class Tile
  def initialize(value)
    @value = value
    @given = (value == 0)?false:true
  end

  attr_reader :value,:given

  def set_value(val)
    if @given
      return false
    else
      @value = val
      return true
    end
  end
end
