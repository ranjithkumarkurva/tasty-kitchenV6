import styled from 'styled-components'

export const ProductHeaderMainBgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15vh;
`

export const ProductHeaderBgContainer = styled.div`
  width: 82%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const ProductHeaderSubBgContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProductHeaderName = styled.h1`
  font-family: DM Sans;
  font-style: italic;
  font-weight: bold;
  font-size: 25px;
  color: #183b56;
  margin-left: 0px;
`

export const ProductHeaderDescription = styled.p`
  font-family: DM Sans;
  font-style: italic;
  font-size: 18px;
  color: #183b56;
  margin: 0px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`

export const ProductHeaderContainer = styled.div`
  display: flex;
  align-self: flex-end;
  @media (max-width: 768px) {
    display: flex;
    align-self: flex-start;
    margin: 13px;
    margin-left: 0px;
  }
`

export const ProductHeaderSelect = styled.select`
  border: 2px solid white;
  background-color: transparent;
  outline: none;
`

export const ProductHeaderOption = styled.option`
  font-family: DM Sans;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  color: #183b56;
`

export default styled
