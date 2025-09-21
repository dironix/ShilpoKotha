import Footer from "../inc/Footer";
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import { Formik } from 'formik';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Addproduct(){
 const navi=useNavigate();
let [pimg,setPimg]=useState(null);
   
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
          <h1 className="h3 mb-4 text-gray-800">Add product</h1>

<Formik
       initialValues={{ pname: '', pprice: '', pdetails: '' }}
     
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(async() => {
          var fd=new FormData();
          fd.append("pimg",pimg);
          fd.append("pname",values.pname);
          fd.append("pprice",values.pprice);
          fd.append("pdetails",values.pdetails);

          var resp=await fetch("http://localhost:2000/product/add",{
            method:'POST',
            body:fd
          });
          var data=await resp.json();
          console.log(data)
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
             value={values.pname}
           />
          </p>
            <p>Product Price</p>
          <p>
            <input className="form-control"
             type="text"
             name="pprice"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.pprice}
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
          <p>Product Details</p>
          <p>
            <textarea className="form-control"
             name="pdetails"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.pdetails}
           ></textarea>
          </p>
           
         
           <button type="submit" disabled={isSubmitting}>
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
export default Addproduct;