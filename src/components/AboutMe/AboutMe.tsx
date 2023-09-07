import "./AboutMe.css";
import PhotoHeader from "../PhotoHeader/PhotoHeader";
import { useEffect } from "react";

function AboutMe() {
  useEffect(() => {
    document.title = "Gabinet Terapii Psychologicznej Lorem Ipsum | O Mnie";
  }, []);

  return (
    <section className="about-me-page">
      <PhotoHeader title="O mnie" imageName="background.jpg" />
      <article className="about-me">
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            laboriosam temporibus consequuntur ab, consectetur maxime quis enim
            itaque fugit. Possimus labore adipisci tenetur amet natus sequi
            ipsum nulla veritatis corrupti, odio sit ut corporis excepturi dolor
            iusto placeat nisi exercitationem, repellendus itaque eligendi porro
            vel.
          </p>
        </div>
        <img src="images/iwonas_photo.jpg" alt="Lorem Ipsum" loading="lazy" />
        <div className="text">
          <p>
            Repudiandae quas dolor recusandae officia, saepe suscipit minima a
            necessitatibus facere excepturi vero et hic ipsam commodi pariatur
            ullam, dicta quo nisi velit quod iusto nam ex? Sint nam in
            blanditiis, perferendis quia repellat provident, quaerat vero rem
            cupiditate pariatur at aut a optio harum!
          </p>
          <p>
            Quia explicabo tenetur adipisci praesentium? Labore aliquid tenetur
            autem, natus maiores saepe nam nostrum iusto quia possimus voluptate
            ut! Aspernatur alias quidem voluptate excepturi non. Libero fugit
            minus dolorem a dicta saepe voluptas? Laborum tempore harum odio
            optio aperiam minima nam distinctio, veniam quam quo.
          </p>
          <p>
            Esse ipsam iure nostrum iusto consectetur libero omnis
            reprehenderit! In reprehenderit magnam sapiente exercitationem illum
            dolores, hic vitae fugit quos illo nulla fuga modi accusantium
            aliquam autem quam ad voluptatibus. Aliquam voluptatem fuga aut
            expedita ipsa aperiam, earum, placeat aliquid quibusdam laboriosam
            iure doloribus fugit.
          </p>
          <p>
            Velit itaque commodi cumque neque! Atque laborum ipsum saepe quod
            nostrum nesciunt cumque modi facere error non sapiente dicta, illo
            laboriosam dolorem. Facilis praesentium soluta expedita impedit
            laudantium. Consequatur deserunt suscipit iure, minus expedita
            perspiciatis sapiente quis officiis doloribus quas explicabo
            inventore tempora praesentium vero!
          </p>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
