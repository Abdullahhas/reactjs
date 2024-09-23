import "./App.css";
// import Navbar from "./components/Navbar";
import Product from "./components/Products";

function App() {
  return (
    // <>
    // {/* <Navbar title="Abdullah" abouttext = "aboututils" /> */}
    // <Navbar/>
    // </>

    <>
      <h1>Products</h1>
      <Product
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Cyxus"
        desc="Non-Slip Fitness Leisure Running Sneakers"
        price="$29"
      />
      <Product
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
          name="Vitike"
          desc="Latest Men Sneakers -Black"
          price="$100"
        />
        <Product
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
          name="Aomei"
          desc="Men's Trend Casual Sports Shoe"
          price="$40"
        />
    </>
  );
}

export default App;
