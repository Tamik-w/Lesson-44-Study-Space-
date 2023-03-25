import React, {useState} from "react";
import styles from "./Add.module.scss"

function Add(props){

    const [newProducts, setNewProducts] = useState({name: '', price: '', id: 3})
    const [isValidateName, setIsValidateName] = useState(false);
    const [isValidatePrice, setIsValidatePrice] = useState(false);

    const changeName = (e)=>{
        setNewProducts((prev)=>({...prev, name: e.target.value}))
       }
     
       const changePrice = (e)=>{
         setNewProducts((prev)=>({...prev, price: e.target.value}))
       }

    const addProducts = () => {
        props.onAddProduct(setNewProducts, newProducts, isValidateName, isValidatePrice, setIsValidateName, setIsValidatePrice)
    }

  const validateName = () => {
    newProducts.name.trim().length > 1 ? setIsValidateName(true) : setIsValidateName(false)
  }
  const validatePrice = () => {
    newProducts.price > 0 ? setIsValidatePrice(true) : setIsValidatePrice(false)
  }

    return (
      <div className={styles.add}>
        <label className={isValidateName ? '': styles.invalid}>Product name</label>

        <input className={isValidateName ? '': styles.invalid} 
        onBlur={validateName} onInput={changeName} value={newProducts.name} type="text" />

        <label className={isValidateName ? '': styles.invalid}>Product price</label>

        <input className={isValidateName ? '': styles.invalid} 
        onBlur={validatePrice} onInput={changePrice} value={newProducts.price} type="number"/>

        <button onClick={addProducts} type="button">Add</button>
      </div>
    )
}

export default Add