import Header from "./Header";
import Products from "./Products";
import Summary from "./Summary";

const MenuView = () =>{
   
    return(
        <>
        <Header/>
        <main className="main">
        <Products/>
        <Summary/>
        </main>
        </>
    );
};

export default MenuView;