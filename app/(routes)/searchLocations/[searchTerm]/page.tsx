import LocationList from '@/components/location-list'
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import Container from '@/components/ui/container';
import getLocationsFromSearchTerm from '@/actions/get-locationsfromSearchTerm';

export const revalidate = 0;

interface SearchLocationsPageProps {
  params: {
    searchTerm : string;
  },
}

const SearchLocationsPage : React.FC<SearchLocationsPageProps> = async ({ 
  params
 }) => {
  const locations = await getLocationsFromSearchTerm({label  : params.searchTerm});
//  const suggestedTourPackages = await getTourPackages({ 
//    locationId: tourPackage?.locationId
//  });

  if (!locations) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
       
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <LocationList title="Locations" items={locations} />
        </div>

      
      </Container>
    </div>  
  )
}

export default SearchLocationsPage;
