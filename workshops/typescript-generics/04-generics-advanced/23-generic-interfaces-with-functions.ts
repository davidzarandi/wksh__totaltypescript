import * as assert from "node:assert";
import { it } from "node:test";

export interface Cache<T> {
  get: (key: string) => T | undefined;
  set: (key: string, value: T) => void;
  // You can fix this by only changing the line below!
  clone: (transform: (elem: unknown) => unknown) => Cache<unknown>;
}

const createCache = <T>(initialCache?: Record<string, T>): Cache<T> => {
  const cache: Record<string, T> = initialCache || {};

  return {
    get: (key) => cache[key],
    set: (key, value) => {
      cache[key] = value;
    },
    clone: (transform) => {
      const newCache: Record<string, any> = {};

      for (const key in cache) {
        newCache[key] = transform(cache[key]);
      }
      return createCache(newCache);
    },
  };
};

it("Should let you get and set to/from the cache", () => {
  const cache = createCache<number>();

  cache.set("a", 1);
  cache.set("b", 2);

  assert.strictEqual(cache.get("a"), 1);
  assert.strictEqual(cache.get("b"), 2);
});

it("Should let you clone the cache using a transform function", () => {
  const numberCache = createCache<number>();

  numberCache.set("a", 1);
  numberCache.set("b", 2);

  const stringCache = numberCache.clone((elem) => {
    return String(elem);
  });

  const a = stringCache.get("a");

  assert.strictEqual(a, "1");

  type _tests = [Expect<Equal<typeof a, string | undefined>>];
});