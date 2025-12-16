import React from 'react'
import { Search } from 'lucide-react'

function Searchbar() {
	return (
		<div className="flex items-center bg-white border border-gray-200 rounded-lg px-2 sm:px-3 md:px-4 py-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl w-full">
			<label htmlFor="admin-search" className="sr-only">
				Search
			</label>
			<Search className="mr-2 flex-none text-gray-400 w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
			<input
				id="admin-search"
				type="search"
				aria-label="Search"
				placeholder="Search..."
				className="flex-1 bg-transparent text-xs sm:text-sm md:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-60 rounded-sm"
			/>
		</div>
	)
}

export default Searchbar
