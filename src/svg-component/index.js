export const Menu = ({ handleOpen }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="16" viewBox="0 0 37 16" onClick={() => handleOpen()} style={{ cursor: "pointer" }}>
            <g id="Group_8703" data-name="Group 8703" transform="translate(-193 -53)">
                <path id="Rectangle_38" d="M0 0H37V4H0z" fill="#fff" data-name="Rectangle 38" transform="translate(193 53)" />
                <path id="Rectangle_39" d="M0 0H23V4H0z" fill="#fff" data-name="Rectangle 39" transform="translate(193 65)" />
            </g>
        </svg>
    )
}

export const Cart = ({ fillColor }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="shopping-basket" width="22.903" height="21.001" viewBox="0 0 22.903 21.001">
            <g id="Group_14" data-name="Group 14">
                <path id="Path_5" d="M289.928 25.759h2.008l-2.976-5.106a.866.866 0 1 0-1.5.875z" fill={fillColor ? fillColor : "#fff"} data-name="Path 5" transform="translate(-273.834 -20.222)" />
                <path id="Path_6" d="M106.771 21.57a.866.866 0 1 0-1.5-.875l-2.971 5.111h2.008z" fill={fillColor ? fillColor : "#fff"} data-name="Path 6" transform="translate(-97.49 -20.265)" />
                <path id="Path_7" d="M21.427 171.278H1.472A1.471 1.471 0 0 0 0 172.75v1.632a1.471 1.471 0 0 0 1.472 1.472h.461l1.42 7.7a2.017 2.017 0 0 0 1.867 1.627h12.168a2.017 2.017 0 0 0 1.867-1.627l1.429-7.7h.748a1.471 1.471 0 0 0 1.472-1.472v-1.632a1.477 1.477 0 0 0-1.477-1.472zm-13.3 7.692v3.32a.832.832 0 0 1-1.664 0v-4.655a.832.832 0 1 1 1.664 0zm2.671 0v3.32a.832.832 0 0 1-1.664 0v-4.655a.831.831 0 0 1 .832-.832.849.849 0 0 1 .832.832zm2.682 1.93v1.392a.832.832 0 0 1-1.664 0v-4.655a.849.849 0 0 1 .832-.832.831.831 0 0 1 .832.832zm2.671 0v1.392a.832.832 0 0 1-1.664 0v-4.655a.832.832 0 1 1 1.664 0z" fill={fillColor ? fillColor : "#fff"} data-name="Path 7" transform="translate(0 -164.175)" />
            </g>
        </svg>
    )
}

export const Facebook = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="facebook_4_" width="12.514" height="24.773" data-name="facebook (4)" viewBox="0 0 12.514 24.773">
            <path id="XMLID_835_" fill="#d8d8d8" d="M77.1 13.194h2.715v11.179a.4.4 0 0 0 .4.4h4.6a.4.4 0 0 0 .4-.4V13.247h3.122a.4.4 0 0 0 .4-.354l.474-4.116a.4.4 0 0 0-.4-.445h-3.6v-2.58c0-.778.419-1.172 1.245-1.172h2.351a.4.4 0 0 0 .4-.4V.4a.4.4 0 0 0-.4-.4H85.419a6.209 6.209 0 0 0-4.06 1.53 4.257 4.257 0 0 0-1.416 3.784v3.018H77.1a.4.4 0 0 0-.4.4v4.063a.4.4 0 0 0 .4.399z" transform="translate(-76.703)" />
        </svg>
    )
}

export const Instagram = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="instagram_1_" width="24.317" height="24.317" data-name="instagram (1)" viewBox="0 0 24.317 24.317">
            <g id="Group_4" data-name="Group 4">
                <g id="Group_3" data-name="Group 3">
                    <path id="Path_2" d="M16.718 0H7.6A7.6 7.6 0 0 0 0 7.6v9.119a7.6 7.6 0 0 0 7.6 7.6h9.119a7.6 7.6 0 0 0 7.6-7.6V7.6A7.6 7.6 0 0 0 16.718 0zm5.319 16.718a5.325 5.325 0 0 1-5.319 5.319H7.6a5.325 5.325 0 0 1-5.32-5.319V7.6A5.325 5.325 0 0 1 7.6 2.28h9.119a5.325 5.325 0 0 1 5.318 5.32z" fill="#d8d8d8" data-name="Path 2" />
                </g>
            </g>
            <g id="Group_6" data-name="Group 6" transform="translate(6.079 6.079)">
                <g id="Group_5" data-name="Group 5">
                    <path id="Path_3" d="M134.079 128a6.079 6.079 0 1 0 6.079 6.079 6.08 6.08 0 0 0-6.079-6.079zm0 9.879a3.8 3.8 0 1 1 3.8-3.8 3.8 3.8 0 0 1-3.8 3.8z" fill="#d8d8d8" data-name="Path 3" transform="translate(-128 -128)" />
                </g>
            </g>
            <g id="Group_8" data-name="Group 8" transform="translate(17.884 4.813)">
                <g id="Group_7" data-name="Group 7">
                    <circle id="Ellipse_1" cx=".81" cy=".81" r=".81" fill="#d8d8d8" data-name="Ellipse 1" />
                </g>
            </g>
        </svg>
    )
}

export const Cross = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="19.349" height="19.349" viewBox="0 0 19.349 19.349" style={{ cursor: "pointer", marginRight: '5px' }}>
            <g id="prefix__Group_6110" data-name="Group 6110" transform="rotate(45 14.343 7.709)">
                <path id="prefix__Line_167" d="M0 0L0 24.8" fill="none" stroke="#f9f9f9" strokeWidth={2.5} data-name="Line 167" transform="translate(12.4)" />
                <path id="prefix__Line_168" d="M0 0L24.864 0" fill="none" stroke="#f9f9f9" strokeWidth={2.5} data-name="Line 168" transform="translate(0 12.4)" />
            </g>
        </svg>

    )
}

export const Forward = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="23.149" height="12.864" viewBox="0 0 23.149 12.864">
            <path id="download_2_" fill="#fff" d="M12.864 6.856L6.432 0 0 6.856l1.183 1.261L5.6 3.413v19.736h1.668V3.413l4.412 4.7z" data-name="download (2)" transform="rotate(90 11.575 11.575)" />
        </svg>
    )
}