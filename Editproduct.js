import Footer from "../inc/Footer";
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import { Formik } from 'formik';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Editproduct(){

    const param=useParams();
    const navi=useNavigate();

    let [pname,setPname]=useState("")
    let [pprice,setPprice]=useState("")
    let [pdetails,setPdetails]=useState("")

    async function getedit(){
        if(param.id!=null){
            var fd=new FormData();
            fd.append("id",param.id);
            var resp=await fetch("http://localhost:2000/product/edit",{
                method:'POST',
                body:fd
            });
            var data=await resp.json();
            
            setPname(data.pname);
            setPprice(data.pprice)
            setPdetails(data.pdetails)
            setImgurl(data.pimg)
        }
        
    }

    useEffect(()=>{
        getedit();
    },[])

let [pimg,setPimg]=useState(null);

let [imgurl,setImgurl]=useState("")
   
    return(
        <>
 <div>
  <div id="wrapper">
    {/* Sidebar */}
   <Sidebar />
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
        <Top/>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <h1 className="h3 mb-4 text-gray-800">Edit product</h1>

<Formik enableReinitialize
       initialValues={{ pname: pname, pprice: pprice, pdetails: pdetails}}
     
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(async () => {
          var fd=new FormData();
           fd.append("id",param.id);
           fd.append("pimg",pimg);
           fd.append("pname",values.pname);
           fd.append("pprice",values.pprice);
           fd.append("pdetails",values.pdetails);
           var resp=await fetch("http://localhost:2000/product/upd",{
            method:'POST',
            body:fd
           });
           var data=await resp.json();
           navi("/listproduct")
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
            <p>Product Name</p>
          <p>
            <input className="form-control"
             type="text"
             name="pname"
             onChange={handleChange}
             onBlur={handleBlur}
             defaultValue={pname}
           />
          </p>
            <p>Product Price</p>
          <p>
            <input className="form-control"
             type="text"
             name="pprice"
             onChange={handleChange}
             onBlur={handleBlur}
             defaultValue={pprice}
           />
          </p>
          <p>Product Image</p>
          <p>
            <input
             type="file"
             name="pimg"
             onChange={(ev)=>{
             
             setPimg(ev.currentTarget.files[0])
             }}
           
           
           />
          </p>
          <p><img className="proimg" src={"http://localhost:2000/product_img/"+imgurl} /></p>
          <p>Product Details</p>
          <p>
            <textarea className="form-control"
             name="pdetails"
             onChange={handleChange}
             onBlur={handleBlur}
             defaultValue={pdetails}
           ></textarea>
          </p>
           
         
           <button className="btn btn-success" type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>



        </div>
        {/* /.container-fluid */}
      </div>
      {/* End of Main Content */}
      {/* Footer */}
   <Footer/>
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
  </div>
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
  {/* Logout Modal*/}

</div>
     </>
    )
}
export default Editproduct;