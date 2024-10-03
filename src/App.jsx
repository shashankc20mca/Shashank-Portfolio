import Header from "./Header";
import Content from "./Content";
import LatestWorks from "./LatestWorks";
import Laptop from "./Laptop";
import Description from "./Description";
import Myimage from "../assets/my_image.png"
import Letsconnect from "../assets/images/contact-me.svg";
import logo from "../assets/white s logo.png";
import "./font.css";
function App (){
 
  window.addEventListener("load", (event) => {
    
    let st=document.querySelector("#loader");
    st.classList.add("loaderclass");
    
  });
  return(
    <>
   
   <div className="fixed  text-white h-[100vh] w-full z-50 " id="loader">
 
   </div>
    <div className="  h-[100vh] w-full box-border   text-white p-3  bg-black"  >
    
       <div className=" fixed w-full h-[100vh] -z-40 top-0 left-0  bg-black " ></div>
 <Header ></Header>
 <Content ></Content>
 <LatestWorks></LatestWorks>

 <div  className="  h-[7rem] w-[17rem] fixed bottom-3 right-20  flex justify-evenly items-center z-49">

 <div className=" h-[30%] w-[50%] p-1 cursor-pointer flex justify-center items-center bg-white text-black rounded-full rounded-br-none hover:scale-110 ">  
  Chat With Us
 </div>

 <div className=" h-[100%] w-[40%] rounded-full hover:scale-110  border-ani">  <img src={Myimage} className=" h-[100%] w-[100%] rounded-full "></img></div>
</div>

    </div>
    
    <div className="h-[475vh] w-full bg-black text-white flex flex-col " id="projectsec" >

      <div className=" flex justify-center h-[2%]">
        <div className="border-2 border-t-0 w-[21%] text-4xl rounded-xl flex justify-center items-center">Latest Works</div></div>


      <div className="flex ">
      <div className="border-r-2 border-red-600 w-[50%] h-[350vh] p-2 pr-0 flex flex-col items-end justify-evenly"> 
        
        <Laptop r={"first"}></Laptop>
        <Laptop r={"second"}></Laptop>
        <Laptop r={"third"}></Laptop>
        <Laptop r={"fourth"}></Laptop>
        <Laptop r={"five"}></Laptop>
        </div>
        <div className="border-l-2 border-red-600 w-[50%] h-[350vh] p-2 pl-0 flex flex-col items-start justify-evenly"> 
          <Description></Description>
          <Description></Description>
          <Description></Description>
          <Description></Description>
          <Description></Description>
         
        </div>

      </div>


      <center><div className="border-2 w-[15rem] h-[4rem] text-center text-3xl p-2 rounded-xl hover:text-red-700">Lets connect</div></center>
      <center><div className="  m-2 h-[80vh] w-[70vw] p-1 flex justify-evenly ">

        <div className=" w-[48%]   flex justify-center items-center"><img src={Letsconnect} className=" h-[100%] w-[100%]   animate-bounce"></img></div>
        <div className=" w-[48%] p-1 flex flex-col justify-evenly">
       
          <div className="flex text-2xl  p-1 flex-col justify-between items-start h-[17%] ">
          
            <div className="flex w-[20%] h-[50%] justify-between items-center hover:scale-110 hover:text-red-700"> <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="currentcolor"><path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm216.21-288Q510-552 531-573.21t21-51Q552-654 530.79-675t-51-21Q450-696 429-674.79t-21 51Q408-594 429.21-573t51 21Zm-.21-72Zm0 360Z"/></svg>Name</div>
            <div className="w-[100%]"><input type="text " className="w-[100%] bg-inherit text-current  p-1 rounded-lg outline-none border-2"></input>
            
            </div>


            
            </div>
            <div className="flex text-2xl  p-1 flex-col justify-between items-start h-[17%]">
          
          <div className="flex w-[20%] h-[50%] justify-between items-center hover:scale-110 hover:text-red-700"> <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="currentcolor"><path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm312-240L168-611v347h624v-347L480-432Zm0-85 312-179H168l312 179Zm-312-94v-85 432-347Z"/></svg>Email</div>
          <div className="w-[100%]"><input type="text " className="w-[100%] bg-inherit  text-inherit p-1 rounded-lg outline-none border-2"></input></div>


          
          </div>




          <div className="flex text-2xl  p-1 flex-col justify-between items-start h-[45%] ">
          
          <div className="flex  w-[26%] h-[20%] justify-between items-center hover:scale-110 hover:text-red-700"> <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="currentColor"><path d="M240-384h336v-72H240v72Zm0-132h480v-72H240v72Zm0-132h480v-72H240v72ZM96-96v-696q0-29.7 21.15-50.85Q138.3-864 168-864h624q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H240L96-96Zm114-216h582v-480H168v522l42-42Zm-42 0v-480 480Z"/></svg>Message</div>
          <div className="w-[100%] h-[100%]"><textarea className="h-[100%] w-[100%] bg-inherit text-inherit outline-none border-2 rounded-lg p-1"></textarea></div>


          
          </div>
          <button className= "border-2 h-[10%] text-[2rem] flex justify-center items-center bg-blue-950 rounded-lg hover:scale-105 hover:text-red-700 hover:flex-row-reverse   duration-1000"><div >
          <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2rem" data-name="Layer 1" viewBox="0 0 24 24" fill="currentColor" ><path d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"/></svg>
          </div>
          <div>Send Message</div>
            
          </button>
        </div>

        </div>
        </center>

      <center><div className=" m-2 h-[20vh]  w-[70vw] p-2 flex flex-col items-center">
        <div className="     w-[30%]  flex  items-center justify-evenly ">shashank © 2024</div>





<div className=" h-[40%] w-[7%]"><img src={logo}  className="w-[100%] h-[100%]"></img></div>

        <div className="    h-[40%] w-[30%] flex  items-center justify-evenly ">
  <div className=" h-[50%] w-[50%]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-[100%] w-[100%] opacity-70 hover:opacity-100 hover:scale-125 ">
    <path
        fill="currentColor"
        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
</svg></div>
<div className="  h-[50%] w-[50%]">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-[100%] w-[100%] opacity-70 hover:opacity-100 hover:scale-125">
    <path fill="currentColor"
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
</svg>
</div>
<div className=" h-[50%] w-[50%]">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-[100%] w-[100%] opacity-70 hover:opacity-100 hover:scale-125">
    <path
        fill="currentColor"
        d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
</svg>
</div>
<div className=" h-[50%] w-[50%]">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="h-[100%] w-[100%] opacity-70 hover:opacity-100 hover:scale-125">
    <path
    fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
</svg>
</div>
<div className=" h-[50%] w-[50%]">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-[100%] w-[100%] opacity-70 hover:opacity-100 hover:scale-125">
    <path
        fill="currentColor"
        d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
</svg>
</div>
</div>



        
        </div></center>
     
    

    
      
    </div>
   
    
      
      
      
      
      
      
      
      
      
    </>
  );
}
export default App;