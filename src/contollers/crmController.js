import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addnewContact = (req, res) => {
    let newContact = new Contact(req.body);
    console.log("dbg: addnewContact");
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
