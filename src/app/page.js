
import CardGrid from "@/components/CardGrid";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import TopHeader from "@/components/TopHeader";

export default function Home() {
 

  return (
    <div>
      {/* <div className='md:sticky md:top-[66px] lg:top-[65px] xl:top-[40px] 2xl:top-[84px]  bg-[#1E1E25] md:z-20'>
        <TopHeader/>
        <Tabs/>
      </div> */}
      <CardGrid/>
      <Pagination/>
  
    </div>
  );
}
