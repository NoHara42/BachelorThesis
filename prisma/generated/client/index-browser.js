
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.1.1
 * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
 */
Prisma.prismaVersion = {
  client: "4.1.1",
  engine: "8d8414deb360336e4698a65aa45a1fbaf1ce13d8"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AuthorScalarFieldEnum = makeEnum({
  author: 'author',
  forename: 'forename',
  surname: 'surname',
  birth: 'birth',
  death: 'death',
  workStart: 'workStart',
  gender: 'gender',
  religion: 'religion',
  ethnicity: 'ethnicity',
  nativeLanguage: 'nativeLanguage',
  childhoodResidence: 'childhoodResidence',
  childhoodRegion: 'childhoodRegion',
  residence: 'residence',
  regionY: 'regionY',
  literaryPeriodY: 'literaryPeriodY',
  partners: 'partners',
  children: 'children',
  highestEducation: 'highestEducation',
  biodiversitySpecification: 'biodiversitySpecification',
  field: 'field',
  occupation: 'occupation',
  country: 'country',
  workCount: 'workCount',
  vocabCount: 'vocabCount',
  wordCount: 'wordCount',
  birthname: 'birthname',
  pseudonym: 'pseudonym',
  aliases: 'aliases',
  father: 'father',
  mother: 'mother',
  languages: 'languages',
  employer: 'employer',
  position: 'position',
  university: 'university',
  academicDegree: 'academicDegree',
  member: 'member',
  deathManner: 'deathManner',
  deathCause: 'deathCause',
  completeFlagY: 'completeFlagY',
  age: 'age',
  siblings: 'siblings',
  socialStatus: 'socialStatus',
  mainRegion: 'mainRegion',
  mainRegionV2: 'mainRegionV2',
  locality: 'locality',
  mainResidence: 'mainResidence',
  id: 'id',
  authorX: 'authorX',
  authorY: 'authorY',
  listOfWorks: 'listOfWorks'
});

exports.Prisma.WorkScalarFieldEnum = makeEnum({
  fileId: 'fileId',
  rFrameMean: 'rFrameMean',
  nFrameMean: 'nFrameMean',
  hFrameMean: 'hFrameMean',
  sFrameMean: 'sFrameMean',
  rWork: 'rWork',
  nWork: 'nWork',
  hWork: 'hWork',
  sWork: 'sWork',
  rBeta: 'rBeta',
  hBeta: 'hBeta',
  sBeta: 'sBeta',
  rFrameMean_genDiv: 'rFrameMean_genDiv',
  rWork_genDiv: 'rWork_genDiv',
  nFrameMean_genDiv: 'nFrameMean_genDiv',
  nWork_genDiv: 'nWork_genDiv',
  vocab: 'vocab',
  words: 'words',
  rBeta_genDiv: 'rBeta_genDiv',
  nBeta_genDiv: 'nBeta_genDiv',
  lustrum: 'lustrum',
  title: 'title',
  work: 'work',
  agePublication: 'agePublication',
  year: 'year',
  join: 'join',
  split: 'split',
  regionX: 'regionX',
  originalLanguage: 'originalLanguage',
  literatureForm: 'literatureForm',
  genreX: 'genreX',
  genreY: 'genreY',
  origin: 'origin',
  mainSubject: 'mainSubject',
  narrativeLocation: 'narrativeLocation',
  downloads: 'downloads',
  size: 'size',
  completeFlagX: 'completeFlagX',
  literaryPeriodX: 'literaryPeriodX',
  literatureFormV2: 'literatureFormV2'
});

exports.Prisma.OccurrenceScalarFieldEnum = makeEnum({
  id: 'id',
  occId: 'occId',
  term: 'term',
  scientificName: 'scientificName',
  fileId: 'fileId',
  frameId: 'frameId',
  sentence: 'sentence',
  column: 'column',
  spalte: 'spalte'
});

exports.Prisma.TaxonScalarFieldEnum = makeEnum({
  occId: 'occId',
  term: 'term',
  scientificName: 'scientificName'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});


exports.Prisma.ModelName = makeEnum({
  Author: 'Author',
  Work: 'Work',
  Occurrence: 'Occurrence',
  Taxon: 'Taxon'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
