const isEqual = (obj1,obj2) =>{
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  console.log(obj1Keys);
  console.log(obj2Keys);
  
  if(obj1Keys.length !== obj2Keys.length)
  {
    return false;
  }

  for (let objKey of obj1Keys)
  {
    if(obj1[objKey] !==obj2[objKey])
    {
        return false;
    }
  }
  return true;
}

let obj1 = {
    name : "person 1",
    age :5 
    

}

let obj2 = {
    age :5,
    name : "person 1"
    
}



console.log(isEqual(obj1,obj2));