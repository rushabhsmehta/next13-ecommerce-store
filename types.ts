export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[]
};

export interface TourPackage {
  id: string;
  storeId : string;
  locationId : string;
//category: Category;
  tourPackageName: string;
  price: string;
  isFeatured: boolean;
 // size: Size;
 // color: Color;
  images: Image[]
};

export interface TourPackageQuery {
  id: string;
  storeId : string;
  locationId : string;
//category: Category;
  tourPackageQueryName: string;
  price: string;
  isFeatured: boolean;
 // size: Size;
 // color: Color;
  images: Image[]
};

export interface Location {
  id: string;
  storeId : string;
 // locationId : string;
//category: Category;
  label : string;

  imageUrl : string;
  searchLTerm : string;
 // price: string;
 // isFeatured: boolean;
 // size: Size;
 // color: Color;
  images: Image[]
};

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};

export interface Size {
  id: string;
  name: string;
  value: string;
};

export interface Color {
  id: string;
  name: string;
  value: string;
};
