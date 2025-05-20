import { useState } from "react";
import { createRoot } from "react-dom/client";

import FolderStructureApp from "../../pages/en/folder-structure-app.mdx";
import FolderStructurePages from "../../pages/en/folder-structure-pages.mdx";

export default function Toggle() {
  const [isAppRouterSelected, setIsAppRouterSelected] = useState(true);
  console.log("what", FolderStructureApp);
  return (
    <>
      <div className="flex w-full justify-center gap-10 py-5">
        <button
          className={`${isAppRouterSelected ? "bg-primary text-white" : "bg-transparent"} inline-flex cursor-pointer items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-500 hover:no-underline md:px-5 md:text-base lg:px-4 lg:py-3`}
          onClick={() => setIsAppRouterSelected(true)}
        >
          App Router
        </button>
        <button
          className={`${!isAppRouterSelected ? "bg-primary text-white" : "bg-transparent"} inline-flex cursor-pointer items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-500 hover:no-underline md:px-5 md:text-base lg:px-4 lg:py-3`}
          onClick={() => setIsAppRouterSelected(false)}
        >
          {" "}
          Pages Router
        </button>
      </div>

      <div>
        {isAppRouterSelected ? (
          <FolderStructureApp />
        ) : (
          <FolderStructurePages />
        )}
      </div>
    </>
  );
}
