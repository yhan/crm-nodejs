import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
const { promisify } = require("util");

const Contact = mongoose.model('Contact', ContactSchema);

export const addnewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            console.log(err);
            res.send(err);

            return;
        }

        console.log(`insert successfull`);
        res.json(contact);
    });
};

export const getContacts = (req, res) => {
    Contact.find((err, contacts) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }

        res.json(contacts);
    });
};

export const getContactById = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }

        res.json(contact);
    });
};

const find = promisify(Contact.findById);
       
// try to use Promise
// Does not work
export const updateContact2 = (req, res) => find(req.params.contactId, res)
    .then((err, contact) => {
        if (err) {
            console.error(err);
            res.send(err);
        }

        let body = req.body;
        body.__v =  contact.__v + 1;

        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    })
    .catch(err => {
        console.error(err);
    });

export const updateContact = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            console.error(err);
        }
        console.log(`contact version = ${contact.__v}`);
        console.log(`body = ${req.body}`);
        let body = req.body;
        body.__v =  contact.__v + 1;


        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    });


};
