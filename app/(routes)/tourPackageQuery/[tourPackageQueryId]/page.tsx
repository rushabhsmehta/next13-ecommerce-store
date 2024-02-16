import TourPackageList from '@/components/tourPackage-list'
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import getTourPackageQuery from '@/actions/get-tourPackageQuery';
import getTourPackageQueries from '@/actions/get-tourPackageQueries';
import Container from '@/components/ui/container';


interface TourPackageQueryPageProps {
  params: {
    tourPackageQueryId: string;
  },
}

const TourPackageQueryPage: React.FC<TourPackageQueryPageProps> = async ({ 
  params
 }) => {
  const tourPackageQuery = await getTourPackageQuery(params.tourPackageQueryId);
//  const suggestedTourPackages = await getTourPackages({ 
//    locationId: tourPackage?.locationId
//  });

  if (!tourPackageQuery) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={tourPackageQuery.images} />
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

export default TourPackageQueryPage;
