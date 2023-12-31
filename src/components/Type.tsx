import "../styles/Type.css"

export const Type = (props: any) => {
  const typesArray = props.type.split(', ');
  
  return (
    <div>
      {typesArray.map((type: string, index: number) => (
        <div key={index} className={`type type-${type}`}>
          { type.toUpperCase() }
        </div>
      ))}
    </div>
  )
}
