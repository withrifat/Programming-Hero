/* 
*1.  e.target[name of the input field].value 
*2.  use form action and formData in the action handler. formData.get(name of the input field)
*3. controlled component.=> ( one per each field ). use state on change of the field. useful to dynamically hanle error 
*3. handle all controlled field on one state object . 
    const [form,setForm]=useState({
    name:'',
    email:'',
    password:'',
    })
*4. Uncontrolled component => use ref to get the value of the field.
*/