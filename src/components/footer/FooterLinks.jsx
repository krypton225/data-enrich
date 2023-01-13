const FooterLinks = ({ listName }) => {
    return (
        <ul className="w-full flex flex-col text-start text-sm">
            {
                listName.map(({ id, linkText, linkPath }) => (
                    <li key={id} className="mb-2">
                        <a href={linkPath} className="block py-1">{linkText}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default FooterLinks;