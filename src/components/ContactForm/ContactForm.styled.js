import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0;
`;

export const LabelContainer = styled.div`
  position: relative;
`;

export const Label = styled.label``;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 8px;
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 10px 30px;
  margin-bottom: 20px;
  border: none;

  outline: solid black 1px;
  background-color: lightgrey;
  cursor: pointer;

  :hover,
  :focus {
    background-color: lightgrey;
  }
`;
