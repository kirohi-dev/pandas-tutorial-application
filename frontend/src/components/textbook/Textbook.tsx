import React from 'react';
import { Content } from '../common/Content';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import { ContentHeight, Calculation } from '../../themes/height';


interface ITextbook {
  body: string;
}

export const Textbook: React.FC<ITextbook> = (props) => {
  const closedHeight = `calc(${Calculation.splitTwoClosedBodyCalculation})`;
  const openedHeight = `calc(${Calculation.openBodyCalculation})`
  const paddingBottom = `calc(${ContentHeight.betweenContentHeight} / 2)`
  return (
    <>
      <Content
        title="教科書"
        iconComponent={<ChromeReaderModeIcon />}
        body={props.body}
        openedHeight={openedHeight}
        closedHeight={closedHeight}
        paddingBottom={paddingBottom}
      />
    </>
  )
}
