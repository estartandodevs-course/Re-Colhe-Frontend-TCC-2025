import Header from '../../components/Header/Header';
import InputBar from '../../components/InputBar/InputBar';
import simboloGPS from '../../assets/img/forum/location.png';
import NavButton from '../../components/NavButton/NavButton';
import './NovaSolicitacao.css';

const NovaSolicitacao = () => {
  return (
    <>
      <Header />
      <main className="pagina-nova-solicitacao">
        <h1>Nova solicitação</h1>

        <section className="nova-solicitacao-section">
          <form action="">

            <label htmlFor="">Categoria</label>
            <select disabled>
              <option>Selecione o tipo de solicitação</option>
            </select>

            <label htmlFor="">Título</label>
            <InputBar className="input-titulo" placeholder="EX: Sugestão para novo ponto de coleta." disabled />

            <label htmlFor="">Descrição</label>
            <InputBar className="input-descricao" placeholder="Descreva a sua solicitação em detalhes" disabled maxLength={500}
              showCharCounter={true} />

          </form>
        </section>
        <section className="localizacao-solicitacao-section">
          <div>
            <img src={simboloGPS} alt="síbolo de indicador GPS" />
            <h3>Localização</h3>
          </div>
          <form action="">

            <label htmlFor="">CEP</label>
            <InputBar className="input-cep" placeholder="00000-000" disabled />

            <label htmlFor="">Complemento</label>
            <InputBar className="input-complemento" disabled />

          </form>
        </section>


        <NavButton disabled label="Enviar solicitação" className="button-enviar-solicitacao" />

      </main>
    </>

  )
}

export default NovaSolicitacao