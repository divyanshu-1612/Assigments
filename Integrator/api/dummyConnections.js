const request=require('request');
const express=require('express');
const port=process.env.PORT||8000;
const app=express();
// const lodash=require('lodash');

const url=`https://api.integrator.io/v1/connections`
const token=`89da90528d1648b28de486f1ba615649`;

app.get('/',async(req,res)=>{
    try{
   
        let options={
            method:"GET",
            url,
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }
        request(options,(error,response,body)=>{
            if(!error&&response.statusCode===200){
                console.log("got integration");
                const info = JSON.parse(JSON.stringify(body));
                res.send(`<p style="color:blue;">${info}</p>`)
            }
            else{
                console.log("function getIntegration","error",error,"body",response.body);
            }
        })

    }catch(err){
        res.sendStatus(404);
    }

})

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})