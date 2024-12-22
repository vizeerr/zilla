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
      <div className='sticky top-0 bg-[#1E1E25] z-20 pb-4'>
        <TopNavbar/>
        <TopHeader/>
        <Tabs/>
      </div>
    <CardGrid/>
    <Pagination/>
    </div>
  );
}
