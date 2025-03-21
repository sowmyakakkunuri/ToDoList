export async function fetchSearchValue(data, searchValue, filterType, status) {
  try {
    if (filterType === "" && status === "") {
      if (!searchValue.trim()) return data;
      else throw new Error("Choose a filter!");
    }
    let filteredBySearch = data.filter((item) => {
      if (filterType !== "") {
        if (!searchValue.trim()) {
          throw new Error(`Enter a ${filterType}`);
        }
        let value = item[filterType];

        if (isNaN(value)) {
          return value.toLowerCase().includes(searchValue.trim().toLowerCase());
        } else {
          value = Number(value);
          return value === Number(searchValue.trim());
        }
      } else {
        return data;
      }
    });

    let finalResult = filteredBySearch.filter((item) => {
      if (status === "all" || status === "") return true;
      else if (status === "completed") return item.completed === true;
      else if (status === "due") return item.completed === false;
    });
    return finalResult.length > 0 ? finalResult : [];
  } catch (e) {
    throw new Error(e);
  }
}
