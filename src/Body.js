import React from "react";
import dayjs from "dayjs";
function Body({ data }) {
  let localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);

  return (
    <div>
      <div className="row mx-0 px-0 justify-content-around">
        {data?.map((item) => {
          return (
            <div
              key={item?.Id}
              className="col-11 col-md-3 my-2 mx-2 px-0 border card p-3">
              <img
                src={`./images/${item?.Id}.jpg`}
                alt={item?.Id}
                style={{ width: "100%" }}
              />
              <h3>Full name : {item?.PFName}</h3>
              <p>Skill : {item?.SkillDesc}</p>
              <p>Value : $ {item?.Value}</p>
              <p>
                Upcoming match : {item?.UpComingMatchesList[0]?.CCode} vs {item?.UpComingMatchesList[0]?.VsCCode}
              </p>
              <p>
                Time :
                {dayjs(item?.UpComingMatchesList[0]?.MDate).format(
                  "DD-MM-YYYY hh:mm:ss A"
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
