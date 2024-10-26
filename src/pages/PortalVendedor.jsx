import ProductList from "../components/ProdutoVendedor";
import camisetapreta from "../assets/camiseta-preta.jpeg";
import shorts from "../assets/shorts.jpeg";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function PortalVendedor() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") {
        setModal(false);
      }
    };

    window.addEventListener("keydown", esc);

    return () => {
      window.removeEventListener("keydown", esc);
    };
  }, []);

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
          <div className="flex justify-center items-center h-[100vh] w-[100vw] overflow-hidden bg-black/25 absolute top-0 left-0">
            <section className="bg-bg-whitePersonalized w-[60%] h-[80%] rounded-md">
              <div className="flex justify-between items-center p-10">
                <h1 className="text-3xl font-bold">Editar produto</h1>
                <button
                  onClick={() => setModal(false)}
                  className="text-[#FF0048] hover:scale-110 text-[2rem] cursor-pointer">
                  <FontAwesomeIcon icon={faClose}/>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
