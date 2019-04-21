def make_change(amt,coins)
  return [] if amt == 0 || coins == []
  coin = first(amt,coins)
  case1 = [coin] + make_change(amt-coin,coins)
  case2 = make_change(amt,coins[coins.index(coin)+1..-1])
  # puts("amt = #{amt} and coins = #{coins}")
  # p case1
  # p case2
  opt(case1,case2)
end

def opt(coins1,coins2)
  if coins1.length == 0
    return coins2
  elsif coins2.length == 0
    return coins1
  end

  return (coins1.length < coins2.length) ? coins1 : coins2
end

def first(amt,coins)
  coins.each {|coin| return coin if coin <= amt}
end

# test
# p opt([2],[1,1])
p make_change(27,[10,7,1])
