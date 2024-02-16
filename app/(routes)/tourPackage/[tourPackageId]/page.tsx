import getLocations from '@/actions/get-location';
import getTourPackage from '@/actions/get-tourPackage';
import getHotels from '@/actions/get-hotels';
import TourPackageDetails from '@/components/ui/tourPackage-details';
import getalltourPackages from '@/actions/get-all-tourPackages';


interface TourPackagePageProps {
  params: {
    tourPackageId : string;
  },
}

export async function generateStaticParams() {
  const tourPackages  = await getalltourPackages( { storeId: "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });
  return tourPackages.map(tourPackage => ({
     tourPackageId : tourPackage.id } // Ensure parameters match your dynamic route segments
  ));
}

export async function generateMetadata({ params: { tourPackageId } }: TourPackagePageProps) {

  const tourPackage = await getTourPackage(tourPackageId) //deduped!

  if (!tourPackage) {
    return {
      
      title: 'Tour Package Not Found'
    }

    return {
      title: tourPackage.tourPackageName,
    }
  }
}


const TourPackagePage: React.FC<TourPackagePageProps> = async ({
  params
}) => {
  const tourPackage = await getTourPackage(params.tourPackageId);
  const location = await getLocations(tourPackage.locationId)
  const hotels = await getHotels({locationId : tourPackage.locationId})

  //  const suggestedTourPackages = await getTourPackages({ 
  //    locationId: tourPackage?.locationId
  //  });
   

  if (!tourPackage) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <TourPackageDetails data={tourPackage} location = {location} hotels = {hotels} />  
    </div>

  );
}

export default TourPackagePage;
