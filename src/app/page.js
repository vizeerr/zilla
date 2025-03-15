import BottomFooter from "@/components/home/BottomFooter";
import CardGrid from "@/components/home/CardGrid";
import Pagination from "@/components/home/Pagination";
import Tabs from "@/components/home/Tabs";
import TopHeader from "@/components/home/TopHeader";

export default function Home() {
 

  return (
    <div>
      <div className='bg-[#1E1E25]'>
        <TopHeader/>
        <Tabs/>
      </div>
      <CardGrid/>
      <BottomFooter/>
    </div>
  );
}
