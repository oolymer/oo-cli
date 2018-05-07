/// <reference types="jest" />

declare module "jest-image-snapshot" {
  global {
    namespace jest {
      interface Matchers<R> {
        toMatchImageSnapshot(): R
      }
    }
  }

  export const toMatchImageSnapshot: (this: jest.MatcherUtils, received: any, ...actual: any[]) => { message(): string, pass: boolean }
}
