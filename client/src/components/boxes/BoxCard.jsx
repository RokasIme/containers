import { capitalize } from "../../lib/capitalize";

export function BoxCard({ data }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={"http://localhost:5417/img/" + data.image} className="photo card-img-top" style={{ height: 225 }} />
        <div className="card-body">
          <div className="card-text"> Box weight: {data.weight} kg. </div>
          <div className="card-text"> Item name: {capitalize(data.name)} </div>
          <div className="card-text"> {data.flammable === 1 ? "Flammable" : "Not flammable"} </div>
          <div className="card-text"> {data.perishable === 1 ? "Perishable" : "Not perishable"} </div>
        </div>
      </div>
    </div>
  );
}
