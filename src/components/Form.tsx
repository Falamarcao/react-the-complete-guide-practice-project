import { ChangeEvent } from 'react';
import { Investment } from '../model/Investment';

interface FormProps {
  data: Investment;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({ data: formData, onChange: handleChange }: FormProps) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={formData?.initialInvestment}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={formData?.annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            name="expectedReturn"
            value={formData?.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            name="duration"
            value={formData?.duration}
            onChange={handleChange}
          />
        </p>
      </div>
    </section>
  );
};

export default Form;
