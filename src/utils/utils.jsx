// sort by String property ASCENDING (A - Z)
export const nameAscending = (data) =>
  [...data].sort((a, b) => (a.name > b.name ? 1 : -1));

// sort by String property DESCENDING (Z - A)
export const nameDescending = (data) =>
  [...data].sort((a, b) => (a.name > b.name ? -1 : 1));

// export const filterDataByType = (data) =>
//   console.log(
//     data.sort((a, b) =>
//       a.types.sort((a, b) => (a[0].name > b[0].name ? -1 : 1)) >
//         b.types.sort((a, b) => (a[1].name > b[1].name ? -1 : 1))
//         ? -1
//         : 1
//     )
//   );
