
import getTourPackage from '@/actions/get-tourPackage';

import TourPackageCard from '@/components/ui/tourPackage-card';

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
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">Tour Packages </h3>
      <TourPackageCard key={tourPackage.id} data={tourPackage} />
    </div>

  );
}

export default TourPackagePage;
