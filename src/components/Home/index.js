import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  CardContainer,
  LeftPanel,
  LeftHeading,
  LeftImg,
  RightContainer,
  EditorUl,
  EditorLi,
  Button,
  TextAreaElement,
} from './styleComponents'

class Home extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'
    const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const underlineLogo = isUnderline ? '#faff00' : '#f1f5f9'
    return (
      <MainContainer>
        <CardContainer>
          <LeftPanel>
            <LeftHeading>Text Editor</LeftHeading>
            <LeftImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
              alt="text editor"
            />
          </LeftPanel>
          <RightContainer>
            <EditorUl>
              <EditorLi>
                <Button
                  data-testid="bold"
                  colorText={boldLogo}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </Button>
              </EditorLi>
              <EditorLi>
                <Button
                  data-testid="italic"
                  colorText={italicLogo}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </EditorLi>
              <EditorLi>
                <Button
                  data-testid="underline"
                  colorText={underlineLogo}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </EditorLi>
            </EditorUl>
            <TextAreaElement
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </RightContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default Home
