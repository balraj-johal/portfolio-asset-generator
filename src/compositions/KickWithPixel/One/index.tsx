import { AbsoluteFill } from "remotion";
import { MobileTripleStack } from "../../../components/screens/MobileTripleStack";
import { MINUTE_IN_FRAMES } from "../../../config";
import { CompositionConfiguration } from "../../../types/compositions";
import { MobileVideo } from "../../../components/primitives/MobileVideo";

const KickWithPixelOne = () => {
  return (
    <AbsoluteFill>
      <MobileTripleStack elements={[
        <MobileVideo src=""/>,
        <MobileVideo src=""/>,
        <MobileVideo src=""/>,
      ]} />
    </AbsoluteFill>
  );
};

const KickWithPixelOneComp: CompositionConfiguration = {
  id: "MenuOne",
  component: KickWithPixelOne,
  durationInFrames: MINUTE_IN_FRAMES * 30,
}

export default KickWithPixelOneComp;