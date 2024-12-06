'use client'

import { Skeleton } from "@/components/ui/skeleton"

const SkeletonComponent = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-5/6 mb-8" />
            <div className="space-x-4">
              <Skeleton className="inline-block w-32 h-10" />
              <Skeleton className="inline-block w-32 h-10" />
            </div>
          </div>
          <div className="md:w-1/2">
            <Skeleton className="w-full h-64" />
          </div>
        </div>
      </div>

      <div className="container mx-auto my-20">
        <Skeleton className="h-8 w-1/2 mx-auto mb-10" />
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-4">
            <Skeleton className="w-full h-64" />
          </div>
          <div className="md:w-1/3 pl-4 mt-8 md:mt-0">
            <Skeleton className="w-full h-64" />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-1/2 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="w-full md:w-1/3 text-center mb-8 md:mb-0">
                <Skeleton className="h-12 w-1/2 mx-auto mb-2" />
                <Skeleton className="h-6 w-3/4 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-1/2 mx-auto mb-8" />
          <Skeleton className="h-4 w-3/4 mx-auto mb-12" />
          {[...Array(2)].map((_, index) => (
            <div key={index} className={`mb-16 ${index % 2 === 0 ? '' : 'bg-gray-100'}`}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-8">
                  <Skeleton className="h-12 w-1/2 mb-6" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-6" />
                  <Skeleton className="h-10 w-1/3" />
                </div>
                <div className="md:w-1/2 p-8">
                  <Skeleton className="w-full h-64" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-1/2 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="rounded-lg shadow-lg p-6 bg-white">
                <Skeleton className="h-6 w-3/4 mb-4" />
                <Skeleton className="h-10 w-1/2 mt-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SkeletonComponent

