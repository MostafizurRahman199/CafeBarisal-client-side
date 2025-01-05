import React from 'react'
import ApiComponent from '../API/ApiComponent';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {

  const {getMenuData} = ApiComponent();


  const {data: menuData, isLoading, isError, error} = useQuery({
    queryKey: ['menuData'],
    queryFn: getMenuData,
  })

  return {menuData, isLoading, isError, error};
}

export default useMenu