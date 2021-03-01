import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
  &:last-child {
    border: none;
  }
`;

export const Average = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 1px solid grey;
  border-radius: 50%;
  margin-top: 15px;
  background-color: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.danger;
    return theme.colors.grey;
  }};
`;

export const Container = styled.div`
  padding: 10px 20px;
`;

export const Name = styled.p`
  font-size: 25px;
  text-align: left;
  width: 300px;
`;

export const Attendance = styled.p`
  font-size: 15px;
  text-align: left;
  width: 300px;
`;

