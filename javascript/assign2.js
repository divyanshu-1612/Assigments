const MetadataParser = function(){
 
    this.properties_version = 0;
    this._channel = 0;
    this._keyField = 0;

// (b)
    this.set_properties_version = (value) => {
        properties_version = value;
    }

    this.set_channel = function(value){
        this._channel = value;
    }

    this.set_keyField = function(value){
        this._keyField = value;
    }

    this.get_properties_version = () => {
        return this.properties_version;
    }

    this.get_channel = function(){
        return this._channel;
    }

    this.get_keyField = function(){
        return this._keyField;
    }

// (c) => combines diffrent objects in array based on 
//  key into an array containing key : [..values] pair
    this.getKeyFields = function(jsonobject){
          
          let res = {}
          
          for(let i = 0; i<jsonobject.length;i++){
            for(const key in jsonobject[i]){
              if(res.hasOwnProperty(key))res[key].push(jsonobject[i][key]);
              else res[key] = [jsonobject[i][key]];
            }
          }
          
          return res;
    }
}

let object = new MetadataParser;


object.set_keyField(14);
console.log(object.get_keyField());

let jsonobject = [
    {
      'channel' : 'A',
      'name' : 'Divyanshu'
    },
    {
      'channel' : 'B',
      'age' : '23'
    },
    {
      'channel' : 'C',
      'name' : 'Himanshu',
    },
    {
      
    }
  ];
  
  console.log(object.getKeyFields(jsonobject));