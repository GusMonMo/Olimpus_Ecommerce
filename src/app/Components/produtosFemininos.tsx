"use client"
import React, { useEffect, useState } from "react";
import Carousel from "./carousel";
import { fetchProdutosFemininos, SlideProdutosFemininos } from "../services/slideProdutosFemininosService";

export default function ProdutosFemininos(){
    const [slidesProdutosFemininos, setSlidesProdutosFemininos] = useState<SlideProdutosFemininos[]>([]);
    const [loadingProdutoF, setLoadingProdutoF] = useState(true);

    useEffect(() => {
        const loadSlidesProdutosFemininos = async () => {
          try {
            const fetchedProdutosFemininos = await fetchProdutosFemininos();
            setSlidesProdutosFemininos(fetchedProdutosFemininos);
          } catch (error) {
            console.error("Erro ao carregar produtos:", error);
          } finally {
            setLoadingProdutoF(false);
          }
        };
        loadSlidesProdutosFemininos();
      }, []); 
    
      if (loadingProdutoF) return <div>Carregando slides...</div>;
      if (!slidesProdutosFemininos.length) return <div>Nenhum produto disponível.</div>;
    return(
        <>
        <Carousel slides={slidesProdutosFemininos}/>
        </>
    )
}