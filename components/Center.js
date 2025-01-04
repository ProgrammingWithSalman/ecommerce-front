// components/Layout.js
import styled from "styled-components";

// Define the styled component for the layout
const StyledDiv = styled.div`
    
    padding: 0 20px;
    margin: 0 auto;
`;

export default function Center({ children }) {
    return (
        <StyledDiv className="md:max-w-[80%]">
            {children}
        </StyledDiv>
    );
}
