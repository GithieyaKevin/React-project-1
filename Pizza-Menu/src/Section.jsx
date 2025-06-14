import Pizza from "./Pizza"
import Footer from "./Footer"

export default function Section(){

  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "./src/pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "./src/pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "./src/pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "./src/pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "./src/pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "./src/pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  return(
    <div className="menu">
    <h2>OUR MENU</h2>

    <p>Authentic Italian cousine. 6 creative dishes to choose from. All our stone oven, all organic, all delicious.</p>

    <div className="pizzas">
    {pizzaData.map(pizza => <Pizza
      name = {pizza.name}
      ingredients = {pizza.ingredients}
      price = {pizza.price}
      src = {pizza.photoName}
      soldOut = {pizza.soldOut}
      />)}
    </div>
    <Footer />

    </div>
  )
}
