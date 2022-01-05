/* Question 04 (stretch)

This is a STRETCH QUESTION.

Given a size in bits convert it to relevant size in B/KB/MB/GB/TB. Round your answers to two decimal places at most. Use base 10 for sizes.

- 1 B
- 1 kB == 1000 B
- 1 MB == 1000 kB
- 1 GB == 1000 MB
- 1 TB == 1000 GB

More info on these in case you are curious:
https://en.wikipedia.org/wiki/Byte#Unit_symbol

Examples:

- filesize(1)        => "1B"
- filesize(1000)     => "1kB"
- filesize(1000000)  => "1MB"
- filesize(1500000)  => "1.5MB"
- filesize(1250000000) => "1.25GB"
- filesize(9000000000000) => "9TB"

*/

// 1 B
// 10 B
// 100 B
// 1000 kB

const units = ["B", "B", "B", "kB", "kB", "kB", "MB", "MB", "MB"];

const someSize = 123456;
const length = String(someSize).length;
const chosenUnit = units[length - 1];
const shrunkSize = someSize / 10 ** (length - 1);

const roundedShrunkSize = Math.round(shrunkSize * 100) / 100;
console.log(length, chosenUnit, shrunkSize, roundedShrunkSize);

const shrinkAndRound = (value) => {
  const length = String(value).length;
  const shrunkValue = value / 10 ** (length - 1);
  return Math.round(shrunkValue * 100) / 100;
};

const fileSize = (size) => {
  if (size < 1000) {
    const unit = "B";
    return shrinkAndRound(size) + unit;
  }
  if (size < 1000000) {
    const unit = "kB";
    return shrinkAndRound(size) + unit;
  }
  if (size < 1000000000) {
    const unit = "MB";
    return shrinkAndRound(size) + unit;
  }
  if (size < 1000000000000) {
    const unit = "GB";
    return shrinkAndRound(size) + unit;
  }
  if (size < 1000000000000000) {
    const unit = "TB";
    return shrinkAndRound(size) + unit;
  }
};

const betterFileSizeMaybeQuestionMark = (originalSize) => {
  const unitList = [];
  for (unit of ["B", "kB", "MB", "GB", "TB"]) {
    unitList.push(unit);
    unitList.push(unit);
    unitList.push(unit);
  }

  let size = originalSize;
  let howManyTimes = 0;
  while (size > 1) {
    size = size / 10;
    howManyTimes++;
  }
  console.log(size, howManyTimes, originalSize, unitList);

  return size * 10 + unitList[howManyTimes - 1];
};

const result = betterFileSizeMaybeQuestionMark(123456);
console.log(result);
