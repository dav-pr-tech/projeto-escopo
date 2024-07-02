
import React from 'react';

const TabelaEscopo = ({ escopo }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Escopo do Projeto</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Tarefa</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Descrição</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Responsável</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Data de Início</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Data de Término</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Duração Estimada (dias)</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Dependências</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Observações</th>
                    </tr>
                </thead>
                <tbody>
                    {escopo.map((tarefa, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '10px' }}>{tarefa.tarefa}</td>
                            <td style={{ padding: '10px' }}>{tarefa.descricao}</td>
                            <td style={{ padding: '10px' }}>{tarefa.responsavel}</td>
                            <td style={{ padding: '10px' }}>{tarefa.dataInicio}</td>
                            <td style={{ padding: '10px' }}>{tarefa.dataTermino}</td>
                            <td style={{ padding: '10px' }}>{tarefa.duracaoEstimada}</td>
                            <td style={{ padding: '10px' }}>{tarefa.dependencias}</td>
                            <td style={{ padding: '10px' }}>{tarefa.observacoes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaEscopo;
