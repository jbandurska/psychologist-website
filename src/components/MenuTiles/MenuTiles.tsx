import { Link } from "react-router-dom";
import "./MenuTiles.css";
import { BsFillPersonFill } from "react-icons/bs";
import { PiBrainFill } from "react-icons/pi";
import { IoMdPricetag } from "react-icons/io";
import { RiContactsBook2Fill } from "react-icons/ri";
import IntersectionWrapper from "../IntersectionWrapper/IntersectionWrapper";

export default function MenuTiles() {
  return (
    <IntersectionWrapper>
      <div className="menu-tiles">
        <ul>
          <li className="hidden">
            <Link to="o-mnie">
              <BsFillPersonFill />
              <span>O mnie</span>
            </Link>
          </li>
          <li className="hidden">
            <Link to="oferta">
              <PiBrainFill />
              <span>Oferta</span>
            </Link>
          </li>
          <li className="hidden">
            <Link to="cennik">
              <IoMdPricetag />
              <span>Cennik</span>
            </Link>
          </li>
          <li className="hidden">
            <Link to="kontakt">
              <RiContactsBook2Fill />
              <span>Kontakt</span>
            </Link>
          </li>
        </ul>
      </div>
    </IntersectionWrapper>
  );
}
