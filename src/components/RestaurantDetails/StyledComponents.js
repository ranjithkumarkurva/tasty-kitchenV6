import styled from 'styled-components'

export const ProductDetailsBgContainer = styled.li`
  display: flex;
  margin: 20px;
  width: 40vh;
`

export const ProductImage = styled.img`
  width: 250px;
  height: 180px;
  border-radius: 18px;
  padding: 15px;
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
  margin: 0px;
  margin-top: 15px;
`

export const ProductCost = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #334155;
  margin: 8px;
  margin-top: 10px;
`
export const StarContainer = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 10px;
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

export const AddButton = styled.button`
  color: #ffa412;
  border: 2px solid #ffa412;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  padding: 5px;
  width: 7vh;

  &:hover {
    background-color: #ffa412;
    color: white;
    box-shadow: 0px 5px 10px 0px;
  }
`

export const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const CountButton = styled.button`
  color: #475569;
  border: 1px solid #475569;
  background-color: transparent;
  padding: 1px;
  width: 2vh;
  height: 2vh;
`

export const CountNumber = styled.h1`
  color: #475569;
  font-size: 10px;
  margin: 7px;
  margin-top: 0px;
`

export default styled
