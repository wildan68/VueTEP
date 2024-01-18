export const useNumberFormat = () => {
  const toDotNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const toShortNumber = (number: number) => {
    const numberString = number.toString();
    const length = numberString.length;
    if (length < 4) {
      return numberString;
    } else if (length < 7) {
      return `${numberString.slice(0, length - 3)}K`;
    } else if (length < 10) {
      return `${numberString.slice(0, length - 6)}M`;
    } else if (length < 13) {
      return `${numberString.slice(0, length - 9)}B`;
    } else if (length < 16) {
      return `${numberString.slice(0, length - 12)}T`;
    } else {
      return numberString;
    }
  }

  return {
    toDotNumber,
    toShortNumber,
  }
}