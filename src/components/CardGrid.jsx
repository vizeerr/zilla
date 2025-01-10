"use client"
import { useEffect, useState } from "react";
import Card from "./Card";
import { getAllTokens } from "@/helpers/api";

const CardGrid = ({ data }) => {

    const[allTokens,setAllTokens] = useState([])

    const fetchTokens = async() =>{
        const tokens = await getAllTokens()
        setAllTokens(tokens);
    }
    useEffect(()=>{
        fetchTokens();
    },[])

    return (
        <div className="bg-[#1E1E25] flex flex-wrap 2xl:gap-[53px] md:gap-[20px] gap-[13px] pt-5 justify-center">
            
            {allTokens.map((data, index) => (
                <Card key={index} data={data} />
            ))}
        </div>
    );
};

export default CardGrid;
