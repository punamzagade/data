import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};
export const mobiled = (props) => {
  return css`
    @media only screen and (min-width: 381px) {
      ${props}
    }
  `;
};

export const mobi = (props) => {
  return css`
    @media only screen and (max-width: 660px) {
      ${props}
    }
  `;
};

export const mini = (props) => {
  return css`
    @media only screen and (min-width: 501px) {
      ${props}
    }
  `;
};

export const slidermob = (props) => {
  return css`
    @media only screen and (max-width: 500px) {
      ${props}
    }
  `;
};

export const mobimin = (props) => {
  return css`
    @media only screen and (max-width: 590px) {
      ${props}
    }
  `;
};

export const slidertab = (props) => {
  return css`
    @media only screen and (min-width: 661px) {
      ${props}
    }
  `;
};

export const mobitab = (props) => {
  return css`
    @media only screen and (max-width: 900px) {
      ${props}
    }
  `;
};
export const desk = (props) => {
  return css`
    @media only screen and (min-width: 767px) {
      ${props}
    }
  `;
};
export const deskt = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};
export const deskpc = (props) => {
  return css`
    @media only screen and (max-width: 1000px) {
      ${props}
    }
  `;
};
export const tabslider = (props) => {
  return css`
    @media only screen and (min-width: 901px) {
      ${props}
    }
  `;
};
export const tabdesk = (props) => {
  return css`
    @media only screen and (min-width: 940px) {
      ${props}
    }
  `;
};
export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 1000px) {
      ${props}
    }
  `;
};
export const desktoptv = (props) => {
  return css`
    @media only screen and (min-width: 1150px) {
      ${props}
    }
  `;
};
export const desktv = (props) => {
  return css`
    @media only screen and (min-width: 1240px) {
      ${props}
    }
  `;
};
export const desktvtop = (props) => {
  return css`
    @media only screen and (min-width: 1385px) {
      ${props}
    }
  `;
};
