import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #25262c;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95%;
  background-color: #1b1c22;
  height: 85vh;
  padding: 14px;
`
export const LeftPanel = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`

export const LeftHeading = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #f8fafc;
`
export const LeftImg = styled.img`
  height: 60%;
  margin-top: 25px;
`

export const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #25262c;
  border-radius: 10px;
  border: 2px solid #334155;
`

export const EditorUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

export const EditorLi = styled.li`
  display: flex;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  color: ${props => props.colorText};
`
export const TextAreaElement = styled.textarea`
  height: 100%;
  background-color: #25262c;
  border: none;
  border-top: 2px solid #334155;
  width: 100%;
  outline: none;
  font-size: 21px;
  color: #f8fafc;
  padding: 21px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`
