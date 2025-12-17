import { css, keyframes } from '@emotion/css';

import { GrafanaTheme2 } from '@grafana/data';
import { t } from '@grafana/i18n';
import { useStyles2 } from '@grafana/ui';
import grafanaIconSvg from 'img/grafana_icon.svg';

export function BouncingLoader() {
  const styles = useStyles2(getStyles);

  return (
    <div
      className={styles.container}
      aria-live="polite"
      role="status"
      aria-label={t('bouncing-loader.label', 'Loading')}
    >
      <div className={styles.bounce}>
      <img alt="" src="public/img/entry_icon.svg" className={styles.logo} />
      </div>
    </div>
  );
}

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
    animationTimingFunction: 'cubic-bezier(0, 0, 0.5, 1)',
  },
  '100%': {
    opacity: 1,
  },
});

const pulse = keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});



const getStyles = (theme: GrafanaTheme2) => ({
  container: css({
    opacity: 0,
    [theme.transitions.handleMotion('no-preference')]: {
      animationName: fadeIn,
      animationIterationCount: 1,
      animationDuration: '0.9s',
      animationDelay: '0.5s',
      animationFillMode: 'forwards',
    },
    [theme.transitions.handleMotion('reduce')]: {
      animationName: pulse,
      animationIterationCount: 'infinite',
      animationDuration: '4s',
      animationDelay: '0.5s',
    },
  }),

  bounce: css({
    textAlign: 'center',  
  }),

  logo: css({
    display: 'inline-block',
    width: '48px',
    height: '48px',
  }),
});
