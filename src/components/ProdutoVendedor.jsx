import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Product({imagem, custo, quantidade, nome, setOpen}) {
  return (
    <>
      <div className="bg-[#7389AE] w-[90%] mx-auto h-[150px] rounded-lg shadow-md flex items-center justify-between p-2 transition-all text-white text-xl">
        <img
          src={imagem}
          alt="Produto da loja"
          className="h-[90%] rounded-lg ml-2 w-[120px]"
        />
        <p className="">Nome: {nome}</p>
        <p>R$: {custo}</p>
        <p>Quantidade: {quantidade}</p>
        <div className="flex gap-10 mr-2">
          <FontAwesomeIcon
            icon={faPen}
            className="text-white hover:scale-110 text-[2rem] cursor-pointer"
            onClick={() => setOpen(nome, custo, quantidade, imagem)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="text-[#FF0048] hover:scale-110 text-[2rem] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
