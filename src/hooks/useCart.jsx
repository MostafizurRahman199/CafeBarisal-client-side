import { useQuery } from '@tanstack/react-query'
import ApiComponent from '../API/ApiComponent';
import { useFirebaseAuth } from './useAuth';

const useCart = () => {

    const {getCart} = ApiComponent();
    const {user} = useFirebaseAuth();
    const userEmail = user?.email;

    const {data, refetch} = useQuery({
        queryKey: ["cartItems", userEmail],
        queryFn: () => getCart(userEmail),
    })


  return {data, refetch};
}

export default useCart