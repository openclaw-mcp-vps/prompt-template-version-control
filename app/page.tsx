export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Tooling
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Git for AI Prompt Templates
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Version control, A/B testing, and performance tracking for your AI prompts.
          Branch, iterate, and roll back with confidence — built for prompt engineers.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start for $39/mo
        </a>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: '⎇', title: 'Branch & Merge', desc: 'Git-like workflows for prompt iterations. Experiment safely on branches, merge winners to main.' },
            { icon: '⚡', title: 'A/B Testing', desc: 'Run live A/B tests across prompt versions with real LLM calls and automatic performance scoring.' },
            { icon: '↩', title: 'Instant Rollback', desc: 'One-click rollback to any previous prompt version. Full audit trail with diffs and change history.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] mb-6">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prompt versions',
              'A/B testing with metrics',
              'GPT-4, Claude, Gemini integrations',
              'Team collaboration (up to 10 seats)',
              'Full version history & diffs',
              'Priority support'
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
          <p className="text-[#8b949e] text-xs mt-4">14-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which LLMs are supported?',
              a: 'PromptVCS integrates with OpenAI (GPT-3.5, GPT-4), Anthropic (Claude 3), and Google (Gemini). More providers are added regularly.'
            },
            {
              q: 'How does A/B testing work?',
              a: 'Define two or more prompt variants, set a traffic split, and PromptVCS routes real requests to each variant. Performance metrics like latency, cost, and custom scores are tracked automatically.'
            },
            {
              q: 'Can I self-host PromptVCS?',
              a: 'Self-hosting is available on our Enterprise plan. The SaaS plan at $39/mo is fully managed with 99.9% uptime SLA.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} PromptVCS. All rights reserved.
      </footer>
    </main>
  )
}
