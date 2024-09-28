import { Background } from "../../../types/compositions";
import { Container } from "../../primitives/Container";
import "./index.scss";

interface Props {
  elements: [React.ReactNode, React.ReactNode, React.ReactNode],
  background?: Background
}

export const MobileTripleStack = ({elements, background}: Props) => {
  return (
    <Container>
      <div className="HStack">
        <>
          {elements.map((element, index) => (
            <div key={index}>{element}</div>
          ))}
        </>
      </div>
    </Container>
  );
};
