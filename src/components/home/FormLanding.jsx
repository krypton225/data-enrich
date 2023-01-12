const FormLanding = () => {
    return (
        <form className="mt-6 grid grid-cols-1 gap-y-4" autoComplete="new-password">
            <input type="text" name="name" id="name" placeholder="name"
                className="py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize focus:outline-none" autoComplete="new-password" />

            <input type="email" name="email" id="email" placeholder="email"
                className="py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize focus:outline-none" autoComplete="new-password" />

            <input type="password" name="password" id="password" placeholder="password"
                className="py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize focus:outline-none" autoComplete="new-password" />

            <input type="submit" value="Create an account"
                className="py-1 px-2 rounded-md bg-secondary text-white transition-all duration-300 cursor-pointer hover:brightness-75" />
        </form>
    )
}

export default FormLanding;