"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Currency  from "@/components/ui/currency";
import { TourPackage } from "@/types";
import getLocations from "@/actions/get-location";

interface TourPackageCard {
  data: TourPackage
}

const TourPackageCard: React.FC<TourPackageCard> =  ({
  data
}) => {
//  const previewModal = usePreviewModal();
//  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tourPackage/${data?.id}`);
  };

 // const location = await getLocations(data?.locationId);
 /*  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  }; */
  
  return ( 
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={data.images?.[0]?.url} 
          alt="" 
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
          {/*   <IconButton 
              onClick={onPreview} 
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart} 
              icon={<ShoppingCart size={20} className="text-gray-600" />} 
            /> */}
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.tourPackageName}</p>
        <p className="text-sm text-gray-500">{data.locationId}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}

export default TourPackageCard;
