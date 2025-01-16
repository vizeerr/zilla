import CardGrid from "@/components/CardGrid";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import TopHeader from "@/components/TopHeader";

export default function Home() {
 

  return (
    <div>
      <div className='md:sticky bg-[#1E1E25] z-20 md:top-[3.86vw]'>
        <TopHeader/>
        <Tabs/>
      </div>
      <CardGrid/>
      <Pagination/>

  
    </div>
  );
}
