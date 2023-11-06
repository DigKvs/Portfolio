
const Works = () => {
  return (
    <div id="Projects" className="bg-[#050505] w-full h-full grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-3 p-10 justify-center items-center pt-0.5">
        <img className="w-20 hidden md:relative md:flex left-12 top-20" src="/imgs/star.png" alt="star" />
        <h2 className="relative bottom-5 md:top-0 md:bottom-0 md:left-0 md:right-0 md:flex p-10 md:mt-10 md:row-start-2 font-gothic text-4xl text-[#FFD6FF]">A Taste of Diego’s  Creations</h2>
        <p className="relative bottom-20 md:top-0 md:bottom-0 md:left-0 md:right-0 md:flex p-10 md:row-start-3 font-playpen text-1xl text-[#FFD6FF]">Feast your eyes on Diego’s revolutionary work, from eye-popping designs to ultra-smooth user experiences. These endeavors not only astonish but also set new benchmarks in the field.</p>
        <a className="text-[#050505] relative flex justify-center bottom-16 left-14 md:top-0 md:right-0 md:left-2/3 md:bottom-7 py-3 px-2 rounded-xl w-[10.4rem] bg-[#b8c0ff] hover:opacity-80 font-bebas" target="_blank" rel="noopener noreferrer" href="https://digkvs.github.io/e-comerce_site/">link to the project</a>
        <img className=" p-3 md:p-10 md:row-start-1 row-start-1 md:row-span-3" src="/imgs/total-1-ew.png" alt="project 1" />
    </div>
  )
}

export default Works