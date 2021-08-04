import { useEffect, useState } from "react";

export default function lastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("url/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = [];

        for (const key in data) {
          transformedData.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales(transformedData);
        setIsLoading(false);
      }); //here i have used firebase url so i need to use [databasename].json as request
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!sales) {
    return <p>Failed to load data</p>;
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
