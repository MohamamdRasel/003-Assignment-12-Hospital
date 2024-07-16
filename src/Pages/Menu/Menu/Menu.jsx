import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/Images/download (8).jpg';
import dessertImg from '../../../assets/Images/dessert-01.jpg';
import pizzaImg from '../../../assets/Images/pizza-01.jpg';
import soupImg from '../../../assets/Images/soup-01.jpg';
import saladImg from '../../../assets/Images/salad-01.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert');
  const pizza = menu.filter(item => item.category === 'pizza');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title>Food Restaurant || Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      {/* Main Cover*/}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
      {/*Offered Menu items*/}
      <MenuCategory items={offered}></MenuCategory>
      {/* Desert Menu Items */}
      <MenuCategory  items={desserts}   title="Dessert"    img={dessertImg}  ></MenuCategory>
      {/* Pizza Menu Items */}
      <MenuCategory  items={pizza}   title="Pizza"    img={pizzaImg}  ></MenuCategory>
      {/* Soup Menu Items */}
      <MenuCategory  items={soup}   title="Soup"    img={soupImg}  ></MenuCategory>
      {/* Salad Menu Items */}
      <MenuCategory  items={salad}   title="Salad"    img={saladImg}  ></MenuCategory>
      
    </div>
  );
};

export default Menu;
