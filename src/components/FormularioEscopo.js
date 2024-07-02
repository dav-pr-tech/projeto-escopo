// src/components/FormularioEscopo.js
import React, { useState } from 'react';

const FormularioEscopo = ({ onAdicionarTarefa }) => {
    const [tarefa, setTarefa] = useState('');
    const [descricao, setDescricao] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataTermino, setDataTermino] = useState('');
    const [duracaoEstimada, setDuracaoEstimada] = useState('');
    const [dependencias, setDependencias] = useState('');
    const [observacoes, setObservacoes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const novaTarefa = {
            tarefa,
            descricao,
            responsavel,
            dataInicio,
            dataTermino,
            duracaoEstimada,
            dependencias,
            observacoes
        };
        onAdicionarTarefa([novaTarefa]);
        // Limpar os campos após adicionar a tarefa
        setTarefa('');
        setDescricao('');
        setResponsavel('');
        setDataInicio('');
        setDataTermino('');
        setDuracaoEstimada('');
        setDependencias('');
        setObservacoes('');
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>Adicionar Tarefa</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px' }}>
                <label>
                    Tarefa:
                    <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} required />
                </label>
                <label>
                    Descrição:
                    <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
                </label>
                <label>
                    Responsável:
                    <input type="text" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} required />
                </label>
                <label>
                    Data de Início:
                    <input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} required />
                </label>
                <label>
                    Data de Término:
                    <input type="date" value={dataTermino} onChange={(e) => setDataTermino(e.target.value)} required />
                </label>
                <label>
                    Duração Estimada (dias):
                    <input type="number" value={duracaoEstimada} onChange={(e) => setDuracaoEstimada(e.target.value)} required />
                </label>
                <label>
                    Dependências:
                    <input type="text" value={dependencias} onChange={(e) => setDependencias(e.target.value)} />
                </label>
                <label>
                    Observações:
                    <textarea value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
                </label>
                <button type="submit" style={{ marginTop: '10px' }}>Adicionar Tarefa</button>
            </form>
        </div>
    );
};

export default FormularioEscopo;
