import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

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
        if(err){
            console.error(err);
            res.send(err);
            return;
        }

        res.json(contacts);
    });
};
