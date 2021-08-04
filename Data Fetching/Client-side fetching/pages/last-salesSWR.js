import { useEffect, useState } from "react";
import useSWR from "swr";

export default function lastSalesPage() {
  const [sales, setSales] = useState();
  const { data, error } = useSWR("url/sales.json");

  useEffect(() => {
    if (data) {
      const transformedData = [];

      for (const key in data) {
        transformedData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedData);
    }
  }, [data]);

  if (!error) {
    return <p>Failed to load data</p>;
  }

  if (!data || !sales) {
    return <p>Loading</p>;
  }

  return (
    <ul>
      {sales.map((sales) => {
        <li key={sales.id}>
          {sales.username}- % {sales.volume}
        </li>;
      })}
    </ul>
  );
}
