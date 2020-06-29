const express=require('express');

const app=express();

const port=8000;


/* setting up the ejs*/

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Error is: ${err}`);
    }

    console.log(`Port is: ${port}`);
});


app.use('/',require('./routes'));

