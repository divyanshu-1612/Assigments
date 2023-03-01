const resources=require('../index');
const request=require('request');
const token=`72ae4ba38fc549ff847baea145291fd8`
const getAllIntegration=async (token)=>{
   let data=await resources.getIntegration(token);
   return data;
}

console.log(getAllIntegration(token));

