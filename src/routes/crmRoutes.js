import {
    addnewContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact
} from "../contollers/crmController";

const routes = (app) => {
    app.route("/contact")
        .get((req, res, next) => {
            console.log(`From ${req.originalUrl}`);
            console.log(`Method ${req.method}`);
            next();
        }, getContacts)
        .post((req, res, next) => {
            console.log("http post new contact");
            next();
        },
            addnewContact);

    app.route("/contact/:contactId")
        .get(getContactById)
        .put(updateContact)
        .delete(deleteContact);
};

export default routes;