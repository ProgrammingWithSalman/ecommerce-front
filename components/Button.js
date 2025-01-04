import { primary } from "@/lib/color";

const getButtonType = (value) => {
    switch (value) {
        case 'primary':
            return `bg-[#0D3D29] text-white border-[#0D3D29]`;
        case 'primary':
            return `bg-[${primary}] border-[1px] text-[#fff]`;
        case 'outline': 
        return `bg-transparent border-[1px] border-[#0D3D29] text-[#0D3D29] hover:bg-[#0D3D29] hover:text-white`;
        case 'black': 
        return `bg-black text-white rounded-md`

        default:
            return `bg-[#ccc] text-black rounded-md px-2`

    }
};





export default function Button({props, children, styles, buttonVariant, onClick }) {
    return (
        <button {...props} onClick={onClick} className={`rounded-md ${styles} ${getButtonType(buttonVariant)}`}>{children}</button>
    )
}