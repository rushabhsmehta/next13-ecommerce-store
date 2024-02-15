import getBillboard from "@/actions/get-billboard";
import getLocations from "@/actions/get-locations";
import LocationList from "@/components/location-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import HeroSection from "@/components/ui/herosection";
import SearchBar from "@/components/ui/searchBarforLocations";

export const revalidate = 0;

const HomePage = async () => {

  // const products = await getProducts({ isFeatured: true });
  // const tourPackages = await getTourPackages({ storeId : "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });
  // const tourPackageQueries = await getTourPackageQueries({ storeId : "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });

  const billboard = await getBillboard("49ec26c8-24b0-4149-a342-63a0c7ce3da5");
  const locations = await getLocations({ storeId: "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });

  return (
    <Container>
      <div className="">
        
        <HeroSection />
        {/*    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
 */}
        {/*  <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <TourPackageList title="Tour Packages" items={tourPackages} />
        </div>
 */}
        <div className="flex flex-col gap-y-8 pb-10 px-4 sm:px-6 lg:px-8">
          <LocationList title="Tour Packages" items={locations} />
        </div>

        {/*  <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <TourPackageQueryList title="Tour Packages" items={tourPackageQueries} />
        </div> */}

      </div>
    </Container>
  )
};

export default HomePage;
