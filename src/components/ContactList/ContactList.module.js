import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  margin: 0;
  padding: 10px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  `;

export const ContactItem = styled.li`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 50px;
  height: 20px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.62;
  text-align: center;
  color: #212121;
  background-color: #f5f4fa;
  border-radius: 5px;
  border: none;

  transition-duration: 250ms;

  &:hover {
    color: #fff;
    background-color: #188ce8;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
