const saveColor: { [key: string]: { color: string; darkerColor: string } } = {};

export const RandomColor = (name: string) => {
  if (saveColor[name]) {
    return saveColor[name];
  } else {
    const color =
      "hsl(" +
      360 * Math.random() +
      "," +
      (25 + 70 * Math.random()) +
      "%," +
      (85 + 10 * Math.random()) +
      "%)";

    const [hue, saturation, lightness] = color.match(/\d+/g)!.map(Number);

    const darkerColor = `hsl(${hue}, ${saturation}%, ${Math.max(
      lightness - 20,
      0
    )}%)`;

    saveColor[name] = { color, darkerColor };

    return { color, darkerColor };
  }
};
