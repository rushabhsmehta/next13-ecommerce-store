import Gallery from '@/components/gallery';
import Info from '@/components/info';
import getTourPackage from '@/actions/get-tourPackage';
import getTourPackages from '@/actions/get-tourPackages';
import Container from '@/components/ui/container';
import NoResults from '@/components/ui/no-results';
import TourPackageCard from '@/components/ui/tourPackage-card';


interface TourPackagePageProps {
  params: {
    locationId: string;
  },
}

const TourPackagePage: React.FC<TourPackagePageProps> = async ({
  params
}) => {
  const tourPackages = await getTourPackages({ locationId: params.locationId });
  //  const suggestedTourPackages = await getTourPackages({ 
  //    locationId: tourPackage?.locationId
  //  });

  if (!tourPackages) {
    return null;
  }

  return (
    <div className="space-y-4 px-8 py-20">
    <h3 className="font-bold text-3xl">Tour Packages </h3>
    {tourPackages.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tourPackages.map((tourPackage) => (
          <TourPackageCard key={tourPackage.id}  data={tourPackage} />
          ))}
          </div>
        </div>
       );
    }
  
  export default TourPackagePage;
