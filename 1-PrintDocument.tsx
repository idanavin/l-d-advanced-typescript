interface PlaintextDocument {
    text: string;
}

interface DelimitatedDocument extends PlaintextDocument {
    separator: "comma" | "semicolon";
}

const printDelimitatedText = (doc: DelimitatedDocument) => {
    /* Printing the csv file */
}

const printPlainText = (doc: PlaintextDocument) => {
    /* Printing the plain text file */
}

//Not working 
const printDocumentBroken = (doc: DelimitatedDocument | PlaintextDocument) => {
    /*
        Argument of type 'DelimitatedDocument | PlaintextDocument' is not assignable to parameter of type 'DelimitatedDocument'.
        Property 'separator' is missing in type 'PlaintextDocument' but required in type 'DelimitatedDocument'.
    */
    printDelimitatedText(doc);
}

//"in" Operator
export const printDocument = (doc: DelimitatedDocument | PlaintextDocument) => {
    if ("separator" in doc) {
        printDelimitatedText(doc);
    } else {
        printPlainText(doc);
    }
}

