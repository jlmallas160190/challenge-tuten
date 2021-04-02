export const LIGHT_BLUE = '#00acc1';
export const ORANGE = '#fb9902';
export const MEDIUM_LIGHT_BLUE = '#26c6da';
export const MEDIUM_TOFU = '#E5E5E6';
export const MEDIUM_TOMATO = '#F37059';
export const GRAY = '#DDD';
export const DARK_COLOR = '#3C4858';
export const MEDIUM_GRAY = '#505050';
export const LIGHT_GRAY = '#eee';
export const YELLOW = '#f5c71a';
export const GREEN = '#008000';
export const TOFU = '#F5F5F6';
export const TOMATO = '#f44336';
export const WHITE = '#FFFFFF';
export const ON_WHITE = '#f9f9f9';
export const OFF_WHITE = '#f2f2f4';
export const FILTER_GRADIENT = `linear-gradient(to bottom, ${WHITE}, ${OFF_WHITE})`;
export const LOADER_SECONDARY = '#f0f0f0';
export const BLACK = '#000';
export const GOOGLE_COLOR = '#dd4b39';
export const LINKEDIN_COLOR = '#0976b4';
export const PINTEREST_COLOR = '#cc2127';
export const YOUTUBE_COLOR = '#e52d27';
export const TUMBLR_COLOR = '#35465c';
export const BEHANCE_COLOR = '#1769ff';
export const REDDIT_COLOR = '#ff4500';
export const TWITTER_COLOR = '#55acee';
export const ROSE_COLOR = '#e91e63';

export const colors = {
  lightBlue: LIGHT_BLUE,
  mediumLightBlue: MEDIUM_LIGHT_BLUE,
  tofu: TOFU,
  tomato: TOMATO,
  white: WHITE,
  gray: GRAY,
  mediumGray: MEDIUM_GRAY,
};
export const hexToRgb = (input) => {
  let newInput = input.replace('#', '');
  const hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(newInput) || (newInput.length !== 3 && newInput.length !== 6)) {
    throw new Error('input is not a valid hex color.');
  }
  if (newInput.length === 3) {
    const first = newInput[0];
    const second = newInput[1];
    const last = newInput[2];
    newInput = first + first + second + second + last + last;
  }
  newInput = input.toUpperCase(input);
  const first = newInput[0] + newInput[1];
  const second = newInput[2] + newInput[3];
  const last = newInput[4] + newInput[5];
  return `${parseInt(first, 16)}, ${parseInt(second, 16)}, ${parseInt(last, 16)}, ${newInput}`;
};
