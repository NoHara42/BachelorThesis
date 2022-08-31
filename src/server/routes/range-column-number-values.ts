import { prisma } from "./../server";
import { deserialize } from "../utils/utils";

export const getRangeColumnNumberValues = async (req: any, res: any) => {
  let params: { columnName: string; tableName: string } = deserialize(
    req.body.config
  );
  const rangeValues = await prisma[params.tableName].aggregate({
    _min: { [params.columnName]: true },
    _max: { [params.columnName]: true },
  });
  res.send(Object.values(rangeValues).map((key) => key[params.columnName]));
};
