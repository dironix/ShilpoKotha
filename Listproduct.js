import { Link } from "react-router-dom";
import Footer from "../inc/Footer";
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";

import { useState,useEffect } from "react";

function Listproduct(){
  async function getdata() {
    var resp=await fetch("http://localhost:2000/product/sel");
    var data=await resp.json();


    console.log(data);
    setProducts(data);
    
  }
  useEffect(()=>{
    getdata();

  },[])
  let [Products,setProducts]=useState([])
    return(
        <>
 <div>
  <div id="wrapper">
    {/* Sidebar */}
    <Sidebar/>
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
          <h1 className="h3 mb-4 text-gray-800">List product</h1>
          <table className="table">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Image</th>
                    <th>Product Details</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
              {Products.map((p)=>
              <tr>
                    <td>{p.pname}</td>
                    <td>{p.pprice}</td>
                    <td><img className="proimg"src={"http://localhost:2000/product_img/"+p.pimg}/></td>
                    <td>{p.pdetails}</td>
<td><button onClick={async ()=>{
  var fd=new FormData();
  fd.append("id",p._id);
  var resp=await fetch("http://localhost:2000/product/del",{
    method:'POST',
    body:fd
  });
  var data=await resp.json();
  getdata();
}} className="btn btn-danger">Delete</button></td>
<td><Link to={"/editproduct/"+p._id} className="btn btn-success">Edit</Link> </td>
                </tr>
              )}
                
            </tbody>

          </table>
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

export default Listproduct;