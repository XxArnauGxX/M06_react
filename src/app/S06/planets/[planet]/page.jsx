import { planets } from "../planets";

export default async function PlanetDetail({ params }) {
  const planet = planets.find((p) => p.name.toLowerCase() === params.planet);

  if (!planet) return <div>Planet not found</div>;

  return (
    <div>
      <h1>{planet.name}</h1>
      <p>{planet.description}</p>
    </div>
  );
}
