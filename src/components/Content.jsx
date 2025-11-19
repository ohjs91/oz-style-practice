import styled from "styled-components";
import { flex, font, tagColor, gray } from "../styled/mixin.js";
const ContentContainer = styled.div`
  ${flex({ direction: "column", align: "flex-start", gap: "5px" })}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
  }

  span {
    ${font({ size: "12px" })}
    color: ${tagColor};
    border: 1px solid ${tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }

  div {
    ${font({ size: "18px", weight: "600" })}
  }

  p {
    ${font({ size: "12px" })}
    color: ${gray};
  }
`;
export default function Content({ content }) {
  return (
    <ContentContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}
