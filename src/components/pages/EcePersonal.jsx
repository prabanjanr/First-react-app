import React from "react";
import Card from "../UI/Card";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const EcePersonal = () => {
  const { id } = useParams();

  const { data } = useQuery("Ece=Personal", () => {
    return axios.get(`http://localhost:3000/ECE/${id}`);
  });
  console.log(data?.data);

  return (
    <div className="flex place-content-center">
      <Card name={data?.data?.name} id={id} age={data?.data?.age} />
    </div>
  );
};

export default EcePersonal;
