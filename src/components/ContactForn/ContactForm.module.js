import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  width: 300px;
  border: 1px solid gray;
  border-radius: 5px;

  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Input = styled.input`
  outline: none;
  padding: 5px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 25px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.62;
  text-align: center;
  color: #212121;
  background-color: #f5f4fa;
  border-radius: 5px;
  border: none;

  transition-duration: 250ms;

  margin-top: 15px;
  &:hover {
    color: #fff;
    background-color: #188ce8;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
