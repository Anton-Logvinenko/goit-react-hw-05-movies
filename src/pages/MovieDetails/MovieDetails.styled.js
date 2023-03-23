import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Conteiner=styled.div`
padding:20px;
`



export const Link = styled(NavLink)`
  padding: 2px 10px;
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
export const Div=styled.div`
margin:10px 0;
`

export const List= styled.ul`
display:flex;
gap:10px;
padding: 0;
  list-style: none;
`