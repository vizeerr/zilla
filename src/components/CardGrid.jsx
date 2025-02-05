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
        <div className="bg-[#1E1E25] flex flex-wrap 2xl:gap-12 xl:gap-8 md:gap-6 gap-[3.3vw] lg:pt-[2rem] pt-[4vw] justify-center">
            
            {allTokens.map((data, index) => (
                <Card key={index} data={data} />
            ))}
        </div>
    );
};

export default CardGrid;
