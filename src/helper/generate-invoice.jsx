export function generateInvoiceNumber() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    const hours = ('0' + currentDate.getHours()).slice(-2);
    const minutes = ('0' + currentDate.getMinutes()).slice(-2);
    const seconds = ('0' + currentDate.getSeconds()).slice(-2);
    const randomNum = Math.floor(Math.random() * 10000);

    const invoiceNumber = `INV/${year}/${month}/${day}/${hours}/${minutes}/${seconds}/${randomNum}`;
    return invoiceNumber;
}