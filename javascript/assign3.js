const groupObjectsBy = function(jsonobject, _key){
          
    let res = {}
    
    for(let i = 0; i<jsonobject.length;i++){
      for(const key in jsonobject[i]){
        
        if(_key !== key)continue;

        const value = jsonobject[i][key];
        if(res.hasOwnProperty(value))res[value].push(jsonobject[i]);
        else res[value] = [jsonobject[i]];
      }
    }
    
    return res;
}

const jsonobject = [ 
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ];
  
console.log(groupObjectsBy(jsonobject,"channel"));
