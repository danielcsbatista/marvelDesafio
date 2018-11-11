const doTruncarStr = (str: string, size: number) => {
  if (str === undefined || str === 'undefined' || str === '') {
    return str;
  }

  let shortText = str;
  if (str.length >= size + 3) {
    shortText = str.substring(0, size).concat('...');
  }
  return shortText;
};

export default doTruncarStr;
