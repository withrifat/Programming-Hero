# From type 

1.  e.target[name of the input field].value 
2.  use form action and formData in the action handler. formData.get(name of the input field)
3. controlled component.=> ( one per each field ). use state on change of the field. useful to dynamically hanle error 
3. handle all controlled field on one state object . 
    const [form,setForm]=useState({
    name:'',
    email:'',
    password:'',
    })
4. Uncontrolled component => use ref to get the value of the field.


Prop drilling 





//  this topic about contextAPI
// 1. create context
// 2. create provider and set value
// 3. use context to consume the value
// 4. useContext hook to consume the value
// 5. make sure the children component is wrapped by the provider component
// 6. only functional component can use useContext hook
// 7. useContext hook can only be used inside the functional component
