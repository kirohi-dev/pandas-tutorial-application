import React, { useState, useRef } from 'react';
import MonacoEditor, { EditorDidMount, ChangeHandler, monaco } from 'react-monaco-editor';
import ReactResizeDetector from 'react-resize-detector';
import styled from 'styled-components';

import { ContentHeight, Calculation } from '../../themes/height';
import { useCodeState } from '../../hooks/codeRecoil'
import { ComponentHeader } from '../common/ComponentHeader';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import { EditorFooter } from './EditorFooter';

type WrapperProps = {
  isOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  padding: ${ContentHeight.betweenContentHeight} 0;
  width: 100%;
  height: 100%;
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
`

type MonacoWrapperProps = {
  isOpen: boolean;
}

const MonacoWrapper = styled.div<MonacoWrapperProps>`
  width: 100%;
  height: ${(props) => {
    return props.isOpen
      ? `calc(${Calculation.openBodyCalculation})`
      : `calc(${Calculation.splitOneClosedBodyCalculation})`
  }};

  .monaco-editor.rename-box,
  .monaco-hover {
    top: 0;
  }
`;



export const Editor: React.FC = () => {
  const parent = useRef<HTMLDivElement>(null);
  const [editorState, setEditorState] = useState<undefined | monaco.editor.IStandaloneCodeEditor>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const switchOpen = () => {
    setOpen(!isOpen)
  }
  const [code, setCode] = useCodeState();
  const options = {
    selectOnLineNumbers: true
  };
  const editorDidMount: EditorDidMount = (editor) => {
    console.log('editorDidMount', editor);
    setEditorState(editor)
    editor.focus();
  }
  const onChange: ChangeHandler = (newValue, e) => {
    console.log('onChange', newValue, e);
    setCode(newValue)
  }

  return (
    <Wrapper isOpen={isOpen}>
      <ComponentHeader title='エディター' iconComponent={<TextFieldsIcon />}  action={switchOpen} isOpen={isOpen} />
      <ReactResizeDetector
          handleWidth
          handleHeight
          targetRef={parent}
          onResize={() => {
            if (editorState) {
              editorState.layout()
            }
          }}
        >
          <MonacoWrapper ref={parent} isOpen={isOpen} key="monaco">
            <MonacoEditor
              language="python"
              theme="vs-dark"
              value={code}
              options={options}
              onChange={onChange}
              editorDidMount={editorDidMount}
            />
          </MonacoWrapper>
          <EditorFooter  key="footer"/>
        </ReactResizeDetector>
    </Wrapper>
  );
}
