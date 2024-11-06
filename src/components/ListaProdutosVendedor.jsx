import Product from "../components/ProdutoVendedor";
import camisetapreta from "../assets/camiseta-preta.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const baseURLProdutos = "http://localhost:8090/produtos";

export default function ListaProdutosVendedor() {
  const [modal, setModal] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState({});
  const [produtos, setProdutos] = useState([]);
  const [modalErrorEdit, setModalErrorEdit] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const nameRef = useRef(null);
  const custoRef = useRef(null);
  const quantidadeRef = useRef(null);
  const descricaoRef = useRef(null);

  const fetchProdutos = async () => {
    try {
      const response = await axios.get(`${baseURLProdutos}/listar`);
      setProdutos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProdutos();

    const intervalId = setInterval(() => {
      fetchProdutos();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const editProduct = async () => {
    try {
      const response = await axios.put(
        `${baseURLProdutos}/editar/${produtoSelecionado.id}`,
        {
          id: produtoSelecionado.id,
          categoria: produtoSelecionado.categoria,
          nome: nameRef.current.value,
          custo: custoRef.current.value,
          descricao: descricaoRef.current.value,
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  function editarProduto() {
    if (nameRef == "" || custoRef == "" || descricaoRef == "") {
      setModalErrorEdit(true);

      setTimeout(() => {
        setModalErrorEdit(false);
      }, 2000)
    } else {
      editProduct();
      setModalEdit(true);

      setTimeout(() => {
        setModalEdit(false);
      }, 2000)
    }
  }

  const abrirModalComProduto = (
    id,
    categoria,
    nome,
    custo,
    quantidade,
    descricao,
    imagem
  ) => {
    setProdutoSelecionado({
      id,
      categoria,
      nome,
      custo,
      quantidade,
      descricao,
      imagem,
    });
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
      <div className="flex flex-col gap-5 justify-center items-center mt-[4rem]">
        {produtos.map((produto) => (
          <Product
            key={produto.id}
            id={produto.id}
            imagem={camisetapreta}
            custo={produto.custo}
            quantidade={produto.estoque ? produto.estoque.quantidade : 0}
            nome={produto.nome}
            setOpen={() =>
              abrirModalComProduto(
                produto.id,
                produto.categoria,
                produto.nome,
                produto.custo,
                produto.estoque.quantidade,
                produto.descricao,
                camisetapreta
              )
            }
          />
        ))}
      </div>
      <div id="modalComponent" className={(!modal && "hidden ") + ``}>
        <div className="flex justify-center items-center h-[100vh] w-[100vw] overflow-hidden bg-black/25 fixed top-0 left-0">
          <section className="bg-bg-whitePersonalized w-[60%] pb-10 px-5 rounded-md">
            <form>
              <div className="flex items-center justify-between p-2 sm:p-10">
                <h1 className="text-xl sm:text-3xl font-bold">
                  Editar produto
                </h1>
                <button
                  onClick={() => setModal(false)}
                  className="text-[#FF0048] hover:scale-110 text-[2rem] cursor-pointer"
                >
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-around gap-2">
                <img
                  src={produtoSelecionado.imagem}
                  alt={produtoSelecionado.nome}
                  className="w-[200px] h-auto rounded-lg"
                  onChange={handleChange}
                />
                <div className="flex flex-col items-start justify-center gap-2">
                  <div className="flex flex-col ">
                    <label htmlFor="nameProduct">Nome: </label>
                    <input
                      type="text"
                      name={produtoSelecionado.nome}
                      id="nameProduct"
                      placeholder={produtoSelecionado.nome || ""}
                      className="inputs-styles"
                      onChange={handleChange}
                      autoComplete="off"
                      ref={nameRef}
                      required
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label htmlFor="priceProduct">Preço: </label>
                    <input
                      type="text"
                      name={produtoSelecionado.custo}
                      id="priceProduct"
                      placeholder={produtoSelecionado.custo || ""}
                      className="inputs-styles"
                      onChange={handleChange}
                      autoComplete="off"
                      ref={custoRef}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="descriptionProduct">quantidade: </label>
                    <input
                      type="text"
                      name={produtoSelecionado.quantidade}
                      id="descriptionProduct"
                      placeholder={produtoSelecionado.quantidade}
                      className="inputs-styles"
                      onChange={handleChange}
                      autoComplete="off"
                      ref={quantidadeRef}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="descriptionProduct">descricao: </label>
                    <textarea
                      type="text"
                      name={produtoSelecionado.descricao}
                      id="descriptionProduct"
                      placeholder={produtoSelecionado.descricao}
                      className="inputs-styles h-[150px] w-[260px]"
                      onChange={handleChange}
                      autoComplete="off"
                      ref={descricaoRef}
                      required
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
                <button
                  type="submit"
                  className="button-style"
                  onClick={() => editarProduto()}
                >
                  Salvar
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

{
  /* <div id="modalDeleteComponent" className={(!modalDelet && "hidden ") + ``}>
 <section className="flex justify-center items-center h-[100vh] w-[100vw] overflow-hidden bg-black/25 fixed top-0 left-0">
   <div className="bg-bg-whitePersonalized w-[500px] m-w-[60%] h-[300px] pb-10 px-5 rounded-md mx-5 text-center relative">
     <h1 className="font-bold text-[2rem] mt-[20px]">Produto adicionado com sucesso <FontAwesomeIcon className="text-green-500 absolute right-36 top-[70px] bg-green-200 p-2 rounded-full" icon={faCheck}/> </h1>
     <p className="mt-[50px] text-[1.2rem]">Ele aparecerá na lista em alguns instantes</p>
   </div>
 </section>
</div> */
}
