
const Skills = () => {
  return (
    <div id="Skills" className="w-full h-full grid grid-cols-1 md:grid-rows-5 md:grid-cols-2 justify-center items-center p-20 gap-3 gap-x-10 bg-[#050505]">
      <h1 className="md:col-span-2 relative md:top-10 text-4xl pt-5 font-gothic text-[#b8c0ff]">Dev Skills</h1>
      <p className="md:row-span-4 pt-20 self-start relative bottom-14 md:bottom-0 text-[#FFD6FF] font-playpen"> Diego&apos;s professional journey is marked by an unwavering commitment to excellence in web development. Here, we present a timeline that highlights Diego&apos;s ongoing progress in his learning and knowledge acquisition journey, ensuring he stays ahead in the field of web development.</p>
      <li className="relative bottom-4 md:bottom-0 row-span-4 list-none">        
        <ul className="border-[#b8c0ff] border-b-2 border-opacity-30 p-5 text-[#FFD6FF]">React<span className="text-[#ffd6ff] font-bebas text-1xl absolute right-4 md:right-24">2023</span></ul>
        <ul className="border-[#b8c0ff] border-b-2 border-opacity-30 p-5 text-[#FFD6FF]">Node.js<span className="text-[#ffd6ff] font-bebas text-1xl absolute right-4 md:right-24">2023</span></ul>
        <ul className="border-[#b8c0ff] border-b-2 border-opacity-30 p-5 text-[#FFD6FF]">UX Designer<span className="text-[#ffd6ff] font-bebas text-1xl absolute right-4 md:right-24">2022</span></ul>
        <ul className="border-[#b8c0ff] border-b-2 border-opacity-30 p-5 text-[#FFD6FF] flex">Front-End Basics <span className="relative right-4 md:right-0 w-1/2 md:w-auto md:px-3 text-[1rem]">(Html, CSS, JS)</span><span className="text-[#ffd6ff] font-bebas text-1xl absolute right-4 md:right-24">2022</span></ul>
      </li>
    </div>
  )
}

export default Skills