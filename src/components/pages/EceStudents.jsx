import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const EceStudents = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/ECE")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const { data } = useQuery("data", () => {
    return axios.get("http://localhost:3000/ECE");
  });

  console.log(data?.data);

  return (
    <div className=" flex justify-center min-h-screen bg-base-200">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">
          <div className="flex flex-col gap-3">
            {data?.data?.map((obj) => (
              <Link key={`${obj.id}-${obj.name}`} to={`/ECE/${obj.id}`}>
                {obj.name}
              </Link>
            ))}
          </div>
        </h1>
      </div>
    </div>
  );
};

export default EceStudents;
