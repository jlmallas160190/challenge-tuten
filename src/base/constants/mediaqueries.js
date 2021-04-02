export const PHONE = 'phone';
export const TABLET_PORTRAIT = 'tabletPortrait';
export const TABLET_LANDSCAPE = 'tabletLandscape';
export const DESKTOP_SMALL = 'desktopSmall';
export const DESKTOP = 'desktop';
export const DESKTOP_LARGE = 'desktopLarge';
export const DESKTOP_XLARGE = 'desktopXLarge';
export const mediaQueries = {
  [PHONE]: '48rem', // 768px
  [TABLET_PORTRAIT]: '37.5rem', // 600px
  [TABLET_LANDSCAPE]: '56.25rem', // 900px
  [DESKTOP_SMALL]: '64rem', // 1024px
  [DESKTOP]: '75rem', // 1200px
  [DESKTOP_LARGE]: '112.5rem', // 1800px,
  [DESKTOP_XLARGE]: '160rem', // 2560px
};
const NETBOOK_HEIGHT = 'netbookHeight';
const SHORT_HEIGHT = 'shortHeight';
export function isDesktop() {
  return window.matchMedia(`(min-width: ${DESKTOP_SMALL})`).matches;
}
export function isPhone() {
  return window.matchMedia(`(max-width: ${PHONE})`).matches;
}
export function isMediumOrUnder() {
  return window.matchMedia(`(max-width: ${DESKTOP_SMALL})`).matches;
}
export const heightQueries = {
  [NETBOOK_HEIGHT]: '700px',
  [SHORT_HEIGHT]: '500px',
};
export default mediaQueries;
