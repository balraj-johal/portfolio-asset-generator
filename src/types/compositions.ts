export type CompositionConfiguration = {
  component: React.FC;
  id: string;
  durationInFrames: number;
};

type BackgroundAsColor = {
  color: string;
  type: "color";
};

type BackgroundAsImage = {
  src: string;
  type: "image";
};

export type Background = BackgroundAsColor | BackgroundAsImage;
