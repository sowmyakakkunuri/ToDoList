import config from "../configs/config";

export const fetchToDoList =async()=>{

    try{
        const response = await fetch(config.DB_URL);
        if(!response){
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        if(!data || data.length === 0){
            throw new Error("No Data available");
        }
        return data;
    }catch(e){

        console.log(e.message);
        throw new Error("failed to fetch");
    }
    

}

export async function SearchToDos(data,searchValue, filterType, status) {
    if(!searchValue.trim() && filterType==="" && status===""){
        return data;
        
    }

    try{
        let filteredBySearch= data.filter((item)=>{
            if(filterType!=""){
                if(!(searchValue.trim())){
                    throw new Error(`Enter a ${filterType}`);
                }
                let value=item[filterType];
        
                if(isNaN(value)){
                    return value.toLowerCase().includes(searchValue.trim().toLowerCase());
                }
                else{
                    value = Number(value);
                    return value===Number(searchValue.trim());
                }
                
            }else{
                return data;
            }
    
        });
    
        
        let finalResult = filteredBySearch.filter((item)=>{
            if(status === "all" || status === "") return true;
            else if (status === "completed") return item.completed===true;
            else if(status === "due") return item.completed===false;
    
        })
        return finalResult.length>0? finalResult:[];
    }catch(e){
        throw new Error(e);
    }
    
    
}