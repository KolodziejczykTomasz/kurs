import styled from "styled-components";


export const StyleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  svg {
    width: 50px;
    height: 50px;
  }
`;
