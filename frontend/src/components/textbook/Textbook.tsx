import React from 'react';
import { Content } from '../common/Content';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import { ContentHeight, Calculation } from '../../themes/height';


export const Textbook: React.FC = () => {
  const body = 'aaaaaaaaaaaaaaaaaa'
  const closedHeight = `calc(${Calculation.splitTwoClosedBodyCalculation})`;
  const openedHeight = `calc(${Calculation.openBodyCalculation})`
  const paddingBottom = `calc(${ContentHeight.betweenContentHeight} / 2)`
  return (
    <>
      <Content
        title="教科書"
        iconComponent={<ChromeReaderModeIcon />}
        body={body}
        openedHeight={openedHeight}
        closedHeight={closedHeight}
        paddingBottom={paddingBottom}
      />
    </>
  )
}
