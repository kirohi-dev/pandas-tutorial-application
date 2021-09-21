import React, { useState, ReactChild } from 'react';
import styled from 'styled-components';
import { Border } from '../../themes/colors';
import { ContentHeight } from '../../themes/height';
import { ComponentHeader } from '../common/ComponentHeader';
import { Pager } from '../common/Pager';

const pagerPadding = '10px';

type WrapperProp = {
  isOpen: boolean;
  paddingTop?: string;
  paddingBottom?: string; 
}

const Wrapper = styled.div<WrapperProp>`
padding-top: ${(props) => {
  return props.paddingTop ? props.paddingTop : ContentHeight.betweenContentHeight
}};
padding-bottom: ${(props) => {
  return props.paddingBottom ? props.paddingBottom : ContentHeight.betweenContentHeight
}};
  ${(props) => {
    return props.isOpen
      ? `
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      padding: 0;
      `
      : ''
  }}
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: inherit;
`

const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
`

type BodyWrapperProp = {
  isOpen: boolean;
  closedHeight: string;
  openedHeight: string;
}

const BodyWrapper = styled.div<BodyWrapperProp>`
  ${(props) => {
    return props.isOpen
      ? `
      height: ${props.openedHeight};
      `
      : `
      height: ${props.closedHeight};
      `
  }}
  width: 100%;
  background-color: white;
  padding: 10px;
  overflow: auto;
`

const PagerWrapper = styled.div`
  background-color: white;
  height: ${ContentHeight.pagerHeight};
  width: 100%;
  padding: ${pagerPadding};
  border-top: 1px solid ${Border.bdGray};
  display: flex;
  align-items: center;
`

type ContentType = {
  title: string;
  iconComponent: ReactChild;
  body: string;
  closedHeight: string;
  openedHeight: string;
  paddingTop?: string;
  paddingBottom?: string; 
}

export const Content: React.FC<ContentType> = ({
  title,
  iconComponent,
  body,
  closedHeight,
  openedHeight,
  paddingTop,
  paddingBottom,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const switchOpen = () => {
    setOpen(!isOpen)
  }

  return (
    <Wrapper isOpen={isOpen} paddingTop={paddingTop} paddingBottom={paddingBottom}>
      <ContentWrapper>
        <ComponentHeader title={title} iconComponent={iconComponent} action={switchOpen} isOpen={isOpen}/>
        <BodyWrapper isOpen={isOpen} closedHeight={closedHeight} openedHeight={openedHeight}>
          {body}
        </BodyWrapper>
      </ContentWrapper>
      <PagerWrapper>
        <Pager />
      </PagerWrapper>
    </Wrapper>
  )
}
