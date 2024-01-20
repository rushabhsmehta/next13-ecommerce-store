import { TourPackage } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/tourPackages`;

interface Query {
 //   locationId? : string;
//   categoryId?: string;
//   colorId?: string;
//   sizeId?: string;
//     isFeatured?: boolean;
storeId : string;
}

const gettourPackages = async (query: Query): Promise<TourPackage[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
    //   locationId : query.locationId,
    //   colorId: query.colorId,
    //   sizeId: query.sizeId,
    //   categoryId: query.categoryId,
    storeId : query.storeId,
   // isFeatured : query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default gettourPackages;
