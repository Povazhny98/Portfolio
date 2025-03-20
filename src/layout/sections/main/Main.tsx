import photo from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                   <span>Hi There</span>
                    <Name> I am Vladislav Povazhniy</Name>
                    <MainTitle> A Web Developer</MainTitle>
                </div>
                <Photo src={photo} alt="" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #e2bbbb;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const Name = styled.h2`


`

const MainTitle = styled.h1`

`