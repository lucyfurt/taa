import React from 'react';

function Bilheteria() {
    const assentosDisponiveis = 750;
    const ingressosDisponiveis = 350;

    return (
        <>
            <div>
                <h2>Horário de funcionamento</h2>
                <p><strong>Terça a domingo das 13h30 às 18h30</strong></p>
            </div>

            <div>
                <h2>Informações de assentos</h2>
                <p>Assentos disponíveis: {assentosDisponiveis}</p>
            </div>

            <div>
                <h2>Ingressos disponíveis</h2>
                <p>Quantidade disponível: {ingressosDisponiveis}</p>
            </div>

            <div>

            </div>
            <h2>Como chegar</h2>
            <iframe
                title="Mapa da bilheteria"
                width="500"
                height="500"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9322008938943!2d-44.3050561259277!3d-2.529032438245369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68ee5fb3ba277%3A0x3f66c06359ed1621!2sTeatro%20Arthur%20Azevedo!5e0!3m2!1spt-BR!2sbr!4v1684798082286!5m2!1spt-BR!2sbr"
                allowFullScreen
            ></iframe>
        </>
    );
}

export default Bilheteria;
