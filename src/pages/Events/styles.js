import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ImageContainer = styled.img`
    width: ${(props) => props.size ?? "10rem"};
    height: 10rem;
    margin-inline: 2rem;
    transition: 0.2s;
    
    &:hover {
       width: 30rem
    }
`
    
export const EventContainer = styled.div`
    background-color: ${(props) => props.theme.white};
    
    h1 {   
    }
`

export const NavContainer = styled(NavLink)`
    text-decoration: none;
    color: red;
`