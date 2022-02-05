export const rot13 = (s: string) => {
  return s.replace(/[A-Za-z]/g, function (c) {
    return String.fromCharCode(
      c.charCodeAt(0) + (c.toUpperCase() <= 'M' ? 13 : -13)
    );
  });
};
