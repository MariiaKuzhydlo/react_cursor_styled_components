import React from "react";
import { SHeader, SHeaderContent, SLogo } from "./styles";

const Header = () => {
	return (
		<SHeader>
			<SHeaderContent>
				<SLogo>Styled Components</SLogo>
			</SHeaderContent>
		</SHeader>
	);
};

export default Header;