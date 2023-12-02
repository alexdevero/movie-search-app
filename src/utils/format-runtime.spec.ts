import { formatRuntime } from './format-runtime'

describe('formatRuntime', () => {
  it('formats runtime in minutes to hours and minutes', () => {
    expect(formatRuntime('100')).toEqual('1h 40m')
    expect(formatRuntime('120')).toEqual('2h 0m')
    expect(formatRuntime('60')).toEqual('1h 0m')
    expect(formatRuntime('30')).toEqual('0h 30m')
    expect(formatRuntime('0')).toEqual('0h 0m')
  })

  it('returns 0h 0m if runtime is not a number', () => {
    expect(formatRuntime('abc')).toEqual('0h 0m')
  })
})
