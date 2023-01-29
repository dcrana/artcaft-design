import styled from "styled-components";
import handpaintingBG from '../../assets/images/handpaintingBG.png'

export const HandPaintingWrapper = styled.section`
    width:100%
`

export const HandPaintingParentDiv = styled.div`
    background-image:url(${handpaintingBG});
    background-repeat:no-repeat;
    background-position:center;
    background-size:100% 100%;
    height:auto;
        @media only screen and (min-width: 768px) {
    min-height:682px
    }
`
export const StyledPaintingWrapper = styled.div`
    display :flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap:wrap;
`

// export const StyledHandPaintingCardWrapper = styled.div`
// position:relative;
// width:450px;
// `

export const StyledPaintingCard = styled.div`  
    width:250px;
    height:370px;
    border:2px solid #ffffff;
    margin:50px 0px 50px 0px;
    transition: all 0.3s linear;
    position:relative;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    flex-direction:column;
    text-transform:uppercase;
    // position:absolute;
    // bottom:0px;
        &:hover{
            height:420px;
            border:2px solid #d8cf91;
            button{
                visibility:visible;
                margin:20px 0px;
            }
        }
    &:last-of-type{
        margin-right:0px;               
    }
    @media only screen and (min-width: 768px) {
        margin:50px 40px 50px 0px;
        }
`

export const StyledHandPaintImage = styled.img`
        position:absolute;
        top:-50px;
        left:-25px
`


export const StyledPaintCardTitle = styled.span`
       color:var(--white-1);
       font-size:14px;
       font-weight:normal;  
       margin-top:10px;
`


export const StyledPaintCardYear = styled.span`
       color: #919191;
       font-size:12px;
       font-weight:normal;
       margin-top:10px;
`

export const StyledPaintCardMaterial = styled.span`
    color: #919191;
    font-size:12px;
    font-weight:normal;
    margin-top:10px;
`

export const StyleSendRequest = styled.button`
text-transform:uppercase;
border:1px solid var(--white-1);
border-radius:25px;
color:var(--white-1);
font-weight:normal;
width:180px;
height:40px;  
text-align:center;  
background-color:transparent;
cursor:pointer;
visibility:hidden;
`;
