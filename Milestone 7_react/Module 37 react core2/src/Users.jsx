import { use } from "react"

export default function Users({fetchUsers}){
    const users = use(fetchUsers);
    console.log(users);
    
    return (
        <div>
            <h2>Users: {users.length}</h2>
            
        </div>
    );
}


/**
 * 1. Just write a simple fetch with json conversion.
 * 3. Wrap the data loading component under Suspense  
 * 4. 
 * 
 */