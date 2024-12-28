"use client"
import CardGrid from "@/components/CardGrid";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import TopHeader from "@/components/TopHeader";
import TopNavbar from "@/components/TopNavbar";
import { useState } from "react";

export default function Home() {
 

  return (
    <div>
      <div className='sm:sticky sm:top-[84px]  bg-[#1E1E25] sm:z-20'>
      <TopHeader/>
      <Tabs/>
      </div>
    <CardGrid/>
    {/* <Pagination/> */}
    </div>
  );
}
