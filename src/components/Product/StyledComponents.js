import styled from 'styled-components'

export const ProductBgContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

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
  font-weight: normal;
  font-size: 18px;
  color: #183b56;
  margin: 0px;
`

export const ProductHeaderContainer = styled.div`
  display: flex;
  align-self: flex-end;
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

export const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

export const PrevButton = styled.button`
  border: 2px solid #183b56;
  background-color: transparent;
  padding: 5px;
  margin: 15px;
  padding: 8px;
`

export const NextButton = styled.button`
  border: 2px solid #183b56;
  background-color: transparent;
  width: 4vh;
  height: 4vh;
  margin: 15px;
  padding: 8px;
`

export const PagesNumbers = styled.p`
  font-family: Bree Serif;
  font-weight: 400;
  font-size: 20px;
  color: #183b56;
`

export const ProductsContainer = styled.div``

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default styled
