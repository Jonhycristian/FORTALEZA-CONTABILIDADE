import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { usePageSeo } from '../utils/seo';

const ATUALIZADO_EM = '11 de novembro de 2026';

function Privacidade() {
  usePageSeo({
    title: 'Política de Privacidade | Fortaleza Contabilidade',
    description:
      'Saiba como a Fortaleza Contabilidade trata os dados pessoais informados em nosso site e aplicativo, conforme a LGPD.',
    path: '/politica-de-privacidade',
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <header className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 font-bold">
            <img
              src="/logo-06-oficial-fundo-transparente.png"
              alt="Fortaleza Contabilidade"
              className="h-10 w-auto bg-white/5 rounded-lg p-1"
            />
            <span className="hidden sm:inline">Fortaleza Contabilidade</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition">
            <ArrowLeft size={16} /> Voltar ao site
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 text-blue-700 font-bold text-sm mb-3">
          <ShieldCheck size={20} /> Privacidade e LGPD
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Política de Privacidade</h1>
        <p className="text-slate-500 text-sm mb-10">Última atualização: {ATUALIZADO_EM}</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Quem somos</h2>
            <p>
              A <strong>Fortaleza Contabilidade</strong>, inscrita no CNPJ <strong>45.474.189/0001-92</strong>, é
              responsável pelo site <strong>www.fortalezacontabilidade.com.br</strong> e pelo aplicativo
              disponibilizado na Google Play Store. Atuamos com serviços contábeis, com atendimento 100% online.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Quais dados tratamos</h2>
            <p className="mb-2">
              O site e o aplicativo não criam contas de usuário e não armazenam dados em servidores próprios. Os
              dados informados por você são utilizados apenas para viabilizar o atendimento:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Formulário de contato:</strong> nome, telefone, e-mail, assunto e mensagem. Ao enviar, esses
                dados são encaminhados por você mesmo para a conversa de WhatsApp da Fortaleza Contabilidade.
              </li>
              <li>
                <strong>Dados de navegação:</strong> informações técnicas geradas automaticamente pelo provedor de
                hospedagem, como endereço IP, data e hora de acesso, para segurança e funcionamento do site.
              </li>
            </ul>
            <p className="mt-2">
              Não coletamos dados sensíveis, não usamos os dados para publicidade e não vendemos informações
              pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Para que usamos os dados</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responder solicitações de contato e orçamento;</li>
              <li>Prestar os serviços contábeis contratados e cumprir obrigações legais e regulatórias;</li>
              <li>Manter a segurança e o funcionamento do site e do aplicativo;</li>
              <li>Atender solicitações e exercício de direitos previstos na LGPD.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Bases legais</h2>
            <p>
              O tratamento ocorre com base no consentimento do titular (art. 7º, I, da LGPD), na execução de
              contrato ou procedimentos preliminares (art. 7º, V), no cumprimento de obrigação legal ou regulatória
              (art. 7º, II) e no legítimo interesse para segurança e prevenção a fraudes (art. 7º, IX).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Compartilhamento com terceiros</h2>
            <p className="mb-2">Para operar o site e o aplicativo, podemos utilizar os seguintes serviços:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>WhatsApp (Meta):</strong> quando você opta por enviar a mensagem pelo formulário ou pelo botão de contato;</li>
              <li><strong>Netlify:</strong> hospedagem do site e registros técnicos de acesso;</li>
              <li><strong>Google Fonts:</strong> carregamento das fontes utilizadas no site.</li>
            </ul>
            <p className="mt-2">
              Esses fornecedores possuem políticas de privacidade próprias e podem tratar dados fora do Brasil. Não
              compartilhamos dados com terceiros para fins de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">6. Cookies e tecnologias semelhantes</h2>
            <p>
              O site não utiliza cookies próprios de publicidade ou de análise de comportamento. O aplicativo não
              utiliza rastreamento. Eventuais cookies técnicos podem ser definidos pelo provedor de hospedagem para
              segurança e desempenho.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">7. Armazenamento e segurança</h2>
            <p>
              As mensagens recebidas ficam armazenadas nos canais de atendimento da Fortaleza Contabilidade pelo
              tempo necessário à prestação do serviço e ao cumprimento de obrigações legais. Adotamos medidas
              técnicas e administrativas razoáveis para proteger os dados contra acesso não autorizado, perda ou
              alteração.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">8. Seus direitos</h2>
            <p className="mb-2">Nos termos da LGPD, você pode solicitar:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confirmação da existência de tratamento e acesso aos dados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
              <li>Portabilidade, quando aplicável;</li>
              <li>Informação sobre compartilhamentos realizados;</li>
              <li>Revogação do consentimento e oposição a tratamentos específicos.</li>
            </ul>
            <p className="mt-2">
              Para exercer seus direitos, entre em contato pelo WhatsApp <strong>(62) 99600-0930</strong>. Responderemos
              no prazo previsto na legislação.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">9. Menores de idade</h2>
            <p>
              Os serviços são destinados a maiores de 18 anos. Não coletamos intencionalmente dados de crianças ou
              adolescentes. Caso identifique esse tipo de dado, entre em contato para que possamos eliminá-lo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">10. Alterações desta política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade para refletir mudanças legais ou operacionais. A versão
              vigente será sempre publicada nesta página, com a data de atualização no topo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">11. Contato</h2>
            <p>
              Dúvidas sobre esta política ou sobre o tratamento de dados podem ser enviadas pelo WhatsApp{' '}
              <strong>(62) 99600-0930</strong> ou pelo formulário de contato do site.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Fortaleza Contabilidade — CNPJ 45.474.189/0001-92
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link to="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            <ArrowLeft size={18} /> Voltar para o site
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Privacidade;
