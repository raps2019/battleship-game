import styled from 'styled-components/macro';

export const MessageTextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
width: 100%;
`;

export const MessageText = styled.h2`
padding: 10px;
text-align: center;
font-family: 'Cairo', sans-serif;
font-size: 16px;
letter-spacing: 0.3rem;
color: whitesmoke;
color: ${(props) => (props.statusMessageColor)};
position: absolute;
transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);

&.css-transition--appear {
  opacity: 0;
}

&.css-transition--appear-active {
  opacity: 0;
}

&.css-transition--appear-done {
  opacity: 1;
}

&.css-transition--enter {
  opacity: 0;
}

&.css-transition--enter-active {
  opacity: 0;
}

&.css-transition--enter-done {
  opacity: 1;
}

&.css-transition--exit {
  opacity: 1;
}

&.css-transition--exit-active {
  opacity: 0;
}

&.css-transition--exit-done {
  opacity: 0;
}
`;
