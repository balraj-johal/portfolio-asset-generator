import "./index.scss";

interface Props {
  src: string;
}

export const MobileVideo = ({src}: Props) => {
  return (
    <div className="MobileVideoContainer">
      <video src={src} />
    </div>
  );
};
