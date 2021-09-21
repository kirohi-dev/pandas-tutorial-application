import React from 'react';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import { Content } from '../common/Content';

import { Calculation } from '../../themes/height';


export const Problem: React.FC = () => {
  const body = 'aaaaaaaaaaaaaaaaaa'
  const closedHeight = `calc(${Calculation.splitOneClosedBodyCalculation})`;
  const openedHeight = `calc(${Calculation.openBodyCalculation})`
  return (
    <>
      <Content title="問題" iconComponent={<AnnouncementIcon />} body={body} openedHeight={openedHeight} closedHeight={closedHeight}/>
    </>
  )
}
