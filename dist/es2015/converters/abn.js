export class AbnValueConverter {
    toView(value) {
        if (!value) {
            return "";
        }
        return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4");
    }
    fromView(value) {
        throw new Error("Not implemented");
    }
}
