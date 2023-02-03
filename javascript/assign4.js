class SortArray{
  
  constructor(array){
    
    this.originalArray = array;
    
    const sortarray = function(arr){
      
      arr.sort((a,b) => a-b);
      return arr;
    }
    
    this.getSortedArray = function(){
      return sortarray(this.originalArray);
    }
  }

}

class SortObjectArray extends SortArray{
  constructor(array){
    super(array);
    
    const sortarray = function(arr,property){
      arr.sort((a,b) => {return a[property].localeCompare(b[property])});
      return arr;
    }
    
    this.getSortedArray = function(property){
      return sortarray(this.originalArray,property);
    }
  }
}

var obj = [1,2,6,4,23,4,3,2,0];

var ins = new SortArray(obj);
console.log(ins.getSortedArray());

const obj2 = [ 
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

ins = new SortObjectArray(obj2);
console.log(ins.getSortedArray("name"));clearInterval
