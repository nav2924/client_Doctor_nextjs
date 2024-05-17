"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image"; // Import Image from next/image

function CategorySearch() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };
  return (
    <div className="mb-10 items-center px-5 flex flex-col mt-10">
      <h2 className="font-bold text-4xl tracking-wide mt-2">
        Search <span className="text-primary">Doctors</span>
      </h2>

      <h2 className="text-gray-500 text-xl">
        Search Your Doctor and Book Appointment
      </h2>
      <div className="flex w-full m-4 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>
      </div>
      <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-3">
        {categoryList.map(
          (item, index) =>
            index < 3 && (
              <div
                key={index}
                className="flex flex-col text-center items-center p-5 bg-blue-100 m-2 rounded-lg gap-2 hover:scale-110 transition-all ease-in-out cursor-pointer"
              >
                <Image
                  src={item.attributes?.Icon?.data.attributes?.url}
                  alt="icon"
                  width={40}
                  height={40}
                />
                <label className="text-primary text-sm">
                  {item.attributes?.Name}
                </label>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default CategorySearch;


