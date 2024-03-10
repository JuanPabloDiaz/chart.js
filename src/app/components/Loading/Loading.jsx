import React from "react";

import { EosIconsLoading } from "../icons";

export const Loading = () => {
  return (
    <div className="bg-indigo-500 flex justify-center items-center text-white font-bold py-2 px-4 rounded">
      <EosIconsLoading className="mr-2 h-8 w-8" />
      <p>Loading Graph...</p>
    </div>
  );
};
