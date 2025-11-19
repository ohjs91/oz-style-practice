import styled from "styled-components";
import { flex, font } from "../styled/mixin.js";
const HeaderContainer = styled.header`
  ${flex({ justify: "space-between", align: "center" })}
  padding: 10px 20px;
  background-color: black;
`;
const MenuList = styled.ul`
  ${flex({ justify: "center", align: "center", gap: "20px" })}
  li {
    ${font({ size: "16px" })}
    list-style: none;
  }
`;
export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <MenuList>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </MenuList>
    </HeaderContainer>
  );
}
