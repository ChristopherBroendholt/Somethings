export interface ThingProps {
    title:string;
    description:string; //HTML
    
}

const Thing = ({title, description} : ThingProps) => {
    return(
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: description}}></div>
        </div>
    )
}

export default Thing;