import Product from "../components/ProdutoVendedor";
import camisetapreta from "../assets/camiseta-preta.jpeg";
import shorts from "../assets/shorts.jpeg";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React from "react";

const baseURLProdutos = "http://localhost:8090/produtos";

export default function PortalVendedor() {
  const [modal, setModal] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState({});
  const [produtos, setProdutos] = useState([]);

  const fetchProdutos = async () => {
      try {
        const response = await axios.get(`${baseURLProdutos}/listar`);
        setProdutos(response.data);
      } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    fetchProdutos();
  }, []);

  const abrirModalComProduto = (nome, custo, quantidade, imagem) => {
    setProdutoSelecionado({ nome, custo, quantidade, imagem });
    setModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProdutoSelecionado((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
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
      <div className="h-screen bg-bg-whitePersonalized">
        <Header />
        <div className="flex flex-col gap-5 justify-center items-center mt-[4rem]">
          {produtos.map((produto) => (
            <Product
            imagem={camisetapreta}
            custo={produto.custo}
            quantidade={produto.estoque ? produto.estoque.quantidade : 0}
            nome={produto.nome}
            setOpen={() => abrirModalComProduto(produto.nome, produto.custo, produto.quantidade, camisetapreta)}
            />
          ))}
        </div>
        <div id="modalComponent" className={(!modal && "hidden ") + ` `}>
          <div className="flex justify-center items-center h-[100vh] w-[100vw] overflow-hidden bg-black/25 absolute top-0 left-0">
            <section className="bg-bg-whitePersonalized w-[60%] h-[80%] rounded-md">
              <div className="flex items-center justify-between p-10">
                <h1 className="text-3xl font-bold">Editar produto</h1>
                <button
                  onClick={() => setModal(false)}
                  className="text-[#FF0048] hover:scale-110 text-[2rem] cursor-pointer"
                >
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
              <div className="flex items-center justify-around gap-2">
                <img
                  src={produtoSelecionado.imagem}
                  alt={produtoSelecionado.nome}
                  className="w-[200px] h-auto rounded-lg"
                  onChange={handleChange}
                />
                <div className="flex flex-col items-start justify-center gap-2">
                  <div className="flex flex-col">
                    <label htmlFor="nameProduct">Nome: </label>
                    <input
                      type="text"
                      name={produtoSelecionado.nome}
                      id="nameProduct"
                      placeholder={produtoSelecionado.nome || ""}
                      className="inputs-styles"
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="priceProduct">Preço: </label>
                    <input
                      type="text"
                      name={produtoSelecionado.custo}
                      id="priceProduct"
                      placeholder={produtoSelecionado.custo || ""}
                      className="inputs-styles"
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="descriptionProduct">quantidade: </label>
                    <input
                      type="text"
                      name={produtoSelecionado.quantidade}
                      id="descriptionProduct"
                      placeholder={produtoSelecionado.quantidade || ""}
                      className="inputs-styles"
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-10 mt-14">
                <button
                  onClick={() => setModal(false)}
                  className="bg-red-800 button-style"
                >
                  Cancelar
                </button>
                <button className="button-style">Salvar</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
