export async function GET() {

    const produtos_masculinos = [
      {
        id: 1,
        name: "Regata",
        color: "Preta",
        price: 79.99,
        image: "/Images/Products/Masculino/regata_preta.jpg",
      },
      {
        id: 2,
        name: "Regata",
        color: "Verde",
        price: 89.99,
        image: "/Images/Products/Masculino/regata_verde.jpg",
      },
      {
        id: 3,
        name: "Regata",
        color: "Azul",
        price: 85.99,
        image: "/Images/Products/Masculino/regata_azul.jpg",
      },
      {
        id: 4,
        name: "Short",
        color: "Cinza",
        price: 75.99,
        image: "/Images/Products/Masculino/short_cinza.jpg",
      },
      {
        id: 4,
        name: "Short",
        color: "Azul",
        price: 75.99,
        image: "/Images/Products/Masculino/short_azul.jpg",
      },
      {
        id: 4,
        name: "Short",
        color: "Preto",
        price: 75.99,
        image: "/Images/Products/Masculino/short_preto.jpg",
      },
    ];
  
    return new Response(JSON.stringify(produtos_masculinos), {
      headers: { "Content-Type": "application/json" },
    });
  }