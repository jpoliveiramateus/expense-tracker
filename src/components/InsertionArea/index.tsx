import { useEffect, useState } from 'react';
import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
  onAdd: (item: Item) => void;
  id: number;
}

export const InsertionArea = ({ onAdd, id }: Props) => {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('0');
  const [submit, setSubmit] = useState(false);
  const [validateDate, setValidateDate] = useState(true);
  const [validateCategory, setValidateCategory] = useState(true);
  const [validateTitle, setValidateTitle] = useState(true);
  const [validateValue, setValidateValue] = useState(true);

  const alertInfo = () => window.alert('Preencha todas as informações!');

  const validateForm = () => {
    setSubmit(true);
    const infos = [date, category, title, value];
    if (!infos.every((info) => info)) {
      return alertInfo();
    }

    handleAddEvent();
  }

  useEffect(() => {
    if (submit) {
      setValidateDate(date ? true : false);
      setValidateCategory(category ? true : false);
      setValidateTitle(title ? true : false);
      setValidateValue(value ? true : false);
    }
  }, [submit, date, category, title, value]);

  const handleAddEvent = () => {
    const newItem: Item = {
      id,
      date: newDateAdjusted(date),
      category: category,
      title: title,
      value: Number(value),
    }
    onAdd(newItem);
    clearFields();
    setSubmit(false);
  }

  const clearFields = () => {
    setDate('');
    setCategory('');
    setTitle('');
    setValue('0');
  }

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          type="date"
          value={date}
          onChange={({ target }) => setDate(target.value)}
          isValid={validateDate}
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          isValid={validateCategory}
        >
          <>
            <option></option>
            {Object.keys(categories)
              .map((category) => <option key={category} value={category}>{categories[category].title}</option>)}
          </>
        </C.Select>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          isValid={validateTitle}
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type="number"
          value={value}
          onChange={({ target }) => setValue(target.value)}
          isValid={validateValue}
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={validateForm}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
}