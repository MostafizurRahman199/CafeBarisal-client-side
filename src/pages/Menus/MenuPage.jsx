// import React from 'react'
// import Cover from '../../components/Cover/Cover'
// import coverImage from "../../../public/menu/banner3.jpg"
// import Menu from '../../components/Home/Menu/Menu'
// import SharedMenu from '../../components/SharedMenu/SharedMenu'
// import image1 from "../../../public/menu/dessert-bg.jpeg"
// import image2 from "../../../public/menu/pizza-bg.jpg"
// import image3 from "../../../public/menu/salad-bg.jpg"
// import image4 from "../../../public/menu/soup-bg.jpg"
// import SectionHeading from '../../components/SectionHeading/SectionHeading'
// import SharedButton from '../../components/SharedButton/SharedButton'
// import useMenu from '../../hooks/useMenu'

// const MenuPage = () => {


//   const {menuData} = useMenu();
//   // console.log(menuData);


//   const soup = menuData.filter((item)=>item.category === "soup");
//   const salad = menuData.filter((item)=>item.category === "salad");
//   const pizza = menuData.filter((item)=>item.category === "pizza");
//   const dessert = menuData.filter((item)=>item.category === "dessert");
//   const offered = menuData.filter((item)=>item.category === "offered");
//   const drinks = menuData.filter((item)=>item.category === "drinks");



//   const pizzaImage  = "https://thumbs.dreamstime.com/z/variety-pizzas-sauces-rustic-background-variety-pizzas-sauces-107062091.jpg?ct=jpeg"

//   const desertImage = "https://realfood.tesco.com/media/images/1400x919-TESCO-Q3-2024-FestiveMenuHelper-BlackForestParfait-c10c25b2-09a4-4675-abf0-e12ea3eeadbb-0-1400x919.jpg";

//   const soupImage  = "https://foodie.sysco.com/wp-content/uploads/2021/10/Variety-of-Soups_AS_101859650_PR_214630-1-scaled.jpeg";

//   const saladImage = "https://www.aspca.org/sites/default/files/saladwinsbanner.jpg";

//   // const saladImage = "https://www.shutterstock.com/image-photo/salad-tomatoes-cucumber-red-onions-260nw-1086358910.jpg";


//   const drinkImage = "https://static.vecteezy.com/system/resources/previews/035/776/834/non_2x/ai-generated-drinks-making-a-toast-at-a-festivity-party-free-photo.jpg";



//   return (
//     <div className='min-h-screen'>
            
//       <Cover image={coverImage} title1={"OUR MENU"} title2={"Would you like to try a dish?"}></Cover>
//        <SectionHeading title1={"---Don't miss---"} title2={"TODAY'S OFFER"}></SectionHeading>
//        <SharedMenu menuItems={offered}></SharedMenu>
//        <SharedButton title='ORDER YOUR FAVOURITE FOOD'></SharedButton>
    
//       <Cover image={desertImage} title1={"DESSERTS"} title2={"Sweeten your moments with our delightful desserts."}></Cover>
//       <SharedMenu menuItems={dessert}></SharedMenu>
//       <SharedButton title='ORDER YOUR FAVOURITE FOOD' path='Desserts'></SharedButton>

//       <Cover image={pizzaImage} title1={"PIZZA"} title2={"Savor every slice of our mouthwatering pizzas."}></Cover>
//       <SharedMenu menuItems={pizza}></SharedMenu>
//       <SharedButton title='ORDER YOUR FAVOURITE FOOD' path='Pizza'></SharedButton>

//       <Cover image={soupImage} title1={"SOUPS"} title2={"Warm your soul with our comforting soups."}></Cover>
//       <SharedMenu menuItems={soup}></SharedMenu>
//       <SharedButton title='ORDER YOUR FAVOURITE FOOD' path='Soups'></SharedButton>


//       <Cover image={saladImage} title1={"SALADS"} title2={"Fresh, flavorful, and vibrant salads to energize your day."}></Cover>
//       <SharedMenu menuItems={salad}></SharedMenu>
//       <SharedButton title='ORDER YOUR FAVOURITE FOOD' path='Salad'></SharedButton>


//       <Cover image={drinkImage} title1={"DRINKS"} title2={"Fresh, flavorful, and vibrant salads to energize your day."}></Cover>
//       <SharedMenu menuItems={drinks}></SharedMenu>
//       <SharedButton title='ORDER YOUR FAVOURITE FOOD' path='Drinks'></SharedButton>

//     </div>
//   )
// }

// export default MenuPage




import React from 'react';
import Cover from '../../components/Cover/Cover';
import Menu from '../../components/Home/Menu/Menu';
import SharedMenu from '../../components/SharedMenu/SharedMenu';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import SharedButton from '../../components/SharedButton/SharedButton';
import useMenu from '../../hooks/useMenu';
import ApiComponent from '../../API/ApiComponent';
import { useQuery } from '@tanstack/react-query';
import Loading from "../../components/Loading/Loading"
import ErrorPage from '../ErrorPage';

const MENU_IMAGES = {
  pizza: "https://thumbs.dreamstime.com/z/variety-pizzas-sauces-rustic-background-variety-pizzas-sauces-107062091.jpg?ct=jpeg",
  dessert: "https://realfood.tesco.com/media/images/1400x919-TESCO-Q3-2024-FestiveMenuHelper-BlackForestParfait-c10c25b2-09a4-4675-abf0-e12ea3eeadbb-0-1400x919.jpg",
  soup: "https://foodie.sysco.com/wp-content/uploads/2021/10/Variety-of-Soups_AS_101859650_PR_214630-1-scaled.jpeg",
  salad: "https://www.aspca.org/sites/default/files/saladwinsbanner.jpg",
  drinks: "https://static.vecteezy.com/system/resources/previews/035/776/834/non_2x/ai-generated-drinks-making-a-toast-at-a-festivity-party-free-photo.jpg",
};

const MenuPage = () => {
  // const { menuData } = useMenu();
  const {getMenuData} = ApiComponent();


  const {data: menuData, isLoading, isError, error} = useQuery({
    queryKey: ['menuData'],
    queryFn: getMenuData,
  })

  // console.log(menuData);

  if(isLoading) return <Loading></Loading>
  if(isError) return <ErrorPage></ErrorPage>

  // Group menu items by category
  const categories = menuData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const CategorySection = ({ image, title1, title2, menuItems, path }) => (
    <>
      <Cover image={image} title1={title1} title2={title2}></Cover>
      <SharedMenu menuItems={menuItems}></SharedMenu>
      <SharedButton title="ORDER YOUR FAVOURITE FOOD" path={path}></SharedButton>
    </>
  );

  return (
    <div className="min-h-screen">
      <Cover
        image="../../../public/menu/banner3.jpg"
        title1="OUR MENU"
        title2="Would you like to try a dish?"
      ></Cover>
      <SectionHeading title1="---Don't miss---" title2="TODAY'S OFFER"></SectionHeading>
      <SharedMenu menuItems={categories.offered}></SharedMenu>
      <SharedButton title="ORDER YOUR FAVOURITE FOOD"></SharedButton>

      <CategorySection
        image={MENU_IMAGES.dessert}
        title1="DESSERTS"
        title2="Sweeten your moments with our delightful desserts."
        menuItems={categories.dessert}
        path="Desserts"
      />
      <CategorySection
        image={MENU_IMAGES.pizza}
        title1="PIZZA"
        title2="Savor every slice of our mouthwatering pizzas."
        menuItems={categories.pizza}
        path="Pizza"
      />
      <CategorySection
        image={MENU_IMAGES.soup}
        title1="SOUPS"
        title2="Warm your soul with our comforting soups."
        menuItems={categories.soup}
        path="Soups"
      />
      <CategorySection
        image={MENU_IMAGES.salad}
        title1="SALADS"
        title2="Fresh, flavorful, and vibrant salads to energize your day."
        menuItems={categories.salad}
        path="Salad"
      />
      <CategorySection
        image={MENU_IMAGES.drinks}
        title1="DRINKS"
        title2="Cheers to our refreshing drink options."
        menuItems={categories.drinks}
        path="Drinks"
      />
    </div>
  );
};

export default MenuPage;
