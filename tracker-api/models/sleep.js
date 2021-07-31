const { BadRequestError } = require("../utils/errors")
const db = require("../db")

class Sleep{

    //Create A Sleep Log
    static async createSleep({ newSleep, user }){

        //Checks if user enter all required fields in the sleep form
        const requiredFields = ["start_time", "end_time", "notes", "date"]
        requiredFields.forEach((field) => {
            if (!newSleep?.hasOwnProperty(field)) {
              throw new BadRequestError(`Missing required field - ${field} - in request body.`)
            }
          })
          console.log(user)

          const results= await db.query(
  
            `
            INSERT INTO sleep(start_time, end_time, notes, date, user_id)
            VALUES($1, $2, $3, $4, $5, (SELECT id FROM users WHERE username = $6) )
            RETURNING id,
                      created_at,
                      start_time,
                      end_time,
                      date,
                      notes,
                      user_id;
            `, 
            [newSleep.start_time, newSleep.end_time, newSleep.date, newSleep.notes, user.username]
            )
            return results.rows[0]
          }
        }

module.exports = Sleep