import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Conteiner = styled.div``;
export const Header =styled.header`
height: 45px;
padding:10px;
border-bottom: 2px solid black;
margin-bottom:20px;
`
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 2px black solid;
  &.active {
    color: white;
    background-color: orangered;
  }
`
export const List =styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

`
