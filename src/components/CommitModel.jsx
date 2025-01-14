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
  }, [value,milestones]);

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
                } bg-[#1B1C1E] md:w-[41vw] w-[70vw] h-min rounded-[2.6vw] p-[3.1vw]`}
            >
            <div className="flex gap-[1vw] ">
                <div className="w-[0.2vw] bg-white rounded-full"></div>
                <p className="font-montserrat font-[800] md:text-[1.6vw] text-[2.5vw] text-white"><span className="text-primary">Commit Points</span> for Rewards</p>
            </div>

            <div className="flex items-center md:mt-[2vw] mt-[3vw] justify-between">
              <p className=" font-montserrat font-[800] text-white md:text-[0.7vw] text-[1.7vw] bg-[#111111] px-[1.8vw] py-[0.5vw] shadow-lg rounded-full"><span className="text-primary">User</span> Balance : <span className="md:text-[1.1vw] text-[2vw] text-primary">123,456</span></p>
              <p className=" font-montserrat font-[800] text-white md:text-[0.7vw] text-[1.7vw] bg-[#111111] px-[1.8vw] py-[0.5vw] shadow-lg rounded-full"><span className="text-primary">Min</span> Participation points : <span className="md:text-[1.1vw] text-[2vw] text-primary">10</span></p>
                  
            </div> 
            
      
            <div className="md:my-[1.3vw] my-[3vw] flex items-center justify-between gap-[1.66vw]">
                <div className="rounded-full  md:border-2 border-[1px] border-primary md:py-[0.8vw] py-[1vw] flex items-center justify-center  md:px-[1.6vw] px-[2.5vw] w-full" >
                    <input type="text" onChange={(e)=>setStakePrice(e.target.value)} className="text-white outline-none md:text-[1.5vw] text-[3.5vw] bg-transparent w-full font-bebasneue" placeholder="enter tokens to stake" />
                </div>
                <p className="font-montserrat font-[900] anim md:text-[1.6vw] text-[2.5vw] bg-primary shadow-[19.46px_32.43px_40.38px_0px_#00000040] rounded-[1.2vw] px-[2vw] py-[1vw]">MAX</p>
            </div>
            <div className="shadow-2xl bg-[#111111] md:p-[1vw] p-[1.9vw] rounded-[1vw]">
                <p className="font-bebasneue md:text-[0.8vw] text-[2vw] text-white">Staking amount</p>
                <div className="flex justify-between items-center gap-[1vw] ">
                    <div
                        className="relative w-full md:h-[0.2vw] h-[0.7vw] bg-[#363940] rounded-full"
                        ref={sliderRef}
                        onClick={handleTrackClick}
                    >
                        <div
                        className="absolute top-0 left-0 md:h-[0.2vw] h-[0.7vw] bg-[#A8FF2F] rounded-full"
                        style={{ width: `${value}%` }}
                        ></div>
                        <div
                        className="absolute md:top-[-0.3vw] top-[-0.4vw] md:w-[0.9vw] md:h-[0.9vw] w-[1.6vw] h-[1.6vw] bg-white z-10 shadow-md rounded-full cursor-pointer"
                        ref={thumbRef}
                        style={{ left: `${value-1}%` }}
                        onMouseDown={handleMouseDown}
                        ></div>

                        {milestones.map((milestone) => (
                        <div
                            key={milestone}
                            className="absolute md:top-[0.41vw] top-[0.3vw] shadow-lg -mt-[0.62vw] md:w-[0.5vw] md:h-[0.5vw] w-[1.3vw] h-[1.3vw] bg-[#363940] rounded-full"
                            style={{ left: `${milestone}%` }}
                        ></div>
                        ))}
                    </div>
                    <p className="font-montserrat font-[800] md:text-[0.6vw] text-[1.5vw] text-white bg-[#363940] rounded-[0.5vw] px-[0.4vw] py-[0.3vw] shadow-md md:w-[2.6vw] w-[5vw]">{Math.round(value)}%</p>
                </div>
                
            </div>
             
            <div className={`${stakePrice>0?"bg-primary ":" bg-[#666666]"} text-[#1B1C1E] rounded-full shadow-lg text-center md:w-[8.1vw] w-[14vw] mx-auto mt-[1.5vw]`}>
                <p className={`round md:text-[1.8vw] text-[4vw] pt-[0.5vw] md:leading-none leading-[4vw]`}>commit</p>
            </div>
             
          
            
            
        </motion.div>

      
    </motion.div>
  )
}

export default CommitModel
