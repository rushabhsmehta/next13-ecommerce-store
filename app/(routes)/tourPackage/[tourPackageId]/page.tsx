import TourPackageList from '@/components/tourPackage-list'
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import getTourPackage from '@/actions/get-tourPackage';
import getTourPackages from '@/actions/get-tourPackages';
import Container from '@/components/ui/container';

export const revalidate = 0;

interface TourPackagePageProps {
  params: {
    tourPackageId: string;
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
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={tourPackage.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
{/*               <Info data={tourPackage} />
 */}            </div>
          </div>
          <hr className="my-10" />
          {/* <TourPackageList title="Related Items" items={suggestedTourPackages} /> */}
        </div>
      </Container>
    </div>  
  )
}

export default TourPackagePage;
