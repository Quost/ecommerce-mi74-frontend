import ProductList from "../components/ProdutoVendedor";
import camisetapreta from "../assets/camiseta-preta.jpeg";

export default function PortalVendedor() {
    return (
        <>
            <div className="bg-bg-whitePersonalized h-screen">
                <ProductList imagem={camisetapreta} valor={70} quantidade={26} nome={"Camiseta preta"} />
            </div>
        </>
    );
}