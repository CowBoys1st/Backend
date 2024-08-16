import { Request, Response } from "express";
import db from "../config/db";
import { QueryError, QueryResult } from "mysql2";
import { IExpense } from "../type";

export const getExpenseV2 = (req: Request, res: Response) => {
    db.query(`SELECT * FROM expense WHERE id = ${req.params.id}`, (err: QueryError, result: IExpense[]) => {
        if (err) {
            return res.status(400).send({
                status: "error",
                message: err
            })
        }  
        return res.status(200).send({
            status: "ok",
            expenses: result
        })
    })
}

export const getExpenseIdV2 = (req: Request, res: Response) => {
    db.query("SELECT * FROM expense", (err: QueryError, result: IExpense[]) => {
        if (err) {
            return res.status(400).send({
                status: "error",
                message: err
            })
        }  
        return res.status(200).send({
            status: "ok",
            expenses: result
        })
    })
}

export const createExpenseV2 = (req: Request, res: Response) => {
    const { title, nominal, type, category, date } = req.body;

    if (!title || !nominal || !type || !category || !date) {
        return res.status(400).send({
            status: "error",
            message: "All fields are required!"
        })
    }
    const query = `
        INSERT INTO expense (title, nominal, type, category, date)
        VALUES (?, ?, ?, ?, ?)
        `; 
        
    db.query(query, [title, nominal, type, category, date], (err: QueryError | null, result: QueryResult<IExpense[]>) => {
        if (err) {
            return res.status(400).send({
                status: "error",
                message: err
            })
        }

        res.status(200).send({
            status: "ok",
            expenses: result
        })
    })
}