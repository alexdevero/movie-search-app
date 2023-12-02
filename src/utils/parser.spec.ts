import { stringBoolean } from './parser'

describe('stringBoolean', () => {
  it('returns true if value is "true"', () => {
    expect(stringBoolean('true')).toEqual(true)
  })
  it('returns true if value is "True"', () => {
    expect(stringBoolean('True')).toEqual(true)
  })

  it('returns false if value is not "true"', () => {
    expect(stringBoolean('false')).toEqual(false)
  })

  it('returns false if value is not a boolean', () => {
    expect(stringBoolean('abc')).toEqual(false)
  })
})
