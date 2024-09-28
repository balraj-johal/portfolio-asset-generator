import { DEFAULT_BACKGROUND } from "../../../config";
import { Background } from "../../../types/compositions";
import "./index.scss";

interface Props {
  children: React.ReactNode,
  background?: Background
}

export const Container = ({children, background = DEFAULT_BACKGROUND}: Props) => {
  if (background.type === "color") {
    return (
      <div className="Container" style={{backgroundColor: background.color}}>
        {children}
      </div>
    );
  }

  return (
    <div className="Container">
      {children}
    </div>
  );
};
