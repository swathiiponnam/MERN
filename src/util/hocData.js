export const hocData = (Card)=>{
    return(props)=>{
        return(
            <div>
                <h1 className="absolute p-2 bg-slate-900 text-slate-50"></h1>
                <Card {...props}/>
            </div>
        )
    }
}