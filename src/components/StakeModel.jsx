import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react'

const StakeModel = ({ open, setOpen,option,setOption }) => {
    const handleClose = (e)=>{
        if (e.target.id === "background") {
            setOpen(false);
        }
    }
  
    const [value, setValue] = useState(50); // Initial value (50%)
  const [milestones, setMilestones] = useState([25, 50, 75]); // Array of milestone percentages
  const [removedMilestones, setRemovedMilestones] = useState([]); // Milestones that have been removed
  const sliderRef = useRef(null); // Reference to the slider container
  const thumbRef = useRef(null); // Reference to the thumb
  const [stakePrice,setStakePrice] = useState(0)

  // Function to handle mouse drag
  const handleMouseMove = (e) => {
    if (!thumbRef.current) return; // Ensure thumb exists during dragging

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const newLeft = Math.max(0, Math.min(e.clientX - sliderRect.left, sliderRect.width));
    const newValue = (newLeft / sliderRect.width) * 100;
    setValue(newValue);
  };

  // Start dragging (when mouse is down)
  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent selection text during drag
    thumbRef.current.style.transition = "none"; // Disable smooth transition while dragging
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Stop dragging (when mouse is released)
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    thumbRef.current.style.transition = "left 0.2s ease"; // Re-enable smooth transition after dragging
  };

  // Function to handle clicking on the track to update value
  const handleTrackClick = (e) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const newLeft = Math.max(0, Math.min(e.clientX - sliderRect.left, sliderRect.width));
    const newValue = (newLeft / sliderRect.width) * 100;
    setValue(newValue);
  };

  // Use effect to handle milestone removal when slider crosses them
  useEffect(() => {
    // Remove milestones when slider crosses them (value >= milestone)
    const newMilestones = milestones.filter((milestone) => milestone > value);
    const newRemovedMilestones = milestones.filter((milestone) => milestone <= value);

    // Only update removed milestones if they haven't been removed yet
    setRemovedMilestones((prevRemoved) => [
      ...prevRemoved,
      ...newRemovedMilestones.filter((milestone) => !prevRemoved.includes(milestone)),
    ]);

    // Update the active milestones
    setMilestones(newMilestones);
  }, [value]);

  // Use effect to re-add removed milestones when slider goes back below them
  useEffect(() => {
    // Re-add removed milestones if slider value is below them
    const milestonesToReAdd = removedMilestones.filter((milestone) => milestone > value);
    if (milestonesToReAdd.length > 0) {
      setMilestones((prevMilestones) => [
        ...prevMilestones,
        ...milestonesToReAdd,
      ]);
      // Remove from removed milestones
      setRemovedMilestones((prevRemoved) =>
        prevRemoved.filter((milestone) => milestone <= value)
      );
    }
  }, [value, removedMilestones]);

  
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`${
            open ? "flex" : "hidden"
        } bg-[#00000080] fixed z-30 justify-center items-center w-full h-screen  px-8 top-0`}
        onClick={(e)=>handleClose(e)}
        id="background"
    >
        <motion.div
                initial={{ opacity: 0,}}
                animate={{ opacity: open ? 1 : 0}}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                id="box"
                className={`${
                    open ? "block" : "hidden"
                } bg-[#1B1C1E] w-[800px] h-min rounded-[50px] p-[60px]`}
            >
            <div className="flex justify-between">
                <button onClick={()=>setOption(0)} className={`${option==0?"text-[#1B1C1E] bg-primary":"bg-[#111111] text-white"} anim shadow-xl text-[25px] font-montserrat font-[800]  rounded-full py-[12px] w-[250px]`}>Stake</button>
                <button onClick={()=>setOption(1)} className={`${option==1?"text-[#1B1C1E] bg-primary":"bg-[#111111] text-white"} anim shadow-xl text-[25px] font-montserrat font-[800]  rounded-full py-[12px] w-[250px]`}>Withdraw</button>               
            </div>
            {option==0 && (
                <>
                <div className="flex items-center mt-[40px] justify-between">
                <p className=" font-montserrat font-[800] text-white text-[15px] bg-[#111111] px-[35px] py-[10px] shadow-lg rounded-full"><span className="text-primary">User</span> Balance : <span className="text-[23px] text-primary">123,456</span></p>
                <p className="text-[#42FF91] text-[20px] font-bebasneue">stake your zilla tokens to earn rewards !</p>
            </div> 
            <div className="my-[25px] flex items-center justify-between gap-8">
                <div className="rounded-full  border-2 border-primary py-5 px-8 w-full" >
                    <input type="text" onChange={(e)=>setStakePrice(e.target.value)} className="text-white outline-none text-[30px] bg-transparent w-full font-bebasneue" placeholder="enter tokens to stake" />
                </div>
                <p className="font-montserrat font-[900] anim text-[31px] bg-primary shadow-[19.46px_32.43px_40.38px_0px_#00000040] rounded-[24px] px-[40px] py-[20px]">MAX</p>
            </div>
            <div className="shadow-2xl bg-[#111111] p-[20px] rounded-[20px]">
                <p className="font-bebasneue text-[16px] text-white">Staking amount</p>
                <div className="flex justify-between items-center gap-5 ">
                    <div
                        className="relative w-full h-1 bg-[#363940] rounded-full"
                        ref={sliderRef}
                        onClick={handleTrackClick}
                    >
                        <div
                        className="absolute top-0 left-0 h-1 bg-[#A8FF2F] rounded-full"
                        style={{ width: `${value}%` }}
                        ></div>
                        <div
                        className="absolute top-[-7px] w-[18px] h-[18px] bg-white z-10 shadow-md rounded-full cursor-pointer"
                        ref={thumbRef}
                        style={{ left: `${value-1}%` }}
                        onMouseDown={handleMouseDown}
                        ></div>

                        {milestones.map((milestone) => (
                        <div
                            key={milestone}
                            className="absolute top-[8px] shadow-lg -mt-3 w-[11px] h-[11px] bg-[#363940] rounded-full"
                            style={{ left: `${milestone}%` }}
                        ></div>
                        ))}
                    </div>
                    <p className="font-montserrat font-[800] text-[12px] text-white bg-[#363940] rounded-[11px] px-2 py-1.5 shadow-md w-[50px]">{Math.round(value)}%</p>
                </div>
                
            </div>
             
            <div className={`${stakePrice>0?"bg-primary ":" bg-[#666666]"} text-[#1B1C1E] rounded-full shadow-lg text-center w-[157px] mx-auto mt-[30px]`}>
                <p className={`round text-[35px] pt-2.5`}>stake</p>
            </div>
                </>
            )}
            {option==1 && (<>
            <div className="flex items-center mt-[40px] justify-between">
                <p className=" font-montserrat font-[800] text-white text-[15px] bg-[#111111] px-[35px] py-[10px] shadow-lg rounded-full"><span className="text-primary">User</span> Balance : <span className="text-[23px] text-primary">123,456</span></p>
                <p className="text-[#FF4542] text-[20px] w-1/2 text-end font-bebasneue">Withdrawing your zilla tokens will result in a loss of points multiplier </p>
            </div> 
            <div className="my-[25px] flex items-center justify-between gap-8">
                <div className="rounded-full  border-2 border-primary py-5 px-8 w-full" >
                    <input type="text" onChange={(e)=>setStakePrice(e.target.value)} className="text-white outline-none text-[30px] bg-transparent w-full font-bebasneue" placeholder="enter tokens to stake" />
                </div>
                <p className="font-montserrat font-[900] anim text-[31px] bg-primary shadow-[19.46px_32.43px_40.38px_0px_#00000040] rounded-[24px] px-[40px] py-[20px]">MAX</p>
            </div>
            <div className="shadow-2xl bg-[#111111] p-[20px] rounded-[20px]">
                <p className="font-bebasneue text-[16px] text-white">Staking amount</p>
                <div className="flex justify-between items-center gap-5 ">
                    <div
                        className="relative w-full h-1 bg-[#363940] rounded-full"
                        ref={sliderRef}
                        onClick={handleTrackClick}
                    >
                        <div
                        className="absolute top-0 left-0 h-1 bg-[#A8FF2F] rounded-full"
                        style={{ width: `${value}%` }}
                        ></div>
                        <div
                        className="absolute top-[-7px] w-[18px] h-[18px] bg-white z-10 shadow-md rounded-full cursor-pointer"
                        ref={thumbRef}
                        style={{ left: `${value-1}%` }}
                        onMouseDown={handleMouseDown}
                        ></div>

                        {milestones.map((milestone) => (
                        <div
                            key={milestone}
                            className="absolute top-[8px] shadow-lg -mt-3 w-[11px] h-[11px] bg-[#363940] rounded-full"
                            style={{ left: `${milestone}%` }}
                        ></div>
                        ))}
                    </div>
                    <p className="font-montserrat font-[800] text-[12px] text-white bg-[#363940] rounded-[11px] px-2 py-1.5 shadow-md w-[50px]">{Math.round(value)}%</p>
                </div>
                
            </div>
             
            <div className={`${stakePrice>0?"bg-primary ":" bg-[#666666]"} text-[#1B1C1E] rounded-full shadow-lg text-center w-[157px] mx-auto mt-[30px]`}>
                <p className={`round text-[35px] pt-2.5`}>withdraw</p>
            </div>
            </>
            )}
            
        </motion.div>

      
    </motion.div>
  )
}

export default StakeModel
