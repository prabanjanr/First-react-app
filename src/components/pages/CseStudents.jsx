import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CseStudents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/CSE")
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className=" flex justify-center min-h-screen bg-base-200">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            <div className="flex flex-col gap-3">
              {data?.map((obj) => (
                <Link key={`${obj.id}-${obj.name}`} to={`/CSE/${obj.id}`}>
                  {obj.name}
                </Link>
              ))}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CseStudents;
