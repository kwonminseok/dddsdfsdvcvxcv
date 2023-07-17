export function formatNumber(number: number) {
  if (number >= 1000000000) {
    return (number / 1000000000).toLocaleString("en-US", { maximumFractionDigits: 2 }) + "B"
  } else if (number >= 1000000) {
    return (number / 1000000).toLocaleString("en-US", { maximumFractionDigits: 2 }) + "M"
  } else if (number >= 1000) {
    return (number / 1000).toLocaleString("en-US", { maximumFractionDigits: 2 }) + "K"
  } else {
    return number.toLocaleString("en-US")
  }
}

export function formatNumberKo(number: number) {
  if (number >= 10000000) {
    return (number / 10000000).toLocaleString("en-US", { maximumFractionDigits: 2 }) + "천만"
  } else if (number >= 10000) {
    return (number / 10000).toLocaleString("en-US", { maximumFractionDigits: 2 }) + "만"
  } else if (number >= 1000) {
    return (number / 1000).toLocaleString("en-US", { maximumFractionDigits: 2 }) + "천"
  } else {
    return number.toLocaleString("en-US")
  }
}
