import camisetapreta from "../assets/camiseta-preta.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function ProductList({
  imagem,
  valor,
  quantidade,
  nome,
  setOpen,
}) {
  return (
    <>
      <div className="bg-[#7389AE] w-[90%] mx-auto h-[150px] rounded-lg shadow-md flex items-center justify-between p-2 ransition-all text-white text-xl">
        <img
          src={imagem}
          alt="Produto da loja"
          className="h-[90%] rounded-lg ml-2 w-[120px]"
        />
        <p className="">Nome: {nome}</p>
        <p>R$: {valor}</p>
        <p>Quantidade: {quantidade}</p>
        <div className="flex gap-10 mr-2">
          <FontAwesomeIcon
            icon={faPen}
            className="text-white hover:scale-110 text-[2rem] cursor-pointer"
            onClick={() => setOpen(true)}
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
