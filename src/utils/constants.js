export const names = ['Braavos', 'Reverlands', 'Westerlands', 'Crownlands'];
export const getRundomIndex = bound => Math.trunc(Math.random() * bound);
export const getBank = index => ({name: names[index]});