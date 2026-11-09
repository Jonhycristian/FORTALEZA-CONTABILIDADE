import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Página 404 simples da SPA. O netlify.toml mantém o fallback
// /* -> /index.html 200 (necessário para o roteamento client-side);
// esta rota "*" garante que URLs inválidas renderizem conteúdo
// real de "não encontrada" em vez da home (evita soft-404).
function NotFound() {
  useEffect(() => {
    document.title = 'Página não encontrada | Fortaleza Contabilidade';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-4">Erro 404</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Página não encontrada</h1>
      <p className="text-slate-600 mb-8 max-w-md">
        O endereço acessado não existe ou foi removido. Volte para a página inicial para continuar.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-700 transition-colors"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}

export default NotFound;
