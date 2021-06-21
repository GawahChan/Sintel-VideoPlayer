import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderImage = styled.div`
  background-image: url(${require("../../common/images/Header.png")});
  background-position: center;
  background-size: cover;
  min-height: 150px;
`;
