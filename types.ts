export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Images[]
};

export interface TourPackage {
  id: string;
  storeId: string;
  tourPackageName?: string;
  customerName?: string;
  numDaysNight?: string;
  locationId: string;
  period?: string;
  transport?: string;
  numAdults?: string;
  numChild5to12?: string;
  numChild0to5?: string;
  price?: string;
  pricePerAdult?: string;
  pricePerChildOrExtraBed?: string;
  pricePerChild5to12YearsNoBed?: string;
  pricePerChildwithSeatBelow5Years?: string;
  totalPrice?: string;
  inclusions?: string;
  exclusions?: string;
  paymentPolicy?: string;
  usefulTip?: string;
  cancellationPolicy?: string;
  airlineCancellationPolicy?: string;
  termsconditions?: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
  flightDetails: FlightDetails[];
  itineraries: Itinerary[];
  images: Images[];
  assignedTo?: string;
  assignedToMobileNumber?: string;
  assignedToEmail?: string;
}

export interface FlightDetails {
  id: string;
  date?: string;
  flightName?: string;
  flightNumber?: string;
  from?: string;
  to?: string;
  departureTime?: string;
  arrivalTime?: string;
  flightDuration?: string;
  tourPackageId?: string;
}

export interface Itinerary {
  id: string;
  storeId: string;
  locationId: string;
  tourPackageId?: string;
  itineraryTitle?: string;
  itineraryDescription?: string;
  dayNumber?: number;
  days?: string;
  hotelId?: string;
  numberofRooms?: string;
  roomCategory?: string;
  mealsIncluded?: string;
  createdAt: Date;
  updatedAt: Date;
  activities: Activity[];
}

export interface Activity {
  id: string;
  storeId: string;
  locationId: string;
  itineraryId?: string;
  activityTitle?: string;
  activityDescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Images {
  id: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  // Relations fields are omitted for brevity
}


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
  images: Images[]
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
  images: Images[]
};



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
