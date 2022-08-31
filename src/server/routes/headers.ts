import { prisma } from './../server';
export const getHeaders = async (req: any, res: any) => {
  //@ts-ignore
  let headers = await prisma._baseDmmf.typeAndModelMap[req.query.tableName]
    .fields;
  // let headers;

  // // dummy data
  // headers = [{
  //   name: "birth",
  //   type: "Int",
  //   isId: false,
  // },
  // {
  //   name: "death",
  //   type: "Int",
  //   isId: false,
  // },
  // {
  //   name: "religion",
  //   type: "String",
  //   isId: false,
  // }]
  res.send(headers);
}