import { TourPackage } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/tourPackages`;

const gettourPackage = async (id : string): Promise<TourPackage> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default gettourPackage;
