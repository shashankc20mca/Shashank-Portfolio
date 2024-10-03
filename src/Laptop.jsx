import Laptopmockup from "../assets/white mackbook.png";

function Laptop({r}){

function maketitlevisible(r){
 
let s=document.querySelector(`#${r}`);

s.classList.add("tick_info_in");
s.classList.remove("tick_info_out");
}
  function maketitleinvisible(r){
  
    let s=document.querySelector(`#${r}`);
  
    s.classList.add("tick_info_out");
    s.classList.remove("tick_info_in");
  }
  return(
    <>
    

<div className="  h-[15%] w-[95%] flex p-2 pr-0 relative" >
  <div className="flex justify-center items-top flex-wrap p-1 tick_info_out  rounded-2xl  bg-red-900  " id={r} ><div className=" h-[15%] w-[10%] rotate-45 absolute -bottom-0 bg-red-900  "></div> Project image will be showed on laptop screen</div>
  <div className=" w-[80%] hover:scale-110 hover:translate-x-[-1.5rem] duration-1000  " onMouseEnter={()=>(maketitlevisible(r))} onMouseOut={()=>(maketitleinvisible(r))}><img src={Laptopmockup} className="h-[100%] w-[100%]" ></img></div>
  <div className="border-b-2 border-red-600 w-[27.5%] h-[50%]  absolute right-0 top-0 "></div>
</div>
   
    </>
  );
}

export default Laptop;