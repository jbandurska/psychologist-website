import "./HomePage.css";
import MenuTiles from "../MenuTiles/MenuTiles";
import PhotoHeader from "../PhotoHeader/PhotoHeader";
import StaticPhoto from "../StaticPhoto/StaticPhoto";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    document.title = "Gabinet Terapii Psychologicznej i Lorem Ipsum";
  }, []);

  return (
    <section className="home-page">
      <PhotoHeader
        title="Lorem Ipsum"
        subtitle="Psycholog"
        imageName="background.jpg"
      />
      <MenuTiles />
      <StaticPhoto />
      <article className="paragraph">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          sunt facilis accusantium consequuntur autem maxime maiores pariatur
          quis, nulla mollitia iusto molestiae labore est explicabo cumque sequi
          a molestias ab sit debitis magni soluta! Et odio illo exercitationem
          voluptatem, deleniti id quod autem! Ducimus odit ut quos. Quasi vitae
        </p>
        <p>
          ex blanditiis deleniti? Enim ipsam alias impedit dolore vero natus,
          totam iste eum incidunt. Quo sed veniam iusto excepturi sint ad
          dolorum, fuga quisquam reiciendis quidem reprehenderit quos
          exercitationem soluta quibusdam officiis qui maxime accusantium vitae
          accusamus non magni saepe debitis numquam? Harum ea assumenda id qui
          laborum earum praesentium accusantium.
        </p>
      </article>
    </section>
  );
}

export default HomePage;
