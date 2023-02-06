import { useState } from "react";
import { printArtData } from "../../data";
import { MainContainer } from "../../StyledApp";
import { Cart } from "../../svg-component";
import TitleWrapper from "../titlewrapper/TitleWrapper";
import { PrintArtParentDiv, PrintArtWrapper, StyledAddToCart, StyledPaintArtWrapper, StyledPrintartCard, StyledPrintArtCardMaterial, StyledPrintArtCardPrice, StyledPrintArtCardTitle, StyledPrintArtImage } from "./StyledPrintArt"

const PrintArt = () => {
    const [value, setValue] = useState(-1);
    return (
        <PrintArtWrapper id="paintart">
            <PrintArtParentDiv>
                <MainContainer>
                    <TitleWrapper floatRight={true} title="Print Art" subtitle="Acrylic Prints" left='-10px' />
                    <StyledPaintArtWrapper>
                        {
                            printArtData.length > 0 && printArtData.map((item, index) => {
                                return (
                                    <StyledPrintartCard key={index}>
                                        <StyledPrintArtImage src={item?.image} alt={item?.title} />
                                        <StyledPrintArtCardTitle>
                                            {item?.title}
                                        </StyledPrintArtCardTitle>
                                        <StyledPrintArtCardPrice>
                                            &euro;{item?.price}
                                        </StyledPrintArtCardPrice>
                                        <StyledPrintArtCardMaterial>
                                            Material : {item?.material}
                                        </StyledPrintArtCardMaterial>
                                        <StyledAddToCart onMouseEnter={() => setValue(item?.id)} onMouseLeave={() => { setValue(-1) }}>
                                            <Cart fillColor={item?.id === value ? "#000" : '#fff'} />
                                        </StyledAddToCart>
                                    </StyledPrintartCard>
                                )
                            })
                        }
                    </StyledPaintArtWrapper>
                </MainContainer>
            </PrintArtParentDiv>
        </PrintArtWrapper>
    )
}
export default PrintArt;