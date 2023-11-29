import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
};

const options = {
  method: "GET",
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {
    query: "Python developer in Texas, USA",
    page: "1",
    num_pages: "1",
  },
  headers: {
    "X-RapidAPI-Key": "283869886bmshd67decf94add18dp1de9a3jsn1855be1e2701",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};
