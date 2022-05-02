import { objectType } from 'nexus';

export const Author = objectType({
  name: 'Author',
  definition(t) {
    t.string('id');
    t.string('name');
  },
});
