import parse from 'url-parse';

export const parseUrl = (url:string) => {
  const data = parse(url);
  return {
    proto: data.protocol,
    host: data.hostname,
    port: parseInt(data.port, 10),
    path: data.pathname,
    url,
  };
};

export const addPathToUrl = (url:string, path:string) => {
  if (!path) {
    return url;
  }
  if (!url) {
    return null;
  }
  const p = path.replace(/\/{2,}/g, '/') || '';

  if (url[url.length - 1] === '/' && p[0] === '/') {
    return `${url}${p.slice(1)}`;
  } if (url[url.length - 1] === '/' || p[0] === '/') {
    return `${url}${p}`;
  }
  return `${url}/${p}`;
};
