import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InsertionArea } from './components/InsertionArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let icomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        icomeCount += filteredList[i].value;
      }
    }

    setIncome(icomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    const newList = [...list];
    newList.push(item);
    setList(newList);
  }

  const handleRemoveItem = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InsertionArea onAdd={handleAddItem} id={list.length ? list[list.length - 1].id + 1 : 0} />

        <TableArea list={filteredList} removeItem={handleRemoveItem} />
      </C.Body>
    </C.Container>
  );
}

export default App;