"use client"
import React, { useEffect, useState } from "react";
import './Components/CSS/infoSpace.css'
import MaisVendidos from "./Components/maisVendidos";
import Modal from "./Components/modal";
import ProdutosFemininos from "./Components/produtosFemininos";
import ProdutosMasculinos from "./Components/produtosMasculinos";

export default function Home(){
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      setIsModalOpen(true);
    }
      }, []); 
  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('hasSeenModal', 'true');
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Aviso</h2>
        <p>
          Este site é meramente ilustrativo e está em desenvolvimento, e tem o único intuito de demonstrar
          habilidades técnicas em desenvolvimento web, sem quaisquer tipos de operações
          comerciais envolvidas.
        </p>
        <div className="modalButton" onClick={handleCloseModal}><h3>Entendi</h3></div>
      </Modal>
      <main>
      <div className="Banner Top"/>
      <h2 className="title">OS MAIS VENDIDOS</h2>
      <MaisVendidos />
      <div className="Banner Bottom"/>
      <h2 className="title">Produtos Femininos</h2>
      <ProdutosFemininos />
      <h2 className="title">Produtos Masculinos</h2>
      <ProdutosMasculinos />
        <div className="info">
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className='clockIcon'/>
            <div className='infoSpace'>
              <h3>ATENDIMENTO</h3>
              <p> Segunda à Sexta das 8h às 18h</p>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className='boxIcon'/>
            <div className='infoSpace'>
              <h3>TROCAS E DEVOLUÇÕES</h3>
              <p>Até 7 dias após a compra</p>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className='cardIcon'/>
            <div className='infoSpace'>
              <h3>PARCELAMENTO</h3>
              <p>Até 10x sem juros no cartão</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
