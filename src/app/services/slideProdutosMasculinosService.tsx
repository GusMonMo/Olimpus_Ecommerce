export interface SlideProdutosMasculinos {
    image: string;
    name: string;
    color: string;
    price: string;
  }

  
  export const fetchProdutosMasculinos = async (): Promise<SlideProdutosMasculinos[]> => {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/produtos_masculinos`);
    const data = await response.json();
  
    return data.map((item: any) => ({
      image: item.image || "/placeholder.png",
      name: item.name || "Produto Sem Nome",
      color: item.color || "Cor Indisponível",
      price: item.price ? `R$ ${item.price.toFixed(2)}` : "Preço Indisponível",
    }));
  };