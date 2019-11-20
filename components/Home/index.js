import React from 'react';
import {
  View,
} from 'react-native';

import InputComponent from '../Input';

const HomeComponent = () => {
  const [state, setState] = useState({
    owner :'',
    repository: ''
  })
};

const handleChange = ( newValue, name) => {
  setState(prevState => {
    return {
      ...prevState,
      name : [newValue]
    };
  })
};

return(
  <View>
    <InputComponent
      placeholder='GitHub owner'
      valu={state.owner}
      name='owner'
      handleChange={handleChange}
    />
    <InputComponent
      placeholder='Repository name'
      valu={state.repository}
      name='repository'
      handleChange={handleChange}
    />
  </View>
);

export default HomeComponent;
