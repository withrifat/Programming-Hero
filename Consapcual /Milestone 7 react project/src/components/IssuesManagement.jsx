import { use, useState } from "react";
import Toggles_Btns from "./Toggles_Btns";
import CountBox from "./CountBox";
import Container from "./Container";
import Card from "./Card";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);

  const filteredData =
    toggleStatus == "All"
      ? data
      : data.filter((element) => element.status == toggleStatus);

  // console.log({ toggleStatus, data });
  console.log(toggleStatus, filteredData);
  return (
    <div>
      {/* Box */}

      <CountBox data={data}/>

      {/* Toggle buttons */}
      <Toggles_Btns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      />

      {/* Cards */}
      <Container>
        {filteredData.length == 0 ? (
          <h2 className="font-bold text-[35px] text-center mb-9 text-purple-500 text-shadow-2xs">
            No Data
          </h2>
        ) : (
          <div className="grid grid-cols-3 gap-[12px] mb-6">
            {filteredData.map((issue, ind) => {
              // console.log(issue);
              return (
                <Card key={ind} issue={issue} data={data} setData={setData} />
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default IssuesManagement;
