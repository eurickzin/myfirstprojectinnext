
interface PlaceholderProps {
    placeholder: string;
    type?:string;
  }

export const Inputs = (PlaceholderProps:PlaceholderProps) => {
    return(
        <div className="flex justify-center">
            <input className="px-2 border-none outline-none rounded mb-6 text-black" type={PlaceholderProps.type} placeholder={PlaceholderProps.placeholder}/>
        </div>
    )
}