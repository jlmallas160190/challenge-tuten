export const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em',
};

export const drawerMiniWidth = 80;
export const drawerWidth = 280;
export const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};
export const hexToRgb = (input) => {
  let inputAux = `${input} `;
  inputAux = inputAux.replace('#', '');
  const hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(inputAux) || (inputAux.length !== 3 && inputAux.length !== 6)) {
    throw new Error('input is not a valid hex color.');
  }
  if (inputAux.length === 3) {
    const first = inputAux[0];
    const second = inputAux[1];
    const last = inputAux[2];
    inputAux = first + first + second + second + last + last;
  }
  inputAux = inputAux.toUpperCase(inputAux);
  const first = inputAux[0] + inputAux[1];
  const second = inputAux[2] + inputAux[3];
  const last = inputAux[4] + inputAux[5];
  return `${parseInt(first, 16)}, ${parseInt(second, 16)}, ${parseInt(last, 16)}`;
};
