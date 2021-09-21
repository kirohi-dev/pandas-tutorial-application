export const ContentHeight = {
  headerHeight: '40px',
  componentHeaderHeight: '40px',
  buttonHeight: '40px',
  pagerHeight: '60px',
  betweenContentHeight: '6px',
} as const

export const Calculation = {
  contentCalculation: `100vh - ${ContentHeight.headerHeight}`,
  openBodyCalculation: `100vh - ${ContentHeight.pagerHeight} - ${ContentHeight.componentHeaderHeight}`,
  splitTwoClosedBodyCalculation: `((100vh - ${ContentHeight.headerHeight}) / 2) - ${ContentHeight.pagerHeight} - ${ContentHeight.componentHeaderHeight} - (${ContentHeight.betweenContentHeight} / 2) - ${ContentHeight.betweenContentHeight}`,
  splitOneClosedBodyCalculation: `100vh - ${ContentHeight.headerHeight} - ${ContentHeight.pagerHeight} - ${ContentHeight.componentHeaderHeight} - (${ContentHeight.betweenContentHeight} * 2)`,
} as const
