export const insertUrlParams = (params: [string, string][]) => {
  // eslint-disable-next-line no-restricted-globals
  if (history.pushState) {
    const searchParams = new URLSearchParams(window.location.search);
    params.forEach(([key, value]) => {
      searchParams.set(key, value);
    });
    const newurl = `${window.location.protocol}//${window.location.host}${
      window.location.pathname
    }?${searchParams.toString()}`;
    window.history.pushState({ path: newurl }, '', newurl);
  }
};
export const removeUrlParams = (params: string[]) => {
  // eslint-disable-next-line no-restricted-globals
  if (history.pushState) {
    const searchParams = new URLSearchParams(window.location.search);
    params.forEach((key) => {
      searchParams.delete(key);
    });
    const newurl = `${window.location.protocol}//${window.location.host}${
      window.location.pathname
    }?${searchParams.toString()}`;
    window.history.pushState({ path: newurl }, '', newurl);
  }
};
