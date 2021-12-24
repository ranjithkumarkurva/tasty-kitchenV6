import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderBgContainer = styled.div`
  background-color: #f8fafc;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-left: 10vh;
  padding-right: 15vh;
  margin-bottom: 5vh;
  @media (max-width: 768px) {
    padding-left: 0vh;
    padding-right: 8vh;
  }
`

export const HeaderSubBg = styled.div`
  display: flex;
`

export const HeaderImage = styled.img`
  width: 53px;
  height: 43px;
  align-self: center;
  margin-right: 20px;
  margin-left: 50px;
`

export const HeaderName = styled.h1`
  font-family: DM Sans;
  font-style: italic;
  font-weight: bold;
  font-size: 22px;
  color: #f7931e;
  align-self: center;
`

export const Linked = styled(Link)`
  text-decoration: none;
  outline: none;
`

export const HeaderPageNames = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #475569;
  margin-right: 75px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  width: 8vh;
  height: 3vh;
  background-color: #f7931e;
  border: none;
  outline: none;
  font-size: 15px;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  font-family: DM Sans;
  &:hover {
    font-size: 20px;
    width: 10vh;
    height: 5vh;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const MenuIcon = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  @media (min-width: 769px) {
    display: none;
  }
`
export const SmBgContainer = styled.div`
  background-color: #fafafa;
  width: 50vh;
  height: 10vh;
  margin-top: 40vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const SmMainBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export default styled
