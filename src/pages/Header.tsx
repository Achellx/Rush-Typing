import { FaKeyboard } from "react-icons/fa"

const Header = () => {
    return (
        <div className="grid place-items-center mb-10">
            <h1 className="text-4xl font-bold flex flex-row gap-3 text-primary-500">
            Rush Typing
            <FaKeyboard />
            </h1>
        </div>
    )
}

export default Header;