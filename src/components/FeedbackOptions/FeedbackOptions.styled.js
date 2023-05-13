import styled from "styled-components";

const FeedbackList = styled.ul`
list-style: none;
display: flex;
padding: 0;
`;

const Button = styled.button`
  border-radius: 5px;
  border: solid 1px #ded8d7;
  text-transform: capitalize;
  font-weight: 600;
  margin-right: 10px;
  cursor: pointer;
`;

export { FeedbackList, Button };