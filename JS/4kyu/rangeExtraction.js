function solution(list){
  let tempList = [];
  let finalStringList = [];
  let finalString = '';
  list.forEach(function(e) {
    if(!tempList.length) {
      tempList.push(e);
      return;
    }
    
    temp(e);
  });

  function temp(e) {
    let tempListLength = tempList.length - 1;
    if(tempList[tempListLength] + 1 === e){
      tempList.push(e);
    } else {
      if(tempList.length < 3) {
        finalStringList.push(tempList.join(','));
      } else {
        finalStringList.push(`${tempList[0]}-${tempList[tempListLength]}`);
      }
      tempList = [e];
    }
  }

  temp(list[list.length - 1]);
  finalString = finalStringList.join(',');
  return finalString;
}
console.log('fin ->' + solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
console.log('fin ->' + solution([1,2,3,4,6,7,9,10,11]));
