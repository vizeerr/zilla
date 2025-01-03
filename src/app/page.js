"use client"
import Base64 from "@/components/Base64";
import CardGrid from "@/components/CardGrid";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import TopHeader from "@/components/TopHeader";
import TopNavbar from "@/components/TopNavbar";
import { useState } from "react";

export default function Home() {
 

  return (
    <div>
       <div className='md:sticky md:top-[66px] lg:top-[65px] xl:top-[40px] 2xl:top-[84px]  bg-[#1E1E25] md:z-20'>
       <TopHeader/>
       <Tabs/>
       </div>
     <CardGrid/>
     <Pagination/>
     <Base64/>
    </div>
  );
}
