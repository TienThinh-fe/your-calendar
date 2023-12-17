import useMonthStore from '@/stores/Month'
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog'
import {
  Control as FormControl,
  Field as FormField,
  Label as FormLabel,
  Root as FormRoot,
  Submit as FormSubmit,
} from '@radix-ui/react-form'
import { Cross2Icon } from '@radix-ui/react-icons'
import PropTypes from 'prop-types'
import { useState } from 'react'

import './style.css'

const wait = () => new Promise((resolve) => setTimeout(resolve, 100))

const AddTask = ({ day }) => {
  const [task, setTask] = useState('Plan world domination')
  const [open, setOpen] = useState(false)
  const createTask = useMonthStore((state) => state.createTask)

  const handleChangeTask = (e) => {
    setTask(e.target.value)
  }

  const handleAddTask = (e) => {
    e.preventDefault()

    createTask(task, day)
    wait().then(() => setOpen(false))
  }

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button className="Button green">Add task</button>
      </Trigger>
      <Portal>
        <Overlay className="DialogOverlay" />
        <Content className="add-task">
          <Title className="DialogTitle">Add Task</Title>
          <Description className="DialogDescription">
            Ready to conquer the world? Start by adding a new task.
          </Description>
          <FormRoot onSubmit={handleAddTask}>
            <FormField className="Fieldset">
              <FormLabel className="task" htmlFor="task">
                Name
              </FormLabel>
              <FormControl asChild>
                <input
                  className="Input"
                  id="task"
                  defaultValue="Plan world domination"
                  placeholder='e.g. "Dating with my crush"'
                  onChange={handleChangeTask}
                />
              </FormControl>
            </FormField>
            <div className="add-task__submit">
              <FormSubmit asChild>
                <button className="Button green" type="submit">
                  Save change
                </button>
              </FormSubmit>
            </div>
          </FormRoot>
          <Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Close>
        </Content>
      </Portal>
    </Root>
  )
}

AddTask.propTypes = {
  day: PropTypes.shape({
    date: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
    inCurrentMonth: PropTypes.bool,
    isToday: PropTypes.bool,
    tasks: PropTypes.array,
  }),
}

export default AddTask
