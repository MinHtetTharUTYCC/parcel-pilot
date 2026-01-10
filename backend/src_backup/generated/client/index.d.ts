
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Parcel
 * 
 */
export type Parcel = $Result.DefaultSelection<Prisma.$ParcelPayload>
/**
 * Model PickupLog
 * 
 */
export type PickupLog = $Result.DefaultSelection<Prisma.$PickupLogPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  MANAGER: 'MANAGER',
  STAFF: 'STAFF',
  RESIDENT: 'RESIDENT',
  RESIDENT_PENDING: 'RESIDENT_PENDING'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ParcelStatus: {
  REGISTERED: 'REGISTERED',
  READY_FOR_PICKUP: 'READY_FOR_PICKUP',
  PICKED_UP: 'PICKED_UP',
  RETURNED: 'RETURNED'
};

export type ParcelStatus = (typeof ParcelStatus)[keyof typeof ParcelStatus]


export const PickupMethod: {
  QR_SCAN: 'QR_SCAN',
  MANUAL_CODE: 'MANUAL_CODE',
  STAFF_VERIFIED: 'STAFF_VERIFIED'
};

export type PickupMethod = (typeof PickupMethod)[keyof typeof PickupMethod]


export const NotificationType: {
  PARCEL_RECEIVED: 'PARCEL_RECEIVED',
  PARCEL_READY: 'PARCEL_READY',
  PARCEL_PICKED_UP: 'PARCEL_PICKED_UP',
  PICKUP_REMINDER: 'PICKUP_REMINDER',
  ACCOUNT_APPROVED: 'ACCOUNT_APPROVED',
  ACCOUNT_REJECTED: 'ACCOUNT_REJECTED'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ParcelStatus = $Enums.ParcelStatus

export const ParcelStatus: typeof $Enums.ParcelStatus

export type PickupMethod = $Enums.PickupMethod

export const PickupMethod: typeof $Enums.PickupMethod

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parcel`: Exposes CRUD operations for the **Parcel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parcels
    * const parcels = await prisma.parcel.findMany()
    * ```
    */
  get parcel(): Prisma.ParcelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pickupLog`: Exposes CRUD operations for the **PickupLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PickupLogs
    * const pickupLogs = await prisma.pickupLog.findMany()
    * ```
    */
  get pickupLog(): Prisma.PickupLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Parcel: 'Parcel',
    PickupLog: 'PickupLog',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "parcel" | "pickupLog" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Parcel: {
        payload: Prisma.$ParcelPayload<ExtArgs>
        fields: Prisma.ParcelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParcelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParcelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          findFirst: {
            args: Prisma.ParcelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParcelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          findMany: {
            args: Prisma.ParcelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>[]
          }
          create: {
            args: Prisma.ParcelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          createMany: {
            args: Prisma.ParcelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParcelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>[]
          }
          delete: {
            args: Prisma.ParcelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          update: {
            args: Prisma.ParcelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          deleteMany: {
            args: Prisma.ParcelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParcelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParcelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>[]
          }
          upsert: {
            args: Prisma.ParcelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          aggregate: {
            args: Prisma.ParcelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParcel>
          }
          groupBy: {
            args: Prisma.ParcelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParcelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParcelCountArgs<ExtArgs>
            result: $Utils.Optional<ParcelCountAggregateOutputType> | number
          }
        }
      }
      PickupLog: {
        payload: Prisma.$PickupLogPayload<ExtArgs>
        fields: Prisma.PickupLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PickupLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PickupLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupLogPayload>
          }
          findFirst: {
            args: Prisma.PickupLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PickupLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupLogPayload>
          }
          findMany: {
            args: Prisma.PickupLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupLogPayload>[]
          }
          create: {
            args: Prisma.PickupLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupLogPayload>
          }
          createMany: {
            args: Prisma.PickupLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PickupLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupLogPayload>[]
          }
          delete: {
            args: Prisma.PickupLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupLogPayload>
          }
          update: {
            args: Prisma.PickupLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupLogPayload>
          }
          deleteMany: {
            args: Prisma.PickupLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PickupLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PickupLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupLogPayload>[]
          }
          upsert: {
            args: Prisma.PickupLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupLogPayload>
          }
          aggregate: {
            args: Prisma.PickupLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePickupLog>
          }
          groupBy: {
            args: Prisma.PickupLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PickupLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PickupLogCountArgs<ExtArgs>
            result: $Utils.Optional<PickupLogCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    parcel?: ParcelOmit
    pickupLog?: PickupLogOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    receivedParcels: number
    managedParcels: number
    pickupLogs: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receivedParcels?: boolean | UserCountOutputTypeCountReceivedParcelsArgs
    managedParcels?: boolean | UserCountOutputTypeCountManagedParcelsArgs
    pickupLogs?: boolean | UserCountOutputTypeCountPickupLogsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedParcelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagedParcelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPickupLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PickupLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ParcelCountOutputType
   */

  export type ParcelCountOutputType = {
    pickupLogs: number
  }

  export type ParcelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pickupLogs?: boolean | ParcelCountOutputTypeCountPickupLogsArgs
  }

  // Custom InputTypes
  /**
   * ParcelCountOutputType without action
   */
  export type ParcelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParcelCountOutputType
     */
    select?: ParcelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParcelCountOutputType without action
   */
  export type ParcelCountOutputTypeCountPickupLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PickupLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    approvedAt: Date | null
    role: $Enums.UserRole | null
    unitNumber: string | null
    imageUrl: string | null
    imageKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    approvedAt: Date | null
    role: $Enums.UserRole | null
    unitNumber: string | null
    imageUrl: string | null
    imageKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    phone: number
    approvedAt: number
    role: number
    unitNumber: number
    imageUrl: number
    imageKey: number
    createdAt: number
    updatedAt: number
    lastLoginAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    approvedAt?: true
    role?: true
    unitNumber?: true
    imageUrl?: true
    imageKey?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    approvedAt?: true
    role?: true
    unitNumber?: true
    imageUrl?: true
    imageKey?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    approvedAt?: true
    role?: true
    unitNumber?: true
    imageUrl?: true
    imageKey?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    phone: string | null
    approvedAt: Date | null
    role: $Enums.UserRole
    unitNumber: string | null
    imageUrl: string | null
    imageKey: string | null
    createdAt: Date
    updatedAt: Date
    lastLoginAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    approvedAt?: boolean
    role?: boolean
    unitNumber?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    receivedParcels?: boolean | User$receivedParcelsArgs<ExtArgs>
    managedParcels?: boolean | User$managedParcelsArgs<ExtArgs>
    pickupLogs?: boolean | User$pickupLogsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    approvedAt?: boolean
    role?: boolean
    unitNumber?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    approvedAt?: boolean
    role?: boolean
    unitNumber?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    approvedAt?: boolean
    role?: boolean
    unitNumber?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "phone" | "approvedAt" | "role" | "unitNumber" | "imageUrl" | "imageKey" | "createdAt" | "updatedAt" | "lastLoginAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receivedParcels?: boolean | User$receivedParcelsArgs<ExtArgs>
    managedParcels?: boolean | User$managedParcelsArgs<ExtArgs>
    pickupLogs?: boolean | User$pickupLogsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      receivedParcels: Prisma.$ParcelPayload<ExtArgs>[]
      managedParcels: Prisma.$ParcelPayload<ExtArgs>[]
      pickupLogs: Prisma.$PickupLogPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      phone: string | null
      approvedAt: Date | null
      role: $Enums.UserRole
      unitNumber: string | null
      imageUrl: string | null
      imageKey: string | null
      createdAt: Date
      updatedAt: Date
      lastLoginAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receivedParcels<T extends User$receivedParcelsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedParcelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    managedParcels<T extends User$managedParcelsArgs<ExtArgs> = {}>(args?: Subset<T, User$managedParcelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pickupLogs<T extends User$pickupLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$pickupLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly approvedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly unitNumber: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly imageKey: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.receivedParcels
   */
  export type User$receivedParcelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    where?: ParcelWhereInput
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    cursor?: ParcelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * User.managedParcels
   */
  export type User$managedParcelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    where?: ParcelWhereInput
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    cursor?: ParcelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * User.pickupLogs
   */
  export type User$pickupLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogInclude<ExtArgs> | null
    where?: PickupLogWhereInput
    orderBy?: PickupLogOrderByWithRelationInput | PickupLogOrderByWithRelationInput[]
    cursor?: PickupLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PickupLogScalarFieldEnum | PickupLogScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Parcel
   */

  export type AggregateParcel = {
    _count: ParcelCountAggregateOutputType | null
    _avg: ParcelAvgAggregateOutputType | null
    _sum: ParcelSumAggregateOutputType | null
    _min: ParcelMinAggregateOutputType | null
    _max: ParcelMaxAggregateOutputType | null
  }

  export type ParcelAvgAggregateOutputType = {
    imageSize: number | null
  }

  export type ParcelSumAggregateOutputType = {
    imageSize: number | null
  }

  export type ParcelMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    description: string | null
    courier: string | null
    imageUrl: string | null
    imageKey: string | null
    imageSize: number | null
    status: $Enums.ParcelStatus | null
    notes: string | null
    pickupCode: string | null
    recipientId: string | null
    receivedById: string | null
    registeredAt: Date | null
    pickedUpAt: Date | null
  }

  export type ParcelMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    description: string | null
    courier: string | null
    imageUrl: string | null
    imageKey: string | null
    imageSize: number | null
    status: $Enums.ParcelStatus | null
    notes: string | null
    pickupCode: string | null
    recipientId: string | null
    receivedById: string | null
    registeredAt: Date | null
    pickedUpAt: Date | null
  }

  export type ParcelCountAggregateOutputType = {
    id: number
    orderId: number
    description: number
    courier: number
    imageUrl: number
    imageKey: number
    imageSize: number
    status: number
    notes: number
    pickupCode: number
    recipientId: number
    receivedById: number
    registeredAt: number
    pickedUpAt: number
    _all: number
  }


  export type ParcelAvgAggregateInputType = {
    imageSize?: true
  }

  export type ParcelSumAggregateInputType = {
    imageSize?: true
  }

  export type ParcelMinAggregateInputType = {
    id?: true
    orderId?: true
    description?: true
    courier?: true
    imageUrl?: true
    imageKey?: true
    imageSize?: true
    status?: true
    notes?: true
    pickupCode?: true
    recipientId?: true
    receivedById?: true
    registeredAt?: true
    pickedUpAt?: true
  }

  export type ParcelMaxAggregateInputType = {
    id?: true
    orderId?: true
    description?: true
    courier?: true
    imageUrl?: true
    imageKey?: true
    imageSize?: true
    status?: true
    notes?: true
    pickupCode?: true
    recipientId?: true
    receivedById?: true
    registeredAt?: true
    pickedUpAt?: true
  }

  export type ParcelCountAggregateInputType = {
    id?: true
    orderId?: true
    description?: true
    courier?: true
    imageUrl?: true
    imageKey?: true
    imageSize?: true
    status?: true
    notes?: true
    pickupCode?: true
    recipientId?: true
    receivedById?: true
    registeredAt?: true
    pickedUpAt?: true
    _all?: true
  }

  export type ParcelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcel to aggregate.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parcels
    **/
    _count?: true | ParcelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParcelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParcelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParcelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParcelMaxAggregateInputType
  }

  export type GetParcelAggregateType<T extends ParcelAggregateArgs> = {
        [P in keyof T & keyof AggregateParcel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParcel[P]>
      : GetScalarType<T[P], AggregateParcel[P]>
  }




  export type ParcelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelWhereInput
    orderBy?: ParcelOrderByWithAggregationInput | ParcelOrderByWithAggregationInput[]
    by: ParcelScalarFieldEnum[] | ParcelScalarFieldEnum
    having?: ParcelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParcelCountAggregateInputType | true
    _avg?: ParcelAvgAggregateInputType
    _sum?: ParcelSumAggregateInputType
    _min?: ParcelMinAggregateInputType
    _max?: ParcelMaxAggregateInputType
  }

  export type ParcelGroupByOutputType = {
    id: string
    orderId: string | null
    description: string | null
    courier: string | null
    imageUrl: string | null
    imageKey: string | null
    imageSize: number | null
    status: $Enums.ParcelStatus
    notes: string | null
    pickupCode: string
    recipientId: string
    receivedById: string
    registeredAt: Date
    pickedUpAt: Date | null
    _count: ParcelCountAggregateOutputType | null
    _avg: ParcelAvgAggregateOutputType | null
    _sum: ParcelSumAggregateOutputType | null
    _min: ParcelMinAggregateOutputType | null
    _max: ParcelMaxAggregateOutputType | null
  }

  type GetParcelGroupByPayload<T extends ParcelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParcelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParcelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParcelGroupByOutputType[P]>
            : GetScalarType<T[P], ParcelGroupByOutputType[P]>
        }
      >
    >


  export type ParcelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    description?: boolean
    courier?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    imageSize?: boolean
    status?: boolean
    notes?: boolean
    pickupCode?: boolean
    recipientId?: boolean
    receivedById?: boolean
    registeredAt?: boolean
    pickedUpAt?: boolean
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    receivedBy?: boolean | UserDefaultArgs<ExtArgs>
    pickupLogs?: boolean | Parcel$pickupLogsArgs<ExtArgs>
    _count?: boolean | ParcelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcel"]>

  export type ParcelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    description?: boolean
    courier?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    imageSize?: boolean
    status?: boolean
    notes?: boolean
    pickupCode?: boolean
    recipientId?: boolean
    receivedById?: boolean
    registeredAt?: boolean
    pickedUpAt?: boolean
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    receivedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcel"]>

  export type ParcelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    description?: boolean
    courier?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    imageSize?: boolean
    status?: boolean
    notes?: boolean
    pickupCode?: boolean
    recipientId?: boolean
    receivedById?: boolean
    registeredAt?: boolean
    pickedUpAt?: boolean
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    receivedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcel"]>

  export type ParcelSelectScalar = {
    id?: boolean
    orderId?: boolean
    description?: boolean
    courier?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    imageSize?: boolean
    status?: boolean
    notes?: boolean
    pickupCode?: boolean
    recipientId?: boolean
    receivedById?: boolean
    registeredAt?: boolean
    pickedUpAt?: boolean
  }

  export type ParcelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "description" | "courier" | "imageUrl" | "imageKey" | "imageSize" | "status" | "notes" | "pickupCode" | "recipientId" | "receivedById" | "registeredAt" | "pickedUpAt", ExtArgs["result"]["parcel"]>
  export type ParcelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    receivedBy?: boolean | UserDefaultArgs<ExtArgs>
    pickupLogs?: boolean | Parcel$pickupLogsArgs<ExtArgs>
    _count?: boolean | ParcelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParcelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    receivedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParcelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    receivedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParcelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parcel"
    objects: {
      recipient: Prisma.$UserPayload<ExtArgs>
      receivedBy: Prisma.$UserPayload<ExtArgs>
      pickupLogs: Prisma.$PickupLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string | null
      description: string | null
      courier: string | null
      imageUrl: string | null
      imageKey: string | null
      imageSize: number | null
      status: $Enums.ParcelStatus
      notes: string | null
      pickupCode: string
      recipientId: string
      receivedById: string
      registeredAt: Date
      pickedUpAt: Date | null
    }, ExtArgs["result"]["parcel"]>
    composites: {}
  }

  type ParcelGetPayload<S extends boolean | null | undefined | ParcelDefaultArgs> = $Result.GetResult<Prisma.$ParcelPayload, S>

  type ParcelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParcelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParcelCountAggregateInputType | true
    }

  export interface ParcelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parcel'], meta: { name: 'Parcel' } }
    /**
     * Find zero or one Parcel that matches the filter.
     * @param {ParcelFindUniqueArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParcelFindUniqueArgs>(args: SelectSubset<T, ParcelFindUniqueArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parcel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParcelFindUniqueOrThrowArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParcelFindUniqueOrThrowArgs>(args: SelectSubset<T, ParcelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parcel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindFirstArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParcelFindFirstArgs>(args?: SelectSubset<T, ParcelFindFirstArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parcel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindFirstOrThrowArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParcelFindFirstOrThrowArgs>(args?: SelectSubset<T, ParcelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parcels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parcels
     * const parcels = await prisma.parcel.findMany()
     * 
     * // Get first 10 Parcels
     * const parcels = await prisma.parcel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parcelWithIdOnly = await prisma.parcel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParcelFindManyArgs>(args?: SelectSubset<T, ParcelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parcel.
     * @param {ParcelCreateArgs} args - Arguments to create a Parcel.
     * @example
     * // Create one Parcel
     * const Parcel = await prisma.parcel.create({
     *   data: {
     *     // ... data to create a Parcel
     *   }
     * })
     * 
     */
    create<T extends ParcelCreateArgs>(args: SelectSubset<T, ParcelCreateArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parcels.
     * @param {ParcelCreateManyArgs} args - Arguments to create many Parcels.
     * @example
     * // Create many Parcels
     * const parcel = await prisma.parcel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParcelCreateManyArgs>(args?: SelectSubset<T, ParcelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parcels and returns the data saved in the database.
     * @param {ParcelCreateManyAndReturnArgs} args - Arguments to create many Parcels.
     * @example
     * // Create many Parcels
     * const parcel = await prisma.parcel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parcels and only return the `id`
     * const parcelWithIdOnly = await prisma.parcel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParcelCreateManyAndReturnArgs>(args?: SelectSubset<T, ParcelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parcel.
     * @param {ParcelDeleteArgs} args - Arguments to delete one Parcel.
     * @example
     * // Delete one Parcel
     * const Parcel = await prisma.parcel.delete({
     *   where: {
     *     // ... filter to delete one Parcel
     *   }
     * })
     * 
     */
    delete<T extends ParcelDeleteArgs>(args: SelectSubset<T, ParcelDeleteArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parcel.
     * @param {ParcelUpdateArgs} args - Arguments to update one Parcel.
     * @example
     * // Update one Parcel
     * const parcel = await prisma.parcel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParcelUpdateArgs>(args: SelectSubset<T, ParcelUpdateArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parcels.
     * @param {ParcelDeleteManyArgs} args - Arguments to filter Parcels to delete.
     * @example
     * // Delete a few Parcels
     * const { count } = await prisma.parcel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParcelDeleteManyArgs>(args?: SelectSubset<T, ParcelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parcels
     * const parcel = await prisma.parcel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParcelUpdateManyArgs>(args: SelectSubset<T, ParcelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcels and returns the data updated in the database.
     * @param {ParcelUpdateManyAndReturnArgs} args - Arguments to update many Parcels.
     * @example
     * // Update many Parcels
     * const parcel = await prisma.parcel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parcels and only return the `id`
     * const parcelWithIdOnly = await prisma.parcel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParcelUpdateManyAndReturnArgs>(args: SelectSubset<T, ParcelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parcel.
     * @param {ParcelUpsertArgs} args - Arguments to update or create a Parcel.
     * @example
     * // Update or create a Parcel
     * const parcel = await prisma.parcel.upsert({
     *   create: {
     *     // ... data to create a Parcel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parcel we want to update
     *   }
     * })
     */
    upsert<T extends ParcelUpsertArgs>(args: SelectSubset<T, ParcelUpsertArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelCountArgs} args - Arguments to filter Parcels to count.
     * @example
     * // Count the number of Parcels
     * const count = await prisma.parcel.count({
     *   where: {
     *     // ... the filter for the Parcels we want to count
     *   }
     * })
    **/
    count<T extends ParcelCountArgs>(
      args?: Subset<T, ParcelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParcelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parcel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParcelAggregateArgs>(args: Subset<T, ParcelAggregateArgs>): Prisma.PrismaPromise<GetParcelAggregateType<T>>

    /**
     * Group by Parcel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelGroupByArgs} args - Group by arguments.
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
      T extends ParcelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParcelGroupByArgs['orderBy'] }
        : { orderBy?: ParcelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ParcelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParcelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parcel model
   */
  readonly fields: ParcelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parcel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParcelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receivedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pickupLogs<T extends Parcel$pickupLogsArgs<ExtArgs> = {}>(args?: Subset<T, Parcel$pickupLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parcel model
   */
  interface ParcelFieldRefs {
    readonly id: FieldRef<"Parcel", 'String'>
    readonly orderId: FieldRef<"Parcel", 'String'>
    readonly description: FieldRef<"Parcel", 'String'>
    readonly courier: FieldRef<"Parcel", 'String'>
    readonly imageUrl: FieldRef<"Parcel", 'String'>
    readonly imageKey: FieldRef<"Parcel", 'String'>
    readonly imageSize: FieldRef<"Parcel", 'Int'>
    readonly status: FieldRef<"Parcel", 'ParcelStatus'>
    readonly notes: FieldRef<"Parcel", 'String'>
    readonly pickupCode: FieldRef<"Parcel", 'String'>
    readonly recipientId: FieldRef<"Parcel", 'String'>
    readonly receivedById: FieldRef<"Parcel", 'String'>
    readonly registeredAt: FieldRef<"Parcel", 'DateTime'>
    readonly pickedUpAt: FieldRef<"Parcel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parcel findUnique
   */
  export type ParcelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel findUniqueOrThrow
   */
  export type ParcelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel findFirst
   */
  export type ParcelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcels.
     */
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Parcel findFirstOrThrow
   */
  export type ParcelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcels.
     */
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Parcel findMany
   */
  export type ParcelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcels to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Parcel create
   */
  export type ParcelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The data needed to create a Parcel.
     */
    data: XOR<ParcelCreateInput, ParcelUncheckedCreateInput>
  }

  /**
   * Parcel createMany
   */
  export type ParcelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parcels.
     */
    data: ParcelCreateManyInput | ParcelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parcel createManyAndReturn
   */
  export type ParcelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * The data used to create many Parcels.
     */
    data: ParcelCreateManyInput | ParcelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parcel update
   */
  export type ParcelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The data needed to update a Parcel.
     */
    data: XOR<ParcelUpdateInput, ParcelUncheckedUpdateInput>
    /**
     * Choose, which Parcel to update.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel updateMany
   */
  export type ParcelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parcels.
     */
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyInput>
    /**
     * Filter which Parcels to update
     */
    where?: ParcelWhereInput
    /**
     * Limit how many Parcels to update.
     */
    limit?: number
  }

  /**
   * Parcel updateManyAndReturn
   */
  export type ParcelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * The data used to update Parcels.
     */
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyInput>
    /**
     * Filter which Parcels to update
     */
    where?: ParcelWhereInput
    /**
     * Limit how many Parcels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parcel upsert
   */
  export type ParcelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The filter to search for the Parcel to update in case it exists.
     */
    where: ParcelWhereUniqueInput
    /**
     * In case the Parcel found by the `where` argument doesn't exist, create a new Parcel with this data.
     */
    create: XOR<ParcelCreateInput, ParcelUncheckedCreateInput>
    /**
     * In case the Parcel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParcelUpdateInput, ParcelUncheckedUpdateInput>
  }

  /**
   * Parcel delete
   */
  export type ParcelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter which Parcel to delete.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel deleteMany
   */
  export type ParcelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcels to delete
     */
    where?: ParcelWhereInput
    /**
     * Limit how many Parcels to delete.
     */
    limit?: number
  }

  /**
   * Parcel.pickupLogs
   */
  export type Parcel$pickupLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogInclude<ExtArgs> | null
    where?: PickupLogWhereInput
    orderBy?: PickupLogOrderByWithRelationInput | PickupLogOrderByWithRelationInput[]
    cursor?: PickupLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PickupLogScalarFieldEnum | PickupLogScalarFieldEnum[]
  }

  /**
   * Parcel without action
   */
  export type ParcelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
  }


  /**
   * Model PickupLog
   */

  export type AggregatePickupLog = {
    _count: PickupLogCountAggregateOutputType | null
    _min: PickupLogMinAggregateOutputType | null
    _max: PickupLogMaxAggregateOutputType | null
  }

  export type PickupLogMinAggregateOutputType = {
    id: string | null
    parcelId: string | null
    pickedById: string | null
    method: $Enums.PickupMethod | null
    createdAt: Date | null
  }

  export type PickupLogMaxAggregateOutputType = {
    id: string | null
    parcelId: string | null
    pickedById: string | null
    method: $Enums.PickupMethod | null
    createdAt: Date | null
  }

  export type PickupLogCountAggregateOutputType = {
    id: number
    parcelId: number
    pickedById: number
    method: number
    createdAt: number
    _all: number
  }


  export type PickupLogMinAggregateInputType = {
    id?: true
    parcelId?: true
    pickedById?: true
    method?: true
    createdAt?: true
  }

  export type PickupLogMaxAggregateInputType = {
    id?: true
    parcelId?: true
    pickedById?: true
    method?: true
    createdAt?: true
  }

  export type PickupLogCountAggregateInputType = {
    id?: true
    parcelId?: true
    pickedById?: true
    method?: true
    createdAt?: true
    _all?: true
  }

  export type PickupLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PickupLog to aggregate.
     */
    where?: PickupLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PickupLogs to fetch.
     */
    orderBy?: PickupLogOrderByWithRelationInput | PickupLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PickupLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PickupLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PickupLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PickupLogs
    **/
    _count?: true | PickupLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PickupLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PickupLogMaxAggregateInputType
  }

  export type GetPickupLogAggregateType<T extends PickupLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePickupLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePickupLog[P]>
      : GetScalarType<T[P], AggregatePickupLog[P]>
  }




  export type PickupLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PickupLogWhereInput
    orderBy?: PickupLogOrderByWithAggregationInput | PickupLogOrderByWithAggregationInput[]
    by: PickupLogScalarFieldEnum[] | PickupLogScalarFieldEnum
    having?: PickupLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PickupLogCountAggregateInputType | true
    _min?: PickupLogMinAggregateInputType
    _max?: PickupLogMaxAggregateInputType
  }

  export type PickupLogGroupByOutputType = {
    id: string
    parcelId: string
    pickedById: string
    method: $Enums.PickupMethod
    createdAt: Date
    _count: PickupLogCountAggregateOutputType | null
    _min: PickupLogMinAggregateOutputType | null
    _max: PickupLogMaxAggregateOutputType | null
  }

  type GetPickupLogGroupByPayload<T extends PickupLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PickupLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PickupLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PickupLogGroupByOutputType[P]>
            : GetScalarType<T[P], PickupLogGroupByOutputType[P]>
        }
      >
    >


  export type PickupLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parcelId?: boolean
    pickedById?: boolean
    method?: boolean
    createdAt?: boolean
    parcel?: boolean | ParcelDefaultArgs<ExtArgs>
    pickedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pickupLog"]>

  export type PickupLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parcelId?: boolean
    pickedById?: boolean
    method?: boolean
    createdAt?: boolean
    parcel?: boolean | ParcelDefaultArgs<ExtArgs>
    pickedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pickupLog"]>

  export type PickupLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parcelId?: boolean
    pickedById?: boolean
    method?: boolean
    createdAt?: boolean
    parcel?: boolean | ParcelDefaultArgs<ExtArgs>
    pickedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pickupLog"]>

  export type PickupLogSelectScalar = {
    id?: boolean
    parcelId?: boolean
    pickedById?: boolean
    method?: boolean
    createdAt?: boolean
  }

  export type PickupLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parcelId" | "pickedById" | "method" | "createdAt", ExtArgs["result"]["pickupLog"]>
  export type PickupLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parcel?: boolean | ParcelDefaultArgs<ExtArgs>
    pickedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PickupLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parcel?: boolean | ParcelDefaultArgs<ExtArgs>
    pickedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PickupLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parcel?: boolean | ParcelDefaultArgs<ExtArgs>
    pickedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PickupLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PickupLog"
    objects: {
      parcel: Prisma.$ParcelPayload<ExtArgs>
      pickedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parcelId: string
      pickedById: string
      method: $Enums.PickupMethod
      createdAt: Date
    }, ExtArgs["result"]["pickupLog"]>
    composites: {}
  }

  type PickupLogGetPayload<S extends boolean | null | undefined | PickupLogDefaultArgs> = $Result.GetResult<Prisma.$PickupLogPayload, S>

  type PickupLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PickupLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PickupLogCountAggregateInputType | true
    }

  export interface PickupLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PickupLog'], meta: { name: 'PickupLog' } }
    /**
     * Find zero or one PickupLog that matches the filter.
     * @param {PickupLogFindUniqueArgs} args - Arguments to find a PickupLog
     * @example
     * // Get one PickupLog
     * const pickupLog = await prisma.pickupLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PickupLogFindUniqueArgs>(args: SelectSubset<T, PickupLogFindUniqueArgs<ExtArgs>>): Prisma__PickupLogClient<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PickupLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PickupLogFindUniqueOrThrowArgs} args - Arguments to find a PickupLog
     * @example
     * // Get one PickupLog
     * const pickupLog = await prisma.pickupLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PickupLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PickupLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PickupLogClient<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PickupLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupLogFindFirstArgs} args - Arguments to find a PickupLog
     * @example
     * // Get one PickupLog
     * const pickupLog = await prisma.pickupLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PickupLogFindFirstArgs>(args?: SelectSubset<T, PickupLogFindFirstArgs<ExtArgs>>): Prisma__PickupLogClient<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PickupLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupLogFindFirstOrThrowArgs} args - Arguments to find a PickupLog
     * @example
     * // Get one PickupLog
     * const pickupLog = await prisma.pickupLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PickupLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PickupLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PickupLogClient<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PickupLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PickupLogs
     * const pickupLogs = await prisma.pickupLog.findMany()
     * 
     * // Get first 10 PickupLogs
     * const pickupLogs = await prisma.pickupLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pickupLogWithIdOnly = await prisma.pickupLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PickupLogFindManyArgs>(args?: SelectSubset<T, PickupLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PickupLog.
     * @param {PickupLogCreateArgs} args - Arguments to create a PickupLog.
     * @example
     * // Create one PickupLog
     * const PickupLog = await prisma.pickupLog.create({
     *   data: {
     *     // ... data to create a PickupLog
     *   }
     * })
     * 
     */
    create<T extends PickupLogCreateArgs>(args: SelectSubset<T, PickupLogCreateArgs<ExtArgs>>): Prisma__PickupLogClient<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PickupLogs.
     * @param {PickupLogCreateManyArgs} args - Arguments to create many PickupLogs.
     * @example
     * // Create many PickupLogs
     * const pickupLog = await prisma.pickupLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PickupLogCreateManyArgs>(args?: SelectSubset<T, PickupLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PickupLogs and returns the data saved in the database.
     * @param {PickupLogCreateManyAndReturnArgs} args - Arguments to create many PickupLogs.
     * @example
     * // Create many PickupLogs
     * const pickupLog = await prisma.pickupLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PickupLogs and only return the `id`
     * const pickupLogWithIdOnly = await prisma.pickupLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PickupLogCreateManyAndReturnArgs>(args?: SelectSubset<T, PickupLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PickupLog.
     * @param {PickupLogDeleteArgs} args - Arguments to delete one PickupLog.
     * @example
     * // Delete one PickupLog
     * const PickupLog = await prisma.pickupLog.delete({
     *   where: {
     *     // ... filter to delete one PickupLog
     *   }
     * })
     * 
     */
    delete<T extends PickupLogDeleteArgs>(args: SelectSubset<T, PickupLogDeleteArgs<ExtArgs>>): Prisma__PickupLogClient<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PickupLog.
     * @param {PickupLogUpdateArgs} args - Arguments to update one PickupLog.
     * @example
     * // Update one PickupLog
     * const pickupLog = await prisma.pickupLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PickupLogUpdateArgs>(args: SelectSubset<T, PickupLogUpdateArgs<ExtArgs>>): Prisma__PickupLogClient<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PickupLogs.
     * @param {PickupLogDeleteManyArgs} args - Arguments to filter PickupLogs to delete.
     * @example
     * // Delete a few PickupLogs
     * const { count } = await prisma.pickupLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PickupLogDeleteManyArgs>(args?: SelectSubset<T, PickupLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PickupLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PickupLogs
     * const pickupLog = await prisma.pickupLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PickupLogUpdateManyArgs>(args: SelectSubset<T, PickupLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PickupLogs and returns the data updated in the database.
     * @param {PickupLogUpdateManyAndReturnArgs} args - Arguments to update many PickupLogs.
     * @example
     * // Update many PickupLogs
     * const pickupLog = await prisma.pickupLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PickupLogs and only return the `id`
     * const pickupLogWithIdOnly = await prisma.pickupLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PickupLogUpdateManyAndReturnArgs>(args: SelectSubset<T, PickupLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PickupLog.
     * @param {PickupLogUpsertArgs} args - Arguments to update or create a PickupLog.
     * @example
     * // Update or create a PickupLog
     * const pickupLog = await prisma.pickupLog.upsert({
     *   create: {
     *     // ... data to create a PickupLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PickupLog we want to update
     *   }
     * })
     */
    upsert<T extends PickupLogUpsertArgs>(args: SelectSubset<T, PickupLogUpsertArgs<ExtArgs>>): Prisma__PickupLogClient<$Result.GetResult<Prisma.$PickupLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PickupLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupLogCountArgs} args - Arguments to filter PickupLogs to count.
     * @example
     * // Count the number of PickupLogs
     * const count = await prisma.pickupLog.count({
     *   where: {
     *     // ... the filter for the PickupLogs we want to count
     *   }
     * })
    **/
    count<T extends PickupLogCountArgs>(
      args?: Subset<T, PickupLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PickupLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PickupLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PickupLogAggregateArgs>(args: Subset<T, PickupLogAggregateArgs>): Prisma.PrismaPromise<GetPickupLogAggregateType<T>>

    /**
     * Group by PickupLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupLogGroupByArgs} args - Group by arguments.
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
      T extends PickupLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PickupLogGroupByArgs['orderBy'] }
        : { orderBy?: PickupLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PickupLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPickupLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PickupLog model
   */
  readonly fields: PickupLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PickupLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PickupLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parcel<T extends ParcelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParcelDefaultArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pickedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PickupLog model
   */
  interface PickupLogFieldRefs {
    readonly id: FieldRef<"PickupLog", 'String'>
    readonly parcelId: FieldRef<"PickupLog", 'String'>
    readonly pickedById: FieldRef<"PickupLog", 'String'>
    readonly method: FieldRef<"PickupLog", 'PickupMethod'>
    readonly createdAt: FieldRef<"PickupLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PickupLog findUnique
   */
  export type PickupLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogInclude<ExtArgs> | null
    /**
     * Filter, which PickupLog to fetch.
     */
    where: PickupLogWhereUniqueInput
  }

  /**
   * PickupLog findUniqueOrThrow
   */
  export type PickupLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogInclude<ExtArgs> | null
    /**
     * Filter, which PickupLog to fetch.
     */
    where: PickupLogWhereUniqueInput
  }

  /**
   * PickupLog findFirst
   */
  export type PickupLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogInclude<ExtArgs> | null
    /**
     * Filter, which PickupLog to fetch.
     */
    where?: PickupLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PickupLogs to fetch.
     */
    orderBy?: PickupLogOrderByWithRelationInput | PickupLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PickupLogs.
     */
    cursor?: PickupLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PickupLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PickupLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PickupLogs.
     */
    distinct?: PickupLogScalarFieldEnum | PickupLogScalarFieldEnum[]
  }

  /**
   * PickupLog findFirstOrThrow
   */
  export type PickupLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogInclude<ExtArgs> | null
    /**
     * Filter, which PickupLog to fetch.
     */
    where?: PickupLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PickupLogs to fetch.
     */
    orderBy?: PickupLogOrderByWithRelationInput | PickupLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PickupLogs.
     */
    cursor?: PickupLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PickupLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PickupLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PickupLogs.
     */
    distinct?: PickupLogScalarFieldEnum | PickupLogScalarFieldEnum[]
  }

  /**
   * PickupLog findMany
   */
  export type PickupLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogInclude<ExtArgs> | null
    /**
     * Filter, which PickupLogs to fetch.
     */
    where?: PickupLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PickupLogs to fetch.
     */
    orderBy?: PickupLogOrderByWithRelationInput | PickupLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PickupLogs.
     */
    cursor?: PickupLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PickupLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PickupLogs.
     */
    skip?: number
    distinct?: PickupLogScalarFieldEnum | PickupLogScalarFieldEnum[]
  }

  /**
   * PickupLog create
   */
  export type PickupLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogInclude<ExtArgs> | null
    /**
     * The data needed to create a PickupLog.
     */
    data: XOR<PickupLogCreateInput, PickupLogUncheckedCreateInput>
  }

  /**
   * PickupLog createMany
   */
  export type PickupLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PickupLogs.
     */
    data: PickupLogCreateManyInput | PickupLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PickupLog createManyAndReturn
   */
  export type PickupLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * The data used to create many PickupLogs.
     */
    data: PickupLogCreateManyInput | PickupLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PickupLog update
   */
  export type PickupLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogInclude<ExtArgs> | null
    /**
     * The data needed to update a PickupLog.
     */
    data: XOR<PickupLogUpdateInput, PickupLogUncheckedUpdateInput>
    /**
     * Choose, which PickupLog to update.
     */
    where: PickupLogWhereUniqueInput
  }

  /**
   * PickupLog updateMany
   */
  export type PickupLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PickupLogs.
     */
    data: XOR<PickupLogUpdateManyMutationInput, PickupLogUncheckedUpdateManyInput>
    /**
     * Filter which PickupLogs to update
     */
    where?: PickupLogWhereInput
    /**
     * Limit how many PickupLogs to update.
     */
    limit?: number
  }

  /**
   * PickupLog updateManyAndReturn
   */
  export type PickupLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * The data used to update PickupLogs.
     */
    data: XOR<PickupLogUpdateManyMutationInput, PickupLogUncheckedUpdateManyInput>
    /**
     * Filter which PickupLogs to update
     */
    where?: PickupLogWhereInput
    /**
     * Limit how many PickupLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PickupLog upsert
   */
  export type PickupLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogInclude<ExtArgs> | null
    /**
     * The filter to search for the PickupLog to update in case it exists.
     */
    where: PickupLogWhereUniqueInput
    /**
     * In case the PickupLog found by the `where` argument doesn't exist, create a new PickupLog with this data.
     */
    create: XOR<PickupLogCreateInput, PickupLogUncheckedCreateInput>
    /**
     * In case the PickupLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PickupLogUpdateInput, PickupLogUncheckedUpdateInput>
  }

  /**
   * PickupLog delete
   */
  export type PickupLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogInclude<ExtArgs> | null
    /**
     * Filter which PickupLog to delete.
     */
    where: PickupLogWhereUniqueInput
  }

  /**
   * PickupLog deleteMany
   */
  export type PickupLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PickupLogs to delete
     */
    where?: PickupLogWhereInput
    /**
     * Limit how many PickupLogs to delete.
     */
    limit?: number
  }

  /**
   * PickupLog without action
   */
  export type PickupLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupLog
     */
    select?: PickupLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PickupLog
     */
    omit?: PickupLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupLogInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    isRead: boolean | null
    actionUrl: string | null
    createdAt: Date | null
    readAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    isRead: boolean | null
    actionUrl: string | null
    createdAt: Date | null
    readAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    metadata: number
    isRead: number
    actionUrl: number
    createdAt: number
    readAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    actionUrl?: true
    createdAt?: true
    readAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    actionUrl?: true
    createdAt?: true
    readAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    metadata?: true
    isRead?: true
    actionUrl?: true
    createdAt?: true
    readAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    metadata: JsonValue
    isRead: boolean
    actionUrl: string | null
    createdAt: Date
    readAt: Date | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    metadata?: boolean
    isRead?: boolean
    actionUrl?: boolean
    createdAt?: boolean
    readAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    metadata?: boolean
    isRead?: boolean
    actionUrl?: boolean
    createdAt?: boolean
    readAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    metadata?: boolean
    isRead?: boolean
    actionUrl?: boolean
    createdAt?: boolean
    readAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    metadata?: boolean
    isRead?: boolean
    actionUrl?: boolean
    createdAt?: boolean
    readAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "message" | "metadata" | "isRead" | "actionUrl" | "createdAt" | "readAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.NotificationType
      title: string
      message: string
      metadata: Prisma.JsonValue
      isRead: boolean
      actionUrl: string | null
      createdAt: Date
      readAt: Date | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly metadata: FieldRef<"Notification", 'Json'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly actionUrl: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    phone: 'phone',
    approvedAt: 'approvedAt',
    role: 'role',
    unitNumber: 'unitNumber',
    imageUrl: 'imageUrl',
    imageKey: 'imageKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLoginAt: 'lastLoginAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ParcelScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    description: 'description',
    courier: 'courier',
    imageUrl: 'imageUrl',
    imageKey: 'imageKey',
    imageSize: 'imageSize',
    status: 'status',
    notes: 'notes',
    pickupCode: 'pickupCode',
    recipientId: 'recipientId',
    receivedById: 'receivedById',
    registeredAt: 'registeredAt',
    pickedUpAt: 'pickedUpAt'
  };

  export type ParcelScalarFieldEnum = (typeof ParcelScalarFieldEnum)[keyof typeof ParcelScalarFieldEnum]


  export const PickupLogScalarFieldEnum: {
    id: 'id',
    parcelId: 'parcelId',
    pickedById: 'pickedById',
    method: 'method',
    createdAt: 'createdAt'
  };

  export type PickupLogScalarFieldEnum = (typeof PickupLogScalarFieldEnum)[keyof typeof PickupLogScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    metadata: 'metadata',
    isRead: 'isRead',
    actionUrl: 'actionUrl',
    createdAt: 'createdAt',
    readAt: 'readAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ParcelStatus'
   */
  export type EnumParcelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParcelStatus'>
    


  /**
   * Reference to a field of type 'ParcelStatus[]'
   */
  export type ListEnumParcelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParcelStatus[]'>
    


  /**
   * Reference to a field of type 'PickupMethod'
   */
  export type EnumPickupMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PickupMethod'>
    


  /**
   * Reference to a field of type 'PickupMethod[]'
   */
  export type ListEnumPickupMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PickupMethod[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    unitNumber?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    imageKey?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    receivedParcels?: ParcelListRelationFilter
    managedParcels?: ParcelListRelationFilter
    pickupLogs?: PickupLogListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    unitNumber?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    receivedParcels?: ParcelOrderByRelationAggregateInput
    managedParcels?: ParcelOrderByRelationAggregateInput
    pickupLogs?: PickupLogOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    unitNumber?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    imageKey?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    receivedParcels?: ParcelListRelationFilter
    managedParcels?: ParcelListRelationFilter
    pickupLogs?: PickupLogListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    role?: SortOrder
    unitNumber?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    unitNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageKey?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ParcelWhereInput = {
    AND?: ParcelWhereInput | ParcelWhereInput[]
    OR?: ParcelWhereInput[]
    NOT?: ParcelWhereInput | ParcelWhereInput[]
    id?: StringFilter<"Parcel"> | string
    orderId?: StringNullableFilter<"Parcel"> | string | null
    description?: StringNullableFilter<"Parcel"> | string | null
    courier?: StringNullableFilter<"Parcel"> | string | null
    imageUrl?: StringNullableFilter<"Parcel"> | string | null
    imageKey?: StringNullableFilter<"Parcel"> | string | null
    imageSize?: IntNullableFilter<"Parcel"> | number | null
    status?: EnumParcelStatusFilter<"Parcel"> | $Enums.ParcelStatus
    notes?: StringNullableFilter<"Parcel"> | string | null
    pickupCode?: StringFilter<"Parcel"> | string
    recipientId?: StringFilter<"Parcel"> | string
    receivedById?: StringFilter<"Parcel"> | string
    registeredAt?: DateTimeFilter<"Parcel"> | Date | string
    pickedUpAt?: DateTimeNullableFilter<"Parcel"> | Date | string | null
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
    receivedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    pickupLogs?: PickupLogListRelationFilter
  }

  export type ParcelOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    courier?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    imageSize?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    pickupCode?: SortOrder
    recipientId?: SortOrder
    receivedById?: SortOrder
    registeredAt?: SortOrder
    pickedUpAt?: SortOrderInput | SortOrder
    recipient?: UserOrderByWithRelationInput
    receivedBy?: UserOrderByWithRelationInput
    pickupLogs?: PickupLogOrderByRelationAggregateInput
  }

  export type ParcelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pickupCode?: string
    AND?: ParcelWhereInput | ParcelWhereInput[]
    OR?: ParcelWhereInput[]
    NOT?: ParcelWhereInput | ParcelWhereInput[]
    orderId?: StringNullableFilter<"Parcel"> | string | null
    description?: StringNullableFilter<"Parcel"> | string | null
    courier?: StringNullableFilter<"Parcel"> | string | null
    imageUrl?: StringNullableFilter<"Parcel"> | string | null
    imageKey?: StringNullableFilter<"Parcel"> | string | null
    imageSize?: IntNullableFilter<"Parcel"> | number | null
    status?: EnumParcelStatusFilter<"Parcel"> | $Enums.ParcelStatus
    notes?: StringNullableFilter<"Parcel"> | string | null
    recipientId?: StringFilter<"Parcel"> | string
    receivedById?: StringFilter<"Parcel"> | string
    registeredAt?: DateTimeFilter<"Parcel"> | Date | string
    pickedUpAt?: DateTimeNullableFilter<"Parcel"> | Date | string | null
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
    receivedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    pickupLogs?: PickupLogListRelationFilter
  }, "id" | "pickupCode">

  export type ParcelOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    courier?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    imageSize?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    pickupCode?: SortOrder
    recipientId?: SortOrder
    receivedById?: SortOrder
    registeredAt?: SortOrder
    pickedUpAt?: SortOrderInput | SortOrder
    _count?: ParcelCountOrderByAggregateInput
    _avg?: ParcelAvgOrderByAggregateInput
    _max?: ParcelMaxOrderByAggregateInput
    _min?: ParcelMinOrderByAggregateInput
    _sum?: ParcelSumOrderByAggregateInput
  }

  export type ParcelScalarWhereWithAggregatesInput = {
    AND?: ParcelScalarWhereWithAggregatesInput | ParcelScalarWhereWithAggregatesInput[]
    OR?: ParcelScalarWhereWithAggregatesInput[]
    NOT?: ParcelScalarWhereWithAggregatesInput | ParcelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parcel"> | string
    orderId?: StringNullableWithAggregatesFilter<"Parcel"> | string | null
    description?: StringNullableWithAggregatesFilter<"Parcel"> | string | null
    courier?: StringNullableWithAggregatesFilter<"Parcel"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Parcel"> | string | null
    imageKey?: StringNullableWithAggregatesFilter<"Parcel"> | string | null
    imageSize?: IntNullableWithAggregatesFilter<"Parcel"> | number | null
    status?: EnumParcelStatusWithAggregatesFilter<"Parcel"> | $Enums.ParcelStatus
    notes?: StringNullableWithAggregatesFilter<"Parcel"> | string | null
    pickupCode?: StringWithAggregatesFilter<"Parcel"> | string
    recipientId?: StringWithAggregatesFilter<"Parcel"> | string
    receivedById?: StringWithAggregatesFilter<"Parcel"> | string
    registeredAt?: DateTimeWithAggregatesFilter<"Parcel"> | Date | string
    pickedUpAt?: DateTimeNullableWithAggregatesFilter<"Parcel"> | Date | string | null
  }

  export type PickupLogWhereInput = {
    AND?: PickupLogWhereInput | PickupLogWhereInput[]
    OR?: PickupLogWhereInput[]
    NOT?: PickupLogWhereInput | PickupLogWhereInput[]
    id?: StringFilter<"PickupLog"> | string
    parcelId?: StringFilter<"PickupLog"> | string
    pickedById?: StringFilter<"PickupLog"> | string
    method?: EnumPickupMethodFilter<"PickupLog"> | $Enums.PickupMethod
    createdAt?: DateTimeFilter<"PickupLog"> | Date | string
    parcel?: XOR<ParcelScalarRelationFilter, ParcelWhereInput>
    pickedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PickupLogOrderByWithRelationInput = {
    id?: SortOrder
    parcelId?: SortOrder
    pickedById?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    parcel?: ParcelOrderByWithRelationInput
    pickedBy?: UserOrderByWithRelationInput
  }

  export type PickupLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PickupLogWhereInput | PickupLogWhereInput[]
    OR?: PickupLogWhereInput[]
    NOT?: PickupLogWhereInput | PickupLogWhereInput[]
    parcelId?: StringFilter<"PickupLog"> | string
    pickedById?: StringFilter<"PickupLog"> | string
    method?: EnumPickupMethodFilter<"PickupLog"> | $Enums.PickupMethod
    createdAt?: DateTimeFilter<"PickupLog"> | Date | string
    parcel?: XOR<ParcelScalarRelationFilter, ParcelWhereInput>
    pickedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PickupLogOrderByWithAggregationInput = {
    id?: SortOrder
    parcelId?: SortOrder
    pickedById?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    _count?: PickupLogCountOrderByAggregateInput
    _max?: PickupLogMaxOrderByAggregateInput
    _min?: PickupLogMinOrderByAggregateInput
  }

  export type PickupLogScalarWhereWithAggregatesInput = {
    AND?: PickupLogScalarWhereWithAggregatesInput | PickupLogScalarWhereWithAggregatesInput[]
    OR?: PickupLogScalarWhereWithAggregatesInput[]
    NOT?: PickupLogScalarWhereWithAggregatesInput | PickupLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PickupLog"> | string
    parcelId?: StringWithAggregatesFilter<"PickupLog"> | string
    pickedById?: StringWithAggregatesFilter<"PickupLog"> | string
    method?: EnumPickupMethodWithAggregatesFilter<"PickupLog"> | $Enums.PickupMethod
    createdAt?: DateTimeWithAggregatesFilter<"PickupLog"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    metadata?: JsonFilter<"Notification">
    isRead?: BoolFilter<"Notification"> | boolean
    actionUrl?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    isRead?: SortOrder
    actionUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    metadata?: JsonFilter<"Notification">
    isRead?: BoolFilter<"Notification"> | boolean
    actionUrl?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    isRead?: SortOrder
    actionUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    metadata?: JsonWithAggregatesFilter<"Notification">
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    actionUrl?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    approvedAt?: Date | string | null
    role?: $Enums.UserRole
    unitNumber?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    receivedParcels?: ParcelCreateNestedManyWithoutRecipientInput
    managedParcels?: ParcelCreateNestedManyWithoutReceivedByInput
    pickupLogs?: PickupLogCreateNestedManyWithoutPickedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    approvedAt?: Date | string | null
    role?: $Enums.UserRole
    unitNumber?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    receivedParcels?: ParcelUncheckedCreateNestedManyWithoutRecipientInput
    managedParcels?: ParcelUncheckedCreateNestedManyWithoutReceivedByInput
    pickupLogs?: PickupLogUncheckedCreateNestedManyWithoutPickedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedParcels?: ParcelUpdateManyWithoutRecipientNestedInput
    managedParcels?: ParcelUpdateManyWithoutReceivedByNestedInput
    pickupLogs?: PickupLogUpdateManyWithoutPickedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedParcels?: ParcelUncheckedUpdateManyWithoutRecipientNestedInput
    managedParcels?: ParcelUncheckedUpdateManyWithoutReceivedByNestedInput
    pickupLogs?: PickupLogUncheckedUpdateManyWithoutPickedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    approvedAt?: Date | string | null
    role?: $Enums.UserRole
    unitNumber?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParcelCreateInput = {
    id?: string
    orderId?: string | null
    description?: string | null
    courier?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    imageSize?: number | null
    status?: $Enums.ParcelStatus
    notes?: string | null
    pickupCode?: string
    registeredAt?: Date | string
    pickedUpAt?: Date | string | null
    recipient: UserCreateNestedOneWithoutReceivedParcelsInput
    receivedBy: UserCreateNestedOneWithoutManagedParcelsInput
    pickupLogs?: PickupLogCreateNestedManyWithoutParcelInput
  }

  export type ParcelUncheckedCreateInput = {
    id?: string
    orderId?: string | null
    description?: string | null
    courier?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    imageSize?: number | null
    status?: $Enums.ParcelStatus
    notes?: string | null
    pickupCode?: string
    recipientId: string
    receivedById: string
    registeredAt?: Date | string
    pickedUpAt?: Date | string | null
    pickupLogs?: PickupLogUncheckedCreateNestedManyWithoutParcelInput
  }

  export type ParcelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    imageSize?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipient?: UserUpdateOneRequiredWithoutReceivedParcelsNestedInput
    receivedBy?: UserUpdateOneRequiredWithoutManagedParcelsNestedInput
    pickupLogs?: PickupLogUpdateManyWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    imageSize?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupLogs?: PickupLogUncheckedUpdateManyWithoutParcelNestedInput
  }

  export type ParcelCreateManyInput = {
    id?: string
    orderId?: string | null
    description?: string | null
    courier?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    imageSize?: number | null
    status?: $Enums.ParcelStatus
    notes?: string | null
    pickupCode?: string
    recipientId: string
    receivedById: string
    registeredAt?: Date | string
    pickedUpAt?: Date | string | null
  }

  export type ParcelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    imageSize?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParcelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    imageSize?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PickupLogCreateInput = {
    id?: string
    method: $Enums.PickupMethod
    createdAt?: Date | string
    parcel: ParcelCreateNestedOneWithoutPickupLogsInput
    pickedBy: UserCreateNestedOneWithoutPickupLogsInput
  }

  export type PickupLogUncheckedCreateInput = {
    id?: string
    parcelId: string
    pickedById: string
    method: $Enums.PickupMethod
    createdAt?: Date | string
  }

  export type PickupLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPickupMethodFieldUpdateOperationsInput | $Enums.PickupMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcel?: ParcelUpdateOneRequiredWithoutPickupLogsNestedInput
    pickedBy?: UserUpdateOneRequiredWithoutPickupLogsNestedInput
  }

  export type PickupLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parcelId?: StringFieldUpdateOperationsInput | string
    pickedById?: StringFieldUpdateOperationsInput | string
    method?: EnumPickupMethodFieldUpdateOperationsInput | $Enums.PickupMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickupLogCreateManyInput = {
    id?: string
    parcelId: string
    pickedById: string
    method: $Enums.PickupMethod
    createdAt?: Date | string
  }

  export type PickupLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPickupMethodFieldUpdateOperationsInput | $Enums.PickupMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickupLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parcelId?: StringFieldUpdateOperationsInput | string
    pickedById?: StringFieldUpdateOperationsInput | string
    method?: EnumPickupMethodFieldUpdateOperationsInput | $Enums.PickupMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    metadata: JsonNullValueInput | InputJsonValue
    isRead?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    metadata: JsonNullValueInput | InputJsonValue
    isRead?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    metadata: JsonNullValueInput | InputJsonValue
    isRead?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParcelListRelationFilter = {
    every?: ParcelWhereInput
    some?: ParcelWhereInput
    none?: ParcelWhereInput
  }

  export type PickupLogListRelationFilter = {
    every?: PickupLogWhereInput
    some?: PickupLogWhereInput
    none?: PickupLogWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParcelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PickupLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    approvedAt?: SortOrder
    role?: SortOrder
    unitNumber?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    approvedAt?: SortOrder
    role?: SortOrder
    unitNumber?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    approvedAt?: SortOrder
    role?: SortOrder
    unitNumber?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumParcelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParcelStatus | EnumParcelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParcelStatusFilter<$PrismaModel> | $Enums.ParcelStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ParcelCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    description?: SortOrder
    courier?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    imageSize?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    pickupCode?: SortOrder
    recipientId?: SortOrder
    receivedById?: SortOrder
    registeredAt?: SortOrder
    pickedUpAt?: SortOrder
  }

  export type ParcelAvgOrderByAggregateInput = {
    imageSize?: SortOrder
  }

  export type ParcelMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    description?: SortOrder
    courier?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    imageSize?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    pickupCode?: SortOrder
    recipientId?: SortOrder
    receivedById?: SortOrder
    registeredAt?: SortOrder
    pickedUpAt?: SortOrder
  }

  export type ParcelMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    description?: SortOrder
    courier?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    imageSize?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    pickupCode?: SortOrder
    recipientId?: SortOrder
    receivedById?: SortOrder
    registeredAt?: SortOrder
    pickedUpAt?: SortOrder
  }

  export type ParcelSumOrderByAggregateInput = {
    imageSize?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumParcelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParcelStatus | EnumParcelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParcelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParcelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParcelStatusFilter<$PrismaModel>
    _max?: NestedEnumParcelStatusFilter<$PrismaModel>
  }

  export type EnumPickupMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PickupMethod | EnumPickupMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PickupMethod[] | ListEnumPickupMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PickupMethod[] | ListEnumPickupMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPickupMethodFilter<$PrismaModel> | $Enums.PickupMethod
  }

  export type ParcelScalarRelationFilter = {
    is?: ParcelWhereInput
    isNot?: ParcelWhereInput
  }

  export type PickupLogCountOrderByAggregateInput = {
    id?: SortOrder
    parcelId?: SortOrder
    pickedById?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
  }

  export type PickupLogMaxOrderByAggregateInput = {
    id?: SortOrder
    parcelId?: SortOrder
    pickedById?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
  }

  export type PickupLogMinOrderByAggregateInput = {
    id?: SortOrder
    parcelId?: SortOrder
    pickedById?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPickupMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PickupMethod | EnumPickupMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PickupMethod[] | ListEnumPickupMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PickupMethod[] | ListEnumPickupMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPickupMethodWithAggregatesFilter<$PrismaModel> | $Enums.PickupMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPickupMethodFilter<$PrismaModel>
    _max?: NestedEnumPickupMethodFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    isRead?: SortOrder
    actionUrl?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    actionUrl?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    actionUrl?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParcelCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ParcelCreateWithoutRecipientInput, ParcelUncheckedCreateWithoutRecipientInput> | ParcelCreateWithoutRecipientInput[] | ParcelUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutRecipientInput | ParcelCreateOrConnectWithoutRecipientInput[]
    createMany?: ParcelCreateManyRecipientInputEnvelope
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
  }

  export type ParcelCreateNestedManyWithoutReceivedByInput = {
    create?: XOR<ParcelCreateWithoutReceivedByInput, ParcelUncheckedCreateWithoutReceivedByInput> | ParcelCreateWithoutReceivedByInput[] | ParcelUncheckedCreateWithoutReceivedByInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutReceivedByInput | ParcelCreateOrConnectWithoutReceivedByInput[]
    createMany?: ParcelCreateManyReceivedByInputEnvelope
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
  }

  export type PickupLogCreateNestedManyWithoutPickedByInput = {
    create?: XOR<PickupLogCreateWithoutPickedByInput, PickupLogUncheckedCreateWithoutPickedByInput> | PickupLogCreateWithoutPickedByInput[] | PickupLogUncheckedCreateWithoutPickedByInput[]
    connectOrCreate?: PickupLogCreateOrConnectWithoutPickedByInput | PickupLogCreateOrConnectWithoutPickedByInput[]
    createMany?: PickupLogCreateManyPickedByInputEnvelope
    connect?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ParcelUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ParcelCreateWithoutRecipientInput, ParcelUncheckedCreateWithoutRecipientInput> | ParcelCreateWithoutRecipientInput[] | ParcelUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutRecipientInput | ParcelCreateOrConnectWithoutRecipientInput[]
    createMany?: ParcelCreateManyRecipientInputEnvelope
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
  }

  export type ParcelUncheckedCreateNestedManyWithoutReceivedByInput = {
    create?: XOR<ParcelCreateWithoutReceivedByInput, ParcelUncheckedCreateWithoutReceivedByInput> | ParcelCreateWithoutReceivedByInput[] | ParcelUncheckedCreateWithoutReceivedByInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutReceivedByInput | ParcelCreateOrConnectWithoutReceivedByInput[]
    createMany?: ParcelCreateManyReceivedByInputEnvelope
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
  }

  export type PickupLogUncheckedCreateNestedManyWithoutPickedByInput = {
    create?: XOR<PickupLogCreateWithoutPickedByInput, PickupLogUncheckedCreateWithoutPickedByInput> | PickupLogCreateWithoutPickedByInput[] | PickupLogUncheckedCreateWithoutPickedByInput[]
    connectOrCreate?: PickupLogCreateOrConnectWithoutPickedByInput | PickupLogCreateOrConnectWithoutPickedByInput[]
    createMany?: PickupLogCreateManyPickedByInputEnvelope
    connect?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParcelUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ParcelCreateWithoutRecipientInput, ParcelUncheckedCreateWithoutRecipientInput> | ParcelCreateWithoutRecipientInput[] | ParcelUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutRecipientInput | ParcelCreateOrConnectWithoutRecipientInput[]
    upsert?: ParcelUpsertWithWhereUniqueWithoutRecipientInput | ParcelUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ParcelCreateManyRecipientInputEnvelope
    set?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    disconnect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    delete?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    update?: ParcelUpdateWithWhereUniqueWithoutRecipientInput | ParcelUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ParcelUpdateManyWithWhereWithoutRecipientInput | ParcelUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
  }

  export type ParcelUpdateManyWithoutReceivedByNestedInput = {
    create?: XOR<ParcelCreateWithoutReceivedByInput, ParcelUncheckedCreateWithoutReceivedByInput> | ParcelCreateWithoutReceivedByInput[] | ParcelUncheckedCreateWithoutReceivedByInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutReceivedByInput | ParcelCreateOrConnectWithoutReceivedByInput[]
    upsert?: ParcelUpsertWithWhereUniqueWithoutReceivedByInput | ParcelUpsertWithWhereUniqueWithoutReceivedByInput[]
    createMany?: ParcelCreateManyReceivedByInputEnvelope
    set?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    disconnect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    delete?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    update?: ParcelUpdateWithWhereUniqueWithoutReceivedByInput | ParcelUpdateWithWhereUniqueWithoutReceivedByInput[]
    updateMany?: ParcelUpdateManyWithWhereWithoutReceivedByInput | ParcelUpdateManyWithWhereWithoutReceivedByInput[]
    deleteMany?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
  }

  export type PickupLogUpdateManyWithoutPickedByNestedInput = {
    create?: XOR<PickupLogCreateWithoutPickedByInput, PickupLogUncheckedCreateWithoutPickedByInput> | PickupLogCreateWithoutPickedByInput[] | PickupLogUncheckedCreateWithoutPickedByInput[]
    connectOrCreate?: PickupLogCreateOrConnectWithoutPickedByInput | PickupLogCreateOrConnectWithoutPickedByInput[]
    upsert?: PickupLogUpsertWithWhereUniqueWithoutPickedByInput | PickupLogUpsertWithWhereUniqueWithoutPickedByInput[]
    createMany?: PickupLogCreateManyPickedByInputEnvelope
    set?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    disconnect?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    delete?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    connect?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    update?: PickupLogUpdateWithWhereUniqueWithoutPickedByInput | PickupLogUpdateWithWhereUniqueWithoutPickedByInput[]
    updateMany?: PickupLogUpdateManyWithWhereWithoutPickedByInput | PickupLogUpdateManyWithWhereWithoutPickedByInput[]
    deleteMany?: PickupLogScalarWhereInput | PickupLogScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ParcelUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ParcelCreateWithoutRecipientInput, ParcelUncheckedCreateWithoutRecipientInput> | ParcelCreateWithoutRecipientInput[] | ParcelUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutRecipientInput | ParcelCreateOrConnectWithoutRecipientInput[]
    upsert?: ParcelUpsertWithWhereUniqueWithoutRecipientInput | ParcelUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ParcelCreateManyRecipientInputEnvelope
    set?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    disconnect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    delete?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    update?: ParcelUpdateWithWhereUniqueWithoutRecipientInput | ParcelUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ParcelUpdateManyWithWhereWithoutRecipientInput | ParcelUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
  }

  export type ParcelUncheckedUpdateManyWithoutReceivedByNestedInput = {
    create?: XOR<ParcelCreateWithoutReceivedByInput, ParcelUncheckedCreateWithoutReceivedByInput> | ParcelCreateWithoutReceivedByInput[] | ParcelUncheckedCreateWithoutReceivedByInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutReceivedByInput | ParcelCreateOrConnectWithoutReceivedByInput[]
    upsert?: ParcelUpsertWithWhereUniqueWithoutReceivedByInput | ParcelUpsertWithWhereUniqueWithoutReceivedByInput[]
    createMany?: ParcelCreateManyReceivedByInputEnvelope
    set?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    disconnect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    delete?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    update?: ParcelUpdateWithWhereUniqueWithoutReceivedByInput | ParcelUpdateWithWhereUniqueWithoutReceivedByInput[]
    updateMany?: ParcelUpdateManyWithWhereWithoutReceivedByInput | ParcelUpdateManyWithWhereWithoutReceivedByInput[]
    deleteMany?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
  }

  export type PickupLogUncheckedUpdateManyWithoutPickedByNestedInput = {
    create?: XOR<PickupLogCreateWithoutPickedByInput, PickupLogUncheckedCreateWithoutPickedByInput> | PickupLogCreateWithoutPickedByInput[] | PickupLogUncheckedCreateWithoutPickedByInput[]
    connectOrCreate?: PickupLogCreateOrConnectWithoutPickedByInput | PickupLogCreateOrConnectWithoutPickedByInput[]
    upsert?: PickupLogUpsertWithWhereUniqueWithoutPickedByInput | PickupLogUpsertWithWhereUniqueWithoutPickedByInput[]
    createMany?: PickupLogCreateManyPickedByInputEnvelope
    set?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    disconnect?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    delete?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    connect?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    update?: PickupLogUpdateWithWhereUniqueWithoutPickedByInput | PickupLogUpdateWithWhereUniqueWithoutPickedByInput[]
    updateMany?: PickupLogUpdateManyWithWhereWithoutPickedByInput | PickupLogUpdateManyWithWhereWithoutPickedByInput[]
    deleteMany?: PickupLogScalarWhereInput | PickupLogScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReceivedParcelsInput = {
    create?: XOR<UserCreateWithoutReceivedParcelsInput, UserUncheckedCreateWithoutReceivedParcelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedParcelsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutManagedParcelsInput = {
    create?: XOR<UserCreateWithoutManagedParcelsInput, UserUncheckedCreateWithoutManagedParcelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedParcelsInput
    connect?: UserWhereUniqueInput
  }

  export type PickupLogCreateNestedManyWithoutParcelInput = {
    create?: XOR<PickupLogCreateWithoutParcelInput, PickupLogUncheckedCreateWithoutParcelInput> | PickupLogCreateWithoutParcelInput[] | PickupLogUncheckedCreateWithoutParcelInput[]
    connectOrCreate?: PickupLogCreateOrConnectWithoutParcelInput | PickupLogCreateOrConnectWithoutParcelInput[]
    createMany?: PickupLogCreateManyParcelInputEnvelope
    connect?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
  }

  export type PickupLogUncheckedCreateNestedManyWithoutParcelInput = {
    create?: XOR<PickupLogCreateWithoutParcelInput, PickupLogUncheckedCreateWithoutParcelInput> | PickupLogCreateWithoutParcelInput[] | PickupLogUncheckedCreateWithoutParcelInput[]
    connectOrCreate?: PickupLogCreateOrConnectWithoutParcelInput | PickupLogCreateOrConnectWithoutParcelInput[]
    createMany?: PickupLogCreateManyParcelInputEnvelope
    connect?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumParcelStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParcelStatus
  }

  export type UserUpdateOneRequiredWithoutReceivedParcelsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedParcelsInput, UserUncheckedCreateWithoutReceivedParcelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedParcelsInput
    upsert?: UserUpsertWithoutReceivedParcelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedParcelsInput, UserUpdateWithoutReceivedParcelsInput>, UserUncheckedUpdateWithoutReceivedParcelsInput>
  }

  export type UserUpdateOneRequiredWithoutManagedParcelsNestedInput = {
    create?: XOR<UserCreateWithoutManagedParcelsInput, UserUncheckedCreateWithoutManagedParcelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedParcelsInput
    upsert?: UserUpsertWithoutManagedParcelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagedParcelsInput, UserUpdateWithoutManagedParcelsInput>, UserUncheckedUpdateWithoutManagedParcelsInput>
  }

  export type PickupLogUpdateManyWithoutParcelNestedInput = {
    create?: XOR<PickupLogCreateWithoutParcelInput, PickupLogUncheckedCreateWithoutParcelInput> | PickupLogCreateWithoutParcelInput[] | PickupLogUncheckedCreateWithoutParcelInput[]
    connectOrCreate?: PickupLogCreateOrConnectWithoutParcelInput | PickupLogCreateOrConnectWithoutParcelInput[]
    upsert?: PickupLogUpsertWithWhereUniqueWithoutParcelInput | PickupLogUpsertWithWhereUniqueWithoutParcelInput[]
    createMany?: PickupLogCreateManyParcelInputEnvelope
    set?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    disconnect?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    delete?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    connect?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    update?: PickupLogUpdateWithWhereUniqueWithoutParcelInput | PickupLogUpdateWithWhereUniqueWithoutParcelInput[]
    updateMany?: PickupLogUpdateManyWithWhereWithoutParcelInput | PickupLogUpdateManyWithWhereWithoutParcelInput[]
    deleteMany?: PickupLogScalarWhereInput | PickupLogScalarWhereInput[]
  }

  export type PickupLogUncheckedUpdateManyWithoutParcelNestedInput = {
    create?: XOR<PickupLogCreateWithoutParcelInput, PickupLogUncheckedCreateWithoutParcelInput> | PickupLogCreateWithoutParcelInput[] | PickupLogUncheckedCreateWithoutParcelInput[]
    connectOrCreate?: PickupLogCreateOrConnectWithoutParcelInput | PickupLogCreateOrConnectWithoutParcelInput[]
    upsert?: PickupLogUpsertWithWhereUniqueWithoutParcelInput | PickupLogUpsertWithWhereUniqueWithoutParcelInput[]
    createMany?: PickupLogCreateManyParcelInputEnvelope
    set?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    disconnect?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    delete?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    connect?: PickupLogWhereUniqueInput | PickupLogWhereUniqueInput[]
    update?: PickupLogUpdateWithWhereUniqueWithoutParcelInput | PickupLogUpdateWithWhereUniqueWithoutParcelInput[]
    updateMany?: PickupLogUpdateManyWithWhereWithoutParcelInput | PickupLogUpdateManyWithWhereWithoutParcelInput[]
    deleteMany?: PickupLogScalarWhereInput | PickupLogScalarWhereInput[]
  }

  export type ParcelCreateNestedOneWithoutPickupLogsInput = {
    create?: XOR<ParcelCreateWithoutPickupLogsInput, ParcelUncheckedCreateWithoutPickupLogsInput>
    connectOrCreate?: ParcelCreateOrConnectWithoutPickupLogsInput
    connect?: ParcelWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPickupLogsInput = {
    create?: XOR<UserCreateWithoutPickupLogsInput, UserUncheckedCreateWithoutPickupLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPickupLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPickupMethodFieldUpdateOperationsInput = {
    set?: $Enums.PickupMethod
  }

  export type ParcelUpdateOneRequiredWithoutPickupLogsNestedInput = {
    create?: XOR<ParcelCreateWithoutPickupLogsInput, ParcelUncheckedCreateWithoutPickupLogsInput>
    connectOrCreate?: ParcelCreateOrConnectWithoutPickupLogsInput
    upsert?: ParcelUpsertWithoutPickupLogsInput
    connect?: ParcelWhereUniqueInput
    update?: XOR<XOR<ParcelUpdateToOneWithWhereWithoutPickupLogsInput, ParcelUpdateWithoutPickupLogsInput>, ParcelUncheckedUpdateWithoutPickupLogsInput>
  }

  export type UserUpdateOneRequiredWithoutPickupLogsNestedInput = {
    create?: XOR<UserCreateWithoutPickupLogsInput, UserUncheckedCreateWithoutPickupLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPickupLogsInput
    upsert?: UserUpsertWithoutPickupLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPickupLogsInput, UserUpdateWithoutPickupLogsInput>, UserUncheckedUpdateWithoutPickupLogsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumParcelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParcelStatus | EnumParcelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParcelStatusFilter<$PrismaModel> | $Enums.ParcelStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumParcelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParcelStatus | EnumParcelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParcelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParcelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParcelStatusFilter<$PrismaModel>
    _max?: NestedEnumParcelStatusFilter<$PrismaModel>
  }

  export type NestedEnumPickupMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PickupMethod | EnumPickupMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PickupMethod[] | ListEnumPickupMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PickupMethod[] | ListEnumPickupMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPickupMethodFilter<$PrismaModel> | $Enums.PickupMethod
  }

  export type NestedEnumPickupMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PickupMethod | EnumPickupMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PickupMethod[] | ListEnumPickupMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PickupMethod[] | ListEnumPickupMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPickupMethodWithAggregatesFilter<$PrismaModel> | $Enums.PickupMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPickupMethodFilter<$PrismaModel>
    _max?: NestedEnumPickupMethodFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParcelCreateWithoutRecipientInput = {
    id?: string
    orderId?: string | null
    description?: string | null
    courier?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    imageSize?: number | null
    status?: $Enums.ParcelStatus
    notes?: string | null
    pickupCode?: string
    registeredAt?: Date | string
    pickedUpAt?: Date | string | null
    receivedBy: UserCreateNestedOneWithoutManagedParcelsInput
    pickupLogs?: PickupLogCreateNestedManyWithoutParcelInput
  }

  export type ParcelUncheckedCreateWithoutRecipientInput = {
    id?: string
    orderId?: string | null
    description?: string | null
    courier?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    imageSize?: number | null
    status?: $Enums.ParcelStatus
    notes?: string | null
    pickupCode?: string
    receivedById: string
    registeredAt?: Date | string
    pickedUpAt?: Date | string | null
    pickupLogs?: PickupLogUncheckedCreateNestedManyWithoutParcelInput
  }

  export type ParcelCreateOrConnectWithoutRecipientInput = {
    where: ParcelWhereUniqueInput
    create: XOR<ParcelCreateWithoutRecipientInput, ParcelUncheckedCreateWithoutRecipientInput>
  }

  export type ParcelCreateManyRecipientInputEnvelope = {
    data: ParcelCreateManyRecipientInput | ParcelCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type ParcelCreateWithoutReceivedByInput = {
    id?: string
    orderId?: string | null
    description?: string | null
    courier?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    imageSize?: number | null
    status?: $Enums.ParcelStatus
    notes?: string | null
    pickupCode?: string
    registeredAt?: Date | string
    pickedUpAt?: Date | string | null
    recipient: UserCreateNestedOneWithoutReceivedParcelsInput
    pickupLogs?: PickupLogCreateNestedManyWithoutParcelInput
  }

  export type ParcelUncheckedCreateWithoutReceivedByInput = {
    id?: string
    orderId?: string | null
    description?: string | null
    courier?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    imageSize?: number | null
    status?: $Enums.ParcelStatus
    notes?: string | null
    pickupCode?: string
    recipientId: string
    registeredAt?: Date | string
    pickedUpAt?: Date | string | null
    pickupLogs?: PickupLogUncheckedCreateNestedManyWithoutParcelInput
  }

  export type ParcelCreateOrConnectWithoutReceivedByInput = {
    where: ParcelWhereUniqueInput
    create: XOR<ParcelCreateWithoutReceivedByInput, ParcelUncheckedCreateWithoutReceivedByInput>
  }

  export type ParcelCreateManyReceivedByInputEnvelope = {
    data: ParcelCreateManyReceivedByInput | ParcelCreateManyReceivedByInput[]
    skipDuplicates?: boolean
  }

  export type PickupLogCreateWithoutPickedByInput = {
    id?: string
    method: $Enums.PickupMethod
    createdAt?: Date | string
    parcel: ParcelCreateNestedOneWithoutPickupLogsInput
  }

  export type PickupLogUncheckedCreateWithoutPickedByInput = {
    id?: string
    parcelId: string
    method: $Enums.PickupMethod
    createdAt?: Date | string
  }

  export type PickupLogCreateOrConnectWithoutPickedByInput = {
    where: PickupLogWhereUniqueInput
    create: XOR<PickupLogCreateWithoutPickedByInput, PickupLogUncheckedCreateWithoutPickedByInput>
  }

  export type PickupLogCreateManyPickedByInputEnvelope = {
    data: PickupLogCreateManyPickedByInput | PickupLogCreateManyPickedByInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    metadata: JsonNullValueInput | InputJsonValue
    isRead?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    metadata: JsonNullValueInput | InputJsonValue
    isRead?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParcelUpsertWithWhereUniqueWithoutRecipientInput = {
    where: ParcelWhereUniqueInput
    update: XOR<ParcelUpdateWithoutRecipientInput, ParcelUncheckedUpdateWithoutRecipientInput>
    create: XOR<ParcelCreateWithoutRecipientInput, ParcelUncheckedCreateWithoutRecipientInput>
  }

  export type ParcelUpdateWithWhereUniqueWithoutRecipientInput = {
    where: ParcelWhereUniqueInput
    data: XOR<ParcelUpdateWithoutRecipientInput, ParcelUncheckedUpdateWithoutRecipientInput>
  }

  export type ParcelUpdateManyWithWhereWithoutRecipientInput = {
    where: ParcelScalarWhereInput
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyWithoutRecipientInput>
  }

  export type ParcelScalarWhereInput = {
    AND?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
    OR?: ParcelScalarWhereInput[]
    NOT?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
    id?: StringFilter<"Parcel"> | string
    orderId?: StringNullableFilter<"Parcel"> | string | null
    description?: StringNullableFilter<"Parcel"> | string | null
    courier?: StringNullableFilter<"Parcel"> | string | null
    imageUrl?: StringNullableFilter<"Parcel"> | string | null
    imageKey?: StringNullableFilter<"Parcel"> | string | null
    imageSize?: IntNullableFilter<"Parcel"> | number | null
    status?: EnumParcelStatusFilter<"Parcel"> | $Enums.ParcelStatus
    notes?: StringNullableFilter<"Parcel"> | string | null
    pickupCode?: StringFilter<"Parcel"> | string
    recipientId?: StringFilter<"Parcel"> | string
    receivedById?: StringFilter<"Parcel"> | string
    registeredAt?: DateTimeFilter<"Parcel"> | Date | string
    pickedUpAt?: DateTimeNullableFilter<"Parcel"> | Date | string | null
  }

  export type ParcelUpsertWithWhereUniqueWithoutReceivedByInput = {
    where: ParcelWhereUniqueInput
    update: XOR<ParcelUpdateWithoutReceivedByInput, ParcelUncheckedUpdateWithoutReceivedByInput>
    create: XOR<ParcelCreateWithoutReceivedByInput, ParcelUncheckedCreateWithoutReceivedByInput>
  }

  export type ParcelUpdateWithWhereUniqueWithoutReceivedByInput = {
    where: ParcelWhereUniqueInput
    data: XOR<ParcelUpdateWithoutReceivedByInput, ParcelUncheckedUpdateWithoutReceivedByInput>
  }

  export type ParcelUpdateManyWithWhereWithoutReceivedByInput = {
    where: ParcelScalarWhereInput
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyWithoutReceivedByInput>
  }

  export type PickupLogUpsertWithWhereUniqueWithoutPickedByInput = {
    where: PickupLogWhereUniqueInput
    update: XOR<PickupLogUpdateWithoutPickedByInput, PickupLogUncheckedUpdateWithoutPickedByInput>
    create: XOR<PickupLogCreateWithoutPickedByInput, PickupLogUncheckedCreateWithoutPickedByInput>
  }

  export type PickupLogUpdateWithWhereUniqueWithoutPickedByInput = {
    where: PickupLogWhereUniqueInput
    data: XOR<PickupLogUpdateWithoutPickedByInput, PickupLogUncheckedUpdateWithoutPickedByInput>
  }

  export type PickupLogUpdateManyWithWhereWithoutPickedByInput = {
    where: PickupLogScalarWhereInput
    data: XOR<PickupLogUpdateManyMutationInput, PickupLogUncheckedUpdateManyWithoutPickedByInput>
  }

  export type PickupLogScalarWhereInput = {
    AND?: PickupLogScalarWhereInput | PickupLogScalarWhereInput[]
    OR?: PickupLogScalarWhereInput[]
    NOT?: PickupLogScalarWhereInput | PickupLogScalarWhereInput[]
    id?: StringFilter<"PickupLog"> | string
    parcelId?: StringFilter<"PickupLog"> | string
    pickedById?: StringFilter<"PickupLog"> | string
    method?: EnumPickupMethodFilter<"PickupLog"> | $Enums.PickupMethod
    createdAt?: DateTimeFilter<"PickupLog"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    metadata?: JsonFilter<"Notification">
    isRead?: BoolFilter<"Notification"> | boolean
    actionUrl?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
  }

  export type UserCreateWithoutReceivedParcelsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    approvedAt?: Date | string | null
    role?: $Enums.UserRole
    unitNumber?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    managedParcels?: ParcelCreateNestedManyWithoutReceivedByInput
    pickupLogs?: PickupLogCreateNestedManyWithoutPickedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedParcelsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    approvedAt?: Date | string | null
    role?: $Enums.UserRole
    unitNumber?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    managedParcels?: ParcelUncheckedCreateNestedManyWithoutReceivedByInput
    pickupLogs?: PickupLogUncheckedCreateNestedManyWithoutPickedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedParcelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedParcelsInput, UserUncheckedCreateWithoutReceivedParcelsInput>
  }

  export type UserCreateWithoutManagedParcelsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    approvedAt?: Date | string | null
    role?: $Enums.UserRole
    unitNumber?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    receivedParcels?: ParcelCreateNestedManyWithoutRecipientInput
    pickupLogs?: PickupLogCreateNestedManyWithoutPickedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagedParcelsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    approvedAt?: Date | string | null
    role?: $Enums.UserRole
    unitNumber?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    receivedParcels?: ParcelUncheckedCreateNestedManyWithoutRecipientInput
    pickupLogs?: PickupLogUncheckedCreateNestedManyWithoutPickedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagedParcelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagedParcelsInput, UserUncheckedCreateWithoutManagedParcelsInput>
  }

  export type PickupLogCreateWithoutParcelInput = {
    id?: string
    method: $Enums.PickupMethod
    createdAt?: Date | string
    pickedBy: UserCreateNestedOneWithoutPickupLogsInput
  }

  export type PickupLogUncheckedCreateWithoutParcelInput = {
    id?: string
    pickedById: string
    method: $Enums.PickupMethod
    createdAt?: Date | string
  }

  export type PickupLogCreateOrConnectWithoutParcelInput = {
    where: PickupLogWhereUniqueInput
    create: XOR<PickupLogCreateWithoutParcelInput, PickupLogUncheckedCreateWithoutParcelInput>
  }

  export type PickupLogCreateManyParcelInputEnvelope = {
    data: PickupLogCreateManyParcelInput | PickupLogCreateManyParcelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReceivedParcelsInput = {
    update: XOR<UserUpdateWithoutReceivedParcelsInput, UserUncheckedUpdateWithoutReceivedParcelsInput>
    create: XOR<UserCreateWithoutReceivedParcelsInput, UserUncheckedCreateWithoutReceivedParcelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedParcelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedParcelsInput, UserUncheckedUpdateWithoutReceivedParcelsInput>
  }

  export type UserUpdateWithoutReceivedParcelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    managedParcels?: ParcelUpdateManyWithoutReceivedByNestedInput
    pickupLogs?: PickupLogUpdateManyWithoutPickedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedParcelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    managedParcels?: ParcelUncheckedUpdateManyWithoutReceivedByNestedInput
    pickupLogs?: PickupLogUncheckedUpdateManyWithoutPickedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutManagedParcelsInput = {
    update: XOR<UserUpdateWithoutManagedParcelsInput, UserUncheckedUpdateWithoutManagedParcelsInput>
    create: XOR<UserCreateWithoutManagedParcelsInput, UserUncheckedCreateWithoutManagedParcelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagedParcelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagedParcelsInput, UserUncheckedUpdateWithoutManagedParcelsInput>
  }

  export type UserUpdateWithoutManagedParcelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedParcels?: ParcelUpdateManyWithoutRecipientNestedInput
    pickupLogs?: PickupLogUpdateManyWithoutPickedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagedParcelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedParcels?: ParcelUncheckedUpdateManyWithoutRecipientNestedInput
    pickupLogs?: PickupLogUncheckedUpdateManyWithoutPickedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PickupLogUpsertWithWhereUniqueWithoutParcelInput = {
    where: PickupLogWhereUniqueInput
    update: XOR<PickupLogUpdateWithoutParcelInput, PickupLogUncheckedUpdateWithoutParcelInput>
    create: XOR<PickupLogCreateWithoutParcelInput, PickupLogUncheckedCreateWithoutParcelInput>
  }

  export type PickupLogUpdateWithWhereUniqueWithoutParcelInput = {
    where: PickupLogWhereUniqueInput
    data: XOR<PickupLogUpdateWithoutParcelInput, PickupLogUncheckedUpdateWithoutParcelInput>
  }

  export type PickupLogUpdateManyWithWhereWithoutParcelInput = {
    where: PickupLogScalarWhereInput
    data: XOR<PickupLogUpdateManyMutationInput, PickupLogUncheckedUpdateManyWithoutParcelInput>
  }

  export type ParcelCreateWithoutPickupLogsInput = {
    id?: string
    orderId?: string | null
    description?: string | null
    courier?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    imageSize?: number | null
    status?: $Enums.ParcelStatus
    notes?: string | null
    pickupCode?: string
    registeredAt?: Date | string
    pickedUpAt?: Date | string | null
    recipient: UserCreateNestedOneWithoutReceivedParcelsInput
    receivedBy: UserCreateNestedOneWithoutManagedParcelsInput
  }

  export type ParcelUncheckedCreateWithoutPickupLogsInput = {
    id?: string
    orderId?: string | null
    description?: string | null
    courier?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    imageSize?: number | null
    status?: $Enums.ParcelStatus
    notes?: string | null
    pickupCode?: string
    recipientId: string
    receivedById: string
    registeredAt?: Date | string
    pickedUpAt?: Date | string | null
  }

  export type ParcelCreateOrConnectWithoutPickupLogsInput = {
    where: ParcelWhereUniqueInput
    create: XOR<ParcelCreateWithoutPickupLogsInput, ParcelUncheckedCreateWithoutPickupLogsInput>
  }

  export type UserCreateWithoutPickupLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    approvedAt?: Date | string | null
    role?: $Enums.UserRole
    unitNumber?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    receivedParcels?: ParcelCreateNestedManyWithoutRecipientInput
    managedParcels?: ParcelCreateNestedManyWithoutReceivedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPickupLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    approvedAt?: Date | string | null
    role?: $Enums.UserRole
    unitNumber?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    receivedParcels?: ParcelUncheckedCreateNestedManyWithoutRecipientInput
    managedParcels?: ParcelUncheckedCreateNestedManyWithoutReceivedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPickupLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPickupLogsInput, UserUncheckedCreateWithoutPickupLogsInput>
  }

  export type ParcelUpsertWithoutPickupLogsInput = {
    update: XOR<ParcelUpdateWithoutPickupLogsInput, ParcelUncheckedUpdateWithoutPickupLogsInput>
    create: XOR<ParcelCreateWithoutPickupLogsInput, ParcelUncheckedCreateWithoutPickupLogsInput>
    where?: ParcelWhereInput
  }

  export type ParcelUpdateToOneWithWhereWithoutPickupLogsInput = {
    where?: ParcelWhereInput
    data: XOR<ParcelUpdateWithoutPickupLogsInput, ParcelUncheckedUpdateWithoutPickupLogsInput>
  }

  export type ParcelUpdateWithoutPickupLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    imageSize?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipient?: UserUpdateOneRequiredWithoutReceivedParcelsNestedInput
    receivedBy?: UserUpdateOneRequiredWithoutManagedParcelsNestedInput
  }

  export type ParcelUncheckedUpdateWithoutPickupLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    imageSize?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutPickupLogsInput = {
    update: XOR<UserUpdateWithoutPickupLogsInput, UserUncheckedUpdateWithoutPickupLogsInput>
    create: XOR<UserCreateWithoutPickupLogsInput, UserUncheckedCreateWithoutPickupLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPickupLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPickupLogsInput, UserUncheckedUpdateWithoutPickupLogsInput>
  }

  export type UserUpdateWithoutPickupLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedParcels?: ParcelUpdateManyWithoutRecipientNestedInput
    managedParcels?: ParcelUpdateManyWithoutReceivedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPickupLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedParcels?: ParcelUncheckedUpdateManyWithoutRecipientNestedInput
    managedParcels?: ParcelUncheckedUpdateManyWithoutReceivedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    approvedAt?: Date | string | null
    role?: $Enums.UserRole
    unitNumber?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    receivedParcels?: ParcelCreateNestedManyWithoutRecipientInput
    managedParcels?: ParcelCreateNestedManyWithoutReceivedByInput
    pickupLogs?: PickupLogCreateNestedManyWithoutPickedByInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    approvedAt?: Date | string | null
    role?: $Enums.UserRole
    unitNumber?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    receivedParcels?: ParcelUncheckedCreateNestedManyWithoutRecipientInput
    managedParcels?: ParcelUncheckedCreateNestedManyWithoutReceivedByInput
    pickupLogs?: PickupLogUncheckedCreateNestedManyWithoutPickedByInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedParcels?: ParcelUpdateManyWithoutRecipientNestedInput
    managedParcels?: ParcelUpdateManyWithoutReceivedByNestedInput
    pickupLogs?: PickupLogUpdateManyWithoutPickedByNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    unitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedParcels?: ParcelUncheckedUpdateManyWithoutRecipientNestedInput
    managedParcels?: ParcelUncheckedUpdateManyWithoutReceivedByNestedInput
    pickupLogs?: PickupLogUncheckedUpdateManyWithoutPickedByNestedInput
  }

  export type ParcelCreateManyRecipientInput = {
    id?: string
    orderId?: string | null
    description?: string | null
    courier?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    imageSize?: number | null
    status?: $Enums.ParcelStatus
    notes?: string | null
    pickupCode?: string
    receivedById: string
    registeredAt?: Date | string
    pickedUpAt?: Date | string | null
  }

  export type ParcelCreateManyReceivedByInput = {
    id?: string
    orderId?: string | null
    description?: string | null
    courier?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    imageSize?: number | null
    status?: $Enums.ParcelStatus
    notes?: string | null
    pickupCode?: string
    recipientId: string
    registeredAt?: Date | string
    pickedUpAt?: Date | string | null
  }

  export type PickupLogCreateManyPickedByInput = {
    id?: string
    parcelId: string
    method: $Enums.PickupMethod
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    metadata: JsonNullValueInput | InputJsonValue
    isRead?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
    readAt?: Date | string | null
  }

  export type ParcelUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    imageSize?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedBy?: UserUpdateOneRequiredWithoutManagedParcelsNestedInput
    pickupLogs?: PickupLogUpdateManyWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    imageSize?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupLogs?: PickupLogUncheckedUpdateManyWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    imageSize?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParcelUpdateWithoutReceivedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    imageSize?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipient?: UserUpdateOneRequiredWithoutReceivedParcelsNestedInput
    pickupLogs?: PickupLogUpdateManyWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateWithoutReceivedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    imageSize?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupLogs?: PickupLogUncheckedUpdateManyWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateManyWithoutReceivedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    imageSize?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PickupLogUpdateWithoutPickedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPickupMethodFieldUpdateOperationsInput | $Enums.PickupMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcel?: ParcelUpdateOneRequiredWithoutPickupLogsNestedInput
  }

  export type PickupLogUncheckedUpdateWithoutPickedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    parcelId?: StringFieldUpdateOperationsInput | string
    method?: EnumPickupMethodFieldUpdateOperationsInput | $Enums.PickupMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickupLogUncheckedUpdateManyWithoutPickedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    parcelId?: StringFieldUpdateOperationsInput | string
    method?: EnumPickupMethodFieldUpdateOperationsInput | $Enums.PickupMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PickupLogCreateManyParcelInput = {
    id?: string
    pickedById: string
    method: $Enums.PickupMethod
    createdAt?: Date | string
  }

  export type PickupLogUpdateWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPickupMethodFieldUpdateOperationsInput | $Enums.PickupMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickedBy?: UserUpdateOneRequiredWithoutPickupLogsNestedInput
  }

  export type PickupLogUncheckedUpdateWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickedById?: StringFieldUpdateOperationsInput | string
    method?: EnumPickupMethodFieldUpdateOperationsInput | $Enums.PickupMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickupLogUncheckedUpdateManyWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickedById?: StringFieldUpdateOperationsInput | string
    method?: EnumPickupMethodFieldUpdateOperationsInput | $Enums.PickupMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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