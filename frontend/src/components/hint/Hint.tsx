import React from 'react';
import { Content } from '../common/Content';
import { ContentHeight, Calculation } from '../../themes/height';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

interface IHint {
  body: string;
}

export const Hint: React.FC<IHint> = (props) => {
  const closedHeight = `calc(${Calculation.splitTwoClosedBodyCalculation})`;
  const openedHeight = `calc(${Calculation.openBodyCalculation})`;
  const paddingTop = `calc(${ContentHeight.betweenContentHeight} / 2)`;
  return (
    <>
      <Content
        title="ヒント"
        iconComponent={<WbIncandescentIcon />}
        body={props.body}
        openedHeight={openedHeight}
        closedHeight={closedHeight}
        paddingTop={paddingTop}
      />
    </>
  )
}
