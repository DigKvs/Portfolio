
const Contact = () => {
  return (
    <div className="bg-[#050505] p-6 h-full w-full grid grid-rows-3 md:grid-cols-2 md:grid-rows-4 justify-center items-center gap-10">
        <img className="justify-self-center col-span-2 md:row-span-2 w-20" src="/star-1.svg" alt="starzada" />
        <h2 className="text-[#FFD6FF] relative left-4 md:left-0 font-gothic text-2xl md:text-3xl col-span-2 justify-self-center p-5">Ready to team up with Diego? Your dream site awaits!</h2>
        <a href='https://w.app/mhRvNX' target="_blank" rel="noopener noreferrer" className="px-4 py-3 hover:opacity-80 bg-[#E8EDF0] justify-self-end rounded-lg font-playpen">Hire Diego</a>
        <a href="https://github.com/DigKvs" target="_blank" rel="noopener noreferrer" className="px-4 py-3 hover:opacity-80 bg-[#b8c0ff] justify-self-start rounded-lg font-playpen">View Github</a>

    </div>
  )
}

export default Contact