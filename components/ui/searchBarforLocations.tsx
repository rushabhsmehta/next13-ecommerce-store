'use client'
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevent the default form submit behavior
    router.push(`/searchLocations/${encodeURIComponent(searchTerm)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center w-full h-full px-4"> {/* Form element with onSubmit */}
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-gray-500" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state on input change
          className="w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 shadow-md" // Adjusted classes for beautification
          placeholder="Search"
        />
        <button type="submit" className="hidden">Search</button> {/* Hidden submit button for form */}
      </div>
    </form>
  );
}
