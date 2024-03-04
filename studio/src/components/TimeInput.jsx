import {useCallback, useReducer} from 'react'
import {Card, Stack, Select, Text, Flex} from '@sanity/ui'
import {set} from 'sanity'

const hours = Array.apply(null, Array(24)).map(function (x, i) { return i;})
const minutes = [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

const actions = {
    CHANGED_START_MINUTES: 'CHANGED-START-MINUTES',
    CHANGED_START_HOURS: 'CHANGED-START-HOURS',
    CHANGED_END_MINUTES: 'CHANGED-END-MINUTES',
    CHANGED_END_HOURS: 'CHANGED-END-HOURS'
}

export default (props) => {
  
  const {onChange, value, ...rest} = props;
  
  const reducer = useCallback((state, action) => {
    
    switch (action.type) {
      case actions.CHANGED_START_HOURS:
          state.start.hours = action.payload
          break
      case actions.CHANGED_START_MINUTES:
          state.start.minutes = action.payload
          break
      case actions.CHANGED_END_HOURS:
          state.end.hours = action.payload
          break
      case actions.CHANGED_END_MINUTES:
          state.end.minutes = action.payload
          break
    }
    
    // The reason of declaring the reducer within the component after spreading props :
    
    onChange(set(state));
    
    return state; 
    },[])
  
  const initialState = {
        start: value?.start || {
            hours: 0,
            minutes: 0,
        },
        end: value?.end || {
            hours: 0,
            minutes: 0,
        }
    }

 
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleChange = useCallback( (event) => {
    const target = event.target.dataset.value;
    let type = null;
    
    if (target.indexOf('start') !== -1) {
      // start select
      if (target.indexOf('minutes') !== -1) {
          type = actions.CHANGED_START_MINUTES
      } else {
          type = actions.CHANGED_START_HOURS
      }
    } else {
      // end select
      if (target.indexOf('minutes') !== -1) {
          type = actions.CHANGED_END_MINUTES
      } else {
          type = actions.CHANGED_END_HOURS
      }
    }
    
    dispatch({
        type,
        payload: parseInt(event.target.value),
    })
    
  },[])
  
  return (
  <Flex>
      <Stack space={3}>
          <Text size={1}>Začiatok</Text>
          <Flex>
              <Select
                  value={state.start.hours}
                  onChange={handleChange}
                  data-value="start-hours"
              >
                  {hours.map((hour, index) => (
                      <option key={index} value={hour}>
                          {hour.toString().padStart(2, '0')}
                      </option>
                  ))}
              </Select>
              <Select
                  value={state.start.minutes}
                  onChange={handleChange}
                  data-value="start-minutes"
              >
                  {minutes.map((minute, index) => (
                      <option key={index} value={minute}>
                          {minute.toString().padStart(2, '0')}
                      </option>
                  ))}
              </Select>
          </Flex>
      </Stack>
      <Stack space={3} marginLeft={4}>
          <Text size={1}>Koniec</Text>
          <Flex>
              <Select
                  value={state.end.hours}
                  onChange={handleChange}
                  data-value="end-hours"
              >
                  {hours.map((hour, index) => (
                      <option key={index} value={hour}>
                          {hour.toString().padStart(2, '0')}
                      </option>
                  ))}
              </Select>
              <Select
                  value={state.end.minutes}
                  onChange={handleChange}
                  data-value="end-minutes"
              >
                  {minutes.map((minute, index) => (
                      <option key={index} value={minute}>
                          {minute.toString().padStart(2, '0')}
                      </option>
                  ))}
              </Select>
          </Flex>
      </Stack>
  </Flex>
  )
}