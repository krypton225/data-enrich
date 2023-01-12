import SocialCompaniesLanding from "../../data/social-landing-form";

const SignInSocial = () => {
    return (
        <div>
            <p className="font-semibold">Sign in with</p>

            <div className="w-full mt-4 grid grid-cols-3 space-x-0">
                {
                    SocialCompaniesLanding.map(({ id, iconCompany, linkCompany, styles }) => (
                        <a href={linkCompany} className={styles} key={id}>
                            {iconCompany}
                        </a>
                    ))
                }
            </div>

            <div className="relative mt-7 text-center font-medium">
                <div className="w-[45%] h-[0.6px] absolute top-1/2 -translate-y-1/2 left-0 bg-[#bbb]"></div>
                <span>OR</span>
                <div className="w-[45%] h-[0.6px] absolute top-1/2 -translate-y-1/2 right-0 bg-[#bbb]"></div>
            </div>
        </div>
    )
}

export default SignInSocial;