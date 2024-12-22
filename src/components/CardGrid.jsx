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
        <div className="flex flex-wrap gap-[53px] mt-5 justify-center">
            
            {allTokens.map((data, index) => (
                <Card key={index} data={data} />
            ))}
        </div>
    );
};

export default CardGrid;
