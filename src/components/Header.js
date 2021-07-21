import React from "react"
import Logo from "./Logo"
import Title from '../styles/Title'
import { Button } from '../styles/Button'

const Header = () => {

  let companyName = "DNT"
  const companyAddress = <h4>BKK</h4>
  let num = 10

  const showMessage = () => {
    return companyName + ".com"
  };

  const isLogin = true

  const showMe = () => {
    alert("Hello React")
  }

  const products = [
    {id: 1, name: 'mocha'},
    {id: 2, name: 'late'}
  ]

  return (
    <div>
      <Title>Test component style</Title>
      <h1>บริษัท {companyName}</h1>
      {companyAddress}
      {showMessage()}
      { isLogin === true && (
        <>
            <p>Welcome</p>
            <p>Welcome 3</p>
        </>
      )}
      { isLogin ? (
          <Logo/>
      ) : (
          <p>No logo</p>
      )} 
      <br />
      {num + 50}
      <br/>
      <button onClick={showMe}>Click Me!</button>
      <Button primary={false} onClick={showMe}>Button Styled</Button>
      <br/>
      <ul>
        {
            products.map((product, index) => {
                return (
                    <li key={product.id}>{product.name} - {index+1}</li>
                )
            })
        }
      </ul>
    </div>
  );
};

export default Header
