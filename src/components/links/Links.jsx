import { useState } from "react";
import { StyledLink, StyledLinkWrapper, StyledSpanLink } from "./StyledLink";

const Link = () => {
    const [value, setValue] = useState(0);
    const data = [
        {
            title: 'About Me',
            link: '#banner',
            id: 0
        },
        {
            title: 'Introduction',
            link: '#introduction',
            id: 1
        },
        {
            title: 'Hand Painting',
            link: '#handpainting',
            id: 2
        },
        {
            title: 'Paint Art',
            link: '#paintart',
            id: 3
        },
        {
            title: 'Custom Art',
            link: '#customart',
            id: 4
        },
    ]
    return (
        <StyledLinkWrapper>
            {
                data?.length > 0 && data?.map((item, index) => {
                    return (
                        <StyledLink href={item?.link} key={item?.title} onClick={()=>setValue(item?.id)} isActive={value === item?.id ? true : false}>
                            <StyledSpanLink >
                                {item?.title}
                            </StyledSpanLink>
                        </StyledLink>
                    )
                })
            }

            {/* <StyledLink href="#introduction">
                <StyledSpanLink>
                    introduction
                </StyledSpanLink>
            </StyledLink>
            <StyledLink href="#handpainting">
                <StyledSpanLink>
                    Hand Painting
                </StyledSpanLink>
            </StyledLink>
            <StyledLink href="#paintart">
                <StyledSpanLink>
                    Paint Art
                </StyledSpanLink>
            </StyledLink>
            <StyledLink href="#customart">
                <StyledSpanLink>
                    Custom Art
                </StyledSpanLink>
            </StyledLink> */}
        </StyledLinkWrapper>
    )
}

export default Link;