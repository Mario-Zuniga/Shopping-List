import Cart from "./Cart";

const items = [
  { id: 1, name: "Garlic powder", price: 2.25, qty: 1},
  { id: 2, name: "Butter", price: 1.75, qty: 3},
  { id: 3, name: "Sirloin", price: 7.50, qty: 5}
]

function App() {
  return (
    <div className="App">
      <Cart initialItems={items} />
    </div>
  );
}

export default App;
