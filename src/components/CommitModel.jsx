import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react'

const CommitModel = ({ open, setOpen}) => {
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
        } bg-[#00000080] fixed z-30 justify-center items-center w-full h-screen  px-[1.6vw] top-0`}
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
                } bg-[#1B1C1E] w-[41vw] h-min rounded-[2.6vw] p-[3.1vw]`}
            >
            <div className="flex gap-4 ">
                <div className="w-[0.2vw] bg-white rounded-full"></div>
                <p className="font-montserrat font-[800] text-[1.6vw] text-white"><span className="text-primary">Commit Points</span> for Rewards</p>
            </div>
     
            
            <div className="flex items-center mt-[2vw] justify-between">
                <p className=" font-montserrat font-[800] text-white text-[0.7vw] bg-[#111111] px-[1.8vw] py-[0.5vw] shadow-lg rounded-full"><span className="text-primary">User</span> Balance : <span className="text-[1.1vw] text-primary">123,456</span></p>
                <p className=" font-montserrat font-[800] text-white text-[0.7vw] bg-[#111111] px-[1.8vw] py-[0.5vw] shadow-lg rounded-full"><span className="text-primary">Min.</span> Participation points : <span className="text-[1.1vw] text-primary">10</span></p>
                
            </div> 
            <div className="my-[1.3vw] flex items-center justify-between gap-[1.6vw]">
                <div className="rounded-full  border-2 border-primary py-[1vw] px-[1.6vw] w-full" >
                    <input type="text" onChange={(e)=>setStakePrice(e.target.value)} className="text-white outline-none text-[1.5vw] bg-transparent w-full font-bebasneue" placeholder="enter tokens to commit" />
                </div>
                <p className="font-montserrat font-[900] anim text-[1.6vw] bg-primary shadow-[19.46px_32.43px_40.38px_0px_#00000040] rounded-[1.2vw] px-[1vw] py-[1vw]">MAX</p>
            </div>
            <div className="shadow-2xl bg-[#111111] p-[2vw] rounded-[2vw]">
                <p className="font-bebasneue text-[0.8vw] text-white">Staking amount</p>
                <div className="flex justify-between items-center gap-[1vw] ">
                    <div
                        className="relative w-full h-[0.2vw] bg-[#363940] rounded-full"
                        ref={sliderRef}
                        onClick={handleTrackClick}
                    >
                        <div
                        className="absolute top-0 left-0 h-[0.2vw] bg-[#A8FF2F] rounded-full"
                        style={{ width: `${value}%` }}
                        ></div>
                        <div
                        className="absolute top-[-0.3vw] w-[0.9vw] h-[0.9vw] bg-white z-10 shadow-md rounded-full cursor-pointer"
                        ref={thumbRef}
                        style={{ left: `${value-1}%` }}
                        onMouseDown={handleMouseDown}
                        ></div>

                        {milestones.map((milestone) => (
                        <div
                            key={milestone}
                            className="absolute top-[0.41vw] shadow-lg -mt-[0.62vw] w-[0.5vw] h-[0.5vw] bg-[#363940] rounded-full"
                            style={{ left: `${milestone}%` }}
                        ></div>
                        ))}
                    </div>
                    <p className="font-montserrat font-[800] text-[0.6vw] text-white bg-[#363940] rounded-[0.5vw] px-[0.4vw] py-[0.3vw] shadow-md w-[2.6vw]">{Math.round(value)}%</p>
                </div>
                
            </div>
             
            <div className={`${stakePrice>0?"bg-primary ":" bg-[#666666]"} text-[#1B1C1E] rounded-full shadow-lg text-center w-[8.1vw] mx-auto mt-[1.5vw]`}>
                <p className={`round text-[1.8vw] pt-[0.5vw]`}>commit</p>
            </div>
            
            
        </motion.div>

      
    </motion.div>
  )
}

export default CommitModel
