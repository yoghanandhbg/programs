def greedy_make_change(amt,coins)
  return [] if amt == 0
  max = nil
  coins.each do|coin|
    if coin <= amt
      max = coin
      break
    end
  end
  [max] + greedy_make_change(amt-max,coins)
end

# test
p greedy_make_change(24,[10,7,1])
