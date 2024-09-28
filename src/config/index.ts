import { Background } from "../types/compositions";

export const FRAMES_PER_SECOND = 24;
export const MINUTE_IN_FRAMES = FRAMES_PER_SECOND * 60;

export const DIMENSIONS = {
  width: 876 * 2,
  height: 548 * 2,
};

export const DEFAULT_BACKGROUND: Background = {
  color: "#000",
  type: "color",
};
