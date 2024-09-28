import { Composition } from "remotion";

import "./styles/global.css";
import { COMPOSITIONS } from "./compositions";
import { DIMENSIONS, FRAMES_PER_SECOND } from "./config";

export const RemotionRoot = () => {
  return (
    <>
      {COMPOSITIONS.map(config => (
        <Composition
          key={config.id}
          fps={FRAMES_PER_SECOND}
          width={DIMENSIONS.width}
          height={DIMENSIONS.height}
          {...config}
        />
      ))}
    </>
  );
};
