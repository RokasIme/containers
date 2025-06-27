import { useEffect, useState } from "react";
import { PageTitle } from "../components/page-title/PageTitle";
import { ContainersList } from "../components/categories/ContainerList";

export function PageContainers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5417/api/containers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setData(() => data.list);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <PageTitle title="All containers" />
      <ContainersList data={data} />
    </div>
  );
}
