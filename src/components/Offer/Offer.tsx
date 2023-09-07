import "./Offer.css";
import PhotoHeader from "../PhotoHeader/PhotoHeader";
import { useEffect } from "react";

function Offer() {
  useEffect(() => {
    document.title = "Gabinet Terapii Psychologicznej  Lorem Ipsum | Oferta";
  }, []);

  return (
    <section className="offer-page">
      <PhotoHeader title="Oferta" imageName="background.jpg" />
      <article className="offer">
        <div className="text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
            inventore animi natus facilis accusantium consequatur rerum illum
            fuga vero at ipsa eius laudantium assumenda delectus in, adipisci
            aspernatur. Est voluptate expedita quod rerum rem. Cum fuga minus
            est illum, tempora incidunt reiciendis aliquid adipisci labore modi
            ab porro eligendi neque!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
            alias?
          </p>
          <ul className="main-ul">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Doloribus tempore unde magnam necessitatibus.</li>
            <li>Aperiam earum distinctio pariatur quasi!</li>
            <li>Odio quisquam nobis obcaecati consequatur?</li>
            <li>Nesciunt laudantium harum sit hic!</li>
            <li>Dolorum quidem explicabo provident nobis.</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas.
          </p>
          <ul>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Facilis voluptatibus asperiores, eligendi molestias maxime
              provident labore!
            </li>
            <li>
              Perferendis dolor exercitationem laudantium excepturi aspernatur
              eos nisi!
            </li>
            <li>Cupiditate, quod eum iure quae facere recusandae pariatur.</li>
          </ul>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            nulla aperiam doloribus quos ipsam atque minima nostrum, enim odit
            harum, id deleniti distinctio adipisci aut iusto eos inventore nam
            magni possimus. Quos dignissimos obcaecati quasi, officia expedita
            cupiditate, mollitia recusandae in quas rerum temporibus eveniet
            neque repudiandae, molestias modi fuga!
          </p>
        </div>
      </article>
    </section>
  );
}

export default Offer;
