import { useEffect, useState } from "react";

const useMenu = () => {
  const [menuData, setMenuData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const result = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-client-menu-and-order/refs/heads/main/public/menu.json");
        if (!result.ok) {
          throw new Error("Failed to fetch menu data");
        }
        const data = await result.json();
        setMenuData(data); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchMenuData();
  }, []);

  // console.log(menuData);

  return { menuData, loading, error }; 
};

export default useMenu;
