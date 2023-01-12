import GenerateID from "../utils/generateID";

import { Home, Pricing, FAQ, Contact } from "../routes";

const routes = [
    { routePath: "/", renderElement: <Home /> },
    { routePath: "/pricing", renderElement: <Pricing /> },
    { routePath: "/faq", renderElement: <FAQ /> },
    { routePath: "/contact", renderElement: <Contact /> },
];

(() => GenerateID(routes))();

export default routes;