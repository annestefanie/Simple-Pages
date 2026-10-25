
interface InputFieldProps {
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputField({type, placeholder, value, onChange} : InputFieldProps){
    return (
        <div className="bg-white p-2 mb-4 rounded-md border-1 " >
            <input className="outline-none w-full font-mono uppercase" type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}