import { useEffect, useState } from "react";

const useMenu = () => {
  const [menuData, setMenuData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const result = await fetch("menu.json");
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

  return { menuData, loading, error }; 
};

export default useMenu;
