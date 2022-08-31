import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  margin: 0.1rem 0;
`;

export const Line = styled.div<{open: boolean}>`
  height: 2rem;
  background-color: var(--color-white);
  width: 100%;

  border: 0.1rem solid var(--color-gray);
  border-bottom: none;

  border-radius: 0.4rem;

  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  padding: 0.4rem 0.4rem 0 0.4rem;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Contend = styled.div<{open: boolean}>`
  width: 100%;

  height: ${props => props.open ? '8rem' : '2.4rem'};
  border-radius: 0.4rem;
  border: 0.1rem solid var(--color-gray);

  padding: 0.2rem 0.5rem;

  overflow: hidden;

  transition: height 0.5s;

  padding-top: ${props => props.open ? '2rem' : '0.2rem'};
`

export const Icon = styled.div<{open: boolean}>`
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  color: var(--color-black);

  transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};

  transition: transform 0.5s;
`

export const Label = styled.p`
  font-size: 1rem;
  color: var(--white-black);
  font-family: var(--font-semibold);
`
