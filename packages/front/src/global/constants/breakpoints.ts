export enum BP {
  xs = 576, // Extra small devices (portrait phones)
  sm = 768, // Small devices (landscape phones)
  md = 992, // Medium devices (tablets)
  lg = 1200, // Large devices (desktops)
  xl = 1400, // Extra Large devices (desktops)
  xxl = 1620, // Extra Large devices (desktops)
}

export const minWidth = (width: number, bp: BP) => width >= bp;

export const maxWidth = (width: number, bp: BP) => width <= bp - 0.02;

export const onlySize = (width: number, bpFrom: BP, bpTo: BP) =>
  minWidth(width, bpFrom) && maxWidth(width, bpTo);

export const mobile = (width: number) => width && maxWidth(width, BP.md);

export const notMobile = (width: number) => minWidth(width, BP.md);
