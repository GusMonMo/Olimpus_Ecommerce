export async function GET() {

    const produtos_femininos = [
      {
        id: 1,
        name: "Legging",
        color: "Preto",
        price: 79.99,
        image: "/Images/Products/MaisVendidos/legging_preto.jpg",
      },
      {
        id: 2,
        name: "Legging",
        color: "Vermelho",
        price: 89.99,
        image: "/Images/Products/MaisVendidos/legging_vermelho.jpg",
      },
      {
        id: 3,
        name: "Legging",
        color: "Cinza",
        price: 75.99,
        image: "/Images/Products/MaisVendidos/legging_cinza.jpg",
      },
      {
        id: 4,
        name: "Legging",
        color: "Azul",
        price: 85.99,
        image: "/Images/Products/MaisVendidos/legging_azul.jpg",
      },
      {
        id: 5,
        name: "Macacão",
        color: "Preto",
        price: 79.99,
        image: "/Images/Products/MaisVendidos/macacao_preto.jpg",
      },
      {
        id: 6,
        name: "Macacão",
        color: "Roxo",
        price: 89.99,
        image: "/Images/Products/MaisVendidos/macacao_roxo.jpg",
      },
      {
        id: 7,
        name: "Macacão",
        color: "Rosa",
        price: 75.99,
        image: "/Images/Products/MaisVendidos/macacao_rosa.jpg",
      },
      {
        id: 8,
        name: "Macacão",
        color: "Azul",
        price: 85.99,
        image: "/Images/Products/MaisVendidos/macacao_azul.jpg",
      },
      {
        id: 9,
        name: "short",
        color: "Preto",
        price: 79.99,
        image: "/Images/Products/MaisVendidos/short_preto.jpg",
      },
      {
        id: 10,
        name: "short",
        color: "Vermelho",
        price: 89.99,
        image: "/Images/Products/MaisVendidos/short_vermelho.jpg",
      },
      {
        id: 11,
        name: "short",
        color: "Rosa",
        price: 75.99,
        image: "/Images/Products/MaisVendidos/short_rosa.jpg",
      },
      {
        id: 12,
        name: "short",
        color: "Marrom",
        price: 85.99,
        image: "/Images/Products/MaisVendidos/short_marrom.jpg",
      },
    ];
  
    return new Response(JSON.stringify(produtos_femininos), {
      headers: { "Content-Type": "application/json" },
    });
  }