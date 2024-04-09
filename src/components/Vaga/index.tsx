import { PrimeiroLi, TituloH3, LinkdaVaga } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const AquelasVagas = (props: Props) => (
  <PrimeiroLi>
    <TituloH3>{props.titulo}</TituloH3>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <LinkdaVaga href="#">
      Ver detalhes e candidatar-se
    </LinkdaVaga>
  </PrimeiroLi>
)

export default AquelasVagas
