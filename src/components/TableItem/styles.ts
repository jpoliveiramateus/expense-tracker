import styled from "styled-components";

export const TableLine = styled.tr`
  @media (max-width: 592px) {
    font-size: 12px;
    text-align: center;
  }

  @media (max-width: 456px) {
    font-size: 10px;
  }
`;

export const TableColumn = styled.td`
  padding: 10px 0;
  word-break: break-all;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #FFF;
  background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${props => props.color};
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: red;
  color: white;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    opacity: 50%;
  }

  @media (max-width: 592px) {
    font-size: 12px;
    text-align: center;
  }

  @media (max-width: 456px) {
    font-size: 10px;
  }
`;