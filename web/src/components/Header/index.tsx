import { HeaderContainer, Logo, Button } from "./styles";
import colors from "../../styles/colors";

import { Plus } from "phosphor-react";
import LogoImg from "../../assets/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImg} alt="habits logo" />
      <Button>
        <Plus size={20} color={colors.violet500} /> Novo Hábito
      </Button>
    </HeaderContainer>
  );
};

export default Header;
