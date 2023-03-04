// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",
  // SWIEZO DODANE M.S.
  primary100: "#00008B",
  primary200: "#012169",
  primary300: "#191970",
  primary400: "#002147",
  primary500: "#002244",
  primary600: "#003153",

  secondary100: "#EF0107",
  secondary200: "#FF0800",
  secondary300: "#F40009",
  secondary400: "#DC143C",
  secondary500: "#DA291C",

  tetiary100: "#FFD700",
  tetiary200: "#F0E68C",
  tetiary300: "#FFC72C",
  tetiary400: "#FEBE10",
  tetiary500: "#FFFF00",

  font100: "011627",
  font200: "fdfffc",

  // do tego momentu :D
  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  background: "#4D30FF",
  backgroundSecondary: "#EBEEFC",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral100,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.background,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
}
