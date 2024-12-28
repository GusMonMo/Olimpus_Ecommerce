"use client"
import React, { useEffect, useState } from "react";
import Carousel from "./carousel";
import { fetchMaisVendidos, Slide } from "../services/slideMaisVendidosService";
export default function MaisVendidos(){
    const [slides, setSlides] = useState<Slide[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSlidesProdutos = async () => {
          try {
            const fetchedMaisVendidos = await fetchMaisVendidos();
            setSlides(fetchedMaisVendidos);
          } catch (error) {
            console.error("Erro ao carregar slides:", error);
          } finally {
            setLoading(false);
          }
        };
        loadSlidesProdutos();
      }, []); 

      if (loading) return <div>Carregando slides...</div>;
      if (!slides.length) return <div>Nenhum produto disponível.</div>;
    return(
        <>
          <Carousel slides={slides}/>
        </>
    )
}