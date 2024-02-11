"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TourPackage } from "@/types";

interface TourPackageDetailsProps {
  data: TourPackage;
}

const TourPackageDetails: React.FC<TourPackageDetailsProps> = ({ data }) => {
  const router = useRouter();

  const sortedItineraries = [...data.itineraries].sort((a, b) => {
    const dayA = a.dayNumber ?? 0;
    const dayB = b.dayNumber ?? 0;
    return dayA - dayB;
  });

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen flex flex-col px-40">
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-3xl font-semibold text-center mb-4">
          <span className="bg-gradient-to-r from-yellow-500 via-red-400 to-orange-400 text-transparent bg-clip-text">
            {data.tourPackageName}
          </span>
        </h1>
        <p className="text-md text-gray-600 text-center">{data.numDaysNight} - {data.locationId}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <Image src={image.url} alt={`Image ${index + 1}`} width={600} height={400} layout="responsive" objectFit="cover" />
          </div>
        ))}
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto">
        {sortedItineraries.map((itinerary, itineraryIndex) => (
          <div key={itineraryIndex} className="bg-white shadow-lg rounded-lg p-4 mb-6">
            <div className={`flex ${itineraryIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center space-x-4 space-x-reverse mb-4`}>
              <div className="flex-1">
                <h1 className="text-xl bg-gradient-to-r from-yellow-500 via-red-400 to-orange-400 text-transparent bg-clip-text">Day {itinerary.dayNumber}: {itinerary.itineraryTitle}</h1>
                <p className="text-gray-900">{itinerary.itineraryDescription}</p>
              </div>
              <div className="w-48 h-48 relative">
                {itinerary.itineraryImages[0] && (
                  <Image
                    src={itinerary.itineraryImages[0].url}
                    alt={`Itinerary Image`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                )}
              </div>
            </div>
            <hr className="border-gray-800 my-4" />
            {itinerary.activities.map((activity, activityIndex) => (
              <div key={activityIndex} className="mb-4 last:mb-0">
                <div className={`flex ${activityIndex % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} items-center space-x-4 space-x-reverse`}>
                  <div className="flex-1">
                    <h3 className="text-lg bg-gradient-to-r from-yellow-500 via-red-400 to-orange-400 text-transparent bg-clip-text">{activity.activityTitle}</h3>
                    <p className="text-gray-800">{activity.activityDescription}</p>
                  </div>
                  <div className="w-48 h-48 relative">
                    {activity.activityImages[0] && (
                      <Image
                        src={activity.activityImages[0].url}
                        alt={`Activity Image`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    )}
                  </div>
                </div>
                {activityIndex < itinerary.activities.length - 1 && <hr className="border-gray-800 my-4" />}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="px-4 py-5 sm:p-6 border-t text-center">
        <button onClick={handleBack} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-150">
          Back
        </button>
      </div>
    </div>
  );
};

export default TourPackageDetails;
