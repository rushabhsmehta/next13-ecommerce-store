"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TourPackage } from "@/types";
import getLocations from "@/actions/get-location";
import getLocation from "@/actions/get-location";

interface Location {
  label: string;
}

interface TourPackageDetailsProps {
  data: TourPackage;
  location: Location;
}

const TourPackageDetails: React.FC<TourPackageDetailsProps> = ({ data, location }) => {
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
    <div className="min-h-screen flex flex-col sm:px-6 lg:px-40 py-10">

      {/* Tour Package Name and Duration */}
      <div className="py-5 sm:p-6">
        <h1 className="text-3xl font-semibold text-center mb-4">
          <span className="bg-gradient-to-r from-yellow-500 via-red-400 to-orange-400 text-transparent bg-clip-text font-bold">
            {data.tourPackageName}
          </span>

          <p className="bg-gradient-to-r from-yellow-500 via-red-400 to-orange-400 text-transparent bg-clip-text text-sm py-4">{data.numDaysNight} - {location.label}</p>
        </h1>
      </div>

      {/* Itineraries */}
      <div className="flex-1 space-y-6 overflow-y-auto">
        {sortedItineraries.map((itinerary, itineraryIndex) => (
          <div key={itineraryIndex} className="shadow-lg rounded-lg p-4 mb-6">
            {/* Use flex-col for mobile and flex-row for larger screens */}
            <div className={`flex flex-col ${itineraryIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:space-x-4 space-y-4 md:space-y-0`}>
              <div className="flex-1">
                <h1 className="text-xl bg-gradient-to-r from-yellow-500 via-red-400 to-orange-400 text-transparent bg-clip-text font-bold lg:px-8 md:px-8">Day {itinerary.dayNumber}: {itinerary.itineraryTitle}</h1>
                <p className="text-gray-800 font-bold lg:px-8 md:px-8 text-justify">{itinerary.itineraryDescription}</p>
              </div>
              <div className="w-full md:w-48 h-48 relative">
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
                {/* Use flex-col for mobile and flex-row for larger screens */}
                <div className={`flex flex-col ${activityIndex % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:space-x-4 space-y-4 md:space-y-0`}>
                  <div className="flex-1">
                    <h3 className="text-lg bg-gradient-to-r from-yellow-500 via-red-400 to-orange-400 text-transparent bg-clip-text font-bold lg:px-8 md:px-8">{activity.activityTitle}</h3>
                    <p className="text-gray-600 font-bold lg:px-8 md:px-8 text-justify">{activity.activityDescription}</p>
                  </div>
                  <div className="w-full md:w-48 h-48 relative">
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

      {/* Back Button */}
      <div className="py-5 sm:p-6 border-t text-center">
        <button onClick={handleBack} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-150">
          Back
        </button>
      </div>
    </div>
  );
};

export default TourPackageDetails;
