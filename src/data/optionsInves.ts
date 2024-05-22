import { pix, transfer, deposit, pagar, emprestado, recarga, cobrar, transferInter, invest, caixa } from "../svgs/optionsCarrousel"
type propsOptions = {
    svg: any,
    function: string,
    money: number,

}

export const dataOptions : propsOptions[] = [
  {
    svg : caixa,
    function: "Caixinhas",
    money: 100.00
},  
{
  svg : invest,
  function: "Investimentos",
  money: 317.00
} ,
{
    svg : transferInter,
    function: "Cripto",
    money: 758.00
} ,


  

]