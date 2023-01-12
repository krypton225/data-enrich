import CompaniesLanding from "../../data/companies-landing";

const LandingCompanies = () => {
    return (
        <div className="mt-10">
            <p className="uppercase text-secondary font-semibold tracking-widest">used by</p>

            <div className="mt-4 flex space-x-4">
                {
                    CompaniesLanding.map(({ id, linkCompany, iconCompany, companyName }) => (
                        <a href={linkCompany} key={id} rel="noopener noreferrer" aria-label={companyName}>
                            {iconCompany}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default LandingCompanies;