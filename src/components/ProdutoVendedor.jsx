import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";

const urlProdutos = "http://localhost:8090/produtos";

export default function Product({
  id,
  imagem,
  custo,
  quantidade,
  nome,
  setOpen,
}) {
  const [modalDelete, setModalDelete] = useState(false);

  const deletarProduto = async () => {
    try {
      const response = await axios.delete(`${urlProdutos}/deletar/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  function abrirModalDeletar() {
    setModalDelete(true);
    setTimeout(() => {
      setModalDelete(false);
    }, 2000);
  }

  function confirmDelete() {
    deletarProduto();
    setModalDelete(true)
  }

  return (
    <>
      <div className="bg-[#7389AE] w-[90%] mx-auto h-[370px] md:h-[150px] rounded-lg shadow-md text-center md:flex items-center justify-between p-2 transition-all text-white text-xl">
        <img
          src={imagem}
          alt="Produto da loja"
          className="h-[150px] md:h-[90%] rounded-lg mx-auto md:mx-0 mt-5 mb-5 md:mb-0 md:mt-0 md:ml-2 w-[120px]"
        />
        <p className="my-2 md:my-0">Nome: {nome}</p>
        <p className="my-2 md:my-0">R$: {custo}</p>
        <p className="my-2 md:my-0">Quantidade: {quantidade}</p>
        <div className="flex items-center justify-center gap-10 my-5 md:my-0 md:mr-5">
          <FontAwesomeIcon
            icon={faPen}
            className="text-white hover:scale-110 text-[2rem] cursor-pointer"
            onClick={() => setOpen(nome, custo, quantidade, imagem)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="text-[#FF0048] hover:scale-110 text-[2rem] cursor-pointer"
            onClick={() => abrirModalDeletar()}
          />
        </div>
      </div>
      <div
        id="modalDeleteComponent"
        className={(!modalDelete && "hidden ") + ``}
      >
        <section className="flex justify-center items-center h-[100vh] w-[100vw] overflow-hidden bg-black/25 fixed top-0 left-0">
          <div className="bg-bg-whitePersonalized w-[500px] m-w-[60%] h-[300px] pb-10 px-5 rounded-md mx-5 text-center relative">
            <h1 className="font-bold text-[2rem] mt-[20px]">
              Tem certeza que você deseja deletar este produto?
            </h1>
            <div className="flex items-center justify-center gap-10 mt-10">
              <button className="bg-red-600 button-style">Não</button>
              <button className="bg-green-600 button-style" onClick={() => confirmDelete()}>Sim</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
