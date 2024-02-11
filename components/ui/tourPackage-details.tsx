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
    // Provide a fallback value for dayNumber, e.g., 0 or a very large number depending on your sorting logic
    const dayA = a.dayNumber ?? 0;
    const dayB = b.dayNumber ?? 0;
    return dayA - dayB;
  });
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-4 lg:mx-40 md:mx-40">
      {/* Header with main tour package details */}
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-3xl font-semibold text-center mb-4">{data.tourPackageName}</h1>
        <p className="text-md text-gray-600 text-center">{data.numDaysNight} - {data.locationId}</p>
      </div>

      {/* Image gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <Image src={image.url} alt={`Image ${index + 1}`} width={600} height={400} layout="responsive" objectFit="cover" />
          </div>
        ))}
      </div>


      <div className="space-y-6">
        {sortedItineraries.map((itinerary, itineraryIndex) => (
          <div key={itineraryIndex} className="bg-white shadow rounded-lg p-4 mb-6">
            <div className={`flex ${itineraryIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center space-x-4 space-x-reverse mb-4`}>
              <div className="flex-1">
                <h2 className="text-xl font-bold">Day {itinerary.dayNumber}: {itinerary.itineraryTitle}</h2>
                <p>{itinerary.itineraryDescription}</p>
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
            {/* Separator */}
            <hr className="my-4" />
            {itinerary.activities.map((activity, activityIndex) => (
              <div key={activityIndex} className="mb-4 last:mb-0">
                <div className={`flex ${activityIndex % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} items-center space-x-4 space-x-reverse`}>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{activity.activityTitle}</h3>
                    <p>{activity.activityDescription}</p>
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
                {/* Separator for activities */}
                {activityIndex < itinerary.activities.length - 1 && <hr className="my-4" />}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Additional information such as policies and terms */}
      <div className="px-4 py-5 sm:p-6 border-t">
        <h3 className="text-lg font-semibold mb-3">Additional Information</h3>
        <p className="mb-2"><strong>Inclusions:</strong> {data.inclusions}</p>
        <p className="mb-2"><strong>Exclusions:</strong> {data.exclusions}</p>
        <p className="mb-2"><strong>Payment Policy:</strong> {data.paymentPolicy}</p>
        <p className="mb-2"><strong>Cancellation Policy:</strong> {data.cancellationPolicy}</p>
        <p className="mb-2"><strong>Airline Cancellation Policy:</strong> {data.airlineCancellationPolicy}</p>
        <p className="mb-2"><strong>Terms and Conditions:</strong> {data.termsconditions}</p>
      </div>

      {/* Back button */}
      <div className="px-4 py-5 sm:p-6 border-t text-center">
        <button onClick={handleBack} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-150">
          Back
        </button>
      </div>
    </div>
  );
};

export default TourPackageDetails;
