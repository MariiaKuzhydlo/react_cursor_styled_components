import styled from "styled-components";

import { v } from "../../../styles/variables";

export const SHeader = styled.div`
   background: ${({ theme }) => theme.bgSecondary};
   color: ${({ theme }) => theme.textSecondary};
`;

export const SHeaderContent = styled.div`
   height: ${v.headerHeight};
   max-width: 1920px;
   display: flex;
   align-items: center;
   padding: 0 ${v.mdSpacing};
   justify-content: center;
`;

export const SLogo = styled.span`
   font-size: 24px;
   font-weight: 600;
`;
