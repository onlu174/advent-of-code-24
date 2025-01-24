interface Day1PuzzleInput {
  leftList: number[];
  rightList: number[];
}

export function solveDay1Puzzle(input: string): number {
  const { leftList, rightList }: Day1PuzzleInput = mapDay1PuzzleInput(input);

  leftList.sort();
  rightList.sort();

  if (leftList.length !== rightList.length) {
    throw new Error('Error at Day1Puzzle solution: lists are of different lengths.');
  }

  const pairDistances: number[] = [];

  for (let i = 0; i < leftList.length; i++) {
    const leftListNumber = leftList[i];
    const rightListNumber = rightList[i];
    const pairDistance = Math.abs(leftListNumber - rightListNumber);

    pairDistances.push(pairDistance);
  }

  return pairDistances.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function mapDay1PuzzleInput(input: string): Day1PuzzleInput {
  if (input.length === 0) {
    throw new Error('Error at Day1Puzzle input: input is empty.');
  }

  const leftList: number[] = [];
  const rightList: number[] = [];

  input.split('\n').forEach((line: string, index: number) => {
    if (line.length !== 5) {
      throw new Error(
        `Error at Day1Puzzle input at line ${index}: line has invalid length. Expected 5, but got ${line.length}.`,
      );
    }

    const leftListChar = line.charAt(0);
    const rightListChar = line.charAt(4);

    if (leftListChar === ' ' || rightListChar === ' ') {
      throw new Error(`Error at Day1Puzzle input at line ${index}: character for one of the lists is missing.`);
    }

    const leftListNumber = Number(leftListChar);
    const rightListNumber = Number(rightListChar);

    if (isNaN(leftListNumber) || isNaN(rightListNumber)) {
      throw new Error(`Error at Day1Puzzle input at line ${index}: character for one of the lists is NaN.`);
    }

    leftList.push(Number(leftListChar));
    rightList.push(Number(rightListChar));
  });

  return { leftList, rightList };
}
