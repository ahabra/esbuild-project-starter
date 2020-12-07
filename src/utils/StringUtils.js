
export function startsWith(st, search, isCaseSensitive) {
  if (isCaseSensitive) {
    return st.startsWith(search)
  }

  const start = st.substring(0, search.length).toLowerCase()
  return search.toLowerCase() === start
}

