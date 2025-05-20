import { useState } from "react";

interface FolderStructureApp {
  currentState: string;
  setCurrentState: (state: string) => void;
}

export default function ToggleButton({
  currentState,
  setCurrentState,
}: FolderStructureApp) {
  console.log("Selected:", currentState);
  return (
    <>
      <div className="flex w-full justify-center gap-10 py-5">
        <button
          className={`${currentState ? "bg-primary text-white" : "bg-transparent"} inline-flex cursor-pointer items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-500 hover:no-underline md:px-5 md:text-base lg:px-4 lg:py-3`}
          onClick={() => setCurrentState("app")}
        >
          App Router
        </button>
        <button
          className={`${!currentState ? "bg-primary text-white" : "bg-transparent"} inline-flex cursor-pointer items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-500 hover:no-underline md:px-5 md:text-base lg:px-4 lg:py-3`}
          onClick={() => setCurrentState("pages")}
        >
          {" "}
          Pages Router
        </button>
      </div>
    </>
  );
}
