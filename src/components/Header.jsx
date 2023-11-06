

// eslint-disable-next-line react/prop-types
function ScrollToButton({ targetElementId }) {
  const scrollToSection = () => {
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToSection}>{targetElementId}</button>
  );
}


const Header = () => {
  return (
    <div className="py-[6rem] px-[2rem] md:p-[1rem] h-full w-full bg-[#b8c0ff] text-[#050505] grid justify-items-center items-center grid-cols-3 grid-rows-3 gap-[2rem]">
        <h1 className="text-[6rem] cursor-default font-gothic md:text-[10rem] lg:text-[15rem] font-bold tracking-widest col-span-3 row-span-2 " >KAVISKI</h1>
        <div className=" font-bebas text-md md:text-lg col-span-3 flex flex-wrap gap-20 ">
            <ScrollToButton targetElementId="Projects"></ScrollToButton>
            <ScrollToButton targetElementId="Skills"></ScrollToButton>
            <ScrollToButton targetElementId="Contact"></ScrollToButton>
        </div>
    </div>
  )
}

export default Header