import "./PriceList.css";
import PhotoHeader from "../PhotoHeader/PhotoHeader";
import { useEffect } from "react";

function PriceList() {
  useEffect(() => {
    document.title = "Gabinet Terapii Psychologicznej Lorem Ipsum | Cennik";
  }, []);

  return (
    <section className="price-list-page">
      <PhotoHeader title="Cennik" imageName="background.jpg" />
      <article className="price-list">
        <ul className="list">
          <li className="header list-element">
            <span>Spotkanie</span>
            <span>Czas trwania</span>
            <span>Częstotliwość</span>
            <span>Cena</span>
          </li>
          <li className="list-element">
            <span>Konsultacja psychologiczna</span>
            <span>60 min</span>
            <span>Raz w tygodniu</span>
            <span>100 zł</span>
          </li>
          <li className="list-element">
            <span>Lorem, ipsum.</span>
            <span>Quaerat, id.</span>
            <span>Quam, modi.</span>
            <span>Ea, soluta.</span>
          </li>
          <li className="list-element">
            <span>Lorem, ipsum.</span>
            <span>Dolorum, ratione!</span>
            <span>Neque, pariatur.</span>
            <span>Quasi, nesciunt.</span>
          </li>
          <li className="list-element">
            <span>Lorem, ipsum.</span>
            <span>Quia, consectetur.</span>
            <span>Odio, quasi.</span>
            <span>Labore, vitae?</span>
          </li>
          <li className="list-element">
            <span>Lorem, ipsum.</span>
            <span>Impedit, officiis.</span>
            <span>Odit, excepturi.</span>
            <span>Voluptas, sit?</span>
          </li>
          <li className="list-element">
            <span>Lorem, ipsum.</span>
            <span>Qui, explicabo.</span>
            <span>Qui, doloribus?</span>
            <span>Labore, architecto.</span>
          </li>
          <li className="list-element">
            <span>Lorem, ipsum.</span>
            <span>Minus, doloribus.</span>
            <span>Eaque, dicta.</span>
            <span>Inventore, aliquid!</span>
          </li>
        </ul>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          dolor nostrum, earum dolorem quibusdam esse odit accusantium maxime
          sint quia ullam ipsa voluptate consequuntur totam placeat ex quam
          corporis sed tempora nisi consequatur in exercitationem incidunt.
          Voluptatem, animi, aliquam architecto, ipsum ipsa quisquam soluta
          explicabo repellendus perferendis excepturi maxime corporis.
        </div>
      </article>
    </section>
  );
}

export default PriceList;
