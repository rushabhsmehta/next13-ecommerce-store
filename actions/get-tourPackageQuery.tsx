import { TourPackageQuery } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/tourPackages`;

const gettourPackageQuery = async (id: string): Promise<TourPackageQuery> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default gettourPackageQuery;
