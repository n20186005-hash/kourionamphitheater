import { useTranslations, useMessages } from 'next-intl';

export default function SeasonSection() {
  const t = useTranslations('season');
  const messages = useMessages() as any;
  const months = (messages?.season?.months || []) as Array<{
    month: string;
    description: string;
  }>;
  const tips = (messages?.season?.tips || []) as string[];

  return (
    <section id="season" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
        <p className="text-base mb-2" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <p className="text-sm mb-10" style={{ color: 'var(--text-muted)' }}>{t('note')}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {months.map((m, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border"
              style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
            >
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--accent)' }}>
                {m.month}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {m.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 p-6 sm:p-8 rounded-2xl"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}
        >
          <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('tipsTitle')}
          </h3>
          <ul className="space-y-3">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <span className="text-[var(--accent)] font-bold flex-shrink-0">{i + 1}.</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
