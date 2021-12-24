import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ProductDetailsBgContainer = styled.li`
  display: flex;
  margin: 20px;
  width: 40vh;
`

export const ProductImage = styled.img`
  width: 220px;
  height: 150px;
  border-radius: 18px;
  padding: 15px;
  transform: rotate(-10deg);
  &:hover {
    width: 220px;
    height: 150px;
    transform: rotate(0deg);
  }
  @media (max-width: 768px) {
    height: 180px;
  }
`

export const ProductDetailsSubBg = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductName = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #334155;
  letter-spacing: 0.2px;

  &:hover {
    font-size: 20px;
  }
`

export const ProductType = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #334155;
  margin: 8px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`
export const StarContainer = styled.div`
  display: flex;
`

export const StarImage = styled.i`
  width: 4vh;
  margin: 10px;
`

export const ProductRating = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #334155;
  letter-spacing: 0.2px;
  margin: 0px;
  margin-left: 10px;
`

export const Linked = styled(Link)`
  text-decoration: none;
`

export default styled
