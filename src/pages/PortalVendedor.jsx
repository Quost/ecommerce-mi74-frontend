import ProductList from "../components/ProdutoVendedor";
import camisetapreta from "../assets/camiseta-preta.jpeg";
import shorts from "../assets/shorts.jpeg";
import Header from "../components/Header";
import { useState } from "react";

export default function PortalVendedor() {
  const [modal, setModal] = useState(false);

  const modalComponent = document.getElementById("modalComponent");

  return (
    <>
      <div className="bg-bg-whitePersonalized h-screen">
        <Header />
        <div className="flex flex-col gap-5 justify-center items-center mt-[4rem]">
          <ProductList
            imagem={camisetapreta}
            valor={70}
            quantidade={26}
            nome={"Camiseta preta"}
            setOpen={setModal}
          />

          <ProductList
            imagem={shorts}
            valor={70}
            quantidade={26}
            nome={"Camiseta preta"}
          />
        </div>
        <div id="modalComponent" className={(!modal && "hidden ") + ` `}>
          <div className="h-[100vh] w-[100vw] overflow-hidden bg-black opacity-25 absolute top-0 left-0"></div>
        </div>
      </div>
    </>
  );
}
