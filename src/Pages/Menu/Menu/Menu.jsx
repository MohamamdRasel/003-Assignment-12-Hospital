import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/Images/image-06.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title> Modern | Menu </title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
