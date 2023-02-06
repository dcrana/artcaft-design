import { HandPaintingParentDiv, HandPaintingWrapper, StyledHandPaintImage, StyledPaintCardMaterial, StyledPaintCardTitle, StyledPaintCardYear, StyledPaintingCard, StyledPaintingWrapper, StyleSendRequest } from "./StyledHandPainting"
import TitleWrapper from "../titlewrapper/TitleWrapper";
import { MainContainer } from "../../StyledApp";
import { handPaintingData } from "../../data";


const HandPainting = () => {
    return (
        <HandPaintingWrapper id="handpainting">
            <HandPaintingParentDiv>
                <MainContainer>
                    <TitleWrapper floatRight={false} title="Handpainting" subtitle=" Acrylic painting" />
                    <StyledPaintingWrapper>
                        {
                            handPaintingData.length > 0 && handPaintingData.map((item, index) => {
                                return (
                                    <StyledPaintingCard key={index}>
                                        <StyledHandPaintImage src={item?.image} alt={item?.title} />
                                        <StyledPaintCardTitle>
                                            {item?.title}
                                        </StyledPaintCardTitle>
                                        <StyledPaintCardYear>
                                            {item?.year}
                                        </StyledPaintCardYear>
                                        <StyledPaintCardMaterial>
                                            Material : {item?.material}
                                        </StyledPaintCardMaterial>
                                        <StyleSendRequest>
                                            SEND REQUEST
                                        </StyleSendRequest>
                                    </StyledPaintingCard>
                                )
                            })
                        }
                    </StyledPaintingWrapper>
                </MainContainer>
            </HandPaintingParentDiv>
        </HandPaintingWrapper>
    )
}
export default HandPainting;