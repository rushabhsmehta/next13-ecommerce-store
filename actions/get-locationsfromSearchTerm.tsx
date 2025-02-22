import { Location } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/locations`;

interface Query {
 //   locationId? : string;
//   categoryId?: string;
//   colorId?: string;
//   sizeId?: string;
//     isFeatured?: boolean;
label : string;
}

const getLocationsFromSearchTerm = async (query: Query): Promise<Location[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
    //   locationId : query.locationId,
    //   colorId: query.colorId,
    //   sizeId: query.sizeId,
    //   categoryId: query.categoryId,    
    label : query.label,
   // isFeatured : query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getLocationsFromSearchTerm;
