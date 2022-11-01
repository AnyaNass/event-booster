export function markapCountryList(arr) {
  const markap = arr.reduce(
    (acc, { value, label }) =>
      (acc += `<li class="select-country-item" data-id="${value}">${label}</li>`),
    ``
  );
  return markap;
}

export function findeCountry(query, arr) {
  const filterArray = arr.filter(({ label }) =>
    label.toLowerCase().includes(query.toLowerCase())
  );
  return filterArray;
}
