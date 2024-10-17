

let   arr  =  [  1  ,  2,  3,  4,  5, 6, 7, 8, 9]
//map  maps   thro  an  elememt  and    at  every  iittaretion  ana  element  is   available 


//for  each loops   thro  all  the   elements  n one by  one  and  it  has  a  callback   ellem  for  each   ele e0

arr.forEach( (ele)=>{
  console.log(ele)
})

//map  similar   to  foreach   but  has   ability  to  return
//all  elements   returned  by  map  are  available  in  an  arrr

let  newArr   =  arr.map((ele)=>{
    return  ele*2;
})

console.log(newArr)

