const express=require('express');

const app=express();

const port=8000;

app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Error is: ${err}`);
    }

    console.log(`Port is: ${port}`);
});


app.use('/',require('./routes'));

