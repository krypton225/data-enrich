const FooterRightSection = () => {
    return (
        <div className="w-full">
            <p className="font-semibold">Subscribe to our newsletter</p>

            <p className="my-2 text-sm tracking-wider">The latest news, articles and resources sent to your inbox weekly</p>

            <div className="w-full mt-6 flex flex-col sm:flex-row justify-between items-center">
                <input type="email" name="news-email" id="news-email" placeholder="enter your email" autoComplete="new-password"
                    className="w-[95%] sm:w-[60%] py-1 mb-3 sm:mb-0 px-2 border-[1px] border-[#bbb] rounded-md text-primary placeholder:capitalize focus:outline-none" />

                <input type="submit" value="Subscribe" name="news-submit" id="news-submit"
                    className="w-[95%] sm:w-[35%] py-1 mb-3 sm:mb-0 px-2 rounded-md bg-secondary text-white transition-all duration-300 cursor-pointer hover:brightness-75" />
            </div>
        </div>
    )
}

export default FooterRightSection;