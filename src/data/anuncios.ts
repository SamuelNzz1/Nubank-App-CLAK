import NikeLogo from "../../assets/NikeLogo.png"
import CapaNike from "../../assets/CapaNike.png";
import PlaystationLogo from "../../assets/PlaystationIcon.png";
import CapaPlaystation from "../../assets/CapaPlaystation.png";
type OptionsEp = {
    imageCap : any,
    imageLogo: any,
    titulo: string,
    color: string,

}

export const imageMapping : any = {
    LogoNike: NikeLogo,
    CapaNike: CapaNike,
    PlaystationLogo: PlaystationLogo,
    CapaPlaystation: CapaPlaystation
};

export const anuncios : OptionsEp[] = [
    {
     titulo: "Lançamento dos tops esportivos da Nike",  
      imageLogo: 'LogoNike',
      imageCap: 'CapaNike',
      color: "#000000"
    },
    {
      titulo: "Toda a semana com desconto exclusivos",  
      imageLogo: 'PlaystationLogo',
      imageCap: 'CapaPlaystation',
      color: "#08469b"

    }

]