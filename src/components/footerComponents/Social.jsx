
const Social = () => {
  return (
    <div id="Contact" className=" bg-[#050505] w-full h-full flex flex-col justify-center items-center p-20">
        <div className=" w-24 grid grid-cols-2 justify-center items-center mb-10 md:mb-5 gap-6 ">

            <a className="hover:opacity-80" href="https://github.com/DigKvs" target="_blank" rel="noopener noreferrer" ><img src="/github.svg" alt="github" /></a>
            <a className="hover:opacity-80" href="https://www.linkedin.com/in/diego-kaviski-33a418252/" target="_blank" rel="noopener noreferrer" ><img src="/linkedin.svg" alt="linkedin" /></a>

        </div>
        <div className=" justify-center items-center flex relative m-2 gap-3 right-20 w-12 p-1 text-[#E8EDF0]" ><img src="/discord.svg" alt="discord" />dig7</div>
        <div className="justify-center items-center flex m-2 gap-3 w-12 p-1 text-[#E8EDF0]" ><img src="/envelope-solid.svg" alt="email"/>diegokaviski14@gmail.com</div>

        <div className="justify-center items-center flex relative right-10 m-2 gap-3 w-full p-1 text-[#E8EDF0]">
          <img className="w-10" src="/phone-solid.svg" alt="phone"/>
          <span className="flex h-full">(41)98786-8768
          </span>
        </div>
        
        <div className=" text-[0.7rem] text-[#E8EDF0]">
            @2023 Diego Kaviski
        </div>

    </div>
  )
}

export default Social