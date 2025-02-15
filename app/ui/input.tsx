
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function Input(props: Props) {
    const { label, ...inputProps } = props;
    return (
        <div className="col-span-full mt-2">
            <label htmlFor={inputProps.id} className="block text-sm/6 font-medium text-gray-900">
                {label}
            </label>
            <div className="flex items-center rounded-md bg-white outline-1 mt-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                    {...inputProps}
                    className="border rounded-md  min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
            </div>
        </div>
    )
}