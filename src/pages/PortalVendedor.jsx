
import Header from "../components/Header";
import ListaProdutosVendedor from "../components/ListaProdutosVendedor";

export default function PortalVendedor() {
  return (
    <>
      {/* <title>Portal do Vendedor</title> */}
      <div className="min-h-[100vh] h-[100%] bg-bg-whitePersonalized">
        <Header />
        <ListaProdutosVendedor/>
      </div>
    </>
  );
}
