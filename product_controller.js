
var Product=require("../db/productdb");
module.exports={

    async addproduct(req,res){
      var objimg=req.files.pimg;
      objimg.mv("./public/product_img/"+objimg.name,async (err)=>{
        if(err){
          throw err;
        }else{
 var ins={
      
      pname:req.body.pname,
      pprice:req.body.pprice,
      pimg:objimg.name,
      pdetails:req.body.pdetails
        }
      await Product.create(ins);  
         res.json({msg:"Product Add"})
        }
      })
     },
    async selproduct(req,res){
      var data=await Product.find();
      res.json(data);
    },
    async delproduct(req,res){
      var id=req.body.id;
      await Product.findByIdAndDelete(id);
      res.json({msg:"Product Delete"})
    },
   async editproduct(req,res){
      var id=req.body.id;
      var data=await Product.findById(id);
      res.json(data)
    },
    async updproduct(req,res){

      var id=req.body.id;

  if(req.files!=null){
          var objimg=req.files.pimg;
      objimg.mv("./public/product_img/"+objimg.name,async (err)=>{
        if(err){
          throw err;
        }else{
 var ins={
      
      pname:req.body.pname,
      pprice:req.body.pprice,
      pimg:objimg.name,
      pdetails:req.body.pdetails
        }
      await Product.findByIdAndUpdate(id,ins);  
         res.json({msg:"Product Add"})
        }
      })
  }
  else{
     var ins={
      
      pname:req.body.pname,
      pprice:req.body.pprice,
      pdetails:req.body.pdetails
        }
      await Product.findByIdAndUpdate(id,ins);  
         res.json({msg:"Product Add"})
      }     
    }
}
