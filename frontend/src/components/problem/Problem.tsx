import React from 'react';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import { Content } from '../common/Content';

import { Calculation } from '../../themes/height';


interface IProblem {
  body: string;
  pager: number;
  pageLength: number;
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
}

export const Problem: React.FC<IProblem> = (props) => {
  const closedHeight = `calc(${Calculation.splitOneClosedBodyCalculation})`;
  const openedHeight = `calc(${Calculation.openBodyCalculation})`
  return (
    <>
      <Content
        title="問題"
        iconComponent={<AnnouncementIcon />}
        body={props.body}
        openedHeight={openedHeight}
        closedHeight={closedHeight}
        pager={props.pager}
        pageLength={props.pageLength}
        onIncrement={props.onIncrement}
        onDecrement={props.onDecrement}
      />
    </>
  )
}
