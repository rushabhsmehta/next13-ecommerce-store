import { Hotel } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/hotels`;

interface Query {
   locationId? : string;
//   categoryId?: string;
//   colorId?: string;
//   sizeId?: string;
//     isFeatured?: boolean;
//storeId : string;
}

const getHotels = async (query: Query): Promise<Hotel[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
    locationId : query.locationId,
    //   colorId: query.colorId,
    //   sizeId: query.sizeId,
    //   categoryId: query.categoryId,
   // storeId : query.storeId,
   // isFeatured : query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getHotels;
