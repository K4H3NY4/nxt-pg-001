import Image from "next/image"
import logo from "../public/images/Logo.png"
import hero from "../public/images/hero.png"
import icon1 from "../public/images/icon-1.png"
import icon2 from "../public/images/icon-2.png"
import icon3 from "../public/images/icon-3.png"
import section3 from "../public/images/section3.png"
import section4 from "../public/images/section4.png"
import section5 from "../public/images/section5.png"
import section6 from "../public/images/section6.png"

export default function Landing() {
    return (

        <div>
             <header className="p-8">

<div className="container flex flex-row items-center justify-between px-8 mx-auto md:px-14">
  <Image src={logo} className="w-30 h-30" alt="" />


  <div className="items-center hidden space-x-12 md:flex"> 
    <a href="" className="p-4 text-lg font-bold text-green-500">Product</a>
    <a href="" className="p-4 text-lg font-bold hover:text-green-500">Why tingg</a>
    <a href="" className="p-4 text-lg font-bold" >Pricing</a>
    <a href="" className="p-4 text-lg font-bold">Developer</a>
    <a href="" className="p-4 text-lg font-bold">Demo</a>
  </div>


  <div className="items-center justify-end hidden space-x-12 md:flex ">
    <a href="" className="p-4 text-lg font-bold">Login</a>
    <a href="" className="p-4"> <button className="p-4 text-xs font-bold text-white bg-blue-900 rounded-lg"> Create a free account</button></a>
  </div>


</div>

</header>



<div className="container flex justify-between pt-20 mx-auto xl:mx-auto sm:mx-auto sm:flex-col md:flex-row columns-2">
<div className="">
  <h1 className="font-extrabold text-blue-900 lg:text-5xl sm:text-4xl md:text-7xl">
    Receive <br/>payments easily
  </h1>
  <p className="max-w-xl pt-10 font-thin leading-loose text-blue-900 sm:text-xl md:text-3xl pb-9">
    Accept payments without the hassle and resources required for setting up a payment gateway. Redirect your customers to an external link to accomplish the payment using their preferred payment option. 

  </p>

  <button className="p-4 font-bold text-white bg-blue-900 rounded-lg sm:text-lg md:text-base"> Create a free account</button>
</div>

<div>
  <Image src={hero}
  
  />
</div>
</div>


<div className="flex flex-row flex-wrap items-center justify-center w-full gap-10 pt-32 pb-32 space-x-5 space-y-4 align-middle lg-flex-row">


<div className="w-64 h-full pt-16 bg-amber-100 rounded-xl hover:border hover:border-amber-300 hover:shadow-lg hover:shadow-slate-400" >
  <Image className="" src={icon1} alt=""  width={60}  height={60}  />
  <p className="max-w-md pb-8 pl-8 text-2xl font-bold text-blue-900">Facilitate easy transactions.</p>
  <p className="max-w-md pb-20 pl-8 text-xl text-blue-900">Facilitate easy transactions. </p>
</div>

<div className="w-64 h-full pt-16 bg-blue-100 rounded-xl hover:border hover:border-blue-300 hover:shadow-lg hover:shadow-slate-400" >
  <Image className="w-20 h-20 pb-8 pl-8" src={icon2} alt="" />
  <p className="max-w-md pb-8 pl-8 text-2xl font-bold text-blue-900">Multiple Payment Options.</p>
  <p className="max-w-md pb-20 pl-8 text-xl text-blue-900">Facilitate easy transactions. </p>
</div>


<div className="w-64 h-full pt-16 bg-green-100 rounded-xl hover:border hover:border-blue-300 hover:shadow-lg hover:shadow-slate-400" >
  <Image className="w-20 h-20 pb-8 pl-8" src={icon3} alt="" />
  <p className="max-w-md pb-8 pl-8 text-2xl font-bold text-blue-900">Multiple Payment Options.</p>
  <p className="max-w-md pb-20 pl-8 text-xl text-blue-900">Facilitate easy transactions. </p>
</div>


</div>



<div className="container flex justify-center w-4/6 pt-20 mx-auto sm:mx-auto sm:flex-col md:flex-row columns-2">
<div className="">
<p className="max-w-md font-bold text-blue-900 xl:text-5xl md:text-5xl"> <span className="text-green-500">Boost</span> sales with a better payments experience</p>

<p className="max-w-sm pt-10 font-light text-blue-900">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
</p>
</div>

<div>
<Image className="" src={section3} alt="" height="500" width="500" />
</div>

</div>




<div className="container flex justify-center w-full pt-20 mx-auto sm:mx-auto sm:flex-col md:flex-row columns-2">

<div className="justify-center w-1/2">
<Image className="" src={section4} alt="" />
</div>

<div className="">
<p className="max-w-md font-bold text-blue-900 xl:text-5xl md:text-5xl"> Bu<span className="border-b-8 border-green-500">ilt to opt</span>imize payments in african businesses</p>

<p className="max-w-sm pt-10 font-light text-blue-900">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
</p>
</div>



</div>


<div className="container flex justify-center justify-between w-4/6 pt-20 mx-auto sm:mx-auto sm:flex-col md:flex-row columns-2">
<div className="">
<p className="max-w-md font-bold text-blue-900 xl:text-5xl md:text-5xl"> Our solution Your brand</p>

<p className="max-w-sm pt-10 font-light text-blue-900">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
</p>
</div>

<div>
<Image className="" src={section5} alt="" height="500" width="500" />

  
</div>

</div>


<div className="flex flex-row w-full mt-20 mb-20 bg-blue-900">
<div className="container flex justify-center w-4/6 pt-20 mx-auto sm:mx-auto sm:flex-col md:flex-row columns-2">
<div className="">
  <p className="max-w-2xl font-bold text-white xl:text-6xl md:text-4xl"> <span className="text-lime-400"> Collect</span>, <span className="text-lime-400"> disburse</span>, and start <span className="text-lime-400"> engaging </span> with your customers today!</p>

  <div className="flex flex-row gap-8 mt-10 ">
  <button className="p-4 font-bold text-white bg-green-400 rounded-md sm:text-lg md:text-base">Start Accepting Payments</button>  
  <button className="p-4 font-bold text-blue-900 bg-white rounded-md sm:text-lg md:text-base ">Demo</button>
</div>
</div>




</div>

<div className="mt-20 justify-items-end">
<Image className="relative float-right align-right" src={section6} alt="" />


</div>

</div>

        </div>


    )
}