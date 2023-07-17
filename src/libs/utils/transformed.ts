function transformedEOA(str: string) {
  return str.slice(0, 7) + "..." + str.slice(-7)
}

function transformedMY(date: string) {
  const options = { year: "numeric", month: "long" } as const
  return new Date(date).toLocaleString("en-US", options)
}

export { transformedEOA, transformedMY }
