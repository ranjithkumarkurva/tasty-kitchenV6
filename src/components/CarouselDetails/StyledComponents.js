import styled from 'styled-components'

export const CarouselImage = styled.img`
  width: 80%;
  height: 32vh;
  @media (max-width: 768px) {
    height: 22vh;
  }
`

export const BgImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default styled
