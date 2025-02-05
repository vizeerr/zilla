import BottomFooter from "@/components/BottomFooter";
import CardGrid from "@/components/CardGrid";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import TopHeader from "@/components/TopHeader";

export default function Home() {
 

  return (
    <div>
      <div className='bg-[#1E1E25]'>
        <TopHeader/>
        <Tabs/>
      </div>
      <CardGrid/>
      <Pagination/>
      <BottomFooter/>
    </div>
  );
}
