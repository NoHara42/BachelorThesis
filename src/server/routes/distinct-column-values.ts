import { prisma } from "./../server";
import { deserialize } from "../utils/utils";

export const getDistinctColumnValues = async (req: any, res: any) => {
  let params: { columnName: string; tableName: string } = deserialize(
    req.body.config
  );
  const distinctColumnValues = await prisma[params.tableName]
    .findMany({
      select: {
        [params.columnName]: true,
      },
      distinct: [params.columnName],
    })
    ?.then((arr) => arr?.flatMap((obj) => obj[params.columnName]))
    .then((arr) => Array.from(new Set(arr)))
    .then((uniqueProcessedArray) => res.send(uniqueProcessedArray));
};
