import { useTranslations, useMessages } from 'next-intl';

export default function LegendsSection() {
  const t = useTranslations('legends');
  const messages = useMessages() as any;
  const items = (messages?.legends?.items || []) as Array<{
    kind: string;
    name: string;
    content: string;
  }>;

  const badgeStyle = (kind: string) => {
    if (kind === 'legend') {
      return {
        background: 'rgba(212, 132, 61, 0.15)',
        color: '#a85520',
        border: '1px solid rgba(212, 132, 61, 0.35)',
      };
    }
    return {
      background: 'rgba(74, 144, 164, 0.15)',
      color: '#2d6375',
      border: '1px solid rgba(74, 144, 164, 0.35)',
    };
  };

  return (
    <section id="legends" className="section-padding">
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

        <div className="space-y-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl border"
              style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
                  style={badgeStyle(item.kind)}
                >
                  {item.kind === 'legend' ? t('badge.legend') : t('badge.history')}
                </span>
                <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {item.name}
                </h3>
              </div>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
