const FormContact = () => {
    return (
        <form className="w-full grid grid-cols-1 gap-y-5 text-primary">
            <input type="text" name="touch-name" id="touch-name" placeholder="full name"
                className="py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize focus:outline-none" autoComplete="new-password" />

            <input type="email" name="touch-email" id="touch-email" placeholder="your email"
                className="py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize focus:outline-none" autoComplete="new-password" />

            <input type="tel" name="touch-phone" id="touch-phone" placeholder="your phone"
                className="py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize focus:outline-none" autoComplete="new-password" />

            <textarea name="message" id="message" placeholder="message"
                className="w-full min-h-[10rem] max-h-[15rem] resize-y py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize focus:outline-none">
            </textarea>

            <div className="w-full form-check flex justify-start items-start">
                <input className="w-[1.6rem] sm:w-[1rem] h-[1rem] sm:h-[1rem] form-check-input appearance-none border border-gray-300 rounded-sm bg-white checked:bg-secondary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" type="checkbox" value="" id="checkbox-form" />

                <label className="form-check-label inline-block text-gray-800" htmlFor="checkbox-form">
                    By checking this box, you agree to the&nbsp;
                    <a href="/" className="text-secondary">Privacy Policy</a>&nbsp;
                    and <a href="/" className="text-secondary">Cookie Policy</a>
                </label>
            </div>

            <input type="submit" value="Submit"
                className="py-1 px-2 rounded-md bg-secondary text-white transition-all duration-300 cursor-pointer hover:brightness-75" />
        </form>
    )
}

export default FormContact;