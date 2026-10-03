// Edit this file to change your name, age, intro and links.
export const site = {
  name: 'Ahmad',
  fullName: 'Ahmad Azim',
  // TODO: set your age (a number). It shows next to your name when set.
  age: null as number | null,
  description:
    'Ahmad Azim builds software for people: visa guidance for students, safe whistleblowing, law learning, a student parliament. And a trading engine to fund it.',
  statement: 'I build software for people.',
  intro:
    "For students crossing borders, people brave enough to report wrongdoing, future lawyers, and pupils who want to be heard. And one engine, still being built, to pay for all of it in the long run.",
};

// Links with an empty href are hidden. TODO: fill in LinkedIn, X and a public email.
export const socials = [
  { label: 'GitHub', href: 'https://github.com/CodingwithAhmad1' },
  { label: 'LinkedIn', href: '' },
  { label: 'X', href: '' },
  { label: 'Email', href: '' },
].filter((s) => s.href);
