import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function MenuItems({ menuItem }) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="portfolis">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data" data-aos="zoom-in">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link2} target="blank">
                    {item.icon2}
                  </a>
                  <a href={item.link1} target="blank">
                    {item.icon1}
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
