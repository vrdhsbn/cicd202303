import { square } from "../src/square"

describe('square関数のテスト', () => {
  
  test('10の2乗は100', () => {
    expect(square(10)).toBe(100)
  })

  test('256の2乗は65536', () => {
    expect(square(256)).toBe(65536)
  })

})