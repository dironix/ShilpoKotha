const exp=require("express")
const app=exp();
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://diyasarkar158:diya158@cluster0.hqon8oj.mongodb.net/mern56?retryWrites=true&w=majority&appName=Cluster0")
const cors=require("cors")
const bodyParser=require("body-parser")
const ef=require("express-fileupload")

app.use(cors());
app.use(ef());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use(exp.static('public'))

app.get("/",(req,res)=>{
    res.send("Hello Mern55 Node");
});

const pr=require("./routes/product_r");
app.use("/product",pr);

const ar=require("./routes/admin");
app.use("/admin",ar);

app.listen(2000)