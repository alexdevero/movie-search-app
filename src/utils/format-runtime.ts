export const formatRuntime = (runtime?: string): string => {
  if (!runtime) {
    return '0h 0m'
  }

  const matchedNumericRuntime = runtime.match(/\d+/)?.[0]
  const minutes = matchedNumericRuntime ? parseInt(matchedNumericRuntime) : 0

  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  const formattedRuntime = `${hours}h ${remainingMinutes}m`

  return formattedRuntime
}
