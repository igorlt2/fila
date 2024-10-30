// fila.test.js

import { prioritario, comum, rapido, addComum, addRapido, addPrioritario, chamarRapido, chamarPrioritario, chamarComum, clicks } from './fila.js';

describe('Gerenciador de Filas - Testes Unitários', () => {
    beforeEach(() => {
        prioritario.length = 0;
        comum.length = 0;
        rapido.length = 0;
        clicks = 0;
    });

    test('Adicionar senha comum', () => {
        addComum();
        expect(comum).toContain("C-1");
        expect(clicks).toBe(1);
    });

    test('Adicionar senha rápida', () => {
        addRapido();
        expect(rapido).toContain("R-1");
        expect(clicks).toBe(1);
    });

    test('Adicionar senha prioritária', () => {
        addPrioritario();
        expect(prioritario).toContain("P-1");
        expect(clicks).toBe(1);
    });

    test('Chamar senha rápida com senha presente', () => {
        addRapido();
        chamarRapido();
        expect(rapido.length).toBe(0); 
    });

    test('Chamar senha prioritária quando não há rápida', () => {
        addPrioritario();
        chamarRapido();
        expect(prioritario.length).toBe(0); 
    });

    test('Chamar senha comum quando não há rápida ou prioritária', () => {
        addComum();
        chamarPrioritario();
        expect(comum.length).toBe(0); 
    });

    test('Chamar função com todas as filas vazias', () => {
        const element = document.createElement("div");
        element.id = "visor-tela";
        document.body.appendChild(element);
        
        chamarPrioritario();
        
        expect(document.getElementById("visor-tela").innerHTML).toBe("Não há Senhas");
        
        document.body.removeChild(element);
    });
});


