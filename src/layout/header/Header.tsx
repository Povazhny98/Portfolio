import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Conteiner} from "../../components/Conteiner.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";


const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Conteiner>
                <FlexWrapper align="center" justify="space-between">
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>

            </Conteiner>

        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: rgba(31, 31, 32, 0.9);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`