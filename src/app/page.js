import CardGrid from "@/components/CardGrid";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import TopHeader from "@/components/TopHeader";

export default function Home() {
 

  return (
    <div>
      <div className='md:sticky bg-[#1E1E25] z-20 2xl:top-[4.8rem] lg:top-[3.3rem] md:top-[2.68rem]'>
        <TopHeader/>
        <Tabs/>
      </div>
      <CardGrid/>
      <Pagination/>

  
    </div>
  );
}
