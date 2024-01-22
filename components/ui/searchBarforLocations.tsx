import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4"> {/* Added px-0.5 here */}
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-gray-500" />
        </div>
        <input
          type="text"
          className="w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 shadow-md" // Adjusted classes for beautification
          placeholder="Search"
        />
      </div>
    </div>
  );
}
