import styled from 'styled-components'

export const OrderListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const OrderListSubContainer = styled.div`
  display: flex;
  align-items: center;
`
export const OrderListBg = styled.div``

export const OrderListImage = styled.img`
  width: 18vh;
  height: 13vh;
  border-radius: 5px;
  margin: 15px;
`

export const OrderListName = styled.h1`
  font-size: 20px;
  color: #183b56;
  font-weight: bold;
  font-family: DM Sans;
  margin-right: 5vh;
`

export const OrderListPrice = styled.h1`
  font-size: 18px;
  color: #ffa412;
  font-weight: bold;
  font-family: DM Sans;
  margin-right: 10vh;
`

export const Quantity = styled.div`
  margin-right: 10vh;
`

export const OrderListSm = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: none;
  }
`
export const OrderListSubContainerSm = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
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
