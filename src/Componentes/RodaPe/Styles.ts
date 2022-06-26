import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #111111;
  padding: 1.5rem 0;

  align-items: center;
  justify-content: center;
`

export const ContentMade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  span{
    color: white;
    opacity: 0.7;
    font-size: 0.8rem;
  }

  img{
    width: 3rem;
    
  }
`
