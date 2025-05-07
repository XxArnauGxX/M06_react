import { planets } from "./planets";
import Link from "next/link";

export default function Planets() {
  return (
    <>
      <h1>Planets Gallery</h1>
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            <Link href={`/S06/planets/${planet.name.toLowerCase()}`}>
              {planet.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
