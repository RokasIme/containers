import { useParams } from "react-router";
import { PageTitle } from "../components/page-title/PageTitle";
import { useEffect, useState } from "react";
import { BoxesList } from "../components/boxes/BoxesList";

export function PageContainerInner() {
  const params = useParams();
  const [containerData, setContainerData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5417/api/containers/" + params.id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setContainerData(() => data.list);
        }
      })
      .catch(console.error);
  }, [params.id]);

  return (
    <div className="container">
      <PageTitle title={"Container Nr.: " + params.id} />
      <BoxesList data={containerData} />
    </div>
  );
}
