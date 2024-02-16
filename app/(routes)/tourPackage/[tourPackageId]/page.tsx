
import getLocations from '@/actions/get-location';
import getTourPackage from '@/actions/get-tourPackage';
import getHotels from '@/actions/get-hotels';
import TourPackageDetails from '@/components/ui/tourPackage-details';


interface TourPackagePageProps {
  params: {
    tourPackageId : string;
  },
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
