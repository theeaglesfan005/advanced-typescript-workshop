/**
 * Hi nosy parker! This internal file has nothing to do with the exercises.
 */
import { glob } from 'glob';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const ROOT = 'https://github.com/m-thompson-code/advanced-typescript-workshop/tree/main';
const DIFFICULTIES = ['easy', 'medium', 'hard', 'extreme'] as const;
const TAGS = [
  'conditional-types',
  'index-accessed',
  'template-literals',
  'learning-generics',
  'learning-arrays',
  'generics-with-constraints',
  'utility-types',
  'mapped-types',
  'key-remapping',
  'infer',
  'distribution',
  'recursion',
  'todo', // TODO: remove
] as const;

type Difficulty = (typeof DIFFICULTIES)[number];
type Tag = (typeof TAGS)[number];

const getUrl = (filepath: string) => {
  return join(ROOT, filepath);
};

const getDifficulty = (file: string) => {
  const rawDifficulty = file.split('\n').find((line) => line.startsWith('// difficulty:'));

  if (!rawDifficulty) {
    throw new Error('Unexpected missing difficulty');
  }

  const difficulty = rawDifficulty.slice('// difficulty:'.length).trim();

  if (!DIFFICULTIES.includes(difficulty as Difficulty)) {
    throw new Error(`Unexpected invalid difficulty: ${difficulty}`);
  }

  return difficulty;
};

const getTags = (file: string) => {
  const rawTags = file.split('\n').find((line) => line.startsWith('// tags:'));

  if (!rawTags) {
    throw new Error('Unexpected missing tags');
  }

  const tags = rawTags
    .slice('// tags:'.length)
    .split(',')
    .map((tag) => tag.trim());

  const unknownTag = tags.find((tag) => !TAGS.includes(tag as Tag));

  if (unknownTag) {
    throw new Error(`Unexpected invalid unknownTag: ${unknownTag}`);
  }

  return tags.sort() as Tag[];
};

const main = async () => {
  const filepaths = await glob(['./src/exercises/*.ts', './src/pending/*.ts'], {
    nodir: true,
  });

  const sets = await Promise.all(
    filepaths.map((filepath) =>
      readFile(filepath, { encoding: 'utf8' }).then((file) => {
        try {
          return {
            filepath,
            url: getUrl(filepath),
            difficulty: getDifficulty(file),
            tags: getTags(file),
          };
        } catch (e) {
          console.error(`Unexpected issue with file at ${filepath}`);
          throw e;
        }
      }),
    ),
  );

  const counts = TAGS.reduce(
    (acc, tag) => {
      acc[tag] = 0;
      return acc;
    },
    {} as Record<Tag, number>,
  );

  // TODO: handle that there's dup counts for extreme version of exercise

  sets.forEach(({ tags }) => {
    tags.forEach((tag) => (counts[tag] += 1));
  });

  const output = {
    files: sets,
    counts,
  };

  console.log(output);

  await writeFile('output.json', JSON.stringify(output, null, 2));
};

main();
