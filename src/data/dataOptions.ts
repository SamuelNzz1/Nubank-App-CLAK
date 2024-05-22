import { pix, transfer, deposit, pagar, emprestado, recarga, cobrar, transferInter, invest, caixa } from "../svgs/optionsCarrousel"
type propsOptions = {
    svg: any,
    function: string

}

export const dataOptions : propsOptions[] = [
{
     svg : pix,
     function: "Área Pix"
},
{
    svg : pagar,
    function: "Pagar"
} ,
{
    svg : emprestado,
    function: "Emprestar"
} ,
{
    svg : transfer,
    function: "Transferir"
},
{
    svg : deposit,
    function: "Depositar"
} ,
{
    svg : recarga,
    function: "Recarga"
} ,
{
    svg : cobrar,
    function: "Cobrar"
}  
,
{
    svg : transferInter,
    function: "TransferirI"
} ,
{
    svg : invest,
    function: "Investir"
} ,
{
    svg : caixa,
    function: "Caixinhas"
}  
  

]