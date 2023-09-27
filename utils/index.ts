export let ticks: number[][] = [[], [], [], []];
let step = 100_0000;
let numOfTicksForEachTab = [16, 5, 10, 5];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < numOfTicksForEachTab[i]; j++) {
    ticks[i].push(j * step);
  }
}

// export const turnPrefsWithRegion = (prefs: TypePref[]) => {
//   // Your code logic here
//   const prefsWithRegion = [];
//   for (let i = 0; i < prefs.length; i++) {
//     const pref = prefs[i];
//     let region = "";
//     for (let i = 0; i < biPrefsWithRegion.length; i++) {
//       const currRegion = biPrefsWithRegion[i];
//       if (currRegion.prefs.includes(pref.prefName)) {
//         region = currRegion.region;
//         break;
//       }
//     }
//     prefsWithRegion.push(region);
//   }
// };
