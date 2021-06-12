import styled from 'styled-components/macro';

export const ContentContainer = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`




export const Content = styled.div`

position: absolute;
width: 100%;
height: 100%;


transition: all 500ms cubic-bezier(0.33, 1, 0.68, 1);

&.css-transition--appear {
  /* transform: scale(0.25);
  opacity: 0.25; */
}

&.css-transition--appear-active {
  /* transform: scale(0.25); */
  /* opacity: 0.25; */
}

&.css-transition--appear-done {
  /* transform: scale(1); */
  opacity: 1;
}

&.css-transition--enter {
  opacity: 0;
  transform: scale(0.0);
}

&.css-transition--enter-active {
  opacity: 0;
  /* transform: scale(0.0); */ */
}

&.css-transition--enter-done {
  opacity: 1;
  /* transform: scale(1); */
}

&.css-transition--exit {
  /* opacity: 1; */
  /* transform: scale(1); */

}

&.css-transition--exit-active {
  opacity: 0;
  /* transform: scale(0.0); */
}

&.css-transition--exit-done {
  opacity: 0.0;
  /* transform: scale(0.0); */
}
`


