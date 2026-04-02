import ch from "@harrypoggers25/color-utils";
import { db } from "../configs/db.config";

db.sync({
    alter: true,
    onSuccessAlter: async () => {
        console.log(ch.green('SCRIPT:'), `Altered db. All previous data have been`, ch.red('deleted'));
    }
})
