import { ChangeEvent, useState } from 'react';
import { Investment } from './model/Investment';

import Form from './components/Form';
import Header from './components/Header';
import Results from './components/Results';
import { validate, ValidationError } from 'class-validator';

function App() {
  const [formData, setFormData] = useState<Investment>(
    new Investment(10000, 1200, 6, 10)
  );

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const data = Object.assign(new Investment(), {
      ...formData,
      [name]: +value,
    });

    const validationErrors: ValidationError[] = await validate(data);

    if (validationErrors.length === 0) setFormData(data);
  };

  return (
    <>
      <Header />
      <Form data={formData} onChange={handleChange} />
      <Results data={formData} />
    </>
  );
}

export default App;
