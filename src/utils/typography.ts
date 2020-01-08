import Typography from 'typography';

const typography = new Typography({
  bodyFontFamily: ['Zilla Slab', 'serif'],
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerFontFamily: ['Raleway', 'sans-serif'],
  headerLineHeight: 1.4,
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export const adjustFontSizeTo = typography.adjustFontSizeTo;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

export default typography;
