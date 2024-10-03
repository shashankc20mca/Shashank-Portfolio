import Mongodb from "../assets/mongodb.png";
import Ex from "../assets/ex.png";
import Reactlogo from "../assets/react.png";
import Exp from "../assets/expressjs.png";
import Personworking from "../assets/personworking.png";


function AboutMe(){
  return (
    <>
    <div className="w-[48%]  flex flex-col justify-between p-1 ">
<div className="text-2xl">ABOUT ME</div>
<div className="text-lg">I help business owners and busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever. Technologies and tools that I use to create such awesome websites. </div>
<div className="  h-[40%] p-3 text-base flex items-center  flex-wrap">
  <button className="border-2  rounded-2xl p-2 m-2">#javascript</button>
  <button className="border-2  rounded-2xl p-2 m-2">#html</button>
  <button className="border-2  rounded-2xl p-2 m-2">#css</button>
  <button className="border-2  rounded-2xl p-2 m-2">#react</button>
  <button className="border-2  rounded-2xl p-2 m-2">#git</button>
  <button className="border-2  rounded-2xl p-2 m-2">#github</button>
  <button className="border-2  rounded-2xl p-2 m-2">#tailwind</button>
  <button className="border-2  rounded-2xl p-2 m-2 ">#Bootstrap</button>
</div>
<div className="text-lg">MERN STACK </div>
<div className="flex justify-evenly h-[25%] items-center text-2xl">
  <div className=" h-[90%] p-1 w-[20%] flex flex-col justify-between items-center"><div className=" w-[50%] h-[70%] "><img src={Mongodb} className="w-[100%] h-[100%]"></img></div><div className="text-red-600">M</div></div>
  <div className=" h-[90%] p-1 w-[20%] flex flex-col justify-between items-center"><div className=" w-[50%] h-[70%]"><img src={Ex} className="w-[100%] h-[100%]"></img></div><div className="text-red-600">E</div></div>
  <div className=" h-[90%] p-1 w-[20%] flex flex-col justify-between items-center"><div className=" w-[50%] h-[70%]"><img src={Reactlogo} className="w-[100%] h-[100%]"></img></div><div className="text-red-600">R</div></div>
  <div className=" h-[90%] p-1 w-[20%] flex flex-col justify-between items-center"><div className=" w-[50%] h-[70%]"><img src={Exp} className="w-[100%] h-[100%]"></img></div><div className="text-red-600">N</div></div>
</div>
    </div>
    <div className="w-[48%] h-[93%]  self-end">
<img src={Personworking} className=" h-[100%] w-[100%] animate-bounce"></img>
    </div>
    </>
  );

}
export default  AboutMe;