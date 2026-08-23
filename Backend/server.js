import express from 'express'

const app= express();

app.use(express.json());

const PORT=4500;

app.get('/',(req,res)=>{
    res.send("server is live");
});

app.listen(PORT,()=>{
    console.log(`server is live at http//:${PORT}`);
})
