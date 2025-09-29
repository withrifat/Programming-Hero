import React from 'react'
import SimpleForm from './component/simpleForm/SimpleForm'
import FormAction from './component/FormAction/FormAction'
import ControlField from './component/ControlField/ControlField'
import UnControlled from './component/UnControld/UnControlled'

function App() {


  return (
    <>
      <h1 className="text-3xl font-bold text-center underline">Explore React Form </h1>
      {/* <SimpleForm /> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlField></ControlField> */}
      <UnControlled></UnControlled>
    </>
  )
}

export default App
