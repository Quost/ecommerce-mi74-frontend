import { faAdd, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

const urlProdutos = "http://localhost:8090/produtos";
const urlEstoque = "http://localhost:8090/estoque";

export default function HeaderVendedor() {
  const [modal, setModal] = useState(false);

  // Usando useRef para cada input
  const categoriaRef = useRef(null);
  const nomeRef = useRef(null);
  const valorRef = useRef(null);
  const descricaoRef = useRef(null);
  const quantidadeRef = useRef(null);

  const adicionarProduto = async () => {
    await criarProduto();
  };

  const criarEstoque = async () => {
    try {
      const estoqueResponse = await axios.post(`${urlEstoque}/adicionar`, {
        quantidade: quantidadeRef.current.value,
      });
      const estoqueId = estoqueResponse.data.id;

      return estoqueId;
    } catch (error) {
      console.log(error);
    }
  };

  const criarProduto = async () => {
    try {
      const estoqueID = await criarEstoque();
      const produtoResponse = await axios.post(`${urlProdutos}/adicionar`, {
        produto: {
          categoria: categoriaRef.current.value,
          nome: nomeRef.current.value,
          custo: valorRef.current.value,
          descricao: descricaoRef.current.value,
        },
        estoqueId: estoqueID,
      });
    } catch (error) {
      console.log(error);
    }
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
      <header className="w-full bg-[#4E598C] text-[#F5F5F5] flex flex-row justify-between px-16 pt-3 pb-5 items-center">
        <h1 className="text-3xl">MI74 E-Commerce</h1>

        <div className="gap-4 flex items-center">
          <button
            className="button-style rounded-full bg-green-400 w-[50px] text-[#4E598C]"
            onClick={() => setModal(true)}
          >
            <FontAwesomeIcon icon={faAdd} />
          </button>
        </div>
      </header>
      <div id="modalComponent" className={(!modal && "hidden ") + ``}>
        <div className="flex justify-center items-center h-[100vh] w-[100vw] overflow-hidden bg-black/25 fixed top-0 left-0">
          <section className="bg-bg-whitePersonalized w-[60%] pb-10 px-5 rounded-md">
            <div className="flex items-center justify-between p-2 sm:p-10">
              <h1 className="text-xl sm:text-3xl font-bold">
                Adicionar produto
              </h1>
              <button
                onClick={() => setModal(false)}
                className="text-[#FF0048] hover:scale-110 text-[2rem] cursor-pointer"
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-10">
              <div className="flex flex-col ">
                <label className="font-bold text-xl" htmlFor="categoriaProduct">
                  Categoria:{" "}
                </label>
                <input
                  type="text"
                  id="categoriaProduct"
                  className="inputs-styles"
                  autoComplete="off"
                  ref={categoriaRef}
                />
              </div>
              <div className="flex flex-col ">
                <label className="font-bold text-xl" htmlFor="nameProduct">
                  Nome:{" "}
                </label>
                <input
                  type="text"
                  id="nameProduct"
                  className="inputs-styles"
                  autoComplete="off"
                  ref={nomeRef}
                />
              </div>
              <div className="flex flex-col ">
                <label className="font-bold text-xl" htmlFor="custoProduct">
                  Valor:{" "}
                </label>
                <input
                  type="text"
                  id="custoProduct"
                  className="inputs-styles"
                  autoComplete="off"
                  ref={valorRef}
                />
              </div>
              <div className="flex flex-col ">
                <label
                  className="font-bold text-xl"
                  htmlFor="descriptionProduct"
                >
                  Descrição:{" "}
                </label>
                <input
                  type="text"
                  id="descriptionProduct"
                  className="inputs-styles"
                  autoComplete="off"
                  ref={descricaoRef}
                />
              </div>
              <div className="flex flex-col ">
                <label
                  className="font-bold text-xl"
                  htmlFor="quantidadeProduct"
                >
                  Quantidade:{" "}
                </label>
                <input
                  type="text"
                  id="quantidadeProduct"
                  className="inputs-styles"
                  autoComplete="off"
                  ref={quantidadeRef}
                />
              </div>
            </div>
            <div className="flex justify-center gap-10 mt-14">
              <button
                onClick={() => setModal(false)}
                className="bg-red-800 button-style"
              >
                Cancelar
              </button>
              <button className="button-style" onClick={adicionarProduto}>
                Salvar
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
