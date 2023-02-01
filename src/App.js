import './App.css';



import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='principal'>
      <Header />
      <section>
        <div className='coluna'>
          <div >
            <h2>Cadastro</h2>
            <div className='card'>
              <ul>
                <li><a href='/0'>Alteração de Senha</a></li>
                <li><a href='/a'>Cartão UERJ</a></li>
                <li><a href='/b'>Dados Bancários</a></li>
                <li><a href='/c'>Dados para Contato</a></li>
                <li><a href='/d'>Dados Pessoais</a></li>
                <li><a href='/e'>Emissão de Documentos</a></li>
              </ul>
            </div>
          </div>
          <div >
            <h2>Procedimento Acadêmico</h2>
            <div className='card'>
              <ul>
                <li><a href='/0'>Retorno Antecipado</a></li>
                <li><a href='/0'>Trancamento de Matrícula</a></li>
                <li><a href='/0'>Trancamento Especial</a></li>
                <li><a href='/0'>Transferência Interna</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='coluna'>
          <div >
            <h2>Consulta Acadêmica</h2>
            <div className='card'>
              <ul>
                <li><a href="/c">Atividades Realizadas</a></li>
                <li><a href="/c">Disciplinas Realizadas</a></li>
                <li><a href="/d">Turmas em Curso</a></li>
                <li><a href="/d">Notas do Período</a></li>
                <li><a href="/d">Pendências de Documentos</a></li>
                <li><a href="/d">Síntese de Formação</a></li>
                <li><a href="/d">Situação do ENADE</a></li>
              </ul>
            </div>
          </div>
          <div >
            <h2>Plano de Turma</h2>
            <div className='card'>
              <ul>
                <li><a href="/c">Disciplinas do Curso</a></li>
                <li><a href="/c">Disciplinas a Cursar</a></li>
                <li><a href="/c">Disciplinas Universais</a></li>
                <li><a href="/c">Horário das Turmas</a></li>
                <li><a href="/c">Tab. de Horários UERJ / CAP</a></li>
              </ul>
            </div>
          </div>
        <button>Encerrar</button>
        </div>
        <div className='coluna'>
          <div >
            <h2>Outros (Links Úteis)</h2>
            <div className='card'>
              <ul>
                <li><a href="/s">Protocolo DAA</a></li>
                <li><a href="/s">Consulte Página DAA</a></li>
                <li><a href="/s">Fluxograma dos Cursos</a></li>
                <li><a href="/s">Manual do Estudante</a></li>
                <li><a href="/s">Critérios de Avalição (Crédito)</a></li>
                <li><a href="/s">Critérios de Avalição (Seriado)</a></li>
              </ul>
            </div>

          </div>
          <div >
            <h2>Inscrição em Disciplinas</h2>
            <div className='card'>
              <ul>
                <li><a href="/s">SID: Solicitar Inscrição</a></li>
                <li><a href="/s">SID: Consultar Inscrição</a></li>
                <li><a href="/s">RID: Resultado Provisório</a></li>
                <li><a href="/s">RID: Resultado da Inscrição</a></li>
                <li><a href="/s">SAID: Alteração de Inscrição</a></li>
                <li><a href="/s">SAID: Cancelamento de Inscrição</a></li>
                <li><a href="/s">SAID: Consultar Recibos</a></li>
                <li><a href="/s">Ramificação: Abrir</a></li>
                <li><a href="/s">Ramificação: Excluir</a></li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}

export default App;
