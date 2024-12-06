import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const App = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    document.title = `Contatos: ${contatos.length}`;
  }, [contatos]);

  const adicionarContato = () => {
    if (nome && telefone && email) {
      const novoContato = {
        id: new Date().getTime(),
        nome,
        telefone,
        email,
      };
      setContatos((prevContatos) => [...prevContatos, novoContato]);
      setNome('');
      setTelefone('');
      setEmail('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const removerContato = (id) => {
    const novaLista = contatos.filter(contato => contato.id !== id);
    setContatos(novaLista);
  };

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={adicionarContato}>Adicionar Contato</button>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.id}>
            {contato.nome} - {contato.telefone} - {contato.email}
            <button onClick={() => removerContato(contato.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

