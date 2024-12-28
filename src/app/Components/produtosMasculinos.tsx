"use client"
import React, { useEffect, useState } from "react";
import Carousel from "./carousel";
import { fetchProdutosMasculinos, SlideProdutosMasculinos } from "../services/slideProdutosMasculinosService";

export default function ProdutosMasculinos(){
    const [slidesProdutosMasculinos, setSlidesProdutosMasculinos] = useState<SlideProdutosMasculinos[]>([]);
    const [loadingProdutoF, setLoadingProdutoF] = useState(true);
    useEffect(() => {
        const loadSlidesProdutosMasculinos = async () => {
          try {
            const fetchedProdutosMasculinos = await fetchProdutosMasculinos();
            setSlidesProdutosMasculinos(fetchedProdutosMasculinos);
          } catch (error) {
            console.error("Erro ao carregar produtos:", error);
          } finally {
            setLoadingProdutoF(false);
          }
        };
        loadSlidesProdutosMasculinos();
      }, []); 
    
      if (loadingProdutoF) return <div>Carregando slides...</div>;
      if (!slidesProdutosMasculinos.length) return <div>Nenhum produto disponível.</div>;
    return(
        <>
        <Carousel slides={slidesProdutosMasculinos}/>
        </>
    )
}