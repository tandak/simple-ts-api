/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

interface UserAccount{
    id: Number;
    name: String;
    balance: Number;
}

let userAccounts: UserAccount[] = [
    {"id": 0, "name": "Bob", "balance": 1207.0},
    {"id": 1, "name": "Jess", "balance": 12460.0},
    {"id": 2, "name": "Jack", "balance": 47.0},
    {"id": 3, "name": "Sophie", "balance": 1000.79},
    {"id": 4, "name": "Claire", "balance": 6272.0}
];

// getting all posts
const getAccounts = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    return res.status(200).json({
        message: userAccounts
    });
};

// getting a single post
const getAccount = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    return res.status(200).json({
        message: userAccounts.at(Number(id))
    });
};


// deleting a post
const deleteAccount = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from req.params
    let id: string = req.params.id;

    return res.status(200).json({
        message: 'post deleted successfully'
    });
};

// adding a post
const addAccount = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let title: string = req.body.title;
    let body: string = req.body.body;
    // add the post
    let newAcc = {
        id: userAccounts.length+1,
        name: title,
        balance: 0.0
    };

    userAccounts.push(newAcc);

    // return response
    return res.status(200).json({
        message: "new account added."
    });
};

export default { getAccount, getAccounts, deleteAccount, addAccount };
