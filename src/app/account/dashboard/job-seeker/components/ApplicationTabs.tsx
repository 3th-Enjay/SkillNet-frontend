import React from "react";
import ApplicationTabBox from "./ApplicationTabBox";
import AllFilters from "./SideAllFilters";


const ApplicationTab = () => {
  return ( <div className="mt-4 flex justify-between">
    <ApplicationTabBox/>
    <AllFilters/>
  </div>
  );
};

export default ApplicationTab;
