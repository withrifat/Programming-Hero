# React + Vite
# topic name 
Event Handling 
Use State 


1. Components 
2. JSX
3. Props 
4. State 
5. Events 
6. Conditional Rendering 



# server side Randaring 


## Best for api call  in normal JS 

const loadData = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = res.json();
    return data; 
}

## <> its called Fragment 

## StrictMode is good for normal code but we should avoid in production 

## <Suspense fallback={"we can add loading in here"}> When something comes slowly then it's help's us for add loading type something 

