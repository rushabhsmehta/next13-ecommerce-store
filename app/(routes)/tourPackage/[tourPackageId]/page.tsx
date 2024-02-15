
import getLocations from '@/actions/get-location';
import getTourPackage from '@/actions/get-tourPackage';

import TourPackageDetails from '@/components/ui/tourPackage-details';

export const revalidate = 0;

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
  //  const suggestedTourPackages = await getTourPackages({ 
  //    locationId: tourPackage?.locationId
  //  });
  
  

  if (!tourPackage) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <TourPackageDetails data={tourPackage} location = {location}  />  
    </div>

  );
}

export default TourPackagePage;
