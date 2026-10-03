// Edit this file to change your name, age, intro and links.
export const site = {
  name: 'Ahmad',
  fullName: 'Ahmad Azim',
  // TODO: set your age (a number). It shows next to your name when set.
  age: null as number | null,
  description:
    'Ahmad Azim builds software that has to be right: a backtesting engine, a self-updating visa guide, AI whistleblowing intake.',
  intro:
    'I build software that has to be right. A backtesting engine that refuses to flatter a strategy. A visa guide that checks 305 government sources twice a day. An intake assistant that is not allowed to misquote.',
};

// Links with an empty href are hidden. TODO: fill in LinkedIn, X and a public email.
export const socials = [
  { label: 'GitHub', href: 'https://github.com/CodingwithAhmad1' },
  { label: 'LinkedIn', href: '' },
  { label: 'X', href: '' },
  { label: 'Email', href: '' },
].filter((s) => s.href);
