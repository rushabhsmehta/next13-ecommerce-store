
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
  //  const suggestedTourPackages = await getTourPackages({ 
  //    locationId: tourPackage?.locationId
  //  });

  if (!tourPackage) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
    <h1 className="text-4xl font-bold text-center mb-10">Tour Package Details</h1>
    <TourPackageDetails data={tourPackage} />  
    </div>

  );
}

export default TourPackagePage;
