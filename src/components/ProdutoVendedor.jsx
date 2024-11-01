import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const urlProdutos = "http://localhost:8090/produtos";

export default function Product({id, imagem, custo, quantidade, nome, setOpen }) {

  const deletarProduto = async () => {
    try {
      const response = await axios.delete(`${urlProdutos}/deletar/${id}`)
      console.log("Produto deletado")
    } catch (error) {
      console.log(error)
    }
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
        <div className="flex my-5 md:my-0 gap-10 md:mr-5 justify-center items-center">
          <FontAwesomeIcon
            icon={faPen}
            className="text-white hover:scale-110 text-[2rem] cursor-pointer"
            onClick={() => setOpen(nome, custo, quantidade, imagem)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="text-[#FF0048] hover:scale-110 text-[2rem] cursor-pointer"
            onClick={() => deletarProduto()}
          />
        </div>
      </div>
    </>
  );
}
