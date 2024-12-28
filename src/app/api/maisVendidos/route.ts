export async function GET() {

    const MaisVendidos = [
      {
        id: 1,
        name: "Legging",
        color: "Preto",
        price: 79.99,
        description: "Legging preta confortável para treino.",
        image: "/Images/Products/MaisVendidos/legging_preto.jpg",
      },
      {
        id: 2,
        name: "Legging",
        color: "Vermelho",
        price: 89.99,
        description: "Legging vermelha de alta compressão.",
        image: "/Images/Products/MaisVendidos/legging_vermelho.jpg",
      },
      {
        id: 3,
        name: "Legging",
        color: "Cinza",
        price: 75.99,
        description: "Legging cinza escura, ideal para academia.",
        image: "/Images/Products/MaisVendidos/legging_cinza.jpg",
      },
      {
        id: 4,
        name: "Legging",
        color: "Azul",
        price: 85.99,
        description: "Legging azul com alta elasticidade.",
        image: "/Images/Products/MaisVendidos/legging_azul.jpg",
      },
    ];
  
    return new Response(JSON.stringify(MaisVendidos), {
      headers: { "Content-Type": "application/json" },
    });
  }