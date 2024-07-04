import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [itemsInCart, setItemsInCart] = useState(0);

  const [items, setItems] = useState([]);

  const [allItems,setAllItems] = useState([])

  const [catrtItems, setCatrtItems] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      setItems(res.data);
      setAllItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchData = (input) => {
    if (input !== "") {
      const array = [...allItems];
      const data = array.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
      setItems(data);
    } 
  };

  const addTocartHandler = (data) => {
    console.log(data);
    const array = [...catrtItems];
    const index = array.findIndex((val) => val.id === data.id);
    if (index === -1) {
      data.quantity = 1;
      array.push(data);
    } else {
      array[index].quantity += 1;
    }

    setCatrtItems(array);
    console.log(data);
  };

  const reduceAmount = (data) => {
    const array = [...catrtItems];
    const index = array.findIndex((val) => val.id === data.id);
    if (index !== -1) {
      if (array[index].quantity === 1) {
        array.splice(index, 1);
      } else {
        array[index].quantity -= 1;
      }
      setCatrtItems(array);
    }
  };

  const getTotalItemsInCart = () => {
    const amount = catrtItems.reduce((acc, curr) => acc + curr.quantity, 0);
    setItemsInCart(amount);
  };

  useEffect(() => {
    getTotalItemsInCart();
  }, [catrtItems]);

  const filterDataWithRating = (rating, price) => {
    const filteredData = allItems.filter((item) => {
      if (price === "10") {
        return item.price <= 10 && item.rating.rate >= rating;
      } else if (price === "50") {
        return item.price > 10 && item.price <= 50 && item.rating.rate >= rating;
      } else if (price === "100") {
        return item.price > 50 && item.price <= 100 && item.rating.rate >= rating;
      } else if (price === "101") {
        return item.price > 100 && item.rating.rate >= rating;
      } else {
        return item.rating.rate >= rating; 
      }
    });

    setItems(filteredData); 
  };

  


  
  return (
    <CartContext.Provider
      value={{
        itemsInCart: itemsInCart,
        addItems: addTocartHandler,
        catrtItems: catrtItems,
        reduced: reduceAmount,
        items: items,
        searchData: searchData,
        filter:filterDataWithRating
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
