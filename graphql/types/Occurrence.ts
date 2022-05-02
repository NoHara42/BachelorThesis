import { objectType } from 'nexus';

export const Occurrence = objectType({
  name: 'Occurrence',
  definition(t) {
    t.string('id');
    t.int('taxon');
    t.string('sentence');
  },
});

/* 
export const LinksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.connectionField('links', {
      type: Link,
      resolve: async (_, { after, first }, ctx) => {
        const offset = after ? cursorToOffset(after) + 1 : 0;
        if (isNaN(offset)) throw new Error('cursor is invalid');

        const [totalCount, items] = await Promise.all([
          ctx.prisma.link.count(),
          ctx.prisma.link.findMany({
            take: first,
            skip: offset,
          }),
        ]);

        return connectionFromArraySlice(
          items,
          { first, after },
          { sliceStart: offset, arrayLength: totalCount }
        );
      },
    });
  },
}); */