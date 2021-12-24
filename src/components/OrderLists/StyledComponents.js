import styled from 'styled-components'

export const OrderListMainBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

export const OrderListBgContainer = styled.div`
  background-color: white;
  width: 80%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const OrderListSubBgContainer = styled.div`
  background-color: #f9fbfe;
  width: 90%;
  min-height: 80%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export const OrderListName = styled.h1`
  font-size: 20px;
  color: #183b56;
  font-weight: bold;
  font-family: DM Sans;
  margin-right: 5vh;
`

export const OrderListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-left: 10vh;
  padding-right: 10vh;
  @media (max-width: 768px) {
    display: none;
  }
`

export const Quantity = styled.div`
  margin-right: 10vh;
  font-size: 20px;
  color: #183b56;
  font-weight: bold;
  font-family: DM Sans;
  margin-left: 30vh;
  align-self: center;
`

export const OrderListPrice = styled.h1`
  font-size: 18px;
  color: #ffa412;
  font-weight: bold;
  font-family: DM Sans;
  margin-right: 3vh;
`
export const Hr = styled.hr`
  border: 1px dashed #0a0a0a;
  width: 95%;
  margin-top: 20px;
`
export const NotFoundImage = styled.img`
  width: 60vh;
  height: 40vh;
  @media (max-width: 768%) {
    width: 30vh;
    height: 30vh;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  color: #1e293b;
  margin: 0px;
  text-align: center;
`

export const NotFoundDescription = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 48px;
  color: #475569;
  margin: 0px;
  text-align: center;
  flex-wrap: wrap;
`

export const NotFoundButton = styled.button`
  background-color: #f7931e;
  border: none;
  border-radius: 12px;
  padding: 15px;
  color: white;
  font-size: 15px;
  margin: 10px;
  margin-bottom: 10vh;
`
export const OrderNowButton = styled.button`
  background-color: #f7931e;
  border: none;
  border-radius: 12px;
  padding: 15px;
  color: white;
  font-size: 15px;
  margin: 10px;
  margin-bottom: 10vh;
  margin-right: 10vh;
  width: 15vh;
  align-self: flex-end;
`

export default styled
