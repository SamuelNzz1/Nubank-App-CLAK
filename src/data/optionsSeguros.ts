import { pix, transfer, deposit, pagar, emprestado, recarga, cobrar, transferInter, invest, caixa } from "../svgs/optionsCarrousel"
type propsOptions = {
    svg: any,
    function: string,
}

export const dataOptionsSeguros : propsOptions[] = [
  {
    svg : caixa,
    function: "Seguro de vida",
},  
{
  svg : recarga,
  function: "Seguro de celular",
}

  

]