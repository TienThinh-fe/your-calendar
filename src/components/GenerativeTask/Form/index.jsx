import {
  Control as FormControl,
  Field as FormField,
  Root as FormRoot,
  Submit as FormSubmit,
} from '@radix-ui/react-form'
import PropTypes from 'prop-types'
import ChatIcon from './ChatIcon'

import './style.css'

const GenerativeForm = ({ task, handleChangeTask, handleGenerateTask }) => {
  const handleSubmit = (e) => {
    handleGenerateTask(e)
  }

  return (
    <div className="generative-form">
      <div className="form-illustrate">
        <ChatIcon />
        <span>Chat your own schedule and get the calendar fits you!</span>
      </div>
      <div className="form-input">
        <FormRoot onSubmit={handleSubmit}>
          <FormField className="Fieldset">
            <FormControl asChild>
              <input
                className="Input"
                id="task"
                name="task"
                value={task}
                onChange={handleChangeTask}
                placeholder='e.g. "Dating with my crush tomorrow"'
              />
            </FormControl>
          </FormField>
          <div className="form-input__submit">
            <FormSubmit asChild>
              <button className="Button green" type="submit">
                Generate Task
              </button>
            </FormSubmit>
          </div>
        </FormRoot>
      </div>
    </div>
  )
}

GenerativeForm.propTypes = {
  task: PropTypes.string,
  handleChangeTask: PropTypes.func,
  handleGenerateTask: PropTypes.func,
}

export default GenerativeForm
