import { useState } from "react";
import { sectionData } from "../../data";
import { StyledLink, StyledLinkWrapper, StyledSpanLink } from "./StyledLink";

const Link = () => {
    const [value, setValue] = useState(0);
    const sections = document.querySelectorAll("section");
    window.onscroll = () => {
        var current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });
        sectionData.forEach((item) => {
            if (item.link === current) {
                setValue(item?.id)
            }
        });

    };
    return (
        <StyledLinkWrapper>
            {
                sectionData?.length > 0 && sectionData?.map((item, index) => {
                    return (
                        <StyledLink href={`#${item?.link}`} key={item?.title} onClick={() => setValue(item?.id)} isActive={value === item?.id ? true : false}>
                            <StyledSpanLink >
                                {item?.title}
                            </StyledSpanLink>
                        </StyledLink>
                    )
                })
            }
        </StyledLinkWrapper>
    )
}

export default Link;