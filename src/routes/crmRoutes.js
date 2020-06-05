import {
    addnewContact,
    getContacts,
    getContactById
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


    // a more funky one
    app.route("/contact/:contactId")
        .get(getContactById)
        .put((req, res) => {
            res.send("PUT a contact");
        })
        .delete((req, res) => {
            res.send("DELETE a contact");
        });
};

export default routes;