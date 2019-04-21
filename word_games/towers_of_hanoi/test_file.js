towers = [[3,2,1],[],[]];

function isValidMove(start,end){
  if(towers[start].length === 0){
    console.log('im at 1st block');
    return false;
  }else if(towers[end].length === 0){
    console.log('im at 2nd block');
    return true;
  }else if(towers[end][towers[end].length-1] < towers[start][towers[start].length-1]){
    console.log('im at 3rd block');
    return false;
  }else{
    console.log('im at 4th block');
    return true;
  }
}

console.log(isValidMove(1,2));
