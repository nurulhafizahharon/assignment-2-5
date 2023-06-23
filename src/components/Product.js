import { useState } from "react";
import Card from "./Card";
import ViewList from "./ViewList";

function Product() {
  const [count, setCount] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("Banana");
  const [price, setPrice] = useState(2.99);
  const [list, setList] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
        if (count < 0) {
          return 0;
        }
      }
      return count;
    });
  };

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };

  const handlerChangePrice = (value) => {
    if (!isNaN(value)) {
      setPrice(value);
    }
  };

  const handlerAddProduct = () => {
    const newItem = {
      name: name,
      price: price,
      count: count,
      discount: discount,
      discountPrice: (price * count * discount) / 100,
      total: (price * count * (100 - discount)) / 100,
    };

    const newList = [...list, newItem];
    setList(newList);

    setTotalSum(totalSum + newItem.total);
    setTotalDiscount(totalDiscount + newItem.discountPrice);
  };

  return (
    <>
      <Card
        name={name}
        count={count}
        price={price}
        discount={discount}
        handlerMinus={handlerMinus}
        handlerPlus={handlerPlus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
      />
      <ViewList list={list} totalDiscount={totalDiscount} sum={totalSum} />
    </>
  );
}

export default Product;
