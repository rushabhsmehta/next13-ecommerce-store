import { Location } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/locations`;

interface Query {
 //   locationId? : string;
//   categoryId?: string;
//   colorId?: string;
//   sizeId?: string;
//     isFeatured?: boolean;
storeId : string;
}

const getLocations = async (query: Query): Promise<Location[]> => {
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

export default getLocations;
