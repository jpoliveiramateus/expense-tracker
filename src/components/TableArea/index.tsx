import { Item } from '../../types/Item';
import * as C from './styles';
import { TableItem } from '../TableItem';

type Props = {
  list: Item[],
  removeItem: (id: number) => void,
}

export const TableArea = ({ list, removeItem } : Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
          <C.TableHeadColumn width={80}>Remover</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
          {list.map((item, index) => (
            <TableItem key={index} item={item} removeItem={removeItem} />
          ))}
      </tbody>
    </C.Table>
  );
}