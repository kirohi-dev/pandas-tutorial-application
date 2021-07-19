import React, { useState, useRef } from 'react';
import MonacoEditor, { EditorDidMount, ChangeHandler, monaco } from 'react-monaco-editor';
import ReactResizeDetector from 'react-resize-detector';
import styled from 'styled-components';

import { useCodeState } from '../../hooks/codeRecoil'

const MonacoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Editor: React.FC = () => {
  const parent = useRef<HTMLDivElement>(null);
  const [editorState, setEditorState] = useState<undefined | monaco.editor.IStandaloneCodeEditor>();
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
      <MonacoWrapper ref={parent}>
        <MonacoEditor
          language="python"
          theme="vs"
          value={code}
          options={options}
          onChange={onChange}
          editorDidMount={editorDidMount}
        />
      </MonacoWrapper>
    </ReactResizeDetector>
  );
}
