import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: coral;
    display: flex;
    position: relative;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
    width: 100%;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 80vh;
`
const InfoContainer = styled.div`
    flex: 1;
`


const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="https://i.ibb.co/cXFnLLV/2.png" />
                    </ImgContainer>
                    <InfoContainer></InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow>  
        </Container>
    )
}

export default Slider
