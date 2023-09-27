export let ticks: number[][] = [[], [], [], []];
let step = 100_0000;
let numOfTicksForEachTab = [16, 5, 10, 5];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < numOfTicksForEachTab[i]; j++) {
    ticks[i].push(j * step);
  }
}
