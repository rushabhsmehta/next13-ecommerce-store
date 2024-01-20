import LocationList from '@/components/location-list'
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import getLocation from '@/actions/get-location';
import getLocations from '@/actions/get-locations';
import Container from '@/components/ui/container';

export const revalidate = 0;

interface LocationPageProps {
  params: {
    locationId: string;
  },
}

const LocationPage: React.FC<LocationPageProps> = async ({ 
  params
 }) => {
  const location = await getLocation(params.locationId);
//  const suggestedTourPackages = await getTourPackages({ 
//    locationId: tourPackage?.locationId
//  });

  if (!location) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={location.images} />
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

export default LocationPage;
