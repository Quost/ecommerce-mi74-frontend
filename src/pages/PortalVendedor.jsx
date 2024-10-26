import ProductList from "../components/ProdutoVendedor";
import camisetapreta from "../assets/camiseta-preta.jpeg";
import shorts from "../assets/shorts.jpeg";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function PortalVendedor() {
  const [modal, setModal] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState({});

  const abrirModalComProduto = (nome, valor, quantidade, imagem) => {
    setProdutoSelecionado({ nome, valor, quantidade, imagem });
    setModal(true);
  };

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
      {/* <title>Portal do Vendedor</title> */}
      <div className="bg-bg-whitePersonalized h-screen">
        <Header />
        <div className="flex flex-col gap-5 justify-center items-center mt-[4rem]">
          <ProductList
            imagem={camisetapreta}
            valor={70}
            quantidade={26}
            nome={"Camiseta preta"}
            setOpen={abrirModalComProduto}
          />

          <ProductList
            imagem={shorts}
            valor={40}
            quantidade={12}
            nome={"Shorts preto"}
            setOpen={abrirModalComProduto}
          />
        </div>
        <div id="modalComponent" className={(!modal && "hidden ") + ` `}>
          <div className="flex justify-center items-center h-[100vh] w-[100vw] overflow-hidden bg-black/25 absolute top-0 left-0">
            <section className="bg-bg-whitePersonalized w-[60%] h-[80%] rounded-md">
              <div className="flex justify-between items-center p-10">
                <h1 className="text-3xl font-bold">Editar produto</h1>
                <button
                  onClick={() => setModal(false)}
                  className="text-[#FF0048] hover:scale-110 text-[2rem] cursor-pointer"
                >
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
              <div className="flex justify-around items-center gap-2">
                <img
                  src={produtoSelecionado.imagem}
                  alt={produtoSelecionado.nome}
                  className="w-[200px] h-auto rounded-lg"
                />
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex flex-col">
                    <label htmlFor="nameProduct">Nome: </label>
                    <input type="text" name={produtoSelecionado.nome} id="nameProduct" value={produtoSelecionado.nome} className="inputs-styles" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="priceProduct">Preço: </label>
                    <input type="text" name={produtoSelecionado.valor} id="priceProduct" value={produtoSelecionado.valor} className="inputs-styles" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="descriptionProduct">quantidade: </label>
                    <input type="text" name={produtoSelecionado.quantidade} id="descriptionProduct" value={produtoSelecionado.quantidade} className="inputs-styles" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
