
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Author
 * 
 */
export type Author = {
  author: string | null
  forename: string | null
  surname: string | null
  birth: number | null
  death: number | null
  workStart: number | null
  gender: string | null
  religion: string | null
  ethnicity: string | null
  nativeLanguage: string | null
  childhoodResidence: string | null
  childhoodRegion: string | null
  residence: string | null
  regionY: string | null
  literaryPeriodY: string | null
  partners: number | null
  children: number | null
  highestEducation: string | null
  biodiversitySpecification: number | null
  field: string | null
  occupation: string | null
  country: string | null
  workCount: number | null
  vocabCount: number | null
  wordCount: number | null
  birthname: string | null
  pseudonym: string | null
  aliases: string | null
  father: string | null
  mother: string | null
  languages: string | null
  employer: string | null
  position: string | null
  university: string | null
  academicDegree: string | null
  member: string | null
  deathManner: string | null
  deathCause: string | null
  completeFlagY: number | null
  age: number | null
  siblings: number | null
  socialStatus: string | null
  mainRegion: string | null
  mainRegionV2: string | null
  locality: number | null
  mainResidence: string | null
  id: number
  authorX: string | null
  authorY: string | null
  listOfWorks: string[]
}

/**
 * Model Work
 * 
 */
export type Work = {
  fileId: string
  rFrameMean: number | null
  nFrameMean: number | null
  hFrameMean: number | null
  sFrameMean: number | null
  rWork: number | null
  nWork: number | null
  hWork: number | null
  sWork: number | null
  rBeta: number | null
  hBeta: number | null
  sBeta: number | null
  rFrameMean_genDiv: number | null
  rWork_genDiv: number | null
  nFrameMean_genDiv: number | null
  nWork_genDiv: number | null
  vocab: number | null
  words: number | null
  rBeta_genDiv: number | null
  nBeta_genDiv: number | null
  lustrum: number | null
  title: string | null
  work: string | null
  agePublication: number | null
  year: number | null
  join: number | null
  split: number | null
  regionX: string | null
  originalLanguage: string | null
  literatureForm: string[]
  genreX: string[]
  genreY: string | null
  origin: string | null
  mainSubject: string | null
  narrativeLocation: string | null
  downloads: number | null
  size: number | null
  completeFlagX: number | null
  literaryPeriodX: string | null
  literatureFormV2: string | null
}

/**
 * Model Occurrence
 * 
 */
export type Occurrence = {
  id: number
  occId: string | null
  term: string | null
  scientificName: string | null
  fileId: string
  frameId: number | null
  sentence: string | null
  column: number | null
  spalte: number | null
}

/**
 * Model Taxon
 * 
 */
export type Taxon = {
  occId: string
  term: string | null
  scientificName: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.author.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.author.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<GlobalReject>;

  /**
   * `prisma.work`: Exposes CRUD operations for the **Work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.work.findMany()
    * ```
    */
  get work(): Prisma.WorkDelegate<GlobalReject>;

  /**
   * `prisma.occurrence`: Exposes CRUD operations for the **Occurrence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Occurrences
    * const occurrences = await prisma.occurrence.findMany()
    * ```
    */
  get occurrence(): Prisma.OccurrenceDelegate<GlobalReject>;

  /**
   * `prisma.taxon`: Exposes CRUD operations for the **Taxon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taxons
    * const taxons = await prisma.taxon.findMany()
    * ```
    */
  get taxon(): Prisma.TaxonDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.1.1
   * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Author: 'Author',
    Work: 'Work',
    Occurrence: 'Occurrence',
    Taxon: 'Taxon'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorCountOutputType
   */


  export type AuthorCountOutputType = {
    works: number
  }

  export type AuthorCountOutputTypeSelect = {
    works?: boolean
  }

  export type AuthorCountOutputTypeGetPayload<
    S extends boolean | null | undefined | AuthorCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? AuthorCountOutputType
    : S extends undefined
    ? never
    : S extends AuthorCountOutputTypeArgs
    ?'include' extends U
    ? AuthorCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AuthorCountOutputType ? AuthorCountOutputType[P] : never
  } 
    : AuthorCountOutputType
  : AuthorCountOutputType




  // Custom InputTypes

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     * 
    **/
    select?: AuthorCountOutputTypeSelect | null
  }



  /**
   * Count Type WorkCountOutputType
   */


  export type WorkCountOutputType = {
    occurrences: number
    authors: number
  }

  export type WorkCountOutputTypeSelect = {
    occurrences?: boolean
    authors?: boolean
  }

  export type WorkCountOutputTypeGetPayload<
    S extends boolean | null | undefined | WorkCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? WorkCountOutputType
    : S extends undefined
    ? never
    : S extends WorkCountOutputTypeArgs
    ?'include' extends U
    ? WorkCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof WorkCountOutputType ? WorkCountOutputType[P] : never
  } 
    : WorkCountOutputType
  : WorkCountOutputType




  // Custom InputTypes

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WorkCountOutputType
     * 
    **/
    select?: WorkCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Author
   */


  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    birth: number | null
    death: number | null
    workStart: number | null
    partners: number | null
    children: number | null
    biodiversitySpecification: number | null
    workCount: number | null
    vocabCount: number | null
    wordCount: number | null
    completeFlagY: number | null
    age: number | null
    siblings: number | null
    locality: number | null
    id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    birth: number | null
    death: number | null
    workStart: number | null
    partners: number | null
    children: number | null
    biodiversitySpecification: number | null
    workCount: number | null
    vocabCount: number | null
    wordCount: number | null
    completeFlagY: number | null
    age: number | null
    siblings: number | null
    locality: number | null
    id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    author: string | null
    forename: string | null
    surname: string | null
    birth: number | null
    death: number | null
    workStart: number | null
    gender: string | null
    religion: string | null
    ethnicity: string | null
    nativeLanguage: string | null
    childhoodResidence: string | null
    childhoodRegion: string | null
    residence: string | null
    regionY: string | null
    literaryPeriodY: string | null
    partners: number | null
    children: number | null
    highestEducation: string | null
    biodiversitySpecification: number | null
    field: string | null
    occupation: string | null
    country: string | null
    workCount: number | null
    vocabCount: number | null
    wordCount: number | null
    birthname: string | null
    pseudonym: string | null
    aliases: string | null
    father: string | null
    mother: string | null
    languages: string | null
    employer: string | null
    position: string | null
    university: string | null
    academicDegree: string | null
    member: string | null
    deathManner: string | null
    deathCause: string | null
    completeFlagY: number | null
    age: number | null
    siblings: number | null
    socialStatus: string | null
    mainRegion: string | null
    mainRegionV2: string | null
    locality: number | null
    mainResidence: string | null
    id: number | null
    authorX: string | null
    authorY: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    author: string | null
    forename: string | null
    surname: string | null
    birth: number | null
    death: number | null
    workStart: number | null
    gender: string | null
    religion: string | null
    ethnicity: string | null
    nativeLanguage: string | null
    childhoodResidence: string | null
    childhoodRegion: string | null
    residence: string | null
    regionY: string | null
    literaryPeriodY: string | null
    partners: number | null
    children: number | null
    highestEducation: string | null
    biodiversitySpecification: number | null
    field: string | null
    occupation: string | null
    country: string | null
    workCount: number | null
    vocabCount: number | null
    wordCount: number | null
    birthname: string | null
    pseudonym: string | null
    aliases: string | null
    father: string | null
    mother: string | null
    languages: string | null
    employer: string | null
    position: string | null
    university: string | null
    academicDegree: string | null
    member: string | null
    deathManner: string | null
    deathCause: string | null
    completeFlagY: number | null
    age: number | null
    siblings: number | null
    socialStatus: string | null
    mainRegion: string | null
    mainRegionV2: string | null
    locality: number | null
    mainResidence: string | null
    id: number | null
    authorX: string | null
    authorY: string | null
  }

  export type AuthorCountAggregateOutputType = {
    author: number
    forename: number
    surname: number
    birth: number
    death: number
    workStart: number
    gender: number
    religion: number
    ethnicity: number
    nativeLanguage: number
    childhoodResidence: number
    childhoodRegion: number
    residence: number
    regionY: number
    literaryPeriodY: number
    partners: number
    children: number
    highestEducation: number
    biodiversitySpecification: number
    field: number
    occupation: number
    country: number
    workCount: number
    vocabCount: number
    wordCount: number
    birthname: number
    pseudonym: number
    aliases: number
    father: number
    mother: number
    languages: number
    employer: number
    position: number
    university: number
    academicDegree: number
    member: number
    deathManner: number
    deathCause: number
    completeFlagY: number
    age: number
    siblings: number
    socialStatus: number
    mainRegion: number
    mainRegionV2: number
    locality: number
    mainResidence: number
    id: number
    authorX: number
    authorY: number
    listOfWorks: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    birth?: true
    death?: true
    workStart?: true
    partners?: true
    children?: true
    biodiversitySpecification?: true
    workCount?: true
    vocabCount?: true
    wordCount?: true
    completeFlagY?: true
    age?: true
    siblings?: true
    locality?: true
    id?: true
  }

  export type AuthorSumAggregateInputType = {
    birth?: true
    death?: true
    workStart?: true
    partners?: true
    children?: true
    biodiversitySpecification?: true
    workCount?: true
    vocabCount?: true
    wordCount?: true
    completeFlagY?: true
    age?: true
    siblings?: true
    locality?: true
    id?: true
  }

  export type AuthorMinAggregateInputType = {
    author?: true
    forename?: true
    surname?: true
    birth?: true
    death?: true
    workStart?: true
    gender?: true
    religion?: true
    ethnicity?: true
    nativeLanguage?: true
    childhoodResidence?: true
    childhoodRegion?: true
    residence?: true
    regionY?: true
    literaryPeriodY?: true
    partners?: true
    children?: true
    highestEducation?: true
    biodiversitySpecification?: true
    field?: true
    occupation?: true
    country?: true
    workCount?: true
    vocabCount?: true
    wordCount?: true
    birthname?: true
    pseudonym?: true
    aliases?: true
    father?: true
    mother?: true
    languages?: true
    employer?: true
    position?: true
    university?: true
    academicDegree?: true
    member?: true
    deathManner?: true
    deathCause?: true
    completeFlagY?: true
    age?: true
    siblings?: true
    socialStatus?: true
    mainRegion?: true
    mainRegionV2?: true
    locality?: true
    mainResidence?: true
    id?: true
    authorX?: true
    authorY?: true
  }

  export type AuthorMaxAggregateInputType = {
    author?: true
    forename?: true
    surname?: true
    birth?: true
    death?: true
    workStart?: true
    gender?: true
    religion?: true
    ethnicity?: true
    nativeLanguage?: true
    childhoodResidence?: true
    childhoodRegion?: true
    residence?: true
    regionY?: true
    literaryPeriodY?: true
    partners?: true
    children?: true
    highestEducation?: true
    biodiversitySpecification?: true
    field?: true
    occupation?: true
    country?: true
    workCount?: true
    vocabCount?: true
    wordCount?: true
    birthname?: true
    pseudonym?: true
    aliases?: true
    father?: true
    mother?: true
    languages?: true
    employer?: true
    position?: true
    university?: true
    academicDegree?: true
    member?: true
    deathManner?: true
    deathCause?: true
    completeFlagY?: true
    age?: true
    siblings?: true
    socialStatus?: true
    mainRegion?: true
    mainRegionV2?: true
    locality?: true
    mainResidence?: true
    id?: true
    authorX?: true
    authorY?: true
  }

  export type AuthorCountAggregateInputType = {
    author?: true
    forename?: true
    surname?: true
    birth?: true
    death?: true
    workStart?: true
    gender?: true
    religion?: true
    ethnicity?: true
    nativeLanguage?: true
    childhoodResidence?: true
    childhoodRegion?: true
    residence?: true
    regionY?: true
    literaryPeriodY?: true
    partners?: true
    children?: true
    highestEducation?: true
    biodiversitySpecification?: true
    field?: true
    occupation?: true
    country?: true
    workCount?: true
    vocabCount?: true
    wordCount?: true
    birthname?: true
    pseudonym?: true
    aliases?: true
    father?: true
    mother?: true
    languages?: true
    employer?: true
    position?: true
    university?: true
    academicDegree?: true
    member?: true
    deathManner?: true
    deathCause?: true
    completeFlagY?: true
    age?: true
    siblings?: true
    socialStatus?: true
    mainRegion?: true
    mainRegionV2?: true
    locality?: true
    mainResidence?: true
    id?: true
    authorX?: true
    authorY?: true
    listOfWorks?: true
    _all?: true
  }

  export type AuthorAggregateArgs = {
    /**
     * Filter which Author to aggregate.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs = {
    where?: AuthorWhereInput
    orderBy?: Enumerable<AuthorOrderByWithAggregationInput>
    by: Array<AuthorScalarFieldEnum>
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }


  export type AuthorGroupByOutputType = {
    author: string | null
    forename: string | null
    surname: string | null
    birth: number | null
    death: number | null
    workStart: number | null
    gender: string | null
    religion: string | null
    ethnicity: string | null
    nativeLanguage: string | null
    childhoodResidence: string | null
    childhoodRegion: string | null
    residence: string | null
    regionY: string | null
    literaryPeriodY: string | null
    partners: number | null
    children: number | null
    highestEducation: string | null
    biodiversitySpecification: number | null
    field: string | null
    occupation: string | null
    country: string | null
    workCount: number | null
    vocabCount: number | null
    wordCount: number | null
    birthname: string | null
    pseudonym: string | null
    aliases: string | null
    father: string | null
    mother: string | null
    languages: string | null
    employer: string | null
    position: string | null
    university: string | null
    academicDegree: string | null
    member: string | null
    deathManner: string | null
    deathCause: string | null
    completeFlagY: number | null
    age: number | null
    siblings: number | null
    socialStatus: string | null
    mainRegion: string | null
    mainRegionV2: string | null
    locality: number | null
    mainResidence: string | null
    id: number
    authorX: string | null
    authorY: string | null
    listOfWorks: string[]
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect = {
    author?: boolean
    forename?: boolean
    surname?: boolean
    birth?: boolean
    death?: boolean
    workStart?: boolean
    gender?: boolean
    religion?: boolean
    ethnicity?: boolean
    nativeLanguage?: boolean
    childhoodResidence?: boolean
    childhoodRegion?: boolean
    residence?: boolean
    regionY?: boolean
    literaryPeriodY?: boolean
    partners?: boolean
    children?: boolean
    highestEducation?: boolean
    biodiversitySpecification?: boolean
    field?: boolean
    occupation?: boolean
    country?: boolean
    workCount?: boolean
    vocabCount?: boolean
    wordCount?: boolean
    birthname?: boolean
    pseudonym?: boolean
    aliases?: boolean
    father?: boolean
    mother?: boolean
    languages?: boolean
    employer?: boolean
    position?: boolean
    university?: boolean
    academicDegree?: boolean
    member?: boolean
    deathManner?: boolean
    deathCause?: boolean
    completeFlagY?: boolean
    age?: boolean
    siblings?: boolean
    socialStatus?: boolean
    mainRegion?: boolean
    mainRegionV2?: boolean
    locality?: boolean
    mainResidence?: boolean
    id?: boolean
    authorX?: boolean
    authorY?: boolean
    works?: boolean | WorkFindManyArgs
    listOfWorks?: boolean
    _count?: boolean | AuthorCountOutputTypeArgs
  }

  export type AuthorInclude = {
    works?: boolean | WorkFindManyArgs
    _count?: boolean | AuthorCountOutputTypeArgs
  }

  export type AuthorGetPayload<
    S extends boolean | null | undefined | AuthorArgs,
    U = keyof S
      > = S extends true
        ? Author
    : S extends undefined
    ? never
    : S extends AuthorArgs | AuthorFindManyArgs
    ?'include' extends U
    ? Author  & {
    [P in TrueKeys<S['include']>]:
        P extends 'works' ? Array < WorkGetPayload<S['include'][P]>>  :
        P extends '_count' ? AuthorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'works' ? Array < WorkGetPayload<S['select'][P]>>  :
        P extends '_count' ? AuthorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Author ? Author[P] : never
  } 
    : Author
  : Author


  type AuthorCountArgs = Merge<
    Omit<AuthorFindManyArgs, 'select' | 'include'> & {
      select?: AuthorCountAggregateInputType | true
    }
  >

  export interface AuthorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuthorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Author'> extends True ? CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>> : CheckSelect<T, Prisma__AuthorClient<Author | null >, Prisma__AuthorClient<AuthorGetPayload<T> | null >>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuthorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Author'> extends True ? CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>> : CheckSelect<T, Prisma__AuthorClient<Author | null >, Prisma__AuthorClient<AuthorGetPayload<T> | null >>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `author`
     * const authorWithAuthorOnly = await prisma.author.findMany({ select: { author: true } })
     * 
    **/
    findMany<T extends AuthorFindManyArgs>(
      args?: SelectSubset<T, AuthorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Author>>, PrismaPromise<Array<AuthorGetPayload<T>>>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
    **/
    create<T extends AuthorCreateArgs>(
      args: SelectSubset<T, AuthorCreateArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Create many Authors.
     *     @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     *     @example
     *     // Create many Authors
     *     const author = await prisma.author.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthorCreateManyArgs>(
      args?: SelectSubset<T, AuthorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
    **/
    delete<T extends AuthorDeleteArgs>(
      args: SelectSubset<T, AuthorDeleteArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthorUpdateArgs>(
      args: SelectSubset<T, AuthorUpdateArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthorDeleteManyArgs>(
      args?: SelectSubset<T, AuthorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthorUpdateManyArgs>(
      args: SelectSubset<T, AuthorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
    **/
    upsert<T extends AuthorUpsertArgs>(
      args: SelectSubset<T, AuthorUpsertArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Find one Author that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AuthorFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Find the first Author that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuthorFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AuthorClient<Author>, Prisma__AuthorClient<AuthorGetPayload<T>>>

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuthorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    works<T extends WorkFindManyArgs = {}>(args?: Subset<T, WorkFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Work>>, PrismaPromise<Array<WorkGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Author base type for findUnique actions
   */
  export type AuthorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter, which Author to fetch.
     * 
    **/
    where: AuthorWhereUniqueInput
  }

  /**
   * Author: findUnique
   */
  export interface AuthorFindUniqueArgs extends AuthorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Author base type for findFirst actions
   */
  export type AuthorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter, which Author to fetch.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     * 
    **/
    distinct?: Enumerable<AuthorScalarFieldEnum>
  }

  /**
   * Author: findFirst
   */
  export interface AuthorFindFirstArgs extends AuthorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter, which Authors to fetch.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AuthorScalarFieldEnum>
  }


  /**
   * Author create
   */
  export type AuthorCreateArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * The data needed to create a Author.
     * 
    **/
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }


  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs = {
    /**
     * The data used to create many Authors.
     * 
    **/
    data: Enumerable<AuthorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Author update
   */
  export type AuthorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * The data needed to update a Author.
     * 
    **/
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     * 
    **/
    where: AuthorWhereUniqueInput
  }


  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs = {
    /**
     * The data used to update Authors.
     * 
    **/
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     * 
    **/
    where?: AuthorWhereInput
  }


  /**
   * Author upsert
   */
  export type AuthorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * The filter to search for the Author to update in case it exists.
     * 
    **/
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     * 
    **/
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }


  /**
   * Author delete
   */
  export type AuthorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter which Author to delete.
     * 
    **/
    where: AuthorWhereUniqueInput
  }


  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs = {
    /**
     * Filter which Authors to delete
     * 
    **/
    where?: AuthorWhereInput
  }


  /**
   * Author: findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs = AuthorFindUniqueArgsBase
      

  /**
   * Author: findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs = AuthorFindFirstArgsBase
      

  /**
   * Author without action
   */
  export type AuthorArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
  }



  /**
   * Model Work
   */


  export type AggregateWork = {
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  export type WorkAvgAggregateOutputType = {
    rFrameMean: number | null
    nFrameMean: number | null
    hFrameMean: number | null
    sFrameMean: number | null
    rWork: number | null
    nWork: number | null
    hWork: number | null
    sWork: number | null
    rBeta: number | null
    hBeta: number | null
    sBeta: number | null
    rFrameMean_genDiv: number | null
    rWork_genDiv: number | null
    nFrameMean_genDiv: number | null
    nWork_genDiv: number | null
    vocab: number | null
    words: number | null
    rBeta_genDiv: number | null
    nBeta_genDiv: number | null
    lustrum: number | null
    agePublication: number | null
    year: number | null
    join: number | null
    split: number | null
    downloads: number | null
    size: number | null
    completeFlagX: number | null
  }

  export type WorkSumAggregateOutputType = {
    rFrameMean: number | null
    nFrameMean: number | null
    hFrameMean: number | null
    sFrameMean: number | null
    rWork: number | null
    nWork: number | null
    hWork: number | null
    sWork: number | null
    rBeta: number | null
    hBeta: number | null
    sBeta: number | null
    rFrameMean_genDiv: number | null
    rWork_genDiv: number | null
    nFrameMean_genDiv: number | null
    nWork_genDiv: number | null
    vocab: number | null
    words: number | null
    rBeta_genDiv: number | null
    nBeta_genDiv: number | null
    lustrum: number | null
    agePublication: number | null
    year: number | null
    join: number | null
    split: number | null
    downloads: number | null
    size: number | null
    completeFlagX: number | null
  }

  export type WorkMinAggregateOutputType = {
    fileId: string | null
    rFrameMean: number | null
    nFrameMean: number | null
    hFrameMean: number | null
    sFrameMean: number | null
    rWork: number | null
    nWork: number | null
    hWork: number | null
    sWork: number | null
    rBeta: number | null
    hBeta: number | null
    sBeta: number | null
    rFrameMean_genDiv: number | null
    rWork_genDiv: number | null
    nFrameMean_genDiv: number | null
    nWork_genDiv: number | null
    vocab: number | null
    words: number | null
    rBeta_genDiv: number | null
    nBeta_genDiv: number | null
    lustrum: number | null
    title: string | null
    work: string | null
    agePublication: number | null
    year: number | null
    join: number | null
    split: number | null
    regionX: string | null
    originalLanguage: string | null
    genreY: string | null
    origin: string | null
    mainSubject: string | null
    narrativeLocation: string | null
    downloads: number | null
    size: number | null
    completeFlagX: number | null
    literaryPeriodX: string | null
    literatureFormV2: string | null
  }

  export type WorkMaxAggregateOutputType = {
    fileId: string | null
    rFrameMean: number | null
    nFrameMean: number | null
    hFrameMean: number | null
    sFrameMean: number | null
    rWork: number | null
    nWork: number | null
    hWork: number | null
    sWork: number | null
    rBeta: number | null
    hBeta: number | null
    sBeta: number | null
    rFrameMean_genDiv: number | null
    rWork_genDiv: number | null
    nFrameMean_genDiv: number | null
    nWork_genDiv: number | null
    vocab: number | null
    words: number | null
    rBeta_genDiv: number | null
    nBeta_genDiv: number | null
    lustrum: number | null
    title: string | null
    work: string | null
    agePublication: number | null
    year: number | null
    join: number | null
    split: number | null
    regionX: string | null
    originalLanguage: string | null
    genreY: string | null
    origin: string | null
    mainSubject: string | null
    narrativeLocation: string | null
    downloads: number | null
    size: number | null
    completeFlagX: number | null
    literaryPeriodX: string | null
    literatureFormV2: string | null
  }

  export type WorkCountAggregateOutputType = {
    fileId: number
    rFrameMean: number
    nFrameMean: number
    hFrameMean: number
    sFrameMean: number
    rWork: number
    nWork: number
    hWork: number
    sWork: number
    rBeta: number
    hBeta: number
    sBeta: number
    rFrameMean_genDiv: number
    rWork_genDiv: number
    nFrameMean_genDiv: number
    nWork_genDiv: number
    vocab: number
    words: number
    rBeta_genDiv: number
    nBeta_genDiv: number
    lustrum: number
    title: number
    work: number
    agePublication: number
    year: number
    join: number
    split: number
    regionX: number
    originalLanguage: number
    literatureForm: number
    genreX: number
    genreY: number
    origin: number
    mainSubject: number
    narrativeLocation: number
    downloads: number
    size: number
    completeFlagX: number
    literaryPeriodX: number
    literatureFormV2: number
    _all: number
  }


  export type WorkAvgAggregateInputType = {
    rFrameMean?: true
    nFrameMean?: true
    hFrameMean?: true
    sFrameMean?: true
    rWork?: true
    nWork?: true
    hWork?: true
    sWork?: true
    rBeta?: true
    hBeta?: true
    sBeta?: true
    rFrameMean_genDiv?: true
    rWork_genDiv?: true
    nFrameMean_genDiv?: true
    nWork_genDiv?: true
    vocab?: true
    words?: true
    rBeta_genDiv?: true
    nBeta_genDiv?: true
    lustrum?: true
    agePublication?: true
    year?: true
    join?: true
    split?: true
    downloads?: true
    size?: true
    completeFlagX?: true
  }

  export type WorkSumAggregateInputType = {
    rFrameMean?: true
    nFrameMean?: true
    hFrameMean?: true
    sFrameMean?: true
    rWork?: true
    nWork?: true
    hWork?: true
    sWork?: true
    rBeta?: true
    hBeta?: true
    sBeta?: true
    rFrameMean_genDiv?: true
    rWork_genDiv?: true
    nFrameMean_genDiv?: true
    nWork_genDiv?: true
    vocab?: true
    words?: true
    rBeta_genDiv?: true
    nBeta_genDiv?: true
    lustrum?: true
    agePublication?: true
    year?: true
    join?: true
    split?: true
    downloads?: true
    size?: true
    completeFlagX?: true
  }

  export type WorkMinAggregateInputType = {
    fileId?: true
    rFrameMean?: true
    nFrameMean?: true
    hFrameMean?: true
    sFrameMean?: true
    rWork?: true
    nWork?: true
    hWork?: true
    sWork?: true
    rBeta?: true
    hBeta?: true
    sBeta?: true
    rFrameMean_genDiv?: true
    rWork_genDiv?: true
    nFrameMean_genDiv?: true
    nWork_genDiv?: true
    vocab?: true
    words?: true
    rBeta_genDiv?: true
    nBeta_genDiv?: true
    lustrum?: true
    title?: true
    work?: true
    agePublication?: true
    year?: true
    join?: true
    split?: true
    regionX?: true
    originalLanguage?: true
    genreY?: true
    origin?: true
    mainSubject?: true
    narrativeLocation?: true
    downloads?: true
    size?: true
    completeFlagX?: true
    literaryPeriodX?: true
    literatureFormV2?: true
  }

  export type WorkMaxAggregateInputType = {
    fileId?: true
    rFrameMean?: true
    nFrameMean?: true
    hFrameMean?: true
    sFrameMean?: true
    rWork?: true
    nWork?: true
    hWork?: true
    sWork?: true
    rBeta?: true
    hBeta?: true
    sBeta?: true
    rFrameMean_genDiv?: true
    rWork_genDiv?: true
    nFrameMean_genDiv?: true
    nWork_genDiv?: true
    vocab?: true
    words?: true
    rBeta_genDiv?: true
    nBeta_genDiv?: true
    lustrum?: true
    title?: true
    work?: true
    agePublication?: true
    year?: true
    join?: true
    split?: true
    regionX?: true
    originalLanguage?: true
    genreY?: true
    origin?: true
    mainSubject?: true
    narrativeLocation?: true
    downloads?: true
    size?: true
    completeFlagX?: true
    literaryPeriodX?: true
    literatureFormV2?: true
  }

  export type WorkCountAggregateInputType = {
    fileId?: true
    rFrameMean?: true
    nFrameMean?: true
    hFrameMean?: true
    sFrameMean?: true
    rWork?: true
    nWork?: true
    hWork?: true
    sWork?: true
    rBeta?: true
    hBeta?: true
    sBeta?: true
    rFrameMean_genDiv?: true
    rWork_genDiv?: true
    nFrameMean_genDiv?: true
    nWork_genDiv?: true
    vocab?: true
    words?: true
    rBeta_genDiv?: true
    nBeta_genDiv?: true
    lustrum?: true
    title?: true
    work?: true
    agePublication?: true
    year?: true
    join?: true
    split?: true
    regionX?: true
    originalLanguage?: true
    literatureForm?: true
    genreX?: true
    genreY?: true
    origin?: true
    mainSubject?: true
    narrativeLocation?: true
    downloads?: true
    size?: true
    completeFlagX?: true
    literaryPeriodX?: true
    literatureFormV2?: true
    _all?: true
  }

  export type WorkAggregateArgs = {
    /**
     * Filter which Work to aggregate.
     * 
    **/
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Works
    **/
    _count?: true | WorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkMaxAggregateInputType
  }

  export type GetWorkAggregateType<T extends WorkAggregateArgs> = {
        [P in keyof T & keyof AggregateWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork[P]>
      : GetScalarType<T[P], AggregateWork[P]>
  }




  export type WorkGroupByArgs = {
    where?: WorkWhereInput
    orderBy?: Enumerable<WorkOrderByWithAggregationInput>
    by: Array<WorkScalarFieldEnum>
    having?: WorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkCountAggregateInputType | true
    _avg?: WorkAvgAggregateInputType
    _sum?: WorkSumAggregateInputType
    _min?: WorkMinAggregateInputType
    _max?: WorkMaxAggregateInputType
  }


  export type WorkGroupByOutputType = {
    fileId: string
    rFrameMean: number | null
    nFrameMean: number | null
    hFrameMean: number | null
    sFrameMean: number | null
    rWork: number | null
    nWork: number | null
    hWork: number | null
    sWork: number | null
    rBeta: number | null
    hBeta: number | null
    sBeta: number | null
    rFrameMean_genDiv: number | null
    rWork_genDiv: number | null
    nFrameMean_genDiv: number | null
    nWork_genDiv: number | null
    vocab: number | null
    words: number | null
    rBeta_genDiv: number | null
    nBeta_genDiv: number | null
    lustrum: number | null
    title: string | null
    work: string | null
    agePublication: number | null
    year: number | null
    join: number | null
    split: number | null
    regionX: string | null
    originalLanguage: string | null
    literatureForm: string[]
    genreX: string[]
    genreY: string | null
    origin: string | null
    mainSubject: string | null
    narrativeLocation: string | null
    downloads: number | null
    size: number | null
    completeFlagX: number | null
    literaryPeriodX: string | null
    literatureFormV2: string | null
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  type GetWorkGroupByPayload<T extends WorkGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkGroupByOutputType[P]>
            : GetScalarType<T[P], WorkGroupByOutputType[P]>
        }
      >
    >


  export type WorkSelect = {
    fileId?: boolean
    rFrameMean?: boolean
    nFrameMean?: boolean
    hFrameMean?: boolean
    sFrameMean?: boolean
    rWork?: boolean
    nWork?: boolean
    hWork?: boolean
    sWork?: boolean
    rBeta?: boolean
    hBeta?: boolean
    sBeta?: boolean
    rFrameMean_genDiv?: boolean
    rWork_genDiv?: boolean
    nFrameMean_genDiv?: boolean
    nWork_genDiv?: boolean
    vocab?: boolean
    words?: boolean
    rBeta_genDiv?: boolean
    nBeta_genDiv?: boolean
    lustrum?: boolean
    title?: boolean
    work?: boolean
    agePublication?: boolean
    year?: boolean
    join?: boolean
    split?: boolean
    regionX?: boolean
    originalLanguage?: boolean
    literatureForm?: boolean
    genreX?: boolean
    genreY?: boolean
    origin?: boolean
    mainSubject?: boolean
    narrativeLocation?: boolean
    downloads?: boolean
    size?: boolean
    completeFlagX?: boolean
    literaryPeriodX?: boolean
    literatureFormV2?: boolean
    occurrences?: boolean | OccurrenceFindManyArgs
    authors?: boolean | AuthorFindManyArgs
    _count?: boolean | WorkCountOutputTypeArgs
  }

  export type WorkInclude = {
    occurrences?: boolean | OccurrenceFindManyArgs
    authors?: boolean | AuthorFindManyArgs
    _count?: boolean | WorkCountOutputTypeArgs
  }

  export type WorkGetPayload<
    S extends boolean | null | undefined | WorkArgs,
    U = keyof S
      > = S extends true
        ? Work
    : S extends undefined
    ? never
    : S extends WorkArgs | WorkFindManyArgs
    ?'include' extends U
    ? Work  & {
    [P in TrueKeys<S['include']>]:
        P extends 'occurrences' ? Array < OccurrenceGetPayload<S['include'][P]>>  :
        P extends 'authors' ? Array < AuthorGetPayload<S['include'][P]>>  :
        P extends '_count' ? WorkCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'occurrences' ? Array < OccurrenceGetPayload<S['select'][P]>>  :
        P extends 'authors' ? Array < AuthorGetPayload<S['select'][P]>>  :
        P extends '_count' ? WorkCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Work ? Work[P] : never
  } 
    : Work
  : Work


  type WorkCountArgs = Merge<
    Omit<WorkFindManyArgs, 'select' | 'include'> & {
      select?: WorkCountAggregateInputType | true
    }
  >

  export interface WorkDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Work that matches the filter.
     * @param {WorkFindUniqueArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Work'> extends True ? CheckSelect<T, Prisma__WorkClient<Work>, Prisma__WorkClient<WorkGetPayload<T>>> : CheckSelect<T, Prisma__WorkClient<Work | null >, Prisma__WorkClient<WorkGetPayload<T> | null >>

    /**
     * Find the first Work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Work'> extends True ? CheckSelect<T, Prisma__WorkClient<Work>, Prisma__WorkClient<WorkGetPayload<T>>> : CheckSelect<T, Prisma__WorkClient<Work | null >, Prisma__WorkClient<WorkGetPayload<T> | null >>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Works
     * const works = await prisma.work.findMany()
     * 
     * // Get first 10 Works
     * const works = await prisma.work.findMany({ take: 10 })
     * 
     * // Only select the `fileId`
     * const workWithFileIdOnly = await prisma.work.findMany({ select: { fileId: true } })
     * 
    **/
    findMany<T extends WorkFindManyArgs>(
      args?: SelectSubset<T, WorkFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Work>>, PrismaPromise<Array<WorkGetPayload<T>>>>

    /**
     * Create a Work.
     * @param {WorkCreateArgs} args - Arguments to create a Work.
     * @example
     * // Create one Work
     * const Work = await prisma.work.create({
     *   data: {
     *     // ... data to create a Work
     *   }
     * })
     * 
    **/
    create<T extends WorkCreateArgs>(
      args: SelectSubset<T, WorkCreateArgs>
    ): CheckSelect<T, Prisma__WorkClient<Work>, Prisma__WorkClient<WorkGetPayload<T>>>

    /**
     * Create many Works.
     *     @param {WorkCreateManyArgs} args - Arguments to create many Works.
     *     @example
     *     // Create many Works
     *     const work = await prisma.work.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkCreateManyArgs>(
      args?: SelectSubset<T, WorkCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Work.
     * @param {WorkDeleteArgs} args - Arguments to delete one Work.
     * @example
     * // Delete one Work
     * const Work = await prisma.work.delete({
     *   where: {
     *     // ... filter to delete one Work
     *   }
     * })
     * 
    **/
    delete<T extends WorkDeleteArgs>(
      args: SelectSubset<T, WorkDeleteArgs>
    ): CheckSelect<T, Prisma__WorkClient<Work>, Prisma__WorkClient<WorkGetPayload<T>>>

    /**
     * Update one Work.
     * @param {WorkUpdateArgs} args - Arguments to update one Work.
     * @example
     * // Update one Work
     * const work = await prisma.work.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkUpdateArgs>(
      args: SelectSubset<T, WorkUpdateArgs>
    ): CheckSelect<T, Prisma__WorkClient<Work>, Prisma__WorkClient<WorkGetPayload<T>>>

    /**
     * Delete zero or more Works.
     * @param {WorkDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkDeleteManyArgs>(
      args?: SelectSubset<T, WorkDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkUpdateManyArgs>(
      args: SelectSubset<T, WorkUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Work.
     * @param {WorkUpsertArgs} args - Arguments to update or create a Work.
     * @example
     * // Update or create a Work
     * const work = await prisma.work.upsert({
     *   create: {
     *     // ... data to create a Work
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work we want to update
     *   }
     * })
    **/
    upsert<T extends WorkUpsertArgs>(
      args: SelectSubset<T, WorkUpsertArgs>
    ): CheckSelect<T, Prisma__WorkClient<Work>, Prisma__WorkClient<WorkGetPayload<T>>>

    /**
     * Find one Work that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {WorkFindUniqueOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__WorkClient<Work>, Prisma__WorkClient<WorkGetPayload<T>>>

    /**
     * Find the first Work that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__WorkClient<Work>, Prisma__WorkClient<WorkGetPayload<T>>>

    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.work.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends WorkCountArgs>(
      args?: Subset<T, WorkCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkAggregateArgs>(args: Subset<T, WorkAggregateArgs>): PrismaPromise<GetWorkAggregateType<T>>

    /**
     * Group by Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkGroupByArgs['orderBy'] }
        : { orderBy?: WorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    occurrences<T extends OccurrenceFindManyArgs = {}>(args?: Subset<T, OccurrenceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Occurrence>>, PrismaPromise<Array<OccurrenceGetPayload<T>>>>;

    authors<T extends AuthorFindManyArgs = {}>(args?: Subset<T, AuthorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Author>>, PrismaPromise<Array<AuthorGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Work base type for findUnique actions
   */
  export type WorkFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Work
     * 
    **/
    select?: WorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkInclude | null
    /**
     * Filter, which Work to fetch.
     * 
    **/
    where: WorkWhereUniqueInput
  }

  /**
   * Work: findUnique
   */
  export interface WorkFindUniqueArgs extends WorkFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Work base type for findFirst actions
   */
  export type WorkFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Work
     * 
    **/
    select?: WorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkInclude | null
    /**
     * Filter, which Work to fetch.
     * 
    **/
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     * 
    **/
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     * 
    **/
    distinct?: Enumerable<WorkScalarFieldEnum>
  }

  /**
   * Work: findFirst
   */
  export interface WorkFindFirstArgs extends WorkFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Work findMany
   */
  export type WorkFindManyArgs = {
    /**
     * Select specific fields to fetch from the Work
     * 
    **/
    select?: WorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkInclude | null
    /**
     * Filter, which Works to fetch.
     * 
    **/
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Works.
     * 
    **/
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WorkScalarFieldEnum>
  }


  /**
   * Work create
   */
  export type WorkCreateArgs = {
    /**
     * Select specific fields to fetch from the Work
     * 
    **/
    select?: WorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkInclude | null
    /**
     * The data needed to create a Work.
     * 
    **/
    data: XOR<WorkCreateInput, WorkUncheckedCreateInput>
  }


  /**
   * Work createMany
   */
  export type WorkCreateManyArgs = {
    /**
     * The data used to create many Works.
     * 
    **/
    data: Enumerable<WorkCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Work update
   */
  export type WorkUpdateArgs = {
    /**
     * Select specific fields to fetch from the Work
     * 
    **/
    select?: WorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkInclude | null
    /**
     * The data needed to update a Work.
     * 
    **/
    data: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
    /**
     * Choose, which Work to update.
     * 
    **/
    where: WorkWhereUniqueInput
  }


  /**
   * Work updateMany
   */
  export type WorkUpdateManyArgs = {
    /**
     * The data used to update Works.
     * 
    **/
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     * 
    **/
    where?: WorkWhereInput
  }


  /**
   * Work upsert
   */
  export type WorkUpsertArgs = {
    /**
     * Select specific fields to fetch from the Work
     * 
    **/
    select?: WorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkInclude | null
    /**
     * The filter to search for the Work to update in case it exists.
     * 
    **/
    where: WorkWhereUniqueInput
    /**
     * In case the Work found by the `where` argument doesn't exist, create a new Work with this data.
     * 
    **/
    create: XOR<WorkCreateInput, WorkUncheckedCreateInput>
    /**
     * In case the Work was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
  }


  /**
   * Work delete
   */
  export type WorkDeleteArgs = {
    /**
     * Select specific fields to fetch from the Work
     * 
    **/
    select?: WorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkInclude | null
    /**
     * Filter which Work to delete.
     * 
    **/
    where: WorkWhereUniqueInput
  }


  /**
   * Work deleteMany
   */
  export type WorkDeleteManyArgs = {
    /**
     * Filter which Works to delete
     * 
    **/
    where?: WorkWhereInput
  }


  /**
   * Work: findUniqueOrThrow
   */
  export type WorkFindUniqueOrThrowArgs = WorkFindUniqueArgsBase
      

  /**
   * Work: findFirstOrThrow
   */
  export type WorkFindFirstOrThrowArgs = WorkFindFirstArgsBase
      

  /**
   * Work without action
   */
  export type WorkArgs = {
    /**
     * Select specific fields to fetch from the Work
     * 
    **/
    select?: WorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkInclude | null
  }



  /**
   * Model Occurrence
   */


  export type AggregateOccurrence = {
    _count: OccurrenceCountAggregateOutputType | null
    _avg: OccurrenceAvgAggregateOutputType | null
    _sum: OccurrenceSumAggregateOutputType | null
    _min: OccurrenceMinAggregateOutputType | null
    _max: OccurrenceMaxAggregateOutputType | null
  }

  export type OccurrenceAvgAggregateOutputType = {
    id: number | null
    frameId: number | null
    column: number | null
    spalte: number | null
  }

  export type OccurrenceSumAggregateOutputType = {
    id: number | null
    frameId: number | null
    column: number | null
    spalte: number | null
  }

  export type OccurrenceMinAggregateOutputType = {
    id: number | null
    occId: string | null
    term: string | null
    scientificName: string | null
    fileId: string | null
    frameId: number | null
    sentence: string | null
    column: number | null
    spalte: number | null
  }

  export type OccurrenceMaxAggregateOutputType = {
    id: number | null
    occId: string | null
    term: string | null
    scientificName: string | null
    fileId: string | null
    frameId: number | null
    sentence: string | null
    column: number | null
    spalte: number | null
  }

  export type OccurrenceCountAggregateOutputType = {
    id: number
    occId: number
    term: number
    scientificName: number
    fileId: number
    frameId: number
    sentence: number
    column: number
    spalte: number
    _all: number
  }


  export type OccurrenceAvgAggregateInputType = {
    id?: true
    frameId?: true
    column?: true
    spalte?: true
  }

  export type OccurrenceSumAggregateInputType = {
    id?: true
    frameId?: true
    column?: true
    spalte?: true
  }

  export type OccurrenceMinAggregateInputType = {
    id?: true
    occId?: true
    term?: true
    scientificName?: true
    fileId?: true
    frameId?: true
    sentence?: true
    column?: true
    spalte?: true
  }

  export type OccurrenceMaxAggregateInputType = {
    id?: true
    occId?: true
    term?: true
    scientificName?: true
    fileId?: true
    frameId?: true
    sentence?: true
    column?: true
    spalte?: true
  }

  export type OccurrenceCountAggregateInputType = {
    id?: true
    occId?: true
    term?: true
    scientificName?: true
    fileId?: true
    frameId?: true
    sentence?: true
    column?: true
    spalte?: true
    _all?: true
  }

  export type OccurrenceAggregateArgs = {
    /**
     * Filter which Occurrence to aggregate.
     * 
    **/
    where?: OccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occurrences to fetch.
     * 
    **/
    orderBy?: Enumerable<OccurrenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occurrences from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occurrences.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Occurrences
    **/
    _count?: true | OccurrenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccurrenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccurrenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccurrenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccurrenceMaxAggregateInputType
  }

  export type GetOccurrenceAggregateType<T extends OccurrenceAggregateArgs> = {
        [P in keyof T & keyof AggregateOccurrence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccurrence[P]>
      : GetScalarType<T[P], AggregateOccurrence[P]>
  }




  export type OccurrenceGroupByArgs = {
    where?: OccurrenceWhereInput
    orderBy?: Enumerable<OccurrenceOrderByWithAggregationInput>
    by: Array<OccurrenceScalarFieldEnum>
    having?: OccurrenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccurrenceCountAggregateInputType | true
    _avg?: OccurrenceAvgAggregateInputType
    _sum?: OccurrenceSumAggregateInputType
    _min?: OccurrenceMinAggregateInputType
    _max?: OccurrenceMaxAggregateInputType
  }


  export type OccurrenceGroupByOutputType = {
    id: number
    occId: string | null
    term: string | null
    scientificName: string | null
    fileId: string
    frameId: number | null
    sentence: string | null
    column: number | null
    spalte: number | null
    _count: OccurrenceCountAggregateOutputType | null
    _avg: OccurrenceAvgAggregateOutputType | null
    _sum: OccurrenceSumAggregateOutputType | null
    _min: OccurrenceMinAggregateOutputType | null
    _max: OccurrenceMaxAggregateOutputType | null
  }

  type GetOccurrenceGroupByPayload<T extends OccurrenceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OccurrenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccurrenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccurrenceGroupByOutputType[P]>
            : GetScalarType<T[P], OccurrenceGroupByOutputType[P]>
        }
      >
    >


  export type OccurrenceSelect = {
    id?: boolean
    occId?: boolean
    term?: boolean
    scientificName?: boolean
    fileId?: boolean
    frameId?: boolean
    sentence?: boolean
    column?: boolean
    spalte?: boolean
    work?: boolean | WorkArgs
  }

  export type OccurrenceInclude = {
    work?: boolean | WorkArgs
  }

  export type OccurrenceGetPayload<
    S extends boolean | null | undefined | OccurrenceArgs,
    U = keyof S
      > = S extends true
        ? Occurrence
    : S extends undefined
    ? never
    : S extends OccurrenceArgs | OccurrenceFindManyArgs
    ?'include' extends U
    ? Occurrence  & {
    [P in TrueKeys<S['include']>]:
        P extends 'work' ? WorkGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'work' ? WorkGetPayload<S['select'][P]> | null :  P extends keyof Occurrence ? Occurrence[P] : never
  } 
    : Occurrence
  : Occurrence


  type OccurrenceCountArgs = Merge<
    Omit<OccurrenceFindManyArgs, 'select' | 'include'> & {
      select?: OccurrenceCountAggregateInputType | true
    }
  >

  export interface OccurrenceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Occurrence that matches the filter.
     * @param {OccurrenceFindUniqueArgs} args - Arguments to find a Occurrence
     * @example
     * // Get one Occurrence
     * const occurrence = await prisma.occurrence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OccurrenceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OccurrenceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Occurrence'> extends True ? CheckSelect<T, Prisma__OccurrenceClient<Occurrence>, Prisma__OccurrenceClient<OccurrenceGetPayload<T>>> : CheckSelect<T, Prisma__OccurrenceClient<Occurrence | null >, Prisma__OccurrenceClient<OccurrenceGetPayload<T> | null >>

    /**
     * Find the first Occurrence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceFindFirstArgs} args - Arguments to find a Occurrence
     * @example
     * // Get one Occurrence
     * const occurrence = await prisma.occurrence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OccurrenceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OccurrenceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Occurrence'> extends True ? CheckSelect<T, Prisma__OccurrenceClient<Occurrence>, Prisma__OccurrenceClient<OccurrenceGetPayload<T>>> : CheckSelect<T, Prisma__OccurrenceClient<Occurrence | null >, Prisma__OccurrenceClient<OccurrenceGetPayload<T> | null >>

    /**
     * Find zero or more Occurrences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Occurrences
     * const occurrences = await prisma.occurrence.findMany()
     * 
     * // Get first 10 Occurrences
     * const occurrences = await prisma.occurrence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const occurrenceWithIdOnly = await prisma.occurrence.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OccurrenceFindManyArgs>(
      args?: SelectSubset<T, OccurrenceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Occurrence>>, PrismaPromise<Array<OccurrenceGetPayload<T>>>>

    /**
     * Create a Occurrence.
     * @param {OccurrenceCreateArgs} args - Arguments to create a Occurrence.
     * @example
     * // Create one Occurrence
     * const Occurrence = await prisma.occurrence.create({
     *   data: {
     *     // ... data to create a Occurrence
     *   }
     * })
     * 
    **/
    create<T extends OccurrenceCreateArgs>(
      args: SelectSubset<T, OccurrenceCreateArgs>
    ): CheckSelect<T, Prisma__OccurrenceClient<Occurrence>, Prisma__OccurrenceClient<OccurrenceGetPayload<T>>>

    /**
     * Create many Occurrences.
     *     @param {OccurrenceCreateManyArgs} args - Arguments to create many Occurrences.
     *     @example
     *     // Create many Occurrences
     *     const occurrence = await prisma.occurrence.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OccurrenceCreateManyArgs>(
      args?: SelectSubset<T, OccurrenceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Occurrence.
     * @param {OccurrenceDeleteArgs} args - Arguments to delete one Occurrence.
     * @example
     * // Delete one Occurrence
     * const Occurrence = await prisma.occurrence.delete({
     *   where: {
     *     // ... filter to delete one Occurrence
     *   }
     * })
     * 
    **/
    delete<T extends OccurrenceDeleteArgs>(
      args: SelectSubset<T, OccurrenceDeleteArgs>
    ): CheckSelect<T, Prisma__OccurrenceClient<Occurrence>, Prisma__OccurrenceClient<OccurrenceGetPayload<T>>>

    /**
     * Update one Occurrence.
     * @param {OccurrenceUpdateArgs} args - Arguments to update one Occurrence.
     * @example
     * // Update one Occurrence
     * const occurrence = await prisma.occurrence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OccurrenceUpdateArgs>(
      args: SelectSubset<T, OccurrenceUpdateArgs>
    ): CheckSelect<T, Prisma__OccurrenceClient<Occurrence>, Prisma__OccurrenceClient<OccurrenceGetPayload<T>>>

    /**
     * Delete zero or more Occurrences.
     * @param {OccurrenceDeleteManyArgs} args - Arguments to filter Occurrences to delete.
     * @example
     * // Delete a few Occurrences
     * const { count } = await prisma.occurrence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OccurrenceDeleteManyArgs>(
      args?: SelectSubset<T, OccurrenceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Occurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Occurrences
     * const occurrence = await prisma.occurrence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OccurrenceUpdateManyArgs>(
      args: SelectSubset<T, OccurrenceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Occurrence.
     * @param {OccurrenceUpsertArgs} args - Arguments to update or create a Occurrence.
     * @example
     * // Update or create a Occurrence
     * const occurrence = await prisma.occurrence.upsert({
     *   create: {
     *     // ... data to create a Occurrence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Occurrence we want to update
     *   }
     * })
    **/
    upsert<T extends OccurrenceUpsertArgs>(
      args: SelectSubset<T, OccurrenceUpsertArgs>
    ): CheckSelect<T, Prisma__OccurrenceClient<Occurrence>, Prisma__OccurrenceClient<OccurrenceGetPayload<T>>>

    /**
     * Find one Occurrence that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {OccurrenceFindUniqueOrThrowArgs} args - Arguments to find a Occurrence
     * @example
     * // Get one Occurrence
     * const occurrence = await prisma.occurrence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OccurrenceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OccurrenceFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__OccurrenceClient<Occurrence>, Prisma__OccurrenceClient<OccurrenceGetPayload<T>>>

    /**
     * Find the first Occurrence that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceFindFirstOrThrowArgs} args - Arguments to find a Occurrence
     * @example
     * // Get one Occurrence
     * const occurrence = await prisma.occurrence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OccurrenceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OccurrenceFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__OccurrenceClient<Occurrence>, Prisma__OccurrenceClient<OccurrenceGetPayload<T>>>

    /**
     * Count the number of Occurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceCountArgs} args - Arguments to filter Occurrences to count.
     * @example
     * // Count the number of Occurrences
     * const count = await prisma.occurrence.count({
     *   where: {
     *     // ... the filter for the Occurrences we want to count
     *   }
     * })
    **/
    count<T extends OccurrenceCountArgs>(
      args?: Subset<T, OccurrenceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccurrenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Occurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OccurrenceAggregateArgs>(args: Subset<T, OccurrenceAggregateArgs>): PrismaPromise<GetOccurrenceAggregateType<T>>

    /**
     * Group by Occurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OccurrenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccurrenceGroupByArgs['orderBy'] }
        : { orderBy?: OccurrenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OccurrenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccurrenceGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Occurrence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OccurrenceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    work<T extends WorkArgs = {}>(args?: Subset<T, WorkArgs>): CheckSelect<T, Prisma__WorkClient<Work | null >, Prisma__WorkClient<WorkGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Occurrence base type for findUnique actions
   */
  export type OccurrenceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Occurrence
     * 
    **/
    select?: OccurrenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OccurrenceInclude | null
    /**
     * Filter, which Occurrence to fetch.
     * 
    **/
    where: OccurrenceWhereUniqueInput
  }

  /**
   * Occurrence: findUnique
   */
  export interface OccurrenceFindUniqueArgs extends OccurrenceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Occurrence base type for findFirst actions
   */
  export type OccurrenceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Occurrence
     * 
    **/
    select?: OccurrenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OccurrenceInclude | null
    /**
     * Filter, which Occurrence to fetch.
     * 
    **/
    where?: OccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occurrences to fetch.
     * 
    **/
    orderBy?: Enumerable<OccurrenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Occurrences.
     * 
    **/
    cursor?: OccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occurrences from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occurrences.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Occurrences.
     * 
    **/
    distinct?: Enumerable<OccurrenceScalarFieldEnum>
  }

  /**
   * Occurrence: findFirst
   */
  export interface OccurrenceFindFirstArgs extends OccurrenceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Occurrence findMany
   */
  export type OccurrenceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Occurrence
     * 
    **/
    select?: OccurrenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OccurrenceInclude | null
    /**
     * Filter, which Occurrences to fetch.
     * 
    **/
    where?: OccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occurrences to fetch.
     * 
    **/
    orderBy?: Enumerable<OccurrenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Occurrences.
     * 
    **/
    cursor?: OccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occurrences from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occurrences.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OccurrenceScalarFieldEnum>
  }


  /**
   * Occurrence create
   */
  export type OccurrenceCreateArgs = {
    /**
     * Select specific fields to fetch from the Occurrence
     * 
    **/
    select?: OccurrenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OccurrenceInclude | null
    /**
     * The data needed to create a Occurrence.
     * 
    **/
    data: XOR<OccurrenceCreateInput, OccurrenceUncheckedCreateInput>
  }


  /**
   * Occurrence createMany
   */
  export type OccurrenceCreateManyArgs = {
    /**
     * The data used to create many Occurrences.
     * 
    **/
    data: Enumerable<OccurrenceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Occurrence update
   */
  export type OccurrenceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Occurrence
     * 
    **/
    select?: OccurrenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OccurrenceInclude | null
    /**
     * The data needed to update a Occurrence.
     * 
    **/
    data: XOR<OccurrenceUpdateInput, OccurrenceUncheckedUpdateInput>
    /**
     * Choose, which Occurrence to update.
     * 
    **/
    where: OccurrenceWhereUniqueInput
  }


  /**
   * Occurrence updateMany
   */
  export type OccurrenceUpdateManyArgs = {
    /**
     * The data used to update Occurrences.
     * 
    **/
    data: XOR<OccurrenceUpdateManyMutationInput, OccurrenceUncheckedUpdateManyInput>
    /**
     * Filter which Occurrences to update
     * 
    **/
    where?: OccurrenceWhereInput
  }


  /**
   * Occurrence upsert
   */
  export type OccurrenceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Occurrence
     * 
    **/
    select?: OccurrenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OccurrenceInclude | null
    /**
     * The filter to search for the Occurrence to update in case it exists.
     * 
    **/
    where: OccurrenceWhereUniqueInput
    /**
     * In case the Occurrence found by the `where` argument doesn't exist, create a new Occurrence with this data.
     * 
    **/
    create: XOR<OccurrenceCreateInput, OccurrenceUncheckedCreateInput>
    /**
     * In case the Occurrence was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OccurrenceUpdateInput, OccurrenceUncheckedUpdateInput>
  }


  /**
   * Occurrence delete
   */
  export type OccurrenceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Occurrence
     * 
    **/
    select?: OccurrenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OccurrenceInclude | null
    /**
     * Filter which Occurrence to delete.
     * 
    **/
    where: OccurrenceWhereUniqueInput
  }


  /**
   * Occurrence deleteMany
   */
  export type OccurrenceDeleteManyArgs = {
    /**
     * Filter which Occurrences to delete
     * 
    **/
    where?: OccurrenceWhereInput
  }


  /**
   * Occurrence: findUniqueOrThrow
   */
  export type OccurrenceFindUniqueOrThrowArgs = OccurrenceFindUniqueArgsBase
      

  /**
   * Occurrence: findFirstOrThrow
   */
  export type OccurrenceFindFirstOrThrowArgs = OccurrenceFindFirstArgsBase
      

  /**
   * Occurrence without action
   */
  export type OccurrenceArgs = {
    /**
     * Select specific fields to fetch from the Occurrence
     * 
    **/
    select?: OccurrenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OccurrenceInclude | null
  }



  /**
   * Model Taxon
   */


  export type AggregateTaxon = {
    _count: TaxonCountAggregateOutputType | null
    _min: TaxonMinAggregateOutputType | null
    _max: TaxonMaxAggregateOutputType | null
  }

  export type TaxonMinAggregateOutputType = {
    occId: string | null
    term: string | null
    scientificName: string | null
  }

  export type TaxonMaxAggregateOutputType = {
    occId: string | null
    term: string | null
    scientificName: string | null
  }

  export type TaxonCountAggregateOutputType = {
    occId: number
    term: number
    scientificName: number
    _all: number
  }


  export type TaxonMinAggregateInputType = {
    occId?: true
    term?: true
    scientificName?: true
  }

  export type TaxonMaxAggregateInputType = {
    occId?: true
    term?: true
    scientificName?: true
  }

  export type TaxonCountAggregateInputType = {
    occId?: true
    term?: true
    scientificName?: true
    _all?: true
  }

  export type TaxonAggregateArgs = {
    /**
     * Filter which Taxon to aggregate.
     * 
    **/
    where?: TaxonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxons to fetch.
     * 
    **/
    orderBy?: Enumerable<TaxonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TaxonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Taxons
    **/
    _count?: true | TaxonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxonMaxAggregateInputType
  }

  export type GetTaxonAggregateType<T extends TaxonAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxon[P]>
      : GetScalarType<T[P], AggregateTaxon[P]>
  }




  export type TaxonGroupByArgs = {
    where?: TaxonWhereInput
    orderBy?: Enumerable<TaxonOrderByWithAggregationInput>
    by: Array<TaxonScalarFieldEnum>
    having?: TaxonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxonCountAggregateInputType | true
    _min?: TaxonMinAggregateInputType
    _max?: TaxonMaxAggregateInputType
  }


  export type TaxonGroupByOutputType = {
    occId: string
    term: string | null
    scientificName: string | null
    _count: TaxonCountAggregateOutputType | null
    _min: TaxonMinAggregateOutputType | null
    _max: TaxonMaxAggregateOutputType | null
  }

  type GetTaxonGroupByPayload<T extends TaxonGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TaxonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxonGroupByOutputType[P]>
            : GetScalarType<T[P], TaxonGroupByOutputType[P]>
        }
      >
    >


  export type TaxonSelect = {
    occId?: boolean
    term?: boolean
    scientificName?: boolean
  }

  export type TaxonGetPayload<
    S extends boolean | null | undefined | TaxonArgs,
    U = keyof S
      > = S extends true
        ? Taxon
    : S extends undefined
    ? never
    : S extends TaxonArgs | TaxonFindManyArgs
    ?'include' extends U
    ? Taxon 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Taxon ? Taxon[P] : never
  } 
    : Taxon
  : Taxon


  type TaxonCountArgs = Merge<
    Omit<TaxonFindManyArgs, 'select' | 'include'> & {
      select?: TaxonCountAggregateInputType | true
    }
  >

  export interface TaxonDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Taxon that matches the filter.
     * @param {TaxonFindUniqueArgs} args - Arguments to find a Taxon
     * @example
     * // Get one Taxon
     * const taxon = await prisma.taxon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaxonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TaxonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Taxon'> extends True ? CheckSelect<T, Prisma__TaxonClient<Taxon>, Prisma__TaxonClient<TaxonGetPayload<T>>> : CheckSelect<T, Prisma__TaxonClient<Taxon | null >, Prisma__TaxonClient<TaxonGetPayload<T> | null >>

    /**
     * Find the first Taxon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonFindFirstArgs} args - Arguments to find a Taxon
     * @example
     * // Get one Taxon
     * const taxon = await prisma.taxon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaxonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TaxonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Taxon'> extends True ? CheckSelect<T, Prisma__TaxonClient<Taxon>, Prisma__TaxonClient<TaxonGetPayload<T>>> : CheckSelect<T, Prisma__TaxonClient<Taxon | null >, Prisma__TaxonClient<TaxonGetPayload<T> | null >>

    /**
     * Find zero or more Taxons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taxons
     * const taxons = await prisma.taxon.findMany()
     * 
     * // Get first 10 Taxons
     * const taxons = await prisma.taxon.findMany({ take: 10 })
     * 
     * // Only select the `occId`
     * const taxonWithOccIdOnly = await prisma.taxon.findMany({ select: { occId: true } })
     * 
    **/
    findMany<T extends TaxonFindManyArgs>(
      args?: SelectSubset<T, TaxonFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Taxon>>, PrismaPromise<Array<TaxonGetPayload<T>>>>

    /**
     * Create a Taxon.
     * @param {TaxonCreateArgs} args - Arguments to create a Taxon.
     * @example
     * // Create one Taxon
     * const Taxon = await prisma.taxon.create({
     *   data: {
     *     // ... data to create a Taxon
     *   }
     * })
     * 
    **/
    create<T extends TaxonCreateArgs>(
      args: SelectSubset<T, TaxonCreateArgs>
    ): CheckSelect<T, Prisma__TaxonClient<Taxon>, Prisma__TaxonClient<TaxonGetPayload<T>>>

    /**
     * Create many Taxons.
     *     @param {TaxonCreateManyArgs} args - Arguments to create many Taxons.
     *     @example
     *     // Create many Taxons
     *     const taxon = await prisma.taxon.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaxonCreateManyArgs>(
      args?: SelectSubset<T, TaxonCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Taxon.
     * @param {TaxonDeleteArgs} args - Arguments to delete one Taxon.
     * @example
     * // Delete one Taxon
     * const Taxon = await prisma.taxon.delete({
     *   where: {
     *     // ... filter to delete one Taxon
     *   }
     * })
     * 
    **/
    delete<T extends TaxonDeleteArgs>(
      args: SelectSubset<T, TaxonDeleteArgs>
    ): CheckSelect<T, Prisma__TaxonClient<Taxon>, Prisma__TaxonClient<TaxonGetPayload<T>>>

    /**
     * Update one Taxon.
     * @param {TaxonUpdateArgs} args - Arguments to update one Taxon.
     * @example
     * // Update one Taxon
     * const taxon = await prisma.taxon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaxonUpdateArgs>(
      args: SelectSubset<T, TaxonUpdateArgs>
    ): CheckSelect<T, Prisma__TaxonClient<Taxon>, Prisma__TaxonClient<TaxonGetPayload<T>>>

    /**
     * Delete zero or more Taxons.
     * @param {TaxonDeleteManyArgs} args - Arguments to filter Taxons to delete.
     * @example
     * // Delete a few Taxons
     * const { count } = await prisma.taxon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaxonDeleteManyArgs>(
      args?: SelectSubset<T, TaxonDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taxons
     * const taxon = await prisma.taxon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaxonUpdateManyArgs>(
      args: SelectSubset<T, TaxonUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Taxon.
     * @param {TaxonUpsertArgs} args - Arguments to update or create a Taxon.
     * @example
     * // Update or create a Taxon
     * const taxon = await prisma.taxon.upsert({
     *   create: {
     *     // ... data to create a Taxon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taxon we want to update
     *   }
     * })
    **/
    upsert<T extends TaxonUpsertArgs>(
      args: SelectSubset<T, TaxonUpsertArgs>
    ): CheckSelect<T, Prisma__TaxonClient<Taxon>, Prisma__TaxonClient<TaxonGetPayload<T>>>

    /**
     * Find one Taxon that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {TaxonFindUniqueOrThrowArgs} args - Arguments to find a Taxon
     * @example
     * // Get one Taxon
     * const taxon = await prisma.taxon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaxonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TaxonFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__TaxonClient<Taxon>, Prisma__TaxonClient<TaxonGetPayload<T>>>

    /**
     * Find the first Taxon that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonFindFirstOrThrowArgs} args - Arguments to find a Taxon
     * @example
     * // Get one Taxon
     * const taxon = await prisma.taxon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaxonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TaxonFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__TaxonClient<Taxon>, Prisma__TaxonClient<TaxonGetPayload<T>>>

    /**
     * Count the number of Taxons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonCountArgs} args - Arguments to filter Taxons to count.
     * @example
     * // Count the number of Taxons
     * const count = await prisma.taxon.count({
     *   where: {
     *     // ... the filter for the Taxons we want to count
     *   }
     * })
    **/
    count<T extends TaxonCountArgs>(
      args?: Subset<T, TaxonCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taxon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaxonAggregateArgs>(args: Subset<T, TaxonAggregateArgs>): PrismaPromise<GetTaxonAggregateType<T>>

    /**
     * Group by Taxon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaxonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxonGroupByArgs['orderBy'] }
        : { orderBy?: TaxonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxonGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Taxon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TaxonClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Taxon base type for findUnique actions
   */
  export type TaxonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Taxon
     * 
    **/
    select?: TaxonSelect | null
    /**
     * Filter, which Taxon to fetch.
     * 
    **/
    where: TaxonWhereUniqueInput
  }

  /**
   * Taxon: findUnique
   */
  export interface TaxonFindUniqueArgs extends TaxonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Taxon base type for findFirst actions
   */
  export type TaxonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Taxon
     * 
    **/
    select?: TaxonSelect | null
    /**
     * Filter, which Taxon to fetch.
     * 
    **/
    where?: TaxonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxons to fetch.
     * 
    **/
    orderBy?: Enumerable<TaxonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taxons.
     * 
    **/
    cursor?: TaxonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taxons.
     * 
    **/
    distinct?: Enumerable<TaxonScalarFieldEnum>
  }

  /**
   * Taxon: findFirst
   */
  export interface TaxonFindFirstArgs extends TaxonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Taxon findMany
   */
  export type TaxonFindManyArgs = {
    /**
     * Select specific fields to fetch from the Taxon
     * 
    **/
    select?: TaxonSelect | null
    /**
     * Filter, which Taxons to fetch.
     * 
    **/
    where?: TaxonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxons to fetch.
     * 
    **/
    orderBy?: Enumerable<TaxonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Taxons.
     * 
    **/
    cursor?: TaxonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxons.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TaxonScalarFieldEnum>
  }


  /**
   * Taxon create
   */
  export type TaxonCreateArgs = {
    /**
     * Select specific fields to fetch from the Taxon
     * 
    **/
    select?: TaxonSelect | null
    /**
     * The data needed to create a Taxon.
     * 
    **/
    data: XOR<TaxonCreateInput, TaxonUncheckedCreateInput>
  }


  /**
   * Taxon createMany
   */
  export type TaxonCreateManyArgs = {
    /**
     * The data used to create many Taxons.
     * 
    **/
    data: Enumerable<TaxonCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Taxon update
   */
  export type TaxonUpdateArgs = {
    /**
     * Select specific fields to fetch from the Taxon
     * 
    **/
    select?: TaxonSelect | null
    /**
     * The data needed to update a Taxon.
     * 
    **/
    data: XOR<TaxonUpdateInput, TaxonUncheckedUpdateInput>
    /**
     * Choose, which Taxon to update.
     * 
    **/
    where: TaxonWhereUniqueInput
  }


  /**
   * Taxon updateMany
   */
  export type TaxonUpdateManyArgs = {
    /**
     * The data used to update Taxons.
     * 
    **/
    data: XOR<TaxonUpdateManyMutationInput, TaxonUncheckedUpdateManyInput>
    /**
     * Filter which Taxons to update
     * 
    **/
    where?: TaxonWhereInput
  }


  /**
   * Taxon upsert
   */
  export type TaxonUpsertArgs = {
    /**
     * Select specific fields to fetch from the Taxon
     * 
    **/
    select?: TaxonSelect | null
    /**
     * The filter to search for the Taxon to update in case it exists.
     * 
    **/
    where: TaxonWhereUniqueInput
    /**
     * In case the Taxon found by the `where` argument doesn't exist, create a new Taxon with this data.
     * 
    **/
    create: XOR<TaxonCreateInput, TaxonUncheckedCreateInput>
    /**
     * In case the Taxon was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TaxonUpdateInput, TaxonUncheckedUpdateInput>
  }


  /**
   * Taxon delete
   */
  export type TaxonDeleteArgs = {
    /**
     * Select specific fields to fetch from the Taxon
     * 
    **/
    select?: TaxonSelect | null
    /**
     * Filter which Taxon to delete.
     * 
    **/
    where: TaxonWhereUniqueInput
  }


  /**
   * Taxon deleteMany
   */
  export type TaxonDeleteManyArgs = {
    /**
     * Filter which Taxons to delete
     * 
    **/
    where?: TaxonWhereInput
  }


  /**
   * Taxon: findUniqueOrThrow
   */
  export type TaxonFindUniqueOrThrowArgs = TaxonFindUniqueArgsBase
      

  /**
   * Taxon: findFirstOrThrow
   */
  export type TaxonFindFirstOrThrowArgs = TaxonFindFirstArgsBase
      

  /**
   * Taxon without action
   */
  export type TaxonArgs = {
    /**
     * Select specific fields to fetch from the Taxon
     * 
    **/
    select?: TaxonSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AuthorScalarFieldEnum: {
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
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const WorkScalarFieldEnum: {
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
  };

  export type WorkScalarFieldEnum = (typeof WorkScalarFieldEnum)[keyof typeof WorkScalarFieldEnum]


  export const OccurrenceScalarFieldEnum: {
    id: 'id',
    occId: 'occId',
    term: 'term',
    scientificName: 'scientificName',
    fileId: 'fileId',
    frameId: 'frameId',
    sentence: 'sentence',
    column: 'column',
    spalte: 'spalte'
  };

  export type OccurrenceScalarFieldEnum = (typeof OccurrenceScalarFieldEnum)[keyof typeof OccurrenceScalarFieldEnum]


  export const TaxonScalarFieldEnum: {
    occId: 'occId',
    term: 'term',
    scientificName: 'scientificName'
  };

  export type TaxonScalarFieldEnum = (typeof TaxonScalarFieldEnum)[keyof typeof TaxonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type AuthorWhereInput = {
    AND?: Enumerable<AuthorWhereInput>
    OR?: Enumerable<AuthorWhereInput>
    NOT?: Enumerable<AuthorWhereInput>
    author?: StringNullableFilter | string | null
    forename?: StringNullableFilter | string | null
    surname?: StringNullableFilter | string | null
    birth?: IntNullableFilter | number | null
    death?: IntNullableFilter | number | null
    workStart?: IntNullableFilter | number | null
    gender?: StringNullableFilter | string | null
    religion?: StringNullableFilter | string | null
    ethnicity?: StringNullableFilter | string | null
    nativeLanguage?: StringNullableFilter | string | null
    childhoodResidence?: StringNullableFilter | string | null
    childhoodRegion?: StringNullableFilter | string | null
    residence?: StringNullableFilter | string | null
    regionY?: StringNullableFilter | string | null
    literaryPeriodY?: StringNullableFilter | string | null
    partners?: IntNullableFilter | number | null
    children?: IntNullableFilter | number | null
    highestEducation?: StringNullableFilter | string | null
    biodiversitySpecification?: IntNullableFilter | number | null
    field?: StringNullableFilter | string | null
    occupation?: StringNullableFilter | string | null
    country?: StringNullableFilter | string | null
    workCount?: IntNullableFilter | number | null
    vocabCount?: IntNullableFilter | number | null
    wordCount?: IntNullableFilter | number | null
    birthname?: StringNullableFilter | string | null
    pseudonym?: StringNullableFilter | string | null
    aliases?: StringNullableFilter | string | null
    father?: StringNullableFilter | string | null
    mother?: StringNullableFilter | string | null
    languages?: StringNullableFilter | string | null
    employer?: StringNullableFilter | string | null
    position?: StringNullableFilter | string | null
    university?: StringNullableFilter | string | null
    academicDegree?: StringNullableFilter | string | null
    member?: StringNullableFilter | string | null
    deathManner?: StringNullableFilter | string | null
    deathCause?: StringNullableFilter | string | null
    completeFlagY?: IntNullableFilter | number | null
    age?: IntNullableFilter | number | null
    siblings?: IntNullableFilter | number | null
    socialStatus?: StringNullableFilter | string | null
    mainRegion?: StringNullableFilter | string | null
    mainRegionV2?: StringNullableFilter | string | null
    locality?: IntNullableFilter | number | null
    mainResidence?: StringNullableFilter | string | null
    id?: IntFilter | number
    authorX?: StringNullableFilter | string | null
    authorY?: StringNullableFilter | string | null
    works?: WorkListRelationFilter
    listOfWorks?: StringNullableListFilter
  }

  export type AuthorOrderByWithRelationInput = {
    author?: SortOrder
    forename?: SortOrder
    surname?: SortOrder
    birth?: SortOrder
    death?: SortOrder
    workStart?: SortOrder
    gender?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    nativeLanguage?: SortOrder
    childhoodResidence?: SortOrder
    childhoodRegion?: SortOrder
    residence?: SortOrder
    regionY?: SortOrder
    literaryPeriodY?: SortOrder
    partners?: SortOrder
    children?: SortOrder
    highestEducation?: SortOrder
    biodiversitySpecification?: SortOrder
    field?: SortOrder
    occupation?: SortOrder
    country?: SortOrder
    workCount?: SortOrder
    vocabCount?: SortOrder
    wordCount?: SortOrder
    birthname?: SortOrder
    pseudonym?: SortOrder
    aliases?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    languages?: SortOrder
    employer?: SortOrder
    position?: SortOrder
    university?: SortOrder
    academicDegree?: SortOrder
    member?: SortOrder
    deathManner?: SortOrder
    deathCause?: SortOrder
    completeFlagY?: SortOrder
    age?: SortOrder
    siblings?: SortOrder
    socialStatus?: SortOrder
    mainRegion?: SortOrder
    mainRegionV2?: SortOrder
    locality?: SortOrder
    mainResidence?: SortOrder
    id?: SortOrder
    authorX?: SortOrder
    authorY?: SortOrder
    works?: WorkOrderByRelationAggregateInput
    listOfWorks?: SortOrder
  }

  export type AuthorWhereUniqueInput = {
    id?: number
    author_authorY_authorX?: AuthorAuthorAuthorYAuthorXCompoundUniqueInput
  }

  export type AuthorOrderByWithAggregationInput = {
    author?: SortOrder
    forename?: SortOrder
    surname?: SortOrder
    birth?: SortOrder
    death?: SortOrder
    workStart?: SortOrder
    gender?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    nativeLanguage?: SortOrder
    childhoodResidence?: SortOrder
    childhoodRegion?: SortOrder
    residence?: SortOrder
    regionY?: SortOrder
    literaryPeriodY?: SortOrder
    partners?: SortOrder
    children?: SortOrder
    highestEducation?: SortOrder
    biodiversitySpecification?: SortOrder
    field?: SortOrder
    occupation?: SortOrder
    country?: SortOrder
    workCount?: SortOrder
    vocabCount?: SortOrder
    wordCount?: SortOrder
    birthname?: SortOrder
    pseudonym?: SortOrder
    aliases?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    languages?: SortOrder
    employer?: SortOrder
    position?: SortOrder
    university?: SortOrder
    academicDegree?: SortOrder
    member?: SortOrder
    deathManner?: SortOrder
    deathCause?: SortOrder
    completeFlagY?: SortOrder
    age?: SortOrder
    siblings?: SortOrder
    socialStatus?: SortOrder
    mainRegion?: SortOrder
    mainRegionV2?: SortOrder
    locality?: SortOrder
    mainResidence?: SortOrder
    id?: SortOrder
    authorX?: SortOrder
    authorY?: SortOrder
    listOfWorks?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    author?: StringNullableWithAggregatesFilter | string | null
    forename?: StringNullableWithAggregatesFilter | string | null
    surname?: StringNullableWithAggregatesFilter | string | null
    birth?: IntNullableWithAggregatesFilter | number | null
    death?: IntNullableWithAggregatesFilter | number | null
    workStart?: IntNullableWithAggregatesFilter | number | null
    gender?: StringNullableWithAggregatesFilter | string | null
    religion?: StringNullableWithAggregatesFilter | string | null
    ethnicity?: StringNullableWithAggregatesFilter | string | null
    nativeLanguage?: StringNullableWithAggregatesFilter | string | null
    childhoodResidence?: StringNullableWithAggregatesFilter | string | null
    childhoodRegion?: StringNullableWithAggregatesFilter | string | null
    residence?: StringNullableWithAggregatesFilter | string | null
    regionY?: StringNullableWithAggregatesFilter | string | null
    literaryPeriodY?: StringNullableWithAggregatesFilter | string | null
    partners?: IntNullableWithAggregatesFilter | number | null
    children?: IntNullableWithAggregatesFilter | number | null
    highestEducation?: StringNullableWithAggregatesFilter | string | null
    biodiversitySpecification?: IntNullableWithAggregatesFilter | number | null
    field?: StringNullableWithAggregatesFilter | string | null
    occupation?: StringNullableWithAggregatesFilter | string | null
    country?: StringNullableWithAggregatesFilter | string | null
    workCount?: IntNullableWithAggregatesFilter | number | null
    vocabCount?: IntNullableWithAggregatesFilter | number | null
    wordCount?: IntNullableWithAggregatesFilter | number | null
    birthname?: StringNullableWithAggregatesFilter | string | null
    pseudonym?: StringNullableWithAggregatesFilter | string | null
    aliases?: StringNullableWithAggregatesFilter | string | null
    father?: StringNullableWithAggregatesFilter | string | null
    mother?: StringNullableWithAggregatesFilter | string | null
    languages?: StringNullableWithAggregatesFilter | string | null
    employer?: StringNullableWithAggregatesFilter | string | null
    position?: StringNullableWithAggregatesFilter | string | null
    university?: StringNullableWithAggregatesFilter | string | null
    academicDegree?: StringNullableWithAggregatesFilter | string | null
    member?: StringNullableWithAggregatesFilter | string | null
    deathManner?: StringNullableWithAggregatesFilter | string | null
    deathCause?: StringNullableWithAggregatesFilter | string | null
    completeFlagY?: IntNullableWithAggregatesFilter | number | null
    age?: IntNullableWithAggregatesFilter | number | null
    siblings?: IntNullableWithAggregatesFilter | number | null
    socialStatus?: StringNullableWithAggregatesFilter | string | null
    mainRegion?: StringNullableWithAggregatesFilter | string | null
    mainRegionV2?: StringNullableWithAggregatesFilter | string | null
    locality?: IntNullableWithAggregatesFilter | number | null
    mainResidence?: StringNullableWithAggregatesFilter | string | null
    id?: IntWithAggregatesFilter | number
    authorX?: StringNullableWithAggregatesFilter | string | null
    authorY?: StringNullableWithAggregatesFilter | string | null
    listOfWorks?: StringNullableListFilter
  }

  export type WorkWhereInput = {
    AND?: Enumerable<WorkWhereInput>
    OR?: Enumerable<WorkWhereInput>
    NOT?: Enumerable<WorkWhereInput>
    fileId?: StringFilter | string
    rFrameMean?: FloatNullableFilter | number | null
    nFrameMean?: FloatNullableFilter | number | null
    hFrameMean?: FloatNullableFilter | number | null
    sFrameMean?: FloatNullableFilter | number | null
    rWork?: FloatNullableFilter | number | null
    nWork?: FloatNullableFilter | number | null
    hWork?: FloatNullableFilter | number | null
    sWork?: FloatNullableFilter | number | null
    rBeta?: FloatNullableFilter | number | null
    hBeta?: FloatNullableFilter | number | null
    sBeta?: FloatNullableFilter | number | null
    rFrameMean_genDiv?: FloatNullableFilter | number | null
    rWork_genDiv?: FloatNullableFilter | number | null
    nFrameMean_genDiv?: FloatNullableFilter | number | null
    nWork_genDiv?: FloatNullableFilter | number | null
    vocab?: IntNullableFilter | number | null
    words?: IntNullableFilter | number | null
    rBeta_genDiv?: FloatNullableFilter | number | null
    nBeta_genDiv?: FloatNullableFilter | number | null
    lustrum?: IntNullableFilter | number | null
    title?: StringNullableFilter | string | null
    work?: StringNullableFilter | string | null
    agePublication?: IntNullableFilter | number | null
    year?: IntNullableFilter | number | null
    join?: IntNullableFilter | number | null
    split?: IntNullableFilter | number | null
    regionX?: StringNullableFilter | string | null
    originalLanguage?: StringNullableFilter | string | null
    literatureForm?: StringNullableListFilter
    genreX?: StringNullableListFilter
    genreY?: StringNullableFilter | string | null
    origin?: StringNullableFilter | string | null
    mainSubject?: StringNullableFilter | string | null
    narrativeLocation?: StringNullableFilter | string | null
    downloads?: IntNullableFilter | number | null
    size?: IntNullableFilter | number | null
    completeFlagX?: IntNullableFilter | number | null
    literaryPeriodX?: StringNullableFilter | string | null
    literatureFormV2?: StringNullableFilter | string | null
    occurrences?: OccurrenceListRelationFilter
    authors?: AuthorListRelationFilter
  }

  export type WorkOrderByWithRelationInput = {
    fileId?: SortOrder
    rFrameMean?: SortOrder
    nFrameMean?: SortOrder
    hFrameMean?: SortOrder
    sFrameMean?: SortOrder
    rWork?: SortOrder
    nWork?: SortOrder
    hWork?: SortOrder
    sWork?: SortOrder
    rBeta?: SortOrder
    hBeta?: SortOrder
    sBeta?: SortOrder
    rFrameMean_genDiv?: SortOrder
    rWork_genDiv?: SortOrder
    nFrameMean_genDiv?: SortOrder
    nWork_genDiv?: SortOrder
    vocab?: SortOrder
    words?: SortOrder
    rBeta_genDiv?: SortOrder
    nBeta_genDiv?: SortOrder
    lustrum?: SortOrder
    title?: SortOrder
    work?: SortOrder
    agePublication?: SortOrder
    year?: SortOrder
    join?: SortOrder
    split?: SortOrder
    regionX?: SortOrder
    originalLanguage?: SortOrder
    literatureForm?: SortOrder
    genreX?: SortOrder
    genreY?: SortOrder
    origin?: SortOrder
    mainSubject?: SortOrder
    narrativeLocation?: SortOrder
    downloads?: SortOrder
    size?: SortOrder
    completeFlagX?: SortOrder
    literaryPeriodX?: SortOrder
    literatureFormV2?: SortOrder
    occurrences?: OccurrenceOrderByRelationAggregateInput
    authors?: AuthorOrderByRelationAggregateInput
  }

  export type WorkWhereUniqueInput = {
    fileId?: string
  }

  export type WorkOrderByWithAggregationInput = {
    fileId?: SortOrder
    rFrameMean?: SortOrder
    nFrameMean?: SortOrder
    hFrameMean?: SortOrder
    sFrameMean?: SortOrder
    rWork?: SortOrder
    nWork?: SortOrder
    hWork?: SortOrder
    sWork?: SortOrder
    rBeta?: SortOrder
    hBeta?: SortOrder
    sBeta?: SortOrder
    rFrameMean_genDiv?: SortOrder
    rWork_genDiv?: SortOrder
    nFrameMean_genDiv?: SortOrder
    nWork_genDiv?: SortOrder
    vocab?: SortOrder
    words?: SortOrder
    rBeta_genDiv?: SortOrder
    nBeta_genDiv?: SortOrder
    lustrum?: SortOrder
    title?: SortOrder
    work?: SortOrder
    agePublication?: SortOrder
    year?: SortOrder
    join?: SortOrder
    split?: SortOrder
    regionX?: SortOrder
    originalLanguage?: SortOrder
    literatureForm?: SortOrder
    genreX?: SortOrder
    genreY?: SortOrder
    origin?: SortOrder
    mainSubject?: SortOrder
    narrativeLocation?: SortOrder
    downloads?: SortOrder
    size?: SortOrder
    completeFlagX?: SortOrder
    literaryPeriodX?: SortOrder
    literatureFormV2?: SortOrder
    _count?: WorkCountOrderByAggregateInput
    _avg?: WorkAvgOrderByAggregateInput
    _max?: WorkMaxOrderByAggregateInput
    _min?: WorkMinOrderByAggregateInput
    _sum?: WorkSumOrderByAggregateInput
  }

  export type WorkScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkScalarWhereWithAggregatesInput>
    fileId?: StringWithAggregatesFilter | string
    rFrameMean?: FloatNullableWithAggregatesFilter | number | null
    nFrameMean?: FloatNullableWithAggregatesFilter | number | null
    hFrameMean?: FloatNullableWithAggregatesFilter | number | null
    sFrameMean?: FloatNullableWithAggregatesFilter | number | null
    rWork?: FloatNullableWithAggregatesFilter | number | null
    nWork?: FloatNullableWithAggregatesFilter | number | null
    hWork?: FloatNullableWithAggregatesFilter | number | null
    sWork?: FloatNullableWithAggregatesFilter | number | null
    rBeta?: FloatNullableWithAggregatesFilter | number | null
    hBeta?: FloatNullableWithAggregatesFilter | number | null
    sBeta?: FloatNullableWithAggregatesFilter | number | null
    rFrameMean_genDiv?: FloatNullableWithAggregatesFilter | number | null
    rWork_genDiv?: FloatNullableWithAggregatesFilter | number | null
    nFrameMean_genDiv?: FloatNullableWithAggregatesFilter | number | null
    nWork_genDiv?: FloatNullableWithAggregatesFilter | number | null
    vocab?: IntNullableWithAggregatesFilter | number | null
    words?: IntNullableWithAggregatesFilter | number | null
    rBeta_genDiv?: FloatNullableWithAggregatesFilter | number | null
    nBeta_genDiv?: FloatNullableWithAggregatesFilter | number | null
    lustrum?: IntNullableWithAggregatesFilter | number | null
    title?: StringNullableWithAggregatesFilter | string | null
    work?: StringNullableWithAggregatesFilter | string | null
    agePublication?: IntNullableWithAggregatesFilter | number | null
    year?: IntNullableWithAggregatesFilter | number | null
    join?: IntNullableWithAggregatesFilter | number | null
    split?: IntNullableWithAggregatesFilter | number | null
    regionX?: StringNullableWithAggregatesFilter | string | null
    originalLanguage?: StringNullableWithAggregatesFilter | string | null
    literatureForm?: StringNullableListFilter
    genreX?: StringNullableListFilter
    genreY?: StringNullableWithAggregatesFilter | string | null
    origin?: StringNullableWithAggregatesFilter | string | null
    mainSubject?: StringNullableWithAggregatesFilter | string | null
    narrativeLocation?: StringNullableWithAggregatesFilter | string | null
    downloads?: IntNullableWithAggregatesFilter | number | null
    size?: IntNullableWithAggregatesFilter | number | null
    completeFlagX?: IntNullableWithAggregatesFilter | number | null
    literaryPeriodX?: StringNullableWithAggregatesFilter | string | null
    literatureFormV2?: StringNullableWithAggregatesFilter | string | null
  }

  export type OccurrenceWhereInput = {
    AND?: Enumerable<OccurrenceWhereInput>
    OR?: Enumerable<OccurrenceWhereInput>
    NOT?: Enumerable<OccurrenceWhereInput>
    id?: IntFilter | number
    occId?: StringNullableFilter | string | null
    term?: StringNullableFilter | string | null
    scientificName?: StringNullableFilter | string | null
    fileId?: StringFilter | string
    frameId?: IntNullableFilter | number | null
    sentence?: StringNullableFilter | string | null
    column?: IntNullableFilter | number | null
    spalte?: IntNullableFilter | number | null
    work?: XOR<WorkRelationFilter, WorkWhereInput> | null
  }

  export type OccurrenceOrderByWithRelationInput = {
    id?: SortOrder
    occId?: SortOrder
    term?: SortOrder
    scientificName?: SortOrder
    fileId?: SortOrder
    frameId?: SortOrder
    sentence?: SortOrder
    column?: SortOrder
    spalte?: SortOrder
    work?: WorkOrderByWithRelationInput
  }

  export type OccurrenceWhereUniqueInput = {
    id?: number
  }

  export type OccurrenceOrderByWithAggregationInput = {
    id?: SortOrder
    occId?: SortOrder
    term?: SortOrder
    scientificName?: SortOrder
    fileId?: SortOrder
    frameId?: SortOrder
    sentence?: SortOrder
    column?: SortOrder
    spalte?: SortOrder
    _count?: OccurrenceCountOrderByAggregateInput
    _avg?: OccurrenceAvgOrderByAggregateInput
    _max?: OccurrenceMaxOrderByAggregateInput
    _min?: OccurrenceMinOrderByAggregateInput
    _sum?: OccurrenceSumOrderByAggregateInput
  }

  export type OccurrenceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OccurrenceScalarWhereWithAggregatesInput>
    OR?: Enumerable<OccurrenceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OccurrenceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    occId?: StringNullableWithAggregatesFilter | string | null
    term?: StringNullableWithAggregatesFilter | string | null
    scientificName?: StringNullableWithAggregatesFilter | string | null
    fileId?: StringWithAggregatesFilter | string
    frameId?: IntNullableWithAggregatesFilter | number | null
    sentence?: StringNullableWithAggregatesFilter | string | null
    column?: IntNullableWithAggregatesFilter | number | null
    spalte?: IntNullableWithAggregatesFilter | number | null
  }

  export type TaxonWhereInput = {
    AND?: Enumerable<TaxonWhereInput>
    OR?: Enumerable<TaxonWhereInput>
    NOT?: Enumerable<TaxonWhereInput>
    occId?: StringFilter | string
    term?: StringNullableFilter | string | null
    scientificName?: StringNullableFilter | string | null
  }

  export type TaxonOrderByWithRelationInput = {
    occId?: SortOrder
    term?: SortOrder
    scientificName?: SortOrder
  }

  export type TaxonWhereUniqueInput = {
    occId?: string
  }

  export type TaxonOrderByWithAggregationInput = {
    occId?: SortOrder
    term?: SortOrder
    scientificName?: SortOrder
    _count?: TaxonCountOrderByAggregateInput
    _max?: TaxonMaxOrderByAggregateInput
    _min?: TaxonMinOrderByAggregateInput
  }

  export type TaxonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TaxonScalarWhereWithAggregatesInput>
    OR?: Enumerable<TaxonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TaxonScalarWhereWithAggregatesInput>
    occId?: StringWithAggregatesFilter | string
    term?: StringNullableWithAggregatesFilter | string | null
    scientificName?: StringNullableWithAggregatesFilter | string | null
  }

  export type AuthorCreateInput = {
    author?: string | null
    forename?: string | null
    surname?: string | null
    birth?: number | null
    death?: number | null
    workStart?: number | null
    gender?: string | null
    religion?: string | null
    ethnicity?: string | null
    nativeLanguage?: string | null
    childhoodResidence?: string | null
    childhoodRegion?: string | null
    residence?: string | null
    regionY?: string | null
    literaryPeriodY?: string | null
    partners?: number | null
    children?: number | null
    highestEducation?: string | null
    biodiversitySpecification?: number | null
    field?: string | null
    occupation?: string | null
    country?: string | null
    workCount?: number | null
    vocabCount?: number | null
    wordCount?: number | null
    birthname?: string | null
    pseudonym?: string | null
    aliases?: string | null
    father?: string | null
    mother?: string | null
    languages?: string | null
    employer?: string | null
    position?: string | null
    university?: string | null
    academicDegree?: string | null
    member?: string | null
    deathManner?: string | null
    deathCause?: string | null
    completeFlagY?: number | null
    age?: number | null
    siblings?: number | null
    socialStatus?: string | null
    mainRegion?: string | null
    mainRegionV2?: string | null
    locality?: number | null
    mainResidence?: string | null
    authorX?: string | null
    authorY?: string | null
    works?: WorkCreateNestedManyWithoutAuthorsInput
    listOfWorks?: AuthorCreatelistOfWorksInput | Enumerable<string>
  }

  export type AuthorUncheckedCreateInput = {
    author?: string | null
    forename?: string | null
    surname?: string | null
    birth?: number | null
    death?: number | null
    workStart?: number | null
    gender?: string | null
    religion?: string | null
    ethnicity?: string | null
    nativeLanguage?: string | null
    childhoodResidence?: string | null
    childhoodRegion?: string | null
    residence?: string | null
    regionY?: string | null
    literaryPeriodY?: string | null
    partners?: number | null
    children?: number | null
    highestEducation?: string | null
    biodiversitySpecification?: number | null
    field?: string | null
    occupation?: string | null
    country?: string | null
    workCount?: number | null
    vocabCount?: number | null
    wordCount?: number | null
    birthname?: string | null
    pseudonym?: string | null
    aliases?: string | null
    father?: string | null
    mother?: string | null
    languages?: string | null
    employer?: string | null
    position?: string | null
    university?: string | null
    academicDegree?: string | null
    member?: string | null
    deathManner?: string | null
    deathCause?: string | null
    completeFlagY?: number | null
    age?: number | null
    siblings?: number | null
    socialStatus?: string | null
    mainRegion?: string | null
    mainRegionV2?: string | null
    locality?: number | null
    mainResidence?: string | null
    id?: number
    authorX?: string | null
    authorY?: string | null
    works?: WorkUncheckedCreateNestedManyWithoutAuthorsInput
    listOfWorks?: AuthorCreatelistOfWorksInput | Enumerable<string>
  }

  export type AuthorUpdateInput = {
    author?: NullableStringFieldUpdateOperationsInput | string | null
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableIntFieldUpdateOperationsInput | number | null
    death?: NullableIntFieldUpdateOperationsInput | number | null
    workStart?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    nativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodResidence?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodRegion?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: NullableStringFieldUpdateOperationsInput | string | null
    regionY?: NullableStringFieldUpdateOperationsInput | string | null
    literaryPeriodY?: NullableStringFieldUpdateOperationsInput | string | null
    partners?: NullableIntFieldUpdateOperationsInput | number | null
    children?: NullableIntFieldUpdateOperationsInput | number | null
    highestEducation?: NullableStringFieldUpdateOperationsInput | string | null
    biodiversitySpecification?: NullableIntFieldUpdateOperationsInput | number | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    workCount?: NullableIntFieldUpdateOperationsInput | number | null
    vocabCount?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    birthname?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonym?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: NullableStringFieldUpdateOperationsInput | string | null
    father?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    academicDegree?: NullableStringFieldUpdateOperationsInput | string | null
    member?: NullableStringFieldUpdateOperationsInput | string | null
    deathManner?: NullableStringFieldUpdateOperationsInput | string | null
    deathCause?: NullableStringFieldUpdateOperationsInput | string | null
    completeFlagY?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    siblings?: NullableIntFieldUpdateOperationsInput | number | null
    socialStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegion?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegionV2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: NullableIntFieldUpdateOperationsInput | number | null
    mainResidence?: NullableStringFieldUpdateOperationsInput | string | null
    authorX?: NullableStringFieldUpdateOperationsInput | string | null
    authorY?: NullableStringFieldUpdateOperationsInput | string | null
    works?: WorkUpdateManyWithoutAuthorsNestedInput
    listOfWorks?: AuthorUpdatelistOfWorksInput | Enumerable<string>
  }

  export type AuthorUncheckedUpdateInput = {
    author?: NullableStringFieldUpdateOperationsInput | string | null
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableIntFieldUpdateOperationsInput | number | null
    death?: NullableIntFieldUpdateOperationsInput | number | null
    workStart?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    nativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodResidence?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodRegion?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: NullableStringFieldUpdateOperationsInput | string | null
    regionY?: NullableStringFieldUpdateOperationsInput | string | null
    literaryPeriodY?: NullableStringFieldUpdateOperationsInput | string | null
    partners?: NullableIntFieldUpdateOperationsInput | number | null
    children?: NullableIntFieldUpdateOperationsInput | number | null
    highestEducation?: NullableStringFieldUpdateOperationsInput | string | null
    biodiversitySpecification?: NullableIntFieldUpdateOperationsInput | number | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    workCount?: NullableIntFieldUpdateOperationsInput | number | null
    vocabCount?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    birthname?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonym?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: NullableStringFieldUpdateOperationsInput | string | null
    father?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    academicDegree?: NullableStringFieldUpdateOperationsInput | string | null
    member?: NullableStringFieldUpdateOperationsInput | string | null
    deathManner?: NullableStringFieldUpdateOperationsInput | string | null
    deathCause?: NullableStringFieldUpdateOperationsInput | string | null
    completeFlagY?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    siblings?: NullableIntFieldUpdateOperationsInput | number | null
    socialStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegion?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegionV2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: NullableIntFieldUpdateOperationsInput | number | null
    mainResidence?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    authorX?: NullableStringFieldUpdateOperationsInput | string | null
    authorY?: NullableStringFieldUpdateOperationsInput | string | null
    works?: WorkUncheckedUpdateManyWithoutAuthorsNestedInput
    listOfWorks?: AuthorUpdatelistOfWorksInput | Enumerable<string>
  }

  export type AuthorCreateManyInput = {
    author?: string | null
    forename?: string | null
    surname?: string | null
    birth?: number | null
    death?: number | null
    workStart?: number | null
    gender?: string | null
    religion?: string | null
    ethnicity?: string | null
    nativeLanguage?: string | null
    childhoodResidence?: string | null
    childhoodRegion?: string | null
    residence?: string | null
    regionY?: string | null
    literaryPeriodY?: string | null
    partners?: number | null
    children?: number | null
    highestEducation?: string | null
    biodiversitySpecification?: number | null
    field?: string | null
    occupation?: string | null
    country?: string | null
    workCount?: number | null
    vocabCount?: number | null
    wordCount?: number | null
    birthname?: string | null
    pseudonym?: string | null
    aliases?: string | null
    father?: string | null
    mother?: string | null
    languages?: string | null
    employer?: string | null
    position?: string | null
    university?: string | null
    academicDegree?: string | null
    member?: string | null
    deathManner?: string | null
    deathCause?: string | null
    completeFlagY?: number | null
    age?: number | null
    siblings?: number | null
    socialStatus?: string | null
    mainRegion?: string | null
    mainRegionV2?: string | null
    locality?: number | null
    mainResidence?: string | null
    id?: number
    authorX?: string | null
    authorY?: string | null
    listOfWorks?: AuthorCreatelistOfWorksInput | Enumerable<string>
  }

  export type AuthorUpdateManyMutationInput = {
    author?: NullableStringFieldUpdateOperationsInput | string | null
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableIntFieldUpdateOperationsInput | number | null
    death?: NullableIntFieldUpdateOperationsInput | number | null
    workStart?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    nativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodResidence?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodRegion?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: NullableStringFieldUpdateOperationsInput | string | null
    regionY?: NullableStringFieldUpdateOperationsInput | string | null
    literaryPeriodY?: NullableStringFieldUpdateOperationsInput | string | null
    partners?: NullableIntFieldUpdateOperationsInput | number | null
    children?: NullableIntFieldUpdateOperationsInput | number | null
    highestEducation?: NullableStringFieldUpdateOperationsInput | string | null
    biodiversitySpecification?: NullableIntFieldUpdateOperationsInput | number | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    workCount?: NullableIntFieldUpdateOperationsInput | number | null
    vocabCount?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    birthname?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonym?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: NullableStringFieldUpdateOperationsInput | string | null
    father?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    academicDegree?: NullableStringFieldUpdateOperationsInput | string | null
    member?: NullableStringFieldUpdateOperationsInput | string | null
    deathManner?: NullableStringFieldUpdateOperationsInput | string | null
    deathCause?: NullableStringFieldUpdateOperationsInput | string | null
    completeFlagY?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    siblings?: NullableIntFieldUpdateOperationsInput | number | null
    socialStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegion?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegionV2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: NullableIntFieldUpdateOperationsInput | number | null
    mainResidence?: NullableStringFieldUpdateOperationsInput | string | null
    authorX?: NullableStringFieldUpdateOperationsInput | string | null
    authorY?: NullableStringFieldUpdateOperationsInput | string | null
    listOfWorks?: AuthorUpdatelistOfWorksInput | Enumerable<string>
  }

  export type AuthorUncheckedUpdateManyInput = {
    author?: NullableStringFieldUpdateOperationsInput | string | null
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableIntFieldUpdateOperationsInput | number | null
    death?: NullableIntFieldUpdateOperationsInput | number | null
    workStart?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    nativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodResidence?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodRegion?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: NullableStringFieldUpdateOperationsInput | string | null
    regionY?: NullableStringFieldUpdateOperationsInput | string | null
    literaryPeriodY?: NullableStringFieldUpdateOperationsInput | string | null
    partners?: NullableIntFieldUpdateOperationsInput | number | null
    children?: NullableIntFieldUpdateOperationsInput | number | null
    highestEducation?: NullableStringFieldUpdateOperationsInput | string | null
    biodiversitySpecification?: NullableIntFieldUpdateOperationsInput | number | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    workCount?: NullableIntFieldUpdateOperationsInput | number | null
    vocabCount?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    birthname?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonym?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: NullableStringFieldUpdateOperationsInput | string | null
    father?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    academicDegree?: NullableStringFieldUpdateOperationsInput | string | null
    member?: NullableStringFieldUpdateOperationsInput | string | null
    deathManner?: NullableStringFieldUpdateOperationsInput | string | null
    deathCause?: NullableStringFieldUpdateOperationsInput | string | null
    completeFlagY?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    siblings?: NullableIntFieldUpdateOperationsInput | number | null
    socialStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegion?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegionV2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: NullableIntFieldUpdateOperationsInput | number | null
    mainResidence?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    authorX?: NullableStringFieldUpdateOperationsInput | string | null
    authorY?: NullableStringFieldUpdateOperationsInput | string | null
    listOfWorks?: AuthorUpdatelistOfWorksInput | Enumerable<string>
  }

  export type WorkCreateInput = {
    fileId: string
    rFrameMean?: number | null
    nFrameMean?: number | null
    hFrameMean?: number | null
    sFrameMean?: number | null
    rWork?: number | null
    nWork?: number | null
    hWork?: number | null
    sWork?: number | null
    rBeta?: number | null
    hBeta?: number | null
    sBeta?: number | null
    rFrameMean_genDiv?: number | null
    rWork_genDiv?: number | null
    nFrameMean_genDiv?: number | null
    nWork_genDiv?: number | null
    vocab?: number | null
    words?: number | null
    rBeta_genDiv?: number | null
    nBeta_genDiv?: number | null
    lustrum?: number | null
    title?: string | null
    work?: string | null
    agePublication?: number | null
    year?: number | null
    join?: number | null
    split?: number | null
    regionX?: string | null
    originalLanguage?: string | null
    literatureForm?: WorkCreateliteratureFormInput | Enumerable<string>
    genreX?: WorkCreategenreXInput | Enumerable<string>
    genreY?: string | null
    origin?: string | null
    mainSubject?: string | null
    narrativeLocation?: string | null
    downloads?: number | null
    size?: number | null
    completeFlagX?: number | null
    literaryPeriodX?: string | null
    literatureFormV2?: string | null
    occurrences?: OccurrenceCreateNestedManyWithoutWorkInput
    authors?: AuthorCreateNestedManyWithoutWorksInput
  }

  export type WorkUncheckedCreateInput = {
    fileId: string
    rFrameMean?: number | null
    nFrameMean?: number | null
    hFrameMean?: number | null
    sFrameMean?: number | null
    rWork?: number | null
    nWork?: number | null
    hWork?: number | null
    sWork?: number | null
    rBeta?: number | null
    hBeta?: number | null
    sBeta?: number | null
    rFrameMean_genDiv?: number | null
    rWork_genDiv?: number | null
    nFrameMean_genDiv?: number | null
    nWork_genDiv?: number | null
    vocab?: number | null
    words?: number | null
    rBeta_genDiv?: number | null
    nBeta_genDiv?: number | null
    lustrum?: number | null
    title?: string | null
    work?: string | null
    agePublication?: number | null
    year?: number | null
    join?: number | null
    split?: number | null
    regionX?: string | null
    originalLanguage?: string | null
    literatureForm?: WorkCreateliteratureFormInput | Enumerable<string>
    genreX?: WorkCreategenreXInput | Enumerable<string>
    genreY?: string | null
    origin?: string | null
    mainSubject?: string | null
    narrativeLocation?: string | null
    downloads?: number | null
    size?: number | null
    completeFlagX?: number | null
    literaryPeriodX?: string | null
    literatureFormV2?: string | null
    occurrences?: OccurrenceUncheckedCreateNestedManyWithoutWorkInput
    authors?: AuthorUncheckedCreateNestedManyWithoutWorksInput
  }

  export type WorkUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    rFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    hFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    sFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork?: NullableFloatFieldUpdateOperationsInput | number | null
    hWork?: NullableFloatFieldUpdateOperationsInput | number | null
    sWork?: NullableFloatFieldUpdateOperationsInput | number | null
    rBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    hBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    sBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    rFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    vocab?: NullableIntFieldUpdateOperationsInput | number | null
    words?: NullableIntFieldUpdateOperationsInput | number | null
    rBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    lustrum?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    agePublication?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    join?: NullableIntFieldUpdateOperationsInput | number | null
    split?: NullableIntFieldUpdateOperationsInput | number | null
    regionX?: NullableStringFieldUpdateOperationsInput | string | null
    originalLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    literatureForm?: WorkUpdateliteratureFormInput | Enumerable<string>
    genreX?: WorkUpdategenreXInput | Enumerable<string>
    genreY?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    mainSubject?: NullableStringFieldUpdateOperationsInput | string | null
    narrativeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    completeFlagX?: NullableIntFieldUpdateOperationsInput | number | null
    literaryPeriodX?: NullableStringFieldUpdateOperationsInput | string | null
    literatureFormV2?: NullableStringFieldUpdateOperationsInput | string | null
    occurrences?: OccurrenceUpdateManyWithoutWorkNestedInput
    authors?: AuthorUpdateManyWithoutWorksNestedInput
  }

  export type WorkUncheckedUpdateInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    rFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    hFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    sFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork?: NullableFloatFieldUpdateOperationsInput | number | null
    hWork?: NullableFloatFieldUpdateOperationsInput | number | null
    sWork?: NullableFloatFieldUpdateOperationsInput | number | null
    rBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    hBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    sBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    rFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    vocab?: NullableIntFieldUpdateOperationsInput | number | null
    words?: NullableIntFieldUpdateOperationsInput | number | null
    rBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    lustrum?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    agePublication?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    join?: NullableIntFieldUpdateOperationsInput | number | null
    split?: NullableIntFieldUpdateOperationsInput | number | null
    regionX?: NullableStringFieldUpdateOperationsInput | string | null
    originalLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    literatureForm?: WorkUpdateliteratureFormInput | Enumerable<string>
    genreX?: WorkUpdategenreXInput | Enumerable<string>
    genreY?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    mainSubject?: NullableStringFieldUpdateOperationsInput | string | null
    narrativeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    completeFlagX?: NullableIntFieldUpdateOperationsInput | number | null
    literaryPeriodX?: NullableStringFieldUpdateOperationsInput | string | null
    literatureFormV2?: NullableStringFieldUpdateOperationsInput | string | null
    occurrences?: OccurrenceUncheckedUpdateManyWithoutWorkNestedInput
    authors?: AuthorUncheckedUpdateManyWithoutWorksNestedInput
  }

  export type WorkCreateManyInput = {
    fileId: string
    rFrameMean?: number | null
    nFrameMean?: number | null
    hFrameMean?: number | null
    sFrameMean?: number | null
    rWork?: number | null
    nWork?: number | null
    hWork?: number | null
    sWork?: number | null
    rBeta?: number | null
    hBeta?: number | null
    sBeta?: number | null
    rFrameMean_genDiv?: number | null
    rWork_genDiv?: number | null
    nFrameMean_genDiv?: number | null
    nWork_genDiv?: number | null
    vocab?: number | null
    words?: number | null
    rBeta_genDiv?: number | null
    nBeta_genDiv?: number | null
    lustrum?: number | null
    title?: string | null
    work?: string | null
    agePublication?: number | null
    year?: number | null
    join?: number | null
    split?: number | null
    regionX?: string | null
    originalLanguage?: string | null
    literatureForm?: WorkCreateliteratureFormInput | Enumerable<string>
    genreX?: WorkCreategenreXInput | Enumerable<string>
    genreY?: string | null
    origin?: string | null
    mainSubject?: string | null
    narrativeLocation?: string | null
    downloads?: number | null
    size?: number | null
    completeFlagX?: number | null
    literaryPeriodX?: string | null
    literatureFormV2?: string | null
  }

  export type WorkUpdateManyMutationInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    rFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    hFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    sFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork?: NullableFloatFieldUpdateOperationsInput | number | null
    hWork?: NullableFloatFieldUpdateOperationsInput | number | null
    sWork?: NullableFloatFieldUpdateOperationsInput | number | null
    rBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    hBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    sBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    rFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    vocab?: NullableIntFieldUpdateOperationsInput | number | null
    words?: NullableIntFieldUpdateOperationsInput | number | null
    rBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    lustrum?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    agePublication?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    join?: NullableIntFieldUpdateOperationsInput | number | null
    split?: NullableIntFieldUpdateOperationsInput | number | null
    regionX?: NullableStringFieldUpdateOperationsInput | string | null
    originalLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    literatureForm?: WorkUpdateliteratureFormInput | Enumerable<string>
    genreX?: WorkUpdategenreXInput | Enumerable<string>
    genreY?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    mainSubject?: NullableStringFieldUpdateOperationsInput | string | null
    narrativeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    completeFlagX?: NullableIntFieldUpdateOperationsInput | number | null
    literaryPeriodX?: NullableStringFieldUpdateOperationsInput | string | null
    literatureFormV2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkUncheckedUpdateManyInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    rFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    hFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    sFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork?: NullableFloatFieldUpdateOperationsInput | number | null
    hWork?: NullableFloatFieldUpdateOperationsInput | number | null
    sWork?: NullableFloatFieldUpdateOperationsInput | number | null
    rBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    hBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    sBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    rFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    vocab?: NullableIntFieldUpdateOperationsInput | number | null
    words?: NullableIntFieldUpdateOperationsInput | number | null
    rBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    lustrum?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    agePublication?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    join?: NullableIntFieldUpdateOperationsInput | number | null
    split?: NullableIntFieldUpdateOperationsInput | number | null
    regionX?: NullableStringFieldUpdateOperationsInput | string | null
    originalLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    literatureForm?: WorkUpdateliteratureFormInput | Enumerable<string>
    genreX?: WorkUpdategenreXInput | Enumerable<string>
    genreY?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    mainSubject?: NullableStringFieldUpdateOperationsInput | string | null
    narrativeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    completeFlagX?: NullableIntFieldUpdateOperationsInput | number | null
    literaryPeriodX?: NullableStringFieldUpdateOperationsInput | string | null
    literatureFormV2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OccurrenceCreateInput = {
    id: number
    occId?: string | null
    term?: string | null
    scientificName?: string | null
    frameId?: number | null
    sentence?: string | null
    column?: number | null
    spalte?: number | null
    work?: WorkCreateNestedOneWithoutOccurrencesInput
  }

  export type OccurrenceUncheckedCreateInput = {
    id: number
    occId?: string | null
    term?: string | null
    scientificName?: string | null
    fileId: string
    frameId?: number | null
    sentence?: string | null
    column?: number | null
    spalte?: number | null
  }

  export type OccurrenceUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    occId?: NullableStringFieldUpdateOperationsInput | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    frameId?: NullableIntFieldUpdateOperationsInput | number | null
    sentence?: NullableStringFieldUpdateOperationsInput | string | null
    column?: NullableIntFieldUpdateOperationsInput | number | null
    spalte?: NullableIntFieldUpdateOperationsInput | number | null
    work?: WorkUpdateOneWithoutOccurrencesNestedInput
  }

  export type OccurrenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    occId?: NullableStringFieldUpdateOperationsInput | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    frameId?: NullableIntFieldUpdateOperationsInput | number | null
    sentence?: NullableStringFieldUpdateOperationsInput | string | null
    column?: NullableIntFieldUpdateOperationsInput | number | null
    spalte?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OccurrenceCreateManyInput = {
    id: number
    occId?: string | null
    term?: string | null
    scientificName?: string | null
    fileId: string
    frameId?: number | null
    sentence?: string | null
    column?: number | null
    spalte?: number | null
  }

  export type OccurrenceUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    occId?: NullableStringFieldUpdateOperationsInput | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    frameId?: NullableIntFieldUpdateOperationsInput | number | null
    sentence?: NullableStringFieldUpdateOperationsInput | string | null
    column?: NullableIntFieldUpdateOperationsInput | number | null
    spalte?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OccurrenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    occId?: NullableStringFieldUpdateOperationsInput | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    frameId?: NullableIntFieldUpdateOperationsInput | number | null
    sentence?: NullableStringFieldUpdateOperationsInput | string | null
    column?: NullableIntFieldUpdateOperationsInput | number | null
    spalte?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaxonCreateInput = {
    occId: string
    term?: string | null
    scientificName?: string | null
  }

  export type TaxonUncheckedCreateInput = {
    occId: string
    term?: string | null
    scientificName?: string | null
  }

  export type TaxonUpdateInput = {
    occId?: StringFieldUpdateOperationsInput | string
    term?: NullableStringFieldUpdateOperationsInput | string | null
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaxonUncheckedUpdateInput = {
    occId?: StringFieldUpdateOperationsInput | string
    term?: NullableStringFieldUpdateOperationsInput | string | null
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaxonCreateManyInput = {
    occId: string
    term?: string | null
    scientificName?: string | null
  }

  export type TaxonUpdateManyMutationInput = {
    occId?: StringFieldUpdateOperationsInput | string
    term?: NullableStringFieldUpdateOperationsInput | string | null
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaxonUncheckedUpdateManyInput = {
    occId?: StringFieldUpdateOperationsInput | string
    term?: NullableStringFieldUpdateOperationsInput | string | null
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type WorkListRelationFilter = {
    every?: WorkWhereInput
    some?: WorkWhereInput
    none?: WorkWhereInput
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type WorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorAuthorAuthorYAuthorXCompoundUniqueInput = {
    author: string
    authorY: string
    authorX: string
  }

  export type AuthorCountOrderByAggregateInput = {
    author?: SortOrder
    forename?: SortOrder
    surname?: SortOrder
    birth?: SortOrder
    death?: SortOrder
    workStart?: SortOrder
    gender?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    nativeLanguage?: SortOrder
    childhoodResidence?: SortOrder
    childhoodRegion?: SortOrder
    residence?: SortOrder
    regionY?: SortOrder
    literaryPeriodY?: SortOrder
    partners?: SortOrder
    children?: SortOrder
    highestEducation?: SortOrder
    biodiversitySpecification?: SortOrder
    field?: SortOrder
    occupation?: SortOrder
    country?: SortOrder
    workCount?: SortOrder
    vocabCount?: SortOrder
    wordCount?: SortOrder
    birthname?: SortOrder
    pseudonym?: SortOrder
    aliases?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    languages?: SortOrder
    employer?: SortOrder
    position?: SortOrder
    university?: SortOrder
    academicDegree?: SortOrder
    member?: SortOrder
    deathManner?: SortOrder
    deathCause?: SortOrder
    completeFlagY?: SortOrder
    age?: SortOrder
    siblings?: SortOrder
    socialStatus?: SortOrder
    mainRegion?: SortOrder
    mainRegionV2?: SortOrder
    locality?: SortOrder
    mainResidence?: SortOrder
    id?: SortOrder
    authorX?: SortOrder
    authorY?: SortOrder
    listOfWorks?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    birth?: SortOrder
    death?: SortOrder
    workStart?: SortOrder
    partners?: SortOrder
    children?: SortOrder
    biodiversitySpecification?: SortOrder
    workCount?: SortOrder
    vocabCount?: SortOrder
    wordCount?: SortOrder
    completeFlagY?: SortOrder
    age?: SortOrder
    siblings?: SortOrder
    locality?: SortOrder
    id?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    author?: SortOrder
    forename?: SortOrder
    surname?: SortOrder
    birth?: SortOrder
    death?: SortOrder
    workStart?: SortOrder
    gender?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    nativeLanguage?: SortOrder
    childhoodResidence?: SortOrder
    childhoodRegion?: SortOrder
    residence?: SortOrder
    regionY?: SortOrder
    literaryPeriodY?: SortOrder
    partners?: SortOrder
    children?: SortOrder
    highestEducation?: SortOrder
    biodiversitySpecification?: SortOrder
    field?: SortOrder
    occupation?: SortOrder
    country?: SortOrder
    workCount?: SortOrder
    vocabCount?: SortOrder
    wordCount?: SortOrder
    birthname?: SortOrder
    pseudonym?: SortOrder
    aliases?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    languages?: SortOrder
    employer?: SortOrder
    position?: SortOrder
    university?: SortOrder
    academicDegree?: SortOrder
    member?: SortOrder
    deathManner?: SortOrder
    deathCause?: SortOrder
    completeFlagY?: SortOrder
    age?: SortOrder
    siblings?: SortOrder
    socialStatus?: SortOrder
    mainRegion?: SortOrder
    mainRegionV2?: SortOrder
    locality?: SortOrder
    mainResidence?: SortOrder
    id?: SortOrder
    authorX?: SortOrder
    authorY?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    author?: SortOrder
    forename?: SortOrder
    surname?: SortOrder
    birth?: SortOrder
    death?: SortOrder
    workStart?: SortOrder
    gender?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    nativeLanguage?: SortOrder
    childhoodResidence?: SortOrder
    childhoodRegion?: SortOrder
    residence?: SortOrder
    regionY?: SortOrder
    literaryPeriodY?: SortOrder
    partners?: SortOrder
    children?: SortOrder
    highestEducation?: SortOrder
    biodiversitySpecification?: SortOrder
    field?: SortOrder
    occupation?: SortOrder
    country?: SortOrder
    workCount?: SortOrder
    vocabCount?: SortOrder
    wordCount?: SortOrder
    birthname?: SortOrder
    pseudonym?: SortOrder
    aliases?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    languages?: SortOrder
    employer?: SortOrder
    position?: SortOrder
    university?: SortOrder
    academicDegree?: SortOrder
    member?: SortOrder
    deathManner?: SortOrder
    deathCause?: SortOrder
    completeFlagY?: SortOrder
    age?: SortOrder
    siblings?: SortOrder
    socialStatus?: SortOrder
    mainRegion?: SortOrder
    mainRegionV2?: SortOrder
    locality?: SortOrder
    mainResidence?: SortOrder
    id?: SortOrder
    authorX?: SortOrder
    authorY?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    birth?: SortOrder
    death?: SortOrder
    workStart?: SortOrder
    partners?: SortOrder
    children?: SortOrder
    biodiversitySpecification?: SortOrder
    workCount?: SortOrder
    vocabCount?: SortOrder
    wordCount?: SortOrder
    completeFlagY?: SortOrder
    age?: SortOrder
    siblings?: SortOrder
    locality?: SortOrder
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type OccurrenceListRelationFilter = {
    every?: OccurrenceWhereInput
    some?: OccurrenceWhereInput
    none?: OccurrenceWhereInput
  }

  export type AuthorListRelationFilter = {
    every?: AuthorWhereInput
    some?: AuthorWhereInput
    none?: AuthorWhereInput
  }

  export type OccurrenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkCountOrderByAggregateInput = {
    fileId?: SortOrder
    rFrameMean?: SortOrder
    nFrameMean?: SortOrder
    hFrameMean?: SortOrder
    sFrameMean?: SortOrder
    rWork?: SortOrder
    nWork?: SortOrder
    hWork?: SortOrder
    sWork?: SortOrder
    rBeta?: SortOrder
    hBeta?: SortOrder
    sBeta?: SortOrder
    rFrameMean_genDiv?: SortOrder
    rWork_genDiv?: SortOrder
    nFrameMean_genDiv?: SortOrder
    nWork_genDiv?: SortOrder
    vocab?: SortOrder
    words?: SortOrder
    rBeta_genDiv?: SortOrder
    nBeta_genDiv?: SortOrder
    lustrum?: SortOrder
    title?: SortOrder
    work?: SortOrder
    agePublication?: SortOrder
    year?: SortOrder
    join?: SortOrder
    split?: SortOrder
    regionX?: SortOrder
    originalLanguage?: SortOrder
    literatureForm?: SortOrder
    genreX?: SortOrder
    genreY?: SortOrder
    origin?: SortOrder
    mainSubject?: SortOrder
    narrativeLocation?: SortOrder
    downloads?: SortOrder
    size?: SortOrder
    completeFlagX?: SortOrder
    literaryPeriodX?: SortOrder
    literatureFormV2?: SortOrder
  }

  export type WorkAvgOrderByAggregateInput = {
    rFrameMean?: SortOrder
    nFrameMean?: SortOrder
    hFrameMean?: SortOrder
    sFrameMean?: SortOrder
    rWork?: SortOrder
    nWork?: SortOrder
    hWork?: SortOrder
    sWork?: SortOrder
    rBeta?: SortOrder
    hBeta?: SortOrder
    sBeta?: SortOrder
    rFrameMean_genDiv?: SortOrder
    rWork_genDiv?: SortOrder
    nFrameMean_genDiv?: SortOrder
    nWork_genDiv?: SortOrder
    vocab?: SortOrder
    words?: SortOrder
    rBeta_genDiv?: SortOrder
    nBeta_genDiv?: SortOrder
    lustrum?: SortOrder
    agePublication?: SortOrder
    year?: SortOrder
    join?: SortOrder
    split?: SortOrder
    downloads?: SortOrder
    size?: SortOrder
    completeFlagX?: SortOrder
  }

  export type WorkMaxOrderByAggregateInput = {
    fileId?: SortOrder
    rFrameMean?: SortOrder
    nFrameMean?: SortOrder
    hFrameMean?: SortOrder
    sFrameMean?: SortOrder
    rWork?: SortOrder
    nWork?: SortOrder
    hWork?: SortOrder
    sWork?: SortOrder
    rBeta?: SortOrder
    hBeta?: SortOrder
    sBeta?: SortOrder
    rFrameMean_genDiv?: SortOrder
    rWork_genDiv?: SortOrder
    nFrameMean_genDiv?: SortOrder
    nWork_genDiv?: SortOrder
    vocab?: SortOrder
    words?: SortOrder
    rBeta_genDiv?: SortOrder
    nBeta_genDiv?: SortOrder
    lustrum?: SortOrder
    title?: SortOrder
    work?: SortOrder
    agePublication?: SortOrder
    year?: SortOrder
    join?: SortOrder
    split?: SortOrder
    regionX?: SortOrder
    originalLanguage?: SortOrder
    genreY?: SortOrder
    origin?: SortOrder
    mainSubject?: SortOrder
    narrativeLocation?: SortOrder
    downloads?: SortOrder
    size?: SortOrder
    completeFlagX?: SortOrder
    literaryPeriodX?: SortOrder
    literatureFormV2?: SortOrder
  }

  export type WorkMinOrderByAggregateInput = {
    fileId?: SortOrder
    rFrameMean?: SortOrder
    nFrameMean?: SortOrder
    hFrameMean?: SortOrder
    sFrameMean?: SortOrder
    rWork?: SortOrder
    nWork?: SortOrder
    hWork?: SortOrder
    sWork?: SortOrder
    rBeta?: SortOrder
    hBeta?: SortOrder
    sBeta?: SortOrder
    rFrameMean_genDiv?: SortOrder
    rWork_genDiv?: SortOrder
    nFrameMean_genDiv?: SortOrder
    nWork_genDiv?: SortOrder
    vocab?: SortOrder
    words?: SortOrder
    rBeta_genDiv?: SortOrder
    nBeta_genDiv?: SortOrder
    lustrum?: SortOrder
    title?: SortOrder
    work?: SortOrder
    agePublication?: SortOrder
    year?: SortOrder
    join?: SortOrder
    split?: SortOrder
    regionX?: SortOrder
    originalLanguage?: SortOrder
    genreY?: SortOrder
    origin?: SortOrder
    mainSubject?: SortOrder
    narrativeLocation?: SortOrder
    downloads?: SortOrder
    size?: SortOrder
    completeFlagX?: SortOrder
    literaryPeriodX?: SortOrder
    literatureFormV2?: SortOrder
  }

  export type WorkSumOrderByAggregateInput = {
    rFrameMean?: SortOrder
    nFrameMean?: SortOrder
    hFrameMean?: SortOrder
    sFrameMean?: SortOrder
    rWork?: SortOrder
    nWork?: SortOrder
    hWork?: SortOrder
    sWork?: SortOrder
    rBeta?: SortOrder
    hBeta?: SortOrder
    sBeta?: SortOrder
    rFrameMean_genDiv?: SortOrder
    rWork_genDiv?: SortOrder
    nFrameMean_genDiv?: SortOrder
    nWork_genDiv?: SortOrder
    vocab?: SortOrder
    words?: SortOrder
    rBeta_genDiv?: SortOrder
    nBeta_genDiv?: SortOrder
    lustrum?: SortOrder
    agePublication?: SortOrder
    year?: SortOrder
    join?: SortOrder
    split?: SortOrder
    downloads?: SortOrder
    size?: SortOrder
    completeFlagX?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type WorkRelationFilter = {
    is?: WorkWhereInput | null
    isNot?: WorkWhereInput | null
  }

  export type OccurrenceCountOrderByAggregateInput = {
    id?: SortOrder
    occId?: SortOrder
    term?: SortOrder
    scientificName?: SortOrder
    fileId?: SortOrder
    frameId?: SortOrder
    sentence?: SortOrder
    column?: SortOrder
    spalte?: SortOrder
  }

  export type OccurrenceAvgOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
    column?: SortOrder
    spalte?: SortOrder
  }

  export type OccurrenceMaxOrderByAggregateInput = {
    id?: SortOrder
    occId?: SortOrder
    term?: SortOrder
    scientificName?: SortOrder
    fileId?: SortOrder
    frameId?: SortOrder
    sentence?: SortOrder
    column?: SortOrder
    spalte?: SortOrder
  }

  export type OccurrenceMinOrderByAggregateInput = {
    id?: SortOrder
    occId?: SortOrder
    term?: SortOrder
    scientificName?: SortOrder
    fileId?: SortOrder
    frameId?: SortOrder
    sentence?: SortOrder
    column?: SortOrder
    spalte?: SortOrder
  }

  export type OccurrenceSumOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
    column?: SortOrder
    spalte?: SortOrder
  }

  export type TaxonCountOrderByAggregateInput = {
    occId?: SortOrder
    term?: SortOrder
    scientificName?: SortOrder
  }

  export type TaxonMaxOrderByAggregateInput = {
    occId?: SortOrder
    term?: SortOrder
    scientificName?: SortOrder
  }

  export type TaxonMinOrderByAggregateInput = {
    occId?: SortOrder
    term?: SortOrder
    scientificName?: SortOrder
  }

  export type WorkCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<Enumerable<WorkCreateWithoutAuthorsInput>, Enumerable<WorkUncheckedCreateWithoutAuthorsInput>>
    connectOrCreate?: Enumerable<WorkCreateOrConnectWithoutAuthorsInput>
    connect?: Enumerable<WorkWhereUniqueInput>
  }

  export type AuthorCreatelistOfWorksInput = {
    set: Enumerable<string>
  }

  export type WorkUncheckedCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<Enumerable<WorkCreateWithoutAuthorsInput>, Enumerable<WorkUncheckedCreateWithoutAuthorsInput>>
    connectOrCreate?: Enumerable<WorkCreateOrConnectWithoutAuthorsInput>
    connect?: Enumerable<WorkWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<Enumerable<WorkCreateWithoutAuthorsInput>, Enumerable<WorkUncheckedCreateWithoutAuthorsInput>>
    connectOrCreate?: Enumerable<WorkCreateOrConnectWithoutAuthorsInput>
    upsert?: Enumerable<WorkUpsertWithWhereUniqueWithoutAuthorsInput>
    set?: Enumerable<WorkWhereUniqueInput>
    disconnect?: Enumerable<WorkWhereUniqueInput>
    delete?: Enumerable<WorkWhereUniqueInput>
    connect?: Enumerable<WorkWhereUniqueInput>
    update?: Enumerable<WorkUpdateWithWhereUniqueWithoutAuthorsInput>
    updateMany?: Enumerable<WorkUpdateManyWithWhereWithoutAuthorsInput>
    deleteMany?: Enumerable<WorkScalarWhereInput>
  }

  export type AuthorUpdatelistOfWorksInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkUncheckedUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<Enumerable<WorkCreateWithoutAuthorsInput>, Enumerable<WorkUncheckedCreateWithoutAuthorsInput>>
    connectOrCreate?: Enumerable<WorkCreateOrConnectWithoutAuthorsInput>
    upsert?: Enumerable<WorkUpsertWithWhereUniqueWithoutAuthorsInput>
    set?: Enumerable<WorkWhereUniqueInput>
    disconnect?: Enumerable<WorkWhereUniqueInput>
    delete?: Enumerable<WorkWhereUniqueInput>
    connect?: Enumerable<WorkWhereUniqueInput>
    update?: Enumerable<WorkUpdateWithWhereUniqueWithoutAuthorsInput>
    updateMany?: Enumerable<WorkUpdateManyWithWhereWithoutAuthorsInput>
    deleteMany?: Enumerable<WorkScalarWhereInput>
  }

  export type WorkCreateliteratureFormInput = {
    set: Enumerable<string>
  }

  export type WorkCreategenreXInput = {
    set: Enumerable<string>
  }

  export type OccurrenceCreateNestedManyWithoutWorkInput = {
    create?: XOR<Enumerable<OccurrenceCreateWithoutWorkInput>, Enumerable<OccurrenceUncheckedCreateWithoutWorkInput>>
    connectOrCreate?: Enumerable<OccurrenceCreateOrConnectWithoutWorkInput>
    createMany?: OccurrenceCreateManyWorkInputEnvelope
    connect?: Enumerable<OccurrenceWhereUniqueInput>
  }

  export type AuthorCreateNestedManyWithoutWorksInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutWorksInput>, Enumerable<AuthorUncheckedCreateWithoutWorksInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutWorksInput>
    connect?: Enumerable<AuthorWhereUniqueInput>
  }

  export type OccurrenceUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<Enumerable<OccurrenceCreateWithoutWorkInput>, Enumerable<OccurrenceUncheckedCreateWithoutWorkInput>>
    connectOrCreate?: Enumerable<OccurrenceCreateOrConnectWithoutWorkInput>
    createMany?: OccurrenceCreateManyWorkInputEnvelope
    connect?: Enumerable<OccurrenceWhereUniqueInput>
  }

  export type AuthorUncheckedCreateNestedManyWithoutWorksInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutWorksInput>, Enumerable<AuthorUncheckedCreateWithoutWorksInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutWorksInput>
    connect?: Enumerable<AuthorWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkUpdateliteratureFormInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type WorkUpdategenreXInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type OccurrenceUpdateManyWithoutWorkNestedInput = {
    create?: XOR<Enumerable<OccurrenceCreateWithoutWorkInput>, Enumerable<OccurrenceUncheckedCreateWithoutWorkInput>>
    connectOrCreate?: Enumerable<OccurrenceCreateOrConnectWithoutWorkInput>
    upsert?: Enumerable<OccurrenceUpsertWithWhereUniqueWithoutWorkInput>
    createMany?: OccurrenceCreateManyWorkInputEnvelope
    set?: Enumerable<OccurrenceWhereUniqueInput>
    disconnect?: Enumerable<OccurrenceWhereUniqueInput>
    delete?: Enumerable<OccurrenceWhereUniqueInput>
    connect?: Enumerable<OccurrenceWhereUniqueInput>
    update?: Enumerable<OccurrenceUpdateWithWhereUniqueWithoutWorkInput>
    updateMany?: Enumerable<OccurrenceUpdateManyWithWhereWithoutWorkInput>
    deleteMany?: Enumerable<OccurrenceScalarWhereInput>
  }

  export type AuthorUpdateManyWithoutWorksNestedInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutWorksInput>, Enumerable<AuthorUncheckedCreateWithoutWorksInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutWorksInput>
    upsert?: Enumerable<AuthorUpsertWithWhereUniqueWithoutWorksInput>
    set?: Enumerable<AuthorWhereUniqueInput>
    disconnect?: Enumerable<AuthorWhereUniqueInput>
    delete?: Enumerable<AuthorWhereUniqueInput>
    connect?: Enumerable<AuthorWhereUniqueInput>
    update?: Enumerable<AuthorUpdateWithWhereUniqueWithoutWorksInput>
    updateMany?: Enumerable<AuthorUpdateManyWithWhereWithoutWorksInput>
    deleteMany?: Enumerable<AuthorScalarWhereInput>
  }

  export type OccurrenceUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<Enumerable<OccurrenceCreateWithoutWorkInput>, Enumerable<OccurrenceUncheckedCreateWithoutWorkInput>>
    connectOrCreate?: Enumerable<OccurrenceCreateOrConnectWithoutWorkInput>
    upsert?: Enumerable<OccurrenceUpsertWithWhereUniqueWithoutWorkInput>
    createMany?: OccurrenceCreateManyWorkInputEnvelope
    set?: Enumerable<OccurrenceWhereUniqueInput>
    disconnect?: Enumerable<OccurrenceWhereUniqueInput>
    delete?: Enumerable<OccurrenceWhereUniqueInput>
    connect?: Enumerable<OccurrenceWhereUniqueInput>
    update?: Enumerable<OccurrenceUpdateWithWhereUniqueWithoutWorkInput>
    updateMany?: Enumerable<OccurrenceUpdateManyWithWhereWithoutWorkInput>
    deleteMany?: Enumerable<OccurrenceScalarWhereInput>
  }

  export type AuthorUncheckedUpdateManyWithoutWorksNestedInput = {
    create?: XOR<Enumerable<AuthorCreateWithoutWorksInput>, Enumerable<AuthorUncheckedCreateWithoutWorksInput>>
    connectOrCreate?: Enumerable<AuthorCreateOrConnectWithoutWorksInput>
    upsert?: Enumerable<AuthorUpsertWithWhereUniqueWithoutWorksInput>
    set?: Enumerable<AuthorWhereUniqueInput>
    disconnect?: Enumerable<AuthorWhereUniqueInput>
    delete?: Enumerable<AuthorWhereUniqueInput>
    connect?: Enumerable<AuthorWhereUniqueInput>
    update?: Enumerable<AuthorUpdateWithWhereUniqueWithoutWorksInput>
    updateMany?: Enumerable<AuthorUpdateManyWithWhereWithoutWorksInput>
    deleteMany?: Enumerable<AuthorScalarWhereInput>
  }

  export type WorkCreateNestedOneWithoutOccurrencesInput = {
    create?: XOR<WorkCreateWithoutOccurrencesInput, WorkUncheckedCreateWithoutOccurrencesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutOccurrencesInput
    connect?: WorkWhereUniqueInput
  }

  export type WorkUpdateOneWithoutOccurrencesNestedInput = {
    create?: XOR<WorkCreateWithoutOccurrencesInput, WorkUncheckedCreateWithoutOccurrencesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutOccurrencesInput
    upsert?: WorkUpsertWithoutOccurrencesInput
    disconnect?: boolean
    delete?: boolean
    connect?: WorkWhereUniqueInput
    update?: XOR<WorkUpdateWithoutOccurrencesInput, WorkUncheckedUpdateWithoutOccurrencesInput>
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type WorkCreateWithoutAuthorsInput = {
    fileId: string
    rFrameMean?: number | null
    nFrameMean?: number | null
    hFrameMean?: number | null
    sFrameMean?: number | null
    rWork?: number | null
    nWork?: number | null
    hWork?: number | null
    sWork?: number | null
    rBeta?: number | null
    hBeta?: number | null
    sBeta?: number | null
    rFrameMean_genDiv?: number | null
    rWork_genDiv?: number | null
    nFrameMean_genDiv?: number | null
    nWork_genDiv?: number | null
    vocab?: number | null
    words?: number | null
    rBeta_genDiv?: number | null
    nBeta_genDiv?: number | null
    lustrum?: number | null
    title?: string | null
    work?: string | null
    agePublication?: number | null
    year?: number | null
    join?: number | null
    split?: number | null
    regionX?: string | null
    originalLanguage?: string | null
    literatureForm?: WorkCreateliteratureFormInput | Enumerable<string>
    genreX?: WorkCreategenreXInput | Enumerable<string>
    genreY?: string | null
    origin?: string | null
    mainSubject?: string | null
    narrativeLocation?: string | null
    downloads?: number | null
    size?: number | null
    completeFlagX?: number | null
    literaryPeriodX?: string | null
    literatureFormV2?: string | null
    occurrences?: OccurrenceCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutAuthorsInput = {
    fileId: string
    rFrameMean?: number | null
    nFrameMean?: number | null
    hFrameMean?: number | null
    sFrameMean?: number | null
    rWork?: number | null
    nWork?: number | null
    hWork?: number | null
    sWork?: number | null
    rBeta?: number | null
    hBeta?: number | null
    sBeta?: number | null
    rFrameMean_genDiv?: number | null
    rWork_genDiv?: number | null
    nFrameMean_genDiv?: number | null
    nWork_genDiv?: number | null
    vocab?: number | null
    words?: number | null
    rBeta_genDiv?: number | null
    nBeta_genDiv?: number | null
    lustrum?: number | null
    title?: string | null
    work?: string | null
    agePublication?: number | null
    year?: number | null
    join?: number | null
    split?: number | null
    regionX?: string | null
    originalLanguage?: string | null
    literatureForm?: WorkCreateliteratureFormInput | Enumerable<string>
    genreX?: WorkCreategenreXInput | Enumerable<string>
    genreY?: string | null
    origin?: string | null
    mainSubject?: string | null
    narrativeLocation?: string | null
    downloads?: number | null
    size?: number | null
    completeFlagX?: number | null
    literaryPeriodX?: string | null
    literatureFormV2?: string | null
    occurrences?: OccurrenceUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutAuthorsInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutAuthorsInput, WorkUncheckedCreateWithoutAuthorsInput>
  }

  export type WorkUpsertWithWhereUniqueWithoutAuthorsInput = {
    where: WorkWhereUniqueInput
    update: XOR<WorkUpdateWithoutAuthorsInput, WorkUncheckedUpdateWithoutAuthorsInput>
    create: XOR<WorkCreateWithoutAuthorsInput, WorkUncheckedCreateWithoutAuthorsInput>
  }

  export type WorkUpdateWithWhereUniqueWithoutAuthorsInput = {
    where: WorkWhereUniqueInput
    data: XOR<WorkUpdateWithoutAuthorsInput, WorkUncheckedUpdateWithoutAuthorsInput>
  }

  export type WorkUpdateManyWithWhereWithoutAuthorsInput = {
    where: WorkScalarWhereInput
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyWithoutWorksInput>
  }

  export type WorkScalarWhereInput = {
    AND?: Enumerable<WorkScalarWhereInput>
    OR?: Enumerable<WorkScalarWhereInput>
    NOT?: Enumerable<WorkScalarWhereInput>
    fileId?: StringFilter | string
    rFrameMean?: FloatNullableFilter | number | null
    nFrameMean?: FloatNullableFilter | number | null
    hFrameMean?: FloatNullableFilter | number | null
    sFrameMean?: FloatNullableFilter | number | null
    rWork?: FloatNullableFilter | number | null
    nWork?: FloatNullableFilter | number | null
    hWork?: FloatNullableFilter | number | null
    sWork?: FloatNullableFilter | number | null
    rBeta?: FloatNullableFilter | number | null
    hBeta?: FloatNullableFilter | number | null
    sBeta?: FloatNullableFilter | number | null
    rFrameMean_genDiv?: FloatNullableFilter | number | null
    rWork_genDiv?: FloatNullableFilter | number | null
    nFrameMean_genDiv?: FloatNullableFilter | number | null
    nWork_genDiv?: FloatNullableFilter | number | null
    vocab?: IntNullableFilter | number | null
    words?: IntNullableFilter | number | null
    rBeta_genDiv?: FloatNullableFilter | number | null
    nBeta_genDiv?: FloatNullableFilter | number | null
    lustrum?: IntNullableFilter | number | null
    title?: StringNullableFilter | string | null
    work?: StringNullableFilter | string | null
    agePublication?: IntNullableFilter | number | null
    year?: IntNullableFilter | number | null
    join?: IntNullableFilter | number | null
    split?: IntNullableFilter | number | null
    regionX?: StringNullableFilter | string | null
    originalLanguage?: StringNullableFilter | string | null
    literatureForm?: StringNullableListFilter
    genreX?: StringNullableListFilter
    genreY?: StringNullableFilter | string | null
    origin?: StringNullableFilter | string | null
    mainSubject?: StringNullableFilter | string | null
    narrativeLocation?: StringNullableFilter | string | null
    downloads?: IntNullableFilter | number | null
    size?: IntNullableFilter | number | null
    completeFlagX?: IntNullableFilter | number | null
    literaryPeriodX?: StringNullableFilter | string | null
    literatureFormV2?: StringNullableFilter | string | null
  }

  export type OccurrenceCreateWithoutWorkInput = {
    id: number
    occId?: string | null
    term?: string | null
    scientificName?: string | null
    frameId?: number | null
    sentence?: string | null
    column?: number | null
    spalte?: number | null
  }

  export type OccurrenceUncheckedCreateWithoutWorkInput = {
    id: number
    occId?: string | null
    term?: string | null
    scientificName?: string | null
    frameId?: number | null
    sentence?: string | null
    column?: number | null
    spalte?: number | null
  }

  export type OccurrenceCreateOrConnectWithoutWorkInput = {
    where: OccurrenceWhereUniqueInput
    create: XOR<OccurrenceCreateWithoutWorkInput, OccurrenceUncheckedCreateWithoutWorkInput>
  }

  export type OccurrenceCreateManyWorkInputEnvelope = {
    data: Enumerable<OccurrenceCreateManyWorkInput>
    skipDuplicates?: boolean
  }

  export type AuthorCreateWithoutWorksInput = {
    author?: string | null
    forename?: string | null
    surname?: string | null
    birth?: number | null
    death?: number | null
    workStart?: number | null
    gender?: string | null
    religion?: string | null
    ethnicity?: string | null
    nativeLanguage?: string | null
    childhoodResidence?: string | null
    childhoodRegion?: string | null
    residence?: string | null
    regionY?: string | null
    literaryPeriodY?: string | null
    partners?: number | null
    children?: number | null
    highestEducation?: string | null
    biodiversitySpecification?: number | null
    field?: string | null
    occupation?: string | null
    country?: string | null
    workCount?: number | null
    vocabCount?: number | null
    wordCount?: number | null
    birthname?: string | null
    pseudonym?: string | null
    aliases?: string | null
    father?: string | null
    mother?: string | null
    languages?: string | null
    employer?: string | null
    position?: string | null
    university?: string | null
    academicDegree?: string | null
    member?: string | null
    deathManner?: string | null
    deathCause?: string | null
    completeFlagY?: number | null
    age?: number | null
    siblings?: number | null
    socialStatus?: string | null
    mainRegion?: string | null
    mainRegionV2?: string | null
    locality?: number | null
    mainResidence?: string | null
    authorX?: string | null
    authorY?: string | null
    listOfWorks?: AuthorCreatelistOfWorksInput | Enumerable<string>
  }

  export type AuthorUncheckedCreateWithoutWorksInput = {
    author?: string | null
    forename?: string | null
    surname?: string | null
    birth?: number | null
    death?: number | null
    workStart?: number | null
    gender?: string | null
    religion?: string | null
    ethnicity?: string | null
    nativeLanguage?: string | null
    childhoodResidence?: string | null
    childhoodRegion?: string | null
    residence?: string | null
    regionY?: string | null
    literaryPeriodY?: string | null
    partners?: number | null
    children?: number | null
    highestEducation?: string | null
    biodiversitySpecification?: number | null
    field?: string | null
    occupation?: string | null
    country?: string | null
    workCount?: number | null
    vocabCount?: number | null
    wordCount?: number | null
    birthname?: string | null
    pseudonym?: string | null
    aliases?: string | null
    father?: string | null
    mother?: string | null
    languages?: string | null
    employer?: string | null
    position?: string | null
    university?: string | null
    academicDegree?: string | null
    member?: string | null
    deathManner?: string | null
    deathCause?: string | null
    completeFlagY?: number | null
    age?: number | null
    siblings?: number | null
    socialStatus?: string | null
    mainRegion?: string | null
    mainRegionV2?: string | null
    locality?: number | null
    mainResidence?: string | null
    id?: number
    authorX?: string | null
    authorY?: string | null
    listOfWorks?: AuthorCreatelistOfWorksInput | Enumerable<string>
  }

  export type AuthorCreateOrConnectWithoutWorksInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutWorksInput, AuthorUncheckedCreateWithoutWorksInput>
  }

  export type OccurrenceUpsertWithWhereUniqueWithoutWorkInput = {
    where: OccurrenceWhereUniqueInput
    update: XOR<OccurrenceUpdateWithoutWorkInput, OccurrenceUncheckedUpdateWithoutWorkInput>
    create: XOR<OccurrenceCreateWithoutWorkInput, OccurrenceUncheckedCreateWithoutWorkInput>
  }

  export type OccurrenceUpdateWithWhereUniqueWithoutWorkInput = {
    where: OccurrenceWhereUniqueInput
    data: XOR<OccurrenceUpdateWithoutWorkInput, OccurrenceUncheckedUpdateWithoutWorkInput>
  }

  export type OccurrenceUpdateManyWithWhereWithoutWorkInput = {
    where: OccurrenceScalarWhereInput
    data: XOR<OccurrenceUpdateManyMutationInput, OccurrenceUncheckedUpdateManyWithoutOccurrencesInput>
  }

  export type OccurrenceScalarWhereInput = {
    AND?: Enumerable<OccurrenceScalarWhereInput>
    OR?: Enumerable<OccurrenceScalarWhereInput>
    NOT?: Enumerable<OccurrenceScalarWhereInput>
    id?: IntFilter | number
    occId?: StringNullableFilter | string | null
    term?: StringNullableFilter | string | null
    scientificName?: StringNullableFilter | string | null
    fileId?: StringFilter | string
    frameId?: IntNullableFilter | number | null
    sentence?: StringNullableFilter | string | null
    column?: IntNullableFilter | number | null
    spalte?: IntNullableFilter | number | null
  }

  export type AuthorUpsertWithWhereUniqueWithoutWorksInput = {
    where: AuthorWhereUniqueInput
    update: XOR<AuthorUpdateWithoutWorksInput, AuthorUncheckedUpdateWithoutWorksInput>
    create: XOR<AuthorCreateWithoutWorksInput, AuthorUncheckedCreateWithoutWorksInput>
  }

  export type AuthorUpdateWithWhereUniqueWithoutWorksInput = {
    where: AuthorWhereUniqueInput
    data: XOR<AuthorUpdateWithoutWorksInput, AuthorUncheckedUpdateWithoutWorksInput>
  }

  export type AuthorUpdateManyWithWhereWithoutWorksInput = {
    where: AuthorScalarWhereInput
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyWithoutAuthorsInput>
  }

  export type AuthorScalarWhereInput = {
    AND?: Enumerable<AuthorScalarWhereInput>
    OR?: Enumerable<AuthorScalarWhereInput>
    NOT?: Enumerable<AuthorScalarWhereInput>
    author?: StringNullableFilter | string | null
    forename?: StringNullableFilter | string | null
    surname?: StringNullableFilter | string | null
    birth?: IntNullableFilter | number | null
    death?: IntNullableFilter | number | null
    workStart?: IntNullableFilter | number | null
    gender?: StringNullableFilter | string | null
    religion?: StringNullableFilter | string | null
    ethnicity?: StringNullableFilter | string | null
    nativeLanguage?: StringNullableFilter | string | null
    childhoodResidence?: StringNullableFilter | string | null
    childhoodRegion?: StringNullableFilter | string | null
    residence?: StringNullableFilter | string | null
    regionY?: StringNullableFilter | string | null
    literaryPeriodY?: StringNullableFilter | string | null
    partners?: IntNullableFilter | number | null
    children?: IntNullableFilter | number | null
    highestEducation?: StringNullableFilter | string | null
    biodiversitySpecification?: IntNullableFilter | number | null
    field?: StringNullableFilter | string | null
    occupation?: StringNullableFilter | string | null
    country?: StringNullableFilter | string | null
    workCount?: IntNullableFilter | number | null
    vocabCount?: IntNullableFilter | number | null
    wordCount?: IntNullableFilter | number | null
    birthname?: StringNullableFilter | string | null
    pseudonym?: StringNullableFilter | string | null
    aliases?: StringNullableFilter | string | null
    father?: StringNullableFilter | string | null
    mother?: StringNullableFilter | string | null
    languages?: StringNullableFilter | string | null
    employer?: StringNullableFilter | string | null
    position?: StringNullableFilter | string | null
    university?: StringNullableFilter | string | null
    academicDegree?: StringNullableFilter | string | null
    member?: StringNullableFilter | string | null
    deathManner?: StringNullableFilter | string | null
    deathCause?: StringNullableFilter | string | null
    completeFlagY?: IntNullableFilter | number | null
    age?: IntNullableFilter | number | null
    siblings?: IntNullableFilter | number | null
    socialStatus?: StringNullableFilter | string | null
    mainRegion?: StringNullableFilter | string | null
    mainRegionV2?: StringNullableFilter | string | null
    locality?: IntNullableFilter | number | null
    mainResidence?: StringNullableFilter | string | null
    id?: IntFilter | number
    authorX?: StringNullableFilter | string | null
    authorY?: StringNullableFilter | string | null
    listOfWorks?: StringNullableListFilter
  }

  export type WorkCreateWithoutOccurrencesInput = {
    fileId: string
    rFrameMean?: number | null
    nFrameMean?: number | null
    hFrameMean?: number | null
    sFrameMean?: number | null
    rWork?: number | null
    nWork?: number | null
    hWork?: number | null
    sWork?: number | null
    rBeta?: number | null
    hBeta?: number | null
    sBeta?: number | null
    rFrameMean_genDiv?: number | null
    rWork_genDiv?: number | null
    nFrameMean_genDiv?: number | null
    nWork_genDiv?: number | null
    vocab?: number | null
    words?: number | null
    rBeta_genDiv?: number | null
    nBeta_genDiv?: number | null
    lustrum?: number | null
    title?: string | null
    work?: string | null
    agePublication?: number | null
    year?: number | null
    join?: number | null
    split?: number | null
    regionX?: string | null
    originalLanguage?: string | null
    literatureForm?: WorkCreateliteratureFormInput | Enumerable<string>
    genreX?: WorkCreategenreXInput | Enumerable<string>
    genreY?: string | null
    origin?: string | null
    mainSubject?: string | null
    narrativeLocation?: string | null
    downloads?: number | null
    size?: number | null
    completeFlagX?: number | null
    literaryPeriodX?: string | null
    literatureFormV2?: string | null
    authors?: AuthorCreateNestedManyWithoutWorksInput
  }

  export type WorkUncheckedCreateWithoutOccurrencesInput = {
    fileId: string
    rFrameMean?: number | null
    nFrameMean?: number | null
    hFrameMean?: number | null
    sFrameMean?: number | null
    rWork?: number | null
    nWork?: number | null
    hWork?: number | null
    sWork?: number | null
    rBeta?: number | null
    hBeta?: number | null
    sBeta?: number | null
    rFrameMean_genDiv?: number | null
    rWork_genDiv?: number | null
    nFrameMean_genDiv?: number | null
    nWork_genDiv?: number | null
    vocab?: number | null
    words?: number | null
    rBeta_genDiv?: number | null
    nBeta_genDiv?: number | null
    lustrum?: number | null
    title?: string | null
    work?: string | null
    agePublication?: number | null
    year?: number | null
    join?: number | null
    split?: number | null
    regionX?: string | null
    originalLanguage?: string | null
    literatureForm?: WorkCreateliteratureFormInput | Enumerable<string>
    genreX?: WorkCreategenreXInput | Enumerable<string>
    genreY?: string | null
    origin?: string | null
    mainSubject?: string | null
    narrativeLocation?: string | null
    downloads?: number | null
    size?: number | null
    completeFlagX?: number | null
    literaryPeriodX?: string | null
    literatureFormV2?: string | null
    authors?: AuthorUncheckedCreateNestedManyWithoutWorksInput
  }

  export type WorkCreateOrConnectWithoutOccurrencesInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutOccurrencesInput, WorkUncheckedCreateWithoutOccurrencesInput>
  }

  export type WorkUpsertWithoutOccurrencesInput = {
    update: XOR<WorkUpdateWithoutOccurrencesInput, WorkUncheckedUpdateWithoutOccurrencesInput>
    create: XOR<WorkCreateWithoutOccurrencesInput, WorkUncheckedCreateWithoutOccurrencesInput>
  }

  export type WorkUpdateWithoutOccurrencesInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    rFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    hFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    sFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork?: NullableFloatFieldUpdateOperationsInput | number | null
    hWork?: NullableFloatFieldUpdateOperationsInput | number | null
    sWork?: NullableFloatFieldUpdateOperationsInput | number | null
    rBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    hBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    sBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    rFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    vocab?: NullableIntFieldUpdateOperationsInput | number | null
    words?: NullableIntFieldUpdateOperationsInput | number | null
    rBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    lustrum?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    agePublication?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    join?: NullableIntFieldUpdateOperationsInput | number | null
    split?: NullableIntFieldUpdateOperationsInput | number | null
    regionX?: NullableStringFieldUpdateOperationsInput | string | null
    originalLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    literatureForm?: WorkUpdateliteratureFormInput | Enumerable<string>
    genreX?: WorkUpdategenreXInput | Enumerable<string>
    genreY?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    mainSubject?: NullableStringFieldUpdateOperationsInput | string | null
    narrativeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    completeFlagX?: NullableIntFieldUpdateOperationsInput | number | null
    literaryPeriodX?: NullableStringFieldUpdateOperationsInput | string | null
    literatureFormV2?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: AuthorUpdateManyWithoutWorksNestedInput
  }

  export type WorkUncheckedUpdateWithoutOccurrencesInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    rFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    hFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    sFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork?: NullableFloatFieldUpdateOperationsInput | number | null
    hWork?: NullableFloatFieldUpdateOperationsInput | number | null
    sWork?: NullableFloatFieldUpdateOperationsInput | number | null
    rBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    hBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    sBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    rFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    vocab?: NullableIntFieldUpdateOperationsInput | number | null
    words?: NullableIntFieldUpdateOperationsInput | number | null
    rBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    lustrum?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    agePublication?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    join?: NullableIntFieldUpdateOperationsInput | number | null
    split?: NullableIntFieldUpdateOperationsInput | number | null
    regionX?: NullableStringFieldUpdateOperationsInput | string | null
    originalLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    literatureForm?: WorkUpdateliteratureFormInput | Enumerable<string>
    genreX?: WorkUpdategenreXInput | Enumerable<string>
    genreY?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    mainSubject?: NullableStringFieldUpdateOperationsInput | string | null
    narrativeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    completeFlagX?: NullableIntFieldUpdateOperationsInput | number | null
    literaryPeriodX?: NullableStringFieldUpdateOperationsInput | string | null
    literatureFormV2?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: AuthorUncheckedUpdateManyWithoutWorksNestedInput
  }

  export type WorkUpdateWithoutAuthorsInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    rFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    hFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    sFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork?: NullableFloatFieldUpdateOperationsInput | number | null
    hWork?: NullableFloatFieldUpdateOperationsInput | number | null
    sWork?: NullableFloatFieldUpdateOperationsInput | number | null
    rBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    hBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    sBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    rFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    vocab?: NullableIntFieldUpdateOperationsInput | number | null
    words?: NullableIntFieldUpdateOperationsInput | number | null
    rBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    lustrum?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    agePublication?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    join?: NullableIntFieldUpdateOperationsInput | number | null
    split?: NullableIntFieldUpdateOperationsInput | number | null
    regionX?: NullableStringFieldUpdateOperationsInput | string | null
    originalLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    literatureForm?: WorkUpdateliteratureFormInput | Enumerable<string>
    genreX?: WorkUpdategenreXInput | Enumerable<string>
    genreY?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    mainSubject?: NullableStringFieldUpdateOperationsInput | string | null
    narrativeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    completeFlagX?: NullableIntFieldUpdateOperationsInput | number | null
    literaryPeriodX?: NullableStringFieldUpdateOperationsInput | string | null
    literatureFormV2?: NullableStringFieldUpdateOperationsInput | string | null
    occurrences?: OccurrenceUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutAuthorsInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    rFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    hFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    sFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork?: NullableFloatFieldUpdateOperationsInput | number | null
    hWork?: NullableFloatFieldUpdateOperationsInput | number | null
    sWork?: NullableFloatFieldUpdateOperationsInput | number | null
    rBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    hBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    sBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    rFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    vocab?: NullableIntFieldUpdateOperationsInput | number | null
    words?: NullableIntFieldUpdateOperationsInput | number | null
    rBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    lustrum?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    agePublication?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    join?: NullableIntFieldUpdateOperationsInput | number | null
    split?: NullableIntFieldUpdateOperationsInput | number | null
    regionX?: NullableStringFieldUpdateOperationsInput | string | null
    originalLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    literatureForm?: WorkUpdateliteratureFormInput | Enumerable<string>
    genreX?: WorkUpdategenreXInput | Enumerable<string>
    genreY?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    mainSubject?: NullableStringFieldUpdateOperationsInput | string | null
    narrativeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    completeFlagX?: NullableIntFieldUpdateOperationsInput | number | null
    literaryPeriodX?: NullableStringFieldUpdateOperationsInput | string | null
    literatureFormV2?: NullableStringFieldUpdateOperationsInput | string | null
    occurrences?: OccurrenceUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateManyWithoutWorksInput = {
    fileId?: StringFieldUpdateOperationsInput | string
    rFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    hFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    sFrameMean?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork?: NullableFloatFieldUpdateOperationsInput | number | null
    hWork?: NullableFloatFieldUpdateOperationsInput | number | null
    sWork?: NullableFloatFieldUpdateOperationsInput | number | null
    rBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    hBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    sBeta?: NullableFloatFieldUpdateOperationsInput | number | null
    rFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    rWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nFrameMean_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nWork_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    vocab?: NullableIntFieldUpdateOperationsInput | number | null
    words?: NullableIntFieldUpdateOperationsInput | number | null
    rBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    nBeta_genDiv?: NullableFloatFieldUpdateOperationsInput | number | null
    lustrum?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    agePublication?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    join?: NullableIntFieldUpdateOperationsInput | number | null
    split?: NullableIntFieldUpdateOperationsInput | number | null
    regionX?: NullableStringFieldUpdateOperationsInput | string | null
    originalLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    literatureForm?: WorkUpdateliteratureFormInput | Enumerable<string>
    genreX?: WorkUpdategenreXInput | Enumerable<string>
    genreY?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    mainSubject?: NullableStringFieldUpdateOperationsInput | string | null
    narrativeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    completeFlagX?: NullableIntFieldUpdateOperationsInput | number | null
    literaryPeriodX?: NullableStringFieldUpdateOperationsInput | string | null
    literatureFormV2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OccurrenceCreateManyWorkInput = {
    id: number
    occId?: string | null
    term?: string | null
    scientificName?: string | null
    frameId?: number | null
    sentence?: string | null
    column?: number | null
    spalte?: number | null
  }

  export type OccurrenceUpdateWithoutWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    occId?: NullableStringFieldUpdateOperationsInput | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    frameId?: NullableIntFieldUpdateOperationsInput | number | null
    sentence?: NullableStringFieldUpdateOperationsInput | string | null
    column?: NullableIntFieldUpdateOperationsInput | number | null
    spalte?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OccurrenceUncheckedUpdateWithoutWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    occId?: NullableStringFieldUpdateOperationsInput | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    frameId?: NullableIntFieldUpdateOperationsInput | number | null
    sentence?: NullableStringFieldUpdateOperationsInput | string | null
    column?: NullableIntFieldUpdateOperationsInput | number | null
    spalte?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OccurrenceUncheckedUpdateManyWithoutOccurrencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    occId?: NullableStringFieldUpdateOperationsInput | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    frameId?: NullableIntFieldUpdateOperationsInput | number | null
    sentence?: NullableStringFieldUpdateOperationsInput | string | null
    column?: NullableIntFieldUpdateOperationsInput | number | null
    spalte?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AuthorUpdateWithoutWorksInput = {
    author?: NullableStringFieldUpdateOperationsInput | string | null
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableIntFieldUpdateOperationsInput | number | null
    death?: NullableIntFieldUpdateOperationsInput | number | null
    workStart?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    nativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodResidence?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodRegion?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: NullableStringFieldUpdateOperationsInput | string | null
    regionY?: NullableStringFieldUpdateOperationsInput | string | null
    literaryPeriodY?: NullableStringFieldUpdateOperationsInput | string | null
    partners?: NullableIntFieldUpdateOperationsInput | number | null
    children?: NullableIntFieldUpdateOperationsInput | number | null
    highestEducation?: NullableStringFieldUpdateOperationsInput | string | null
    biodiversitySpecification?: NullableIntFieldUpdateOperationsInput | number | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    workCount?: NullableIntFieldUpdateOperationsInput | number | null
    vocabCount?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    birthname?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonym?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: NullableStringFieldUpdateOperationsInput | string | null
    father?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    academicDegree?: NullableStringFieldUpdateOperationsInput | string | null
    member?: NullableStringFieldUpdateOperationsInput | string | null
    deathManner?: NullableStringFieldUpdateOperationsInput | string | null
    deathCause?: NullableStringFieldUpdateOperationsInput | string | null
    completeFlagY?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    siblings?: NullableIntFieldUpdateOperationsInput | number | null
    socialStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegion?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegionV2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: NullableIntFieldUpdateOperationsInput | number | null
    mainResidence?: NullableStringFieldUpdateOperationsInput | string | null
    authorX?: NullableStringFieldUpdateOperationsInput | string | null
    authorY?: NullableStringFieldUpdateOperationsInput | string | null
    listOfWorks?: AuthorUpdatelistOfWorksInput | Enumerable<string>
  }

  export type AuthorUncheckedUpdateWithoutWorksInput = {
    author?: NullableStringFieldUpdateOperationsInput | string | null
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableIntFieldUpdateOperationsInput | number | null
    death?: NullableIntFieldUpdateOperationsInput | number | null
    workStart?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    nativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodResidence?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodRegion?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: NullableStringFieldUpdateOperationsInput | string | null
    regionY?: NullableStringFieldUpdateOperationsInput | string | null
    literaryPeriodY?: NullableStringFieldUpdateOperationsInput | string | null
    partners?: NullableIntFieldUpdateOperationsInput | number | null
    children?: NullableIntFieldUpdateOperationsInput | number | null
    highestEducation?: NullableStringFieldUpdateOperationsInput | string | null
    biodiversitySpecification?: NullableIntFieldUpdateOperationsInput | number | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    workCount?: NullableIntFieldUpdateOperationsInput | number | null
    vocabCount?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    birthname?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonym?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: NullableStringFieldUpdateOperationsInput | string | null
    father?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    academicDegree?: NullableStringFieldUpdateOperationsInput | string | null
    member?: NullableStringFieldUpdateOperationsInput | string | null
    deathManner?: NullableStringFieldUpdateOperationsInput | string | null
    deathCause?: NullableStringFieldUpdateOperationsInput | string | null
    completeFlagY?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    siblings?: NullableIntFieldUpdateOperationsInput | number | null
    socialStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegion?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegionV2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: NullableIntFieldUpdateOperationsInput | number | null
    mainResidence?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    authorX?: NullableStringFieldUpdateOperationsInput | string | null
    authorY?: NullableStringFieldUpdateOperationsInput | string | null
    listOfWorks?: AuthorUpdatelistOfWorksInput | Enumerable<string>
  }

  export type AuthorUncheckedUpdateManyWithoutAuthorsInput = {
    author?: NullableStringFieldUpdateOperationsInput | string | null
    forename?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableIntFieldUpdateOperationsInput | number | null
    death?: NullableIntFieldUpdateOperationsInput | number | null
    workStart?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    nativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodResidence?: NullableStringFieldUpdateOperationsInput | string | null
    childhoodRegion?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: NullableStringFieldUpdateOperationsInput | string | null
    regionY?: NullableStringFieldUpdateOperationsInput | string | null
    literaryPeriodY?: NullableStringFieldUpdateOperationsInput | string | null
    partners?: NullableIntFieldUpdateOperationsInput | number | null
    children?: NullableIntFieldUpdateOperationsInput | number | null
    highestEducation?: NullableStringFieldUpdateOperationsInput | string | null
    biodiversitySpecification?: NullableIntFieldUpdateOperationsInput | number | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    workCount?: NullableIntFieldUpdateOperationsInput | number | null
    vocabCount?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    birthname?: NullableStringFieldUpdateOperationsInput | string | null
    pseudonym?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: NullableStringFieldUpdateOperationsInput | string | null
    father?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    academicDegree?: NullableStringFieldUpdateOperationsInput | string | null
    member?: NullableStringFieldUpdateOperationsInput | string | null
    deathManner?: NullableStringFieldUpdateOperationsInput | string | null
    deathCause?: NullableStringFieldUpdateOperationsInput | string | null
    completeFlagY?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    siblings?: NullableIntFieldUpdateOperationsInput | number | null
    socialStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegion?: NullableStringFieldUpdateOperationsInput | string | null
    mainRegionV2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: NullableIntFieldUpdateOperationsInput | number | null
    mainResidence?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    authorX?: NullableStringFieldUpdateOperationsInput | string | null
    authorY?: NullableStringFieldUpdateOperationsInput | string | null
    listOfWorks?: AuthorUpdatelistOfWorksInput | Enumerable<string>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}