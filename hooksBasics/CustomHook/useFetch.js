import {useState, useEffect} from 'react';
// export a hook in order to be used as a function 

export const useFetch = (url) =>{

    const [prods, setProds] = useState([]);

    // fetch data
    const fetchData = async () =>{// async to fetch data 
        const response = await fetch(url);
        const products = await response.json();
        setProds(products);
    }

    useEffect(()=>{
        fetchData()
    },[prods])

    return {prods};
}