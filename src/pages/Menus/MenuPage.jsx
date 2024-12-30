import React from 'react'
import Cover from '../../components/Cover/Cover'
import coverImage from "../../../public/menu/banner3.jpg"
import Menu from '../../components/Home/Menu/Menu'
import SharedMenu from '../../components/SharedMenu/SharedMenu'
import image1 from "../../../public/menu/dessert-bg.jpeg"
import image2 from "../../../public/menu/pizza-bg.jpg"
import image3 from "../../../public/menu/salad-bg.jpg"
import image4 from "../../../public/menu/soup-bg.jpg"
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import SharedButton from '../../components/SharedButton/SharedButton'

const MenuPage = () => {

  const pizzaImage  = "https://thumbs.dreamstime.com/z/variety-pizzas-sauces-rustic-background-variety-pizzas-sauces-107062091.jpg?ct=jpeg"

  const desertImage = "https://realfood.tesco.com/media/images/1400x919-TESCO-Q3-2024-FestiveMenuHelper-BlackForestParfait-c10c25b2-09a4-4675-abf0-e12ea3eeadbb-0-1400x919.jpg";

  const soupImage  = "https://foodie.sysco.com/wp-content/uploads/2021/10/Variety-of-Soups_AS_101859650_PR_214630-1-scaled.jpeg";

  const menuItems = [
    { name: "Roast Duck Breast", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce", image:  image1 },
    { name: "Escalope De Veau", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce", image: image2 },
    { name: "Fish Parmentier", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce", image:image3 },
    { name: "Tuna Niçoise", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce" , image:image4},
    { name: "Chicken and Walnut Salad", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",  image:"https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2021/12/apple-walnut-chicken-salad-square-1200.jpg" },
    { name: "Roasted Pork Belly", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"  , image:"https://images.food52.com/ns_hkPa58zLsuQ2-5njCNzZn6D8=/2016x1344/filters:format(webp)/98392a3e-2859-47fb-be03-a6c4bf70c4be--Roasted_Pork_Belly.jpg"},
  ];

  return (
    <div className='min-h-screen '>
            
      <Cover image={coverImage} title1={"OUR MENU"} title2={"Would you like to try a dish?"}></Cover>
       <SectionHeading title1={"---Don't miss---"} title2={"TODAY'S OFFER"}></SectionHeading>
       <SharedMenu menuItems={menuItems}></SharedMenu>
       <SharedButton title='ORDER YOUR FAVOURITE FOOD'></SharedButton>
    
      <Cover image={desertImage} title1={"DESSERTS"} title2={"Sweeten your moments with our delightful desserts."}></Cover>
      <SharedMenu menuItems={menuItems}></SharedMenu>
      <SharedButton title='ORDER YOUR FAVOURITE FOOD'></SharedButton>

      <Cover image={pizzaImage} title1={"PIZZA"} title2={"Savor every slice of our mouthwatering pizzas."}></Cover>
      <SharedMenu menuItems={menuItems}></SharedMenu>
      <SharedButton title='ORDER YOUR FAVOURITE FOOD'></SharedButton>

      <Cover image={soupImage} title1={"SOUPS"} title2={"Warm your soul with our comforting soups."}></Cover>
      <SharedMenu menuItems={menuItems}></SharedMenu>
      <SharedButton title='ORDER YOUR FAVOURITE FOOD'></SharedButton>

    </div>
  )
}

export default MenuPage