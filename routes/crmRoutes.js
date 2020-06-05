const routes = (app) => {
    app.route("/contact")
        .get((req, res, next) => {
            console.log(`From ${req.originalUrl}`);
            console.log(`Method ${req.method}`);
            next();
        }, (req, res) => {
            res.send("GET Hello world");
        })

        .post((req, res) => {
            res.send("POST Hello world");
        });

    // a more funky one
    app.route("/contact/:contactId")
        .put((req, res) => {
            res.send("PUT a contact");
        })

        .delete((req, res) => {
            res.send("DELETE a contact");
        });
};

export default routes;