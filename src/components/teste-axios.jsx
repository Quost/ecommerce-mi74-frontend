import axios from "axios";
import React from "react";

const baseURLEstoque = "http://localhost:8090/estoque";
const baseURLProduto = "http://localhost:8090/produtos";

export default function TesteAxios() {
  const listarEstoques = async () => {
    try {
      const response = await axios.get(`${baseURLEstoque}/listar-todos`);
      console.log("Estoque: ", response.data);
    } catch (error) {
      console.error("Erro ao listar estoques: ", error);
    }
  };

  const listarEstoquePorId = async (id) => {
    try {
      const resposnse = await axios.get(`${baseURLEstoque}/listar?id=${id}`);
      console.log("Estoque por ID: ", resposnse.data);
    } catch (error) {
      console.error("Erro ao listar estoque por ID: ", error);
    }
  };

  const criarEstoque = async (quantidade) => {
    try {
      const response = await axios.post(`${baseURLEstoque}/adicionar`, {"quantidade": quantidade});
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const criarProduto = async (categoria, nome, custo, descricao, idEstoque) => {
    try {
        const response = await axios.post(`${baseURLProduto}/adicionar?estoque_id=${idEstoque}`, {
            "produto": {
                "categoria": categoria,
                "nome": nome,
                "custo": custo,
                "descricao": descricao
            },
            "estoqueId": idEstoque
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  }

  const listarProdutos = async () => {
    try {
      const response = await axios.get(`${baseURLProduto}/listar`);
      console.log("Produtos: ", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        <div className="flex gap-10 justify-center items-center flex-wrap">
          <button className="button-style w-[220px]"
          onClick={() => criarEstoque(10)}>
            Criar Estoque</button>

          <button
            className="button-style w-[220px]"
            onClick={() => listarEstoquePorId(1)}
          >
            Listar Estoque por ID
          </button>

          <button className="button-style w-[220px]" onClick={() => listarEstoques()}>
            Listar Estoques
          </button>

          <button className="button-style w-[220px]"
          onClick={() => criarProduto("Roupa", "Camiseta Branca", 80, "Camiseta branca", 2)}>
            Criar produto</button>

          <button className="button-style w-[220px]" onClick={() => listarProdutos()}>
            Listar produtos
          </button>
        </div>
      </div>
    </>
  );
}
