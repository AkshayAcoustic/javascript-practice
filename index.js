let arr = [1,2,[3,4],[[5]],[[[[6]]]]]

Array.prototype.myFlat = function(d=1){
  let new_arr = []
  new_arr=(function flatten(arr,d){
    if(d==0)
      return arr;
    return arr.reduce((acc, curr)=>{
      return acc.concat(Array.isArray(curr)? flatten(curr,d-1):curr)
    },[])
  })(this,d)
  return new_arr;
}

console.log(arr.myFlat(Infinity))
