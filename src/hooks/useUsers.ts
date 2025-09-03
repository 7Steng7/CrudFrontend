import { useState, useEffect } from "react";
import { getPaginatedUsers } from "../services/api.js";
import { User } from "../types/types.js";

export function useUsers() {
  const [ firstData, setFirstData ] = useState<User[]>([]);
  const [ actualPage , setActualPage ] = useState(0);
  const [ totalPages , setTotalPages ] = useState(0);

  const getData = async () => {
    try {
      const dataReady = await getPaginatedUsers({ page: actualPage, limit: 10 });
      setFirstData(dataReady.data);
      const totalPagesFromData = Math.ceil(dataReady.total / 10);
      setTotalPages(totalPagesFromData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [actualPage]);

  const pageBack = () => {
      if (actualPage > 0) {
        setActualPage(actualPage - 1);
      }
    };
  const pageNext = () => {
    if (actualPage < totalPages - 1) {
      setActualPage(actualPage + 1);
    }
  };
     
     return { firstData, getData, pageBack, pageNext, actualPage, totalPages };
}