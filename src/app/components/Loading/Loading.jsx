import { ReloadIcon } from "@radix-ui/react-icons";

export const Loading = () => {
  return (
    <div className="bg-indigo-500 flex justify-center items-center text-white font-bold py-2 px-4 rounded">
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      <p>Loading...</p>
    </div>
  );
};
