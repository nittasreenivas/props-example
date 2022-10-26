import React from "react";
import Imagecard from "./ImageCard";
import "./styles.css";
const Pokemons = [
  {
    id: "1",
    title: "Arceus",
    description:
      "Arceus is a somewhat unique Pokemon in that it is able to change its elemental type through the use of special plates and this makes it incredibly versatile in battle. Its 720 base stat total is also perfectly distributed between the six stat categories, so the Pokemon has no major weaknesses either. This does mean that it can sometimes lack the firepower needed to break down tankier foes though. Nonetheless, when it comes to raw stats, no Pokemon boasts more than Arceus.",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/03/Pokemon-TCG-Arceus-Card-Art-2.jpg?q=50&fit=crop&w=740&dpr=1.5"
  },
  {
    id: "2",
    title: "ZamaZanta",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/11/pokemon-shield-zamazenta-type-form-leak.jpg?q=50&fit=crop&w=740&dpr=1.5",
    description:
      "Much like Zacian, Zamazenta starts life with a base stat total of 670 which can be increased to 720 with the aid of a held item. Rather than a Rusted Sword, however, Zamazenta instead needs to be given a Rusted Shield which will lead to the Pokemon transforming into its Crowned Shield form."
  },
  {
    id: "2",
    title: "Zacian",
    description:
      "In its Hero of Many Battles form, Zacian is actually a little weaker than quite a few of its Legendary peers. While holding a Rusted Sword though, its base stat total is boosted by 50 points, bringing it up to an impressive 720. In this form, it finds itself locked in a three-way tie for the title of the series' most powerful Pokemon.",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/06/Pokemon-Sword-Shield-Legendary-Zacian.jpg?q=50&fit=crop&w=740&dpr=1.5"
  },
  {
    id: "4",
    title: "Zygarde",
    description:
      " Zygarde was really wasn't anything to write home about. With Sun & Moon came the addition of the Pokemon's Complete form, however, and it was catapulted up the pecking order of the series' most powerful Pokemon of all time.",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/01/Pokemon-TCG-Zygarde-Card-Art-2.jpg?q=50&fit=crop&w=740&dpr=1.5"
  },
  {
    id: "5",
    title: "Kyurem",
    description:
      "The innovative fusion mechanic introduced in the fifth generation of Pokemon games is one that has not been utilized nearly as much as it should have been in subsequent games. It did, however, lead to the introduction of Black Kyurem and White Kyurem.",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/pokemon-black-white-2-kyurem-fusion-art.jpg?q=50&fit=crop&w=740&dpr=1.5"
  },
  {
    id: "6",
    title: "Eternatus",
    description:
      " is an incredibly powerful Pokemon with a base stat total of 690. It may not be the strongest in this regard, but it's perhaps worth noting that there is only one other Pokemon that can reach a higher total without the use of an item or a fusion technique. Besides, this is only the tip of the iceberg.",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/03/Eternatus-Captured.jpg?q=50&fit=crop&w=740&dpr=1.5"
  },
  {
    id: "7",
    title: "Rayquaza",
    description:
      "Rayquaza might not be the fastest Pokemon out there, but its 150 physical and special attack stats are right up there with the very best. They account for almost half of the Pokemon's 680 base stat total; which rises to an eye-watering 780 when the Pokemon Mega Evolves.",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/03/Pokemon-TCG-Rayquaza-Card-Art-2.jpg?q=50&fit=crop&w=740&dpr=1.5"
  },
  {
    id: "8",
    title: "Mewtwo",
    description:
      "Mewtwo is considered to be the most powerful Pokemon obtainable in the series, at least when it comes to Mega Evolutions, anyway. By default, they each have base stat totals of 680, but in their powered-up forms, this rises to an impressive 780.",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/Pokemon-TCG-Mewtwo-Card-Art.jpg?q=50&fit=crop&w=740&dpr=1.5"
  },
  {
    id: "9",
    title: "Ho-oh",
    description:
      "Ho-Oh rocks a base stat total of 680. It excels in the special defense department, although also has decent numbers in the attack and special attack categories as well. It shares its design with a real-world mythical creature too, which is a pretty cool – albeit, somewhat irrelevant – touch.",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/01/pokemon-go-ho-oh.jpg?q=50&fit=crop&w=740&dpr=1.5"
  },
  {
    id: "10",
    title: "Giratina",
    description:
      "Whether in its Origin or Altered form, Giratina boasts an impressive base stat total of 680. It's actually one of 16 Legendary Pokemon that does so, although it is arguably one of the more useful of the bunch thanks to its impressive versatility in battle.",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/11/giratina-m18-pokemon-movie-1.jpg?q=50&fit=crop&w=740&dpr=1.5"
  }
];
export default function App() {
  return (
    <div className="App">
      {/* <h1> Hello </h1> */}
      <div className="poki-container">
        {Pokemons.map((poki) => {
          const { title, description, image } = poki;
          return (
            <div key={poki.id}>
              <Imagecard
                title={title}
                description={description}
                image={image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
