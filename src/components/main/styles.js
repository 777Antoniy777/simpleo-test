import styled from "styled-components";
import {visuallyHiddenStyle, BasedSiteWrapper} from "../app/based-styles";

const MainWrapper = styled.main`
  min-height: 100vh;
`;

const SiteWrapper = styled(BasedSiteWrapper)`
  display: flex;
  min-height: inherit;
`;

const Title = styled.h1`
  ${visuallyHiddenStyle}
`;

export {MainWrapper, SiteWrapper, Title};
