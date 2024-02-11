"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { TourPackage } from "@/types";
import getLocations from "@/actions/get-location";

interface TourPackageDetails {
  data: TourPackage
}

const TourPackageDetails: React.FC<TourPackageDetails> = async ({
  data
}) => {
  //  const previewModal = usePreviewModal();
  //  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tourPackage/${data?.id}`);
  };

  const location = await getLocations(data?.locationId);

  const handleBack = () => {
    router.back();
  };
  /*  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
     event.stopPropagation();
 
     previewModal.onOpen(data);
   };
 
   const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
     event.stopPropagation();
 
     cart.addItem(data);
   }; */

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{data.tourPackageName}</h3>
        <button onClick={handleBack} className="bg-gray-200 p-2 rounded-md">Back</button>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {/* Tour Package Details */}
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Customer Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.customerName}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{location.label}</dd>
          </div>

          {/* Flight Details */}
          {data.flightDetails && data.flightDetails.length > 0 && (
            <div className="bg-gray-50 px-4 py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Flight Details</dt>
              {data.flightDetails.map((flight, index) => (
                <dd key={index} className="mt-1 text-sm text-gray-900">
                  <div>{`${flight.from} to ${flight.to}`}</div>
                  <div>{`Flight: ${flight.flightName} (${flight.flightNumber})`}</div>
                  <div>{`Departure: ${flight.departureTime}, Arrival: ${flight.arrivalTime}`}</div>
                </dd>
              ))}
            </div>
          )}

// Itineraries with Activities
          {data.itineraries && data.itineraries.length > 0 && (
            <div className="bg-white px-4 py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Itineraries</dt>
              {data.itineraries.map((itinerary, idx) => (
                <dd key={idx} className="mt-1 text-sm text-gray-900">
                  <div>{`Day ${itinerary.dayNumber}: ${itinerary.itineraryTitle}`}</div>
                  <div>{itinerary.itineraryDescription}</div>
                  <div>{`Hotel: ${itinerary.hotelId}, Room: ${itinerary.roomCategory}, Meals: ${itinerary.mealsIncluded}`}</div>
                  {/* Activities for each day */}
                  {itinerary.activities && itinerary.activities.length > 0 && (
                    <div className="mt-2">
                      <h4 className="font-medium text-gray-900">Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {itinerary.activities.map((activity, actIdx) => (
                          <li key={actIdx} className="text-sm text-gray-700">{activity.activityTitle}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </dd>
              ))}
            </div>
          )}


          {/* Price */}
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Price</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <Currency value={data.price} />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default TourPackageDetails;