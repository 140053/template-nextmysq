
import MetadaList from "@/components/MetadataList";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";



const Homepage = () => {
  

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1">
        <div className="lg:col-span-2 md:col-span-3 sm:col-span-full ">
         <SearchBar />
         <MetadaList />
        
        </div>

        <div className="hidden sm:block">
          <SideBar />
        </div>
      </div>
    </div>
  );

};

export default Homepage;
