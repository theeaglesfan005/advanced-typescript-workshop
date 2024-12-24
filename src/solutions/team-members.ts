import { Equal, Expect } from 'type-testing';

// complexity: 3
// tags: utility-types

// Update the type `TeamMember` so that it includes the common properties
// between Developer and Manager, with their types from each interface.

interface Developer {
  name: string;
  skills: string[];
  projects: string[];
  level: 'junior' | 'mid' | 'senior';
  availability: number;
}

interface Manager {
  name: string;
  teamSize: number;
  departments: string[];
  level: 'assistant' | 'associate' | 'senior';
  availability: string;
}

type TeamMember = Pick<Developer | Manager, keyof Manager & keyof Developer>;

type cases = [
  Expect<
    Equal<
      TeamMember,
      {
        name: string;
        level: 'junior' | 'mid' | 'senior' | 'assistant' | 'associate' | 'senior';
        availability: string | number;
      }
    >
  >,
];
